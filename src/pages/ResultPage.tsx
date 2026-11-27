import {
  AlertCircle,
  BookmarkCheck,
  BookmarkPlus,
  Camera,
  Check,
  Download,
  History,
  Loader2,
  Printer,
  Sprout,
} from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { SeverityIndicator } from '../components/SeverityIndicator';
import { getCropDisplayName } from '../data/crops';
import { getDiseaseDisplayName } from '../data/diseases';
import { TranslationBundle } from '../i18n/translations';
import {
  AppRoute,
  CropType,
  GuidanceFeedbackOption,
  Language,
  SavedScan,
  TranslatedGuidanceFields,
} from '../types/agritech';
import { downloadFarmerSummaryImage } from '../utils/reportExport';
import { validateScanConsistency } from '../utils/resultValidator';
import { formatLocalizedDate } from '../utils/storage';

interface ResultPageProps {
  scan: SavedScan | null;
  isSaved: boolean;
  language: Language;
  t: TranslationBundle;
  onSaveScan: (scan: SavedScan) => void;
  onCacheTranslation: (
    scanId: string,
    targetLanguage: Language,
    translated: TranslatedGuidanceFields
  ) => void;
  onSaveFeedback: (scanId: string, feedback: GuidanceFeedbackOption) => void;
  onNavigate: (route: AppRoute, preselectCrop?: CropType) => void;
}

export function ResultPage({
  scan,
  isSaved,
  language,
  t,
  onSaveScan,
  onCacheTranslation,
  onSaveFeedback,
  onNavigate,
}: ResultPageProps) {
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationError, setTranslationError] = useState(false);

  const inFlightKeyRef = useRef<string | null>(null);
  const failedKeysRef = useRef<Set<string>>(new Set());
  const abortRef = useRef<AbortController | null>(null);

  const validation = useMemo(
    () => (scan ? validateScanConsistency(scan) : null),
    [scan]
  );

  const requestTranslation = useCallback(
    async (targetScan: SavedScan, targetLang: Language, isManualRetry = false) => {
      const cacheKey = `${targetScan.id}:${targetLang}`;
      if (inFlightKeyRef.current === cacheKey) return;
      if (!isManualRetry && failedKeysRef.current.has(cacheKey)) {
        setTranslationError(true);
        return;
      }

      if (isManualRetry) {
        failedKeysRef.current.delete(cacheKey);
      }

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      const timeoutId = window.setTimeout(() => controller.abort(), 30000);

      inFlightKeyRef.current = cacheKey;
      setIsTranslating(true);
      setTranslationError(false);

      try {
        const res = await fetch('/api/translate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: controller.signal,
          body: JSON.stringify({
            targetLanguage: targetLang,
            crop: targetScan.crop,
            possibleDisease: targetScan.result.possibleDisease,
            guidance: {
              imageQuality: targetScan.result.imageQuality,
              symptomsObserved: targetScan.result.symptomsObserved,
              likelyCause: targetScan.result.likelyCause,
              immediateActions: targetScan.result.immediateActions,
              preventionSteps: targetScan.result.preventionSteps,
              expertHelpAdvice: targetScan.result.expertHelpAdvice,
              disclaimer: targetScan.result.disclaimer,
            },
          }),
        });

        if (!res.ok) {
          throw new Error('Translation unavailable');
        }

        const translated = (await res.json()) as TranslatedGuidanceFields;
        failedKeysRef.current.delete(cacheKey);
        onCacheTranslation(targetScan.id, targetLang, translated);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          if (abortRef.current === controller) {
            failedKeysRef.current.add(cacheKey);
            setTranslationError(true);
          }
          return;
        }
        failedKeysRef.current.add(cacheKey);
        setTranslationError(true);
      } finally {
        window.clearTimeout(timeoutId);
        if (inFlightKeyRef.current === cacheKey) {
          inFlightKeyRef.current = null;
        }
        if (abortRef.current === controller) {
          setIsTranslating(false);
        }
      }
    },
    [onCacheTranslation]
  );

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const scanId = scan?.id;
  const scanLanguage = scan?.languageAtScan;
  const hasCachedTarget = Boolean(scan?.translations?.[language]);
  const isValidationInconclusive = Boolean(validation?.isInconclusive);

  useEffect(() => {
    if (!scan || !scanId || isValidationInconclusive) {
      setIsTranslating(false);
      setTranslationError(false);
      return;
    }

    const alreadyInTarget = scanLanguage === language || hasCachedTarget;

    if (alreadyInTarget) {
      setIsTranslating(false);
      setTranslationError(false);
      return;
    }

    const cacheKey = `${scanId}:${language}`;
    if (failedKeysRef.current.has(cacheKey)) {
      setIsTranslating(false);
      setTranslationError(true);
      return;
    }

    void requestTranslation(scan, language, false);
  }, [scan, scanId, scanLanguage, hasCachedTarget, isValidationInconclusive, language, requestTranslation]);

  if (!scan || !validation) {
    return (
      <div className="bg-white border border-[#E2E5DE] rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
        <div className="w-12 h-12 rounded-xl bg-[#EEF2EC] text-[#1F4E37] flex items-center justify-center mx-auto mb-4">
          <Sprout className="w-6 h-6" aria-hidden="true" />
        </div>
        <h1 className="font-display text-xl font-semibold text-[#1C231F]">
          {t.result.noActiveResultTitle}
        </h1>
        <p className="text-sm text-[#4A554E] mt-2 mb-6 leading-relaxed">
          {t.result.noActiveResultBody}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => onNavigate('scan')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F4E37] text-white text-sm font-semibold hover:bg-[#173C2A] transition-colors min-h-[44px]"
          >
            <Camera className="w-4 h-4" aria-hidden="true" />
            <span>{t.result.scanAnother}</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigate('history')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E5DE] bg-[#F7F6F2] text-sm font-medium text-[#1C231F] hover:bg-[#EEF2EC] transition-colors min-h-[44px]"
          >
            <History className="w-4 h-4" aria-hidden="true" />
            <span>{t.result.viewHistory}</span>
          </button>
        </div>
      </div>
    );
  }

  const cropLabel = getCropDisplayName(scan.crop, language);

  // 1A. Crop Mismatch State (Never force diagnosis)
  if (validation.isCropMismatch) {
    return (
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="bg-white border border-[#F2DCC4] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 bg-[#F7F6F2] border-b md:border-b-0 md:border-r border-[#E2E5DE]">
              <div className="aspect-[4/3] w-full h-full overflow-hidden">
                <ImageWithFallback
                  src={scan.imageDataUrl}
                  alt={t.result.cropMismatchTitle}
                  className="w-full h-full object-cover"
                  fallbackLabel={cropLabel}
                />
              </div>
            </div>

            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <p className="text-xs text-[#6A756E]">
                  {cropLabel} · {formatLocalizedDate(scan.createdAt, language, true)} ·{' '}
                  {t.result.inconclusiveBadge}
                </p>

                <h1 className="font-display text-2xl font-semibold text-[#1C231F]">
                  {t.result.cropMismatchTitle}
                </h1>

                <div className="rounded-xl bg-[#FDF6EE] border border-[#F2DCC4] p-4 space-y-2 text-sm text-[#1C231F] leading-relaxed">
                  <p>{t.result.cropMismatchBody}</p>
                  {validation.suggestedCrop ? (
                    <p className="font-semibold text-[#A14B18]">
                      {t.result.cropMismatchSuggestedPrefix}:{' '}
                      {getCropDisplayName(validation.suggestedCrop, language)}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#E2E5DE]">
                <button
                  type="button"
                  onClick={() => onNavigate('scan', validation.suggestedCrop ?? undefined)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F4E37] text-white text-sm font-semibold hover:bg-[#173C2A] transition-colors min-h-[44px]"
                >
                  <Camera className="w-4 h-4" aria-hidden="true" />
                  <span>{t.result.selectCorrectCrop}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('scan')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E5DE] bg-white text-sm font-medium text-[#1C231F] hover:bg-[#F7F6F2] transition-colors min-h-[44px]"
                >
                  <span>{t.result.tryAnotherPhoto}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('history')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E5DE] bg-white text-sm font-medium text-[#1C231F] hover:bg-[#F7F6F2] transition-colors min-h-[44px]"
                >
                  <History className="w-4 h-4 text-[#1F4E37]" aria-hidden="true" />
                  <span>{t.result.viewHistory}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 1B. Inconclusive / Low-Confidence / Consistency-Rejected State
  if (validation.isInconclusive) {
    return (
      <div className="space-y-6 max-w-3xl mx-auto">
        <div className="bg-white border border-[#E2E5DE] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="md:col-span-5 bg-[#F7F6F2] border-b md:border-b-0 md:border-r border-[#E2E5DE]">
              <div className="aspect-[4/3] w-full h-full overflow-hidden">
                <ImageWithFallback
                  src={scan.imageDataUrl}
                  alt={t.result.inconclusiveTitle}
                  className="w-full h-full object-cover"
                  fallbackLabel={cropLabel}
                />
              </div>
            </div>

            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <p className="text-xs text-[#6A756E]">
                  {cropLabel} · {formatLocalizedDate(scan.createdAt, language, true)} ·{' '}
                  {t.result.inconclusiveBadge}
                </p>

                <h1 className="font-display text-2xl font-semibold text-[#1C231F]">
                  {t.result.inconclusiveTitle}
                </h1>

                {!validation.isConsistent ? (
                  <p className="text-sm text-[#A14B18] bg-[#FDF6EE] border border-[#F2DCC4] rounded-xl p-3.5 leading-relaxed">
                    {t.result.inconclusiveMismatchNote}
                  </p>
                ) : null}

                <div className="rounded-xl bg-[#F7F6F2] border border-[#E2E5DE] p-4 space-y-2 text-sm text-[#1C231F] leading-relaxed">
                  <p>{t.result.inconclusiveGuidance1}</p>
                  <p>{t.result.inconclusiveGuidance2}</p>
                </div>
              </div>

              {/* Strictly only "Try another photo" and "View scan history" */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#E2E5DE]">
                <button
                  type="button"
                  onClick={() => onNavigate('scan')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F4E37] text-white text-sm font-semibold hover:bg-[#173C2A] transition-colors min-h-[44px]"
                >
                  <Camera className="w-4 h-4" aria-hidden="true" />
                  <span>{t.result.tryAnotherPhoto}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('history')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E5DE] bg-white text-sm font-medium text-[#1C231F] hover:bg-[#F7F6F2] transition-colors min-h-[44px]"
                >
                  <History className="w-4 h-4 text-[#1F4E37]" aria-hidden="true" />
                  <span>{t.result.viewHistory}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. Consistent, Validated Screening Result
  const diseaseTitle = getDiseaseDisplayName(validation.disease, language, scan.crop);
  const localizedFields: TranslatedGuidanceFields =
    scan.languageAtScan === language
      ? {
          imageQuality: scan.result.imageQuality,
          symptomsObserved: scan.result.symptomsObserved,
          likelyCause: scan.result.likelyCause,
          immediateActions: scan.result.immediateActions,
          preventionSteps: scan.result.preventionSteps,
          expertHelpAdvice: scan.result.expertHelpAdvice,
          disclaimer: scan.result.disclaimer,
        }
      : scan.translations?.[language] ?? {
          imageQuality: scan.result.imageQuality,
          symptomsObserved: scan.result.symptomsObserved,
          likelyCause: scan.result.likelyCause,
          immediateActions: scan.result.immediateActions,
          preventionSteps: scan.result.preventionSteps,
          expertHelpAdvice: scan.result.expertHelpAdvice,
          disclaimer: scan.result.disclaimer,
        };

  const hasExactLanguage =
    scan.languageAtScan === language || Boolean(scan.translations?.[language]);

  const effectiveScanForExport: SavedScan = {
    ...scan,
    result: {
      ...scan.result,
      ...localizedFields,
    },
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Visible Safety Disclaimer Banner */}
      <div className="rounded-xl border border-[#F2DCC4] bg-[#FDF6EE] px-4 py-3.5 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-[#A14B18] shrink-0 mt-0.5" aria-hidden="true" />
        <p className="text-sm font-medium text-[#1C231F] leading-relaxed">
          {hasExactLanguage ? localizedFields.disclaimer || t.common.disclaimer : t.common.disclaimer}
        </p>
      </div>

      {/* Dynamic Translation Loading / Error Banner */}
      {isTranslating ? (
        <div
          role="status"
          aria-live="polite"
          className="rounded-xl border border-[#D4DFD1] bg-[#EEF2EC] px-4 py-3 flex items-center gap-3 text-sm text-[#1F4E37]"
        >
          <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
          <span>{t.result.translatingGuidance}</span>
        </div>
      ) : null}

      {translationError ? (
        <div
          role="alert"
          className="rounded-xl border border-[#F3D0CA] bg-[#FDF2F0] px-4 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
        >
          <div className="flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#A8382B] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[#A8382B]">
                {t.result.translationUnavailableTitle}
              </p>
              <p className="text-xs text-[#1C231F] mt-0.5">{t.result.translationUnavailableBody}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => void requestTranslation(scan, language, true)}
            className="px-3.5 py-2 rounded-lg bg-[#A8382B] text-white text-xs font-semibold hover:bg-[#8E2F24] transition-colors shrink-0 min-h-[36px]"
          >
            {t.common.retry}
          </button>
        </div>
      ) : null}

      {/* Main Summary Card */}
      <div className="print-container bg-white border border-[#E2E5DE] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Large Uploaded Image Panel */}
          <div className="lg:col-span-5 bg-[#F7F6F2] border-b lg:border-b-0 lg:border-r border-[#E2E5DE] flex flex-col">
            <div className="aspect-[4/3] lg:flex-1 w-full overflow-hidden">
              <ImageWithFallback
                src={scan.imageDataUrl}
                alt={`${cropLabel} - ${diseaseTitle}`}
                className="w-full h-full object-cover"
                fallbackLabel={cropLabel}
              />
            </div>
            {localizedFields.imageQuality ? (
              <div className="px-4 py-3 border-t border-[#E2E5DE] bg-white/85">
                <p className="text-xs font-semibold text-[#4A554E]">{t.result.photoQuality}</p>
                <p className="text-xs text-[#1C231F] mt-0.5 leading-relaxed">
                  {localizedFields.imageQuality}
                </p>
              </div>
            ) : null}
          </div>

          {/* Prediction Summary */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#6A756E]">
                <span>
                  {cropLabel} · {formatLocalizedDate(scan.createdAt, language, true)}
                  {scan.isDemo ? ` · ${t.common.demoData}` : ''}
                </span>
              </div>

              <div>
                <p className="text-sm font-medium text-[#4A554E]">{t.result.heading}</p>
                <h1 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C231F] mt-1 text-balance">
                  {diseaseTitle}
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <SeverityIndicator severity={scan.result.severity} t={t} />
                <div className="flex items-baseline gap-2 px-3 py-1.5 rounded-lg bg-[#F7F6F2] border border-[#E2E5DE]">
                  <span className="text-xs font-medium text-[#4A554E]">
                    {t.common.confidence}:
                  </span>
                  <span className="text-sm font-semibold text-[#1C231F] tabular-nums">
                    {validation.confidence}%
                  </span>
                </div>
              </div>

              {scan.notes ? (
                <div className="pt-2 border-t border-[#E2E5DE]">
                  <p className="text-xs font-medium text-[#6A756E]">{t.common.notes}</p>
                  <p className="text-sm text-[#1C231F] mt-1">{scan.notes}</p>
                </div>
              ) : null}
            </div>

            {/* Action Buttons */}
            <div className="no-print flex flex-wrap items-center gap-2.5 pt-4 border-t border-[#E2E5DE]">
              <button
                type="button"
                onClick={() => onSaveScan(scan)}
                disabled={isSaved}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors min-h-[44px] ${
                  isSaved
                    ? 'bg-[#EEF2EC] text-[#1F4E37] border border-[#D4DFD1] cursor-default'
                    : 'bg-[#1F4E37] text-white hover:bg-[#173C2A]'
                }`}
              >
                {isSaved ? (
                  <BookmarkCheck className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <BookmarkPlus className="w-4 h-4" aria-hidden="true" />
                )}
                <span>{isSaved ? t.result.savedInHistory : t.result.saveScan}</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('scan')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E5DE] bg-white text-sm font-medium text-[#1C231F] hover:bg-[#F7F6F2] transition-colors min-h-[44px]"
              >
                <Camera className="w-4 h-4 text-[#1F4E37]" aria-hidden="true" />
                <span>{t.result.scanAnother}</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('history')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E5DE] bg-white text-sm font-medium text-[#1C231F] hover:bg-[#F7F6F2] transition-colors min-h-[44px]"
              >
                <History className="w-4 h-4 text-[#1F4E37]" aria-hidden="true" />
                <span>{t.result.viewHistory}</span>
              </button>

              <button
                type="button"
                onClick={() => downloadFarmerSummaryImage(effectiveScanForExport, language, t)}
                disabled={isTranslating}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E5DE] bg-[#F7F6F2] text-sm font-medium text-[#1C231F] hover:bg-[#EEF2EC] disabled:opacity-50 transition-colors min-h-[44px]"
              >
                <Download className="w-4 h-4 text-[#1F4E37]" aria-hidden="true" />
                <span>{t.result.downloadImage}</span>
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                disabled={isTranslating}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E5DE] bg-[#F7F6F2] text-sm font-medium text-[#1C231F] hover:bg-[#EEF2EC] disabled:opacity-50 transition-colors min-h-[44px]"
              >
                <Printer className="w-4 h-4 text-[#1F4E37]" aria-hidden="true" />
                <span>{t.result.printReport}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Structured Guidance Sections (Always keeps original scan result available if translation fails) */}
      <div className="print-container bg-white border border-[#E2E5DE] rounded-2xl divide-y divide-[#E2E5DE]">
          {/* Symptoms Observed & Likely Cause */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h2 className="font-display text-lg font-semibold text-[#1C231F]">
                {t.result.symptomsObserved}
              </h2>
              <ul className="space-y-2 text-sm text-[#4A554E] leading-relaxed list-disc pl-5">
                {localizedFields.symptomsObserved.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-lg font-semibold text-[#1C231F]">
                {t.result.likelyCause}
              </h2>
              <p className="text-sm text-[#4A554E] leading-relaxed">
                {localizedFields.likelyCause}
              </p>
            </div>
          </div>

          {/* Immediate Low-Risk Actions & Prevention */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h2 className="font-display text-lg font-semibold text-[#1F4E37]">
                {t.result.immediateActions}
              </h2>
              <ol className="space-y-2.5 text-sm text-[#1C231F] leading-relaxed list-decimal pl-5">
                {localizedFields.immediateActions.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-lg font-semibold text-[#1C231F]">
                {t.result.preventionSteps}
              </h2>
              <ul className="space-y-2.5 text-sm text-[#4A554E] leading-relaxed list-disc pl-5">
                {localizedFields.preventionSteps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* When to Seek Expert Help */}
          <div className="p-6 sm:p-8 bg-[#EEF2EC]/50">
            <h2 className="font-display text-lg font-semibold text-[#1C231F] mb-2">
              {t.result.expertHelpAdvice}
            </h2>
            <p className="text-sm text-[#1C231F] leading-relaxed">
              {localizedFields.expertHelpAdvice}
            </p>
          </div>
      </div>

      {/* Farmer Guidance Feedback Loop */}
      <section className="no-print bg-white border border-[#E2E5DE] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-[#1C231F]">{t.result.feedbackQuestion}</h2>
          {scan.feedback ? (
            <p className="text-xs text-[#1F4E37] mt-1 flex items-center gap-1.5 font-medium">
              <Check className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.result.feedbackSavedNote}</span>
            </p>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {(['helpful', 'unsure', 'needs_correction'] as GuidanceFeedbackOption[]).map((opt) => {
            const isSelected = scan.feedback === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => onSaveFeedback(scan.id, opt)}
                className={`px-4 py-2 rounded-xl border text-sm font-medium transition-colors min-h-[42px] whitespace-nowrap ${
                  isSelected
                    ? 'border-[#1F4E37] bg-[#EEF2EC] text-[#1F4E37]'
                    : 'border-[#E2E5DE] bg-white text-[#1C231F] hover:bg-[#F7F6F2]'
                }`}
              >
                {t.result.feedbackOptions[opt]}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
