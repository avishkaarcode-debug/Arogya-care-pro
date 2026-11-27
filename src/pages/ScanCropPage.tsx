import {
  AlertCircle,
  AlertTriangle,
  BookOpen,
  Camera,
  Check,
  CheckCircle2,
  HelpCircle,
  Loader2,
  RefreshCw,
  Send,
  Sparkles,
  Trash2,
  Upload,
  XCircle,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { CROP_CATALOG, getCropDisplayName } from '../data/crops';
import { TranslationBundle } from '../i18n/translations';
import {
  AppRoute,
  CropDetectionResponse,
  CropType,
  Language,
  LeafAge,
  SavedScan,
  ScanAnalysisResult,
  VisibleSymptom,
} from '../types/agritech';
import { assessLeafPhotoQuality, PhotoQualityAssessment } from '../utils/imageQuality';
import { createCompactThumbnail, saveCropRequest } from '../utils/storage';

interface ScanCropPageProps {
  language: Language;
  t: TranslationBundle;
  initialCrop?: CropType;
  onAnalysisComplete: (draftScan: SavedScan) => void;
  onNavigate: (route: AppRoute) => void;
}

type CropSelectionMode = 'supported' | 'auto' | 'other';

const MAX_FILE_BYTES = 10 * 1024 * 1024;
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/jpg', 'image/png']);

export function ScanCropPage({
  language,
  t,
  initialCrop,
  onAnalysisComplete,
  onNavigate,
}: ScanCropPageProps) {
  const [cropMode, setCropMode] = useState<CropSelectionMode>('supported');
  const [selectedCrop, setSelectedCrop] = useState<CropType>(initialCrop ?? 'Tomato');

  const [imageDataUrl, setImageDataUrl] = useState<string>('');
  const [imageMimeType, setImageMimeType] = useState<string>('');
  const [imageFileName, setImageFileName] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const [validationError, setValidationError] = useState<string>('');

  const [qualityChecking, setQualityChecking] = useState(false);
  const [photoQuality, setPhotoQuality] = useState<PhotoQualityAssessment | null>(null);

  const [leafAge, setLeafAge] = useState<LeafAge>('unknown');
  const [visibleSymptom, setVisibleSymptom] = useState<VisibleSymptom>('unknown');
  const [notes, setNotes] = useState<string>('');

  const [isDetectingCrop, setIsDetectingCrop] = useState(false);
  const [autoDetectResult, setAutoDetectResult] = useState<CropDetectionResponse | null>(null);
  const [autoDetectError, setAutoDetectError] = useState<string>('');

  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisPhase, setAnalysisPhase] = useState<1 | 2>(1);
  const [analysisError, setAnalysisError] = useState<string>('');

  const [requestedCropName, setRequestedCropName] = useState<string>('');
  const [requestedCropRegion, setRequestedCropRegion] = useState<string>('');
  const [requestFormError, setRequestFormError] = useState<string>('');
  const [requestSavedNotice, setRequestSavedNotice] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const cameraInputRef = useRef<HTMLInputElement | null>(null);
  const analyzeAbortRef = useRef<AbortController | null>(null);
  const detectAbortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (initialCrop) {
      setCropMode('supported');
      setSelectedCrop(initialCrop);
    }
  }, [initialCrop]);

  useEffect(() => {
    if (!isAnalyzing) return;
    setAnalysisPhase(1);
    const timer = window.setTimeout(() => {
      setAnalysisPhase(2);
    }, 1600);
    return () => window.clearTimeout(timer);
  }, [isAnalyzing]);

  useEffect(() => {
    return () => {
      analyzeAbortRef.current?.abort();
      detectAbortRef.current?.abort();
    };
  }, []);

  const currentStep = isAnalyzing
    ? 4
    : cropMode === 'other'
    ? 1
    : imageDataUrl
    ? 3
    : cropMode === 'supported'
    ? 2
    : 1;

  const handleSelectSupportedCrop = (crop: CropType) => {
    setCropMode('supported');
    setSelectedCrop(crop);
    setAutoDetectResult(null);
    setAutoDetectError('');
    setAnalysisError('');
  };

  const handleSelectAutoMode = () => {
    setCropMode('auto');
    setAutoDetectResult(null);
    setAutoDetectError('');
    setAnalysisError('');
  };

  const handleSelectOtherMode = () => {
    setCropMode('other');
    setAutoDetectResult(null);
    setAutoDetectError('');
    setAnalysisError('');
    setRequestSavedNotice(false);
    setRequestFormError('');
  };

  const processFile = (file: File | undefined) => {
    setValidationError('');
    setAnalysisError('');
    setAutoDetectError('');
    setAutoDetectResult(null);
    if (!file) return;

    const lowerType = file.type.toLowerCase();
    const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
    const isValidType =
      ALLOWED_TYPES.has(lowerType) || ext === 'jpg' || ext === 'jpeg' || ext === 'png';

    if (!isValidType) {
      setValidationError(t.scan.invalidFileType);
      return;
    }

    if (file.size > MAX_FILE_BYTES) {
      setValidationError(t.scan.fileTooLarge);
      return;
    }

    const resolvedMime =
      lowerType && ALLOWED_TYPES.has(lowerType)
        ? lowerType === 'image/jpg'
          ? 'image/jpeg'
          : lowerType
        : ext === 'png'
        ? 'image/png'
        : 'image/jpeg';

    const reader = new FileReader();
    reader.onload = async () => {
      if (typeof reader.result === 'string') {
        const resultDataUrl = reader.result;
        setImageDataUrl(resultDataUrl);
        setImageMimeType(resolvedMime);
        setImageFileName(file.name);
        setQualityChecking(true);
        const assessment = await assessLeafPhotoQuality(resultDataUrl);
        setPhotoQuality(assessment);
        setQualityChecking(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    processFile(file);
  };

  const handleRemoveImage = () => {
    setImageDataUrl('');
    setImageMimeType('');
    setImageFileName('');
    setPhotoQuality(null);
    setQualityChecking(false);
    setValidationError('');
    setAnalysisError('');
    setAutoDetectResult(null);
    setAutoDetectError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  const handleDetectCrop = async () => {
    if (!imageDataUrl || isDetectingCrop) return;
    const requestLanguage = language;
    setAutoDetectError('');
    setAutoDetectResult(null);
    setIsDetectingCrop(true);

    detectAbortRef.current?.abort();
    const controller = new AbortController();
    detectAbortRef.current = controller;
    const timeoutId = window.setTimeout(() => controller.abort(), 30000);

    try {
      const base64Part = imageDataUrl.includes(',') ? imageDataUrl.split(',')[1] : imageDataUrl;
      const response = await fetch('/api/detect-crop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          mimeType: imageMimeType || 'image/jpeg',
          imageBase64: base64Part,
          language: requestLanguage,
        }),
      });

      const rawBody = await response.text();
      let payload: Record<string, unknown> | null = null;
      if (rawBody) {
        try {
          payload = JSON.parse(rawBody) as Record<string, unknown>;
        } catch {
          payload = null;
        }
      }

      if (!response.ok || !payload || typeof payload.suggestedCrop !== 'string') {
        throw new Error(
          typeof payload?.message === 'string' && payload.message
            ? payload.message
            : t.scan.autoDetectError
        );
      }

      setAutoDetectResult({
        suggestedCrop: payload.suggestedCrop as CropDetectionResponse['suggestedCrop'],
        reason: typeof payload.reason === 'string' ? payload.reason : '',
      });
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        setAutoDetectError(t.scan.autoDetectError);
      } else {
        setAutoDetectError(
          err instanceof Error && err.message ? err.message : t.scan.autoDetectError
        );
      }
    } finally {
      window.clearTimeout(timeoutId);
      if (detectAbortRef.current === controller) {
        detectAbortRef.current = null;
      }
      setIsDetectingCrop(false);
    }
  };

  const handleAnalyze = async () => {
    if (!imageDataUrl || isAnalyzing || cropMode !== 'supported') return;
    const requestLanguage = language;
    setAnalysisError('');
    setIsAnalyzing(true);

    analyzeAbortRef.current?.abort();
    const controller = new AbortController();
    analyzeAbortRef.current = controller;
    const timeoutId = window.setTimeout(() => controller.abort(), 45000);

    try {
      const base64Part = imageDataUrl.includes(',') ? imageDataUrl.split(',')[1] : imageDataUrl;

      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          crop: selectedCrop,
          mimeType: imageMimeType || 'image/jpeg',
          imageBase64: base64Part,
          leafAge,
          visibleSymptom,
          notes: notes.trim(),
          language: requestLanguage,
        }),
      });

      const rawBody = await response.text();
      let payload: Record<string, unknown> | null = null;
      if (rawBody) {
        try {
          payload = JSON.parse(rawBody) as Record<string, unknown>;
        } catch {
          payload = null;
        }
      }

      if (!response.ok) {
        throw new Error(
          typeof payload?.message === 'string' && payload.message
            ? payload.message
            : t.scan.analysisErrorTitle
        );
      }

      if (!payload || typeof payload.possibleDisease !== 'string') {
        throw new Error(t.scan.analysisErrorTitle);
      }

      const compactThumbnail = await createCompactThumbnail(imageDataUrl, 720);
      const parsedResult = payload as unknown as ScanAnalysisResult;

      const draftScan: SavedScan = {
        id: `scan-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        createdAt: new Date().toISOString(),
        crop: selectedCrop,
        leafAge,
        visibleSymptom,
        notes: notes.trim(),
        imageDataUrl: compactThumbnail,
        languageAtScan: requestLanguage,
        result: parsedResult,
        translations: {
          [requestLanguage]: {
            imageQuality: parsedResult.imageQuality,
            symptomsObserved: parsedResult.symptomsObserved,
            likelyCause: parsedResult.likelyCause,
            immediateActions: parsedResult.immediateActions,
            preventionSteps: parsedResult.preventionSteps,
            expertHelpAdvice: parsedResult.expertHelpAdvice,
            disclaimer: parsedResult.disclaimer,
          },
        },
      };

      onAnalysisComplete(draftScan);
    } catch (err: unknown) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        setAnalysisError(t.scan.analysisErrorTitle);
      } else {
        const message =
          err instanceof Error && err.message
            ? err.message
            : t.scan.analysisErrorTitle;
        setAnalysisError(message);
      }
    } finally {
      window.clearTimeout(timeoutId);
      if (analyzeAbortRef.current === controller) {
        analyzeAbortRef.current = null;
      }
      setIsAnalyzing(false);
    }
  };

  const handleRequestCropSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedName = requestedCropName.trim();
    if (!cleanedName) {
      setRequestFormError(t.scan.requestCropRequired);
      return;
    }
    saveCropRequest({
      id: `req-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      cropName: cleanedName,
      regionNote: requestedCropRegion.trim(),
      createdAt: new Date().toISOString(),
    });
    setRequestFormError('');
    setRequestedCropName('');
    setRequestedCropRegion('');
    setRequestSavedNotice(true);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Page Header */}
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C231F]">
          {t.scan.title}
        </h1>
        <p className="text-sm sm:text-base text-[#4A554E] mt-1">{t.scan.subtitle}</p>
      </div>

      {/* 5-Step Progress Bar */}
      <div className="bg-white border border-[#E2E5DE] rounded-xl p-4">
        <ol className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {t.scan.steps.map((stepLabel, idx) => {
            const stepNumber = idx + 1;
            const isCompleted = currentStep > stepNumber;
            const isCurrent = currentStep === stepNumber;
            return (
              <li
                key={stepLabel}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium ${
                  isCurrent
                    ? 'bg-[#EEF2EC] text-[#1F4E37]'
                    : isCompleted
                    ? 'text-[#1F4E37]'
                    : 'text-[#6A756E]'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0 tabular-nums ${
                    isCurrent || isCompleted
                      ? 'bg-[#1F4E37] text-white'
                      : 'bg-[#E2E5DE] text-[#4A554E]'
                  }`}
                >
                  {isCompleted ? <Check className="w-3 h-3" aria-hidden="true" /> : stepNumber}
                </span>
                <span className="truncate">{stepLabel}</span>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Step 1: Responsive 6-Crop Selection Grid + Auto-detect (Beta) + Other Crop */}
      <section className="bg-white border border-[#E2E5DE] rounded-2xl p-5 sm:p-6 space-y-5">
        <div className="space-y-1">
          <h2 className="font-display text-lg font-semibold text-[#1C231F]">{t.scan.step1Title}</h2>
          <p className="text-xs sm:text-sm text-[#4A554E]">{t.scan.step1LimitNote}</p>
        </div>

        {/* 6 Supported Crop Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {CROP_CATALOG.map((entry) => {
            const isSelected = cropMode === 'supported' && selectedCrop === entry.id;
            const label = getCropDisplayName(entry.id, language);

            return (
              <button
                key={entry.id}
                type="button"
                onClick={() => handleSelectSupportedCrop(entry.id)}
                className={`text-left rounded-xl border p-3.5 transition-colors flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E37] ${
                  isSelected
                    ? 'border-[#1F4E37] bg-[#EEF2EC]'
                    : 'border-[#E2E5DE] bg-white hover:bg-[#F7F6F2]'
                }`}
              >
                <ImageWithFallback
                  src={entry.imagePath}
                  alt={label}
                  className="w-16 h-16 rounded-lg object-cover shrink-0 border border-[#E2E5DE]"
                  fallbackLabel={label}
                />
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-base font-semibold text-[#1C231F] truncate">
                      {label}
                    </span>
                    {isSelected ? (
                      <CheckCircle2 className="w-5 h-5 text-[#1F4E37] shrink-0" aria-hidden="true" />
                    ) : null}
                  </div>
                  <p className="text-xs text-[#4A554E]">{t.scan.supportedConditionsCount}</p>
                  <p
                    className={`text-xs font-semibold pt-0.5 ${
                      isSelected ? 'text-[#1F4E37]' : 'text-[#4A554E]'
                    }`}
                  >
                    {isSelected ? t.scan.selectedLabel : t.scan.selectCropAction}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Auto-detect crop (Beta) & Other / unsupported crop cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 border-t border-[#E2E5DE]">
          <button
            type="button"
            onClick={handleSelectAutoMode}
            className={`text-left rounded-xl border p-4 transition-colors flex items-start gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E37] ${
              cropMode === 'auto'
                ? 'border-[#1F4E37] bg-[#EEF2EC]'
                : 'border-[#E2E5DE] bg-[#F7F6F2]/60 hover:bg-[#F7F6F2]'
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E5DE] text-[#1F4E37] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-[#1C231F]">
                  {t.scan.autoDetectLabel}{' '}
                  <span className="text-xs font-medium text-[#1F4E37]">
                    ({t.scan.autoDetectBetaBadge})
                  </span>
                </span>
                {cropMode === 'auto' ? (
                  <CheckCircle2 className="w-4 h-4 text-[#1F4E37] shrink-0" aria-hidden="true" />
                ) : null}
              </div>
              <p className="text-xs text-[#4A554E] leading-relaxed">{t.scan.autoDetectDesc}</p>
            </div>
          </button>

          <button
            type="button"
            onClick={handleSelectOtherMode}
            className={`text-left rounded-xl border p-4 transition-colors flex items-start gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E37] ${
              cropMode === 'other'
                ? 'border-[#A14B18] bg-[#FDF6EE]'
                : 'border-[#E2E5DE] bg-[#F7F6F2]/60 hover:bg-[#F7F6F2]'
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E5DE] text-[#A14B18] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-[#1C231F]">
                  {t.scan.otherCropTitle}
                </span>
                {cropMode === 'other' ? (
                  <CheckCircle2 className="w-4 h-4 text-[#A14B18] shrink-0" aria-hidden="true" />
                ) : null}
              </div>
              <p className="text-xs text-[#4A554E] leading-relaxed">{t.scan.otherCropDesc}</p>
            </div>
          </button>
        </div>
      </section>

      {/* Other / Unsupported Crop Guidance + Feedback Form (No diagnosis, no fake confidence) */}
      {cropMode === 'other' ? (
        <section className="bg-white border border-[#F2DCC4] rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="rounded-xl border border-[#F2DCC4] bg-[#FDF6EE] p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#A14B18] shrink-0 mt-0.5" aria-hidden="true" />
            <div className="space-y-1">
              <h2 className="font-display text-lg font-semibold text-[#1C231F]">
                {t.scan.unsupportedNotice}
              </h2>
              <p className="text-xs sm:text-sm text-[#4A554E] leading-relaxed">
                {t.scan.step1LimitNote}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-[#1C231F]">
              {t.scan.supportedCropsListLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {CROP_CATALOG.map((entry) => (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => handleSelectSupportedCrop(entry.id)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#D4DFD1] bg-[#EEF2EC] text-sm font-medium text-[#1F4E37] hover:bg-[#E1EAE0] transition-colors min-h-[40px]"
                >
                  <span>{getCropDisplayName(entry.id, language)}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => onNavigate('knowledge')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E5DE] bg-white text-sm font-medium text-[#1C231F] hover:bg-[#F7F6F2] transition-colors min-h-[44px]"
            >
              <BookOpen className="w-4 h-4 text-[#1F4E37]" aria-hidden="true" />
              <span>{t.scan.browseKnowledgeHub}</span>
            </button>
          </div>

          <form
            onSubmit={handleRequestCropSubmit}
            className="rounded-xl border border-[#E2E5DE] bg-[#F7F6F2]/70 p-5 space-y-4"
          >
            <h3 className="font-display text-base font-semibold text-[#1C231F]">
              {t.scan.requestCropTitle}
            </h3>

            {requestSavedNotice ? (
              <div
                role="status"
                className="rounded-lg border border-[#D4DFD1] bg-[#EEF2EC] px-3.5 py-2.5 text-sm text-[#1F4E37] flex items-center gap-2"
              >
                <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{t.scan.requestCropSaved}</span>
              </div>
            ) : null}

            {requestFormError ? (
              <div
                role="alert"
                className="rounded-lg border border-[#F3D0CA] bg-[#FDF2F0] px-3.5 py-2 text-xs text-[#A8382B]"
              >
                {requestFormError}
              </div>
            ) : null}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="request-crop-name"
                  className="block text-xs font-semibold text-[#1C231F]"
                >
                  {t.scan.requestCropNameLabel}
                </label>
                <input
                  id="request-crop-name"
                  type="text"
                  maxLength={60}
                  value={requestedCropName}
                  onChange={(e) => {
                    setRequestedCropName(e.target.value);
                    setRequestFormError('');
                    setRequestSavedNotice(false);
                  }}
                  placeholder={t.scan.requestCropNamePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E5DE] bg-white text-sm text-[#1C231F] placeholder:text-[#6A756E] focus:outline-none focus:ring-2 focus:ring-[#1F4E37] min-h-[42px]"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="request-crop-region"
                  className="block text-xs font-semibold text-[#1C231F]"
                >
                  {t.scan.requestCropRegionLabel}
                </label>
                <input
                  id="request-crop-region"
                  type="text"
                  maxLength={80}
                  value={requestedCropRegion}
                  onChange={(e) => setRequestedCropRegion(e.target.value)}
                  placeholder={t.scan.requestCropRegionPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E5DE] bg-white text-sm text-[#1C231F] placeholder:text-[#6A756E] focus:outline-none focus:ring-2 focus:ring-[#1F4E37] min-h-[42px]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F4E37] text-white text-sm font-semibold hover:bg-[#173C2A] transition-colors min-h-[44px]"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>{t.scan.requestCropSubmit}</span>
            </button>
          </form>
        </section>
      ) : (
        <>
          {/* Step 2: Upload Leaf Photo + Scan-Quality Assistant */}
          <section className="bg-white border border-[#E2E5DE] rounded-2xl p-5 sm:p-6 space-y-5">
            <h2 className="font-display text-lg font-semibold text-[#1C231F]">
              {t.scan.step2Title}
            </h2>

            <input
              ref={fileInputRef}
              type="file"
              accept=".jpg,.jpeg,.png,image/jpeg,image/png"
              className="hidden"
              onChange={(e) => processFile(e.target.files?.[0])}
            />
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/jpeg,image/png"
              capture="environment"
              className="hidden"
              onChange={(e) => processFile(e.target.files?.[0])}
            />

            {!imageDataUrl ? (
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                  isDragging
                    ? 'border-[#1F4E37] bg-[#EEF2EC]'
                    : 'border-[#C5CBC0] bg-[#F7F6F2]/70'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E5DE] text-[#1F4E37] flex items-center justify-center mx-auto mb-3">
                  <Upload className="w-5 h-5" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold text-[#1C231F]">{t.scan.dropzoneTitle}</p>
                <p className="text-xs text-[#6A756E] mt-1 mb-5">{t.scan.dropzoneHint}</p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1F4E37] text-white text-sm font-semibold hover:bg-[#173C2A] transition-colors min-h-[44px]"
                  >
                    <Upload className="w-4 h-4" aria-hidden="true" />
                    <span>{t.scan.chooseFile}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => cameraInputRef.current?.click()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E5DE] bg-white text-[#1C231F] text-sm font-medium hover:bg-[#EEF2EC] transition-colors min-h-[44px]"
                  >
                    <Camera className="w-4 h-4 text-[#1F4E37]" aria-hidden="true" />
                    <span>{t.scan.takePhoto}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                <div className="md:col-span-6 rounded-xl overflow-hidden border border-[#E2E5DE] bg-[#F7F6F2] aspect-[4/3]">
                  <img
                    src={imageDataUrl}
                    alt={imageFileName || 'Selected leaf preview'}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="md:col-span-6 space-y-4">
                  <p className="text-sm font-medium text-[#1C231F] truncate">{imageFileName}</p>

                  {/* Scan-Quality Assistant Card */}
                  <div className="rounded-xl border border-[#E2E5DE] bg-[#F7F6F2]/70 p-4 space-y-2.5">
                    <p className="text-xs font-semibold text-[#4A554E]">
                      {t.scan.qualityAssistantTitle}
                    </p>

                    {qualityChecking ? (
                      <div className="flex items-center gap-2 text-sm text-[#4A554E]">
                        <Loader2
                          className="w-4 h-4 animate-spin text-[#1F4E37]"
                          aria-hidden="true"
                        />
                        <span>{t.scan.qualityChecking}</span>
                      </div>
                    ) : photoQuality ? (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          {photoQuality.rating === 'Good' ? (
                            <CheckCircle2
                              className="w-4 h-4 text-[#1F4E37] shrink-0"
                              aria-hidden="true"
                            />
                          ) : photoQuality.rating === 'Fair' ? (
                            <AlertTriangle
                              className="w-4 h-4 text-[#A14B18] shrink-0"
                              aria-hidden="true"
                            />
                          ) : (
                            <AlertCircle
                              className="w-4 h-4 text-[#A8382B] shrink-0"
                              aria-hidden="true"
                            />
                          )}
                          <span
                            className={`text-sm font-semibold ${
                              photoQuality.rating === 'Good'
                                ? 'text-[#1F4E37]'
                                : photoQuality.rating === 'Fair'
                                ? 'text-[#A14B18]'
                                : 'text-[#A8382B]'
                            }`}
                          >
                            {t.scan.qualityRatings[photoQuality.rating]}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-[#1C231F] leading-relaxed">
                          {t.scan.qualityReasons[photoQuality.reasonKey]}
                        </p>

                        {photoQuality.rating === 'Poor' ? (
                          <div className="rounded-lg border border-[#F3D0CA] bg-[#FDF2F0] px-3 py-2 text-xs text-[#A8382B] leading-relaxed">
                            {t.scan.poorQualityWarning}
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E5DE] bg-white text-sm font-medium text-[#1C231F] hover:bg-[#F7F6F2] transition-colors min-h-[44px]"
                    >
                      <RefreshCw className="w-4 h-4 text-[#1F4E37]" aria-hidden="true" />
                      <span>{t.scan.replaceImage}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#F3D0CA] bg-[#FDF2F0] text-sm font-medium text-[#A8382B] hover:bg-[#FBE6E2] transition-colors min-h-[44px]"
                    >
                      <Trash2 className="w-4 h-4" aria-hidden="true" />
                      <span>{t.scan.removeImage}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {validationError ? (
              <div
                role="alert"
                className="flex items-start gap-2.5 rounded-xl border border-[#F3D0CA] bg-[#FDF2F0] px-4 py-3 text-sm text-[#A8382B]"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{validationError}</span>
              </div>
            ) : null}
          </section>

          {/* Auto-detect Crop (Beta) Confirmation Workflow */}
          {cropMode === 'auto' ? (
            <section className="bg-white border border-[#D4DFD1] rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#1F4E37] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <h3 className="font-display text-base font-semibold text-[#1C231F]">
                    {t.scan.autoDetectLabel} ({t.scan.autoDetectBetaBadge})
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A554E]">{t.scan.autoDetectNote}</p>
                </div>
              </div>

              {isDetectingCrop ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-[#D4DFD1] bg-[#EEF2EC] px-4 py-3 flex items-center gap-3 text-sm text-[#1F4E37]"
                >
                  <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
                  <span>{t.scan.detectingCropStatus}</span>
                </div>
              ) : null}

              {autoDetectError ? (
                <div
                  role="alert"
                  className="rounded-xl border border-[#F3D0CA] bg-[#FDF2F0] px-4 py-3 text-sm text-[#A8382B]"
                >
                  {autoDetectError}
                </div>
              ) : null}

              {autoDetectResult ? (
                autoDetectResult.suggestedCrop !== 'Unsupported' ? (
                  <div className="rounded-xl border border-[#D4DFD1] bg-[#EEF2EC]/70 p-4 space-y-3">
                    <div className="space-y-1">
                      <p className="text-base font-semibold text-[#1C231F]">
                        {t.scan.suggestedCropLabel}:{' '}
                        <span className="text-[#1F4E37]">
                          {getCropDisplayName(autoDetectResult.suggestedCrop, language)}
                        </span>
                      </p>
                      <p className="text-sm font-medium text-[#1F4E37]">
                        {t.scan.confirmCropPrompt}
                      </p>
                      {autoDetectResult.reason ? (
                        <p className="text-xs text-[#4A554E] leading-relaxed">
                          {autoDetectResult.reason}
                        </p>
                      ) : null}
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() =>
                          handleSelectSupportedCrop(
                            autoDetectResult.suggestedCrop as CropType
                          )
                        }
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1F4E37] text-white text-sm font-semibold hover:bg-[#173C2A] transition-colors min-h-[42px]"
                      >
                        <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                        <span>
                          {t.scan.confirmCropButton}:{' '}
                          {getCropDisplayName(autoDetectResult.suggestedCrop, language)}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setAutoDetectResult(null)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E5DE] bg-white text-sm font-medium text-[#1C231F] hover:bg-[#F7F6F2] transition-colors min-h-[42px]"
                      >
                        <span>{t.scan.chooseDifferentCrop}</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl border border-[#F2DCC4] bg-[#FDF6EE] p-4 space-y-3">
                    <p className="text-sm text-[#1C231F] leading-relaxed">
                      {t.scan.autoDetectUnsupported}
                    </p>
                    {autoDetectResult.reason ? (
                      <p className="text-xs text-[#4A554E]">{autoDetectResult.reason}</p>
                    ) : null}
                    <div className="flex flex-wrap gap-2.5">
                      <button
                        type="button"
                        onClick={handleSelectOtherMode}
                        className="px-4 py-2 rounded-xl bg-[#A14B18] text-white text-xs sm:text-sm font-semibold hover:bg-[#8A3F13] transition-colors min-h-[40px]"
                      >
                        {t.scan.otherCropTitle}
                      </button>
                      <button
                        type="button"
                        onClick={() => setAutoDetectResult(null)}
                        className="px-4 py-2 rounded-xl border border-[#E2E5DE] bg-white text-xs sm:text-sm font-medium text-[#1C231F] hover:bg-[#F7F6F2] transition-colors min-h-[40px]"
                      >
                        {t.scan.chooseDifferentCrop}
                      </button>
                    </div>
                  </div>
                )
              ) : null}
            </section>
          ) : null}

          {/* Step 3: Photo Quality Tips + Leaf Details */}
          <section className="bg-white border border-[#E2E5DE] rounded-2xl p-5 sm:p-6 space-y-6">
            <h2 className="font-display text-lg font-semibold text-[#1C231F]">
              {t.scan.step3Title}
            </h2>

            {/* Good vs Bad Photo Quality Examples */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#D4DFD1] bg-[#EEF2EC]/60 p-3.5 flex items-center gap-3.5">
                <ImageWithFallback
                  src="/src/assets/images/scan_good_example_1795764748440.jpg"
                  alt={t.scan.goodExampleLabel}
                  className="w-20 h-20 rounded-lg object-cover shrink-0 border border-[#D4DFD1]"
                />
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1F4E37]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{t.scan.goodExampleLabel}</span>
                  </div>
                  <p className="text-xs text-[#4A554E] leading-relaxed">{t.scan.goodExampleDesc}</p>
                </div>
              </div>

              <div className="rounded-xl border border-[#F3D0CA] bg-[#FDF2F0]/60 p-3.5 flex items-center gap-3.5">
                <ImageWithFallback
                  src="/src/assets/images/scan_bad_example_1795764748407.jpg"
                  alt={t.scan.badExampleLabel}
                  className="w-20 h-20 rounded-lg object-cover shrink-0 border border-[#F3D0CA]"
                />
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#A8382B]">
                    <XCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>{t.scan.badExampleLabel}</span>
                  </div>
                  <p className="text-xs text-[#4A554E] leading-relaxed">{t.scan.badExampleDesc}</p>
                </div>
              </div>
            </div>

            {/* Leaf Age, Visible Symptom & Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
              <div className="space-y-2">
                <span className="block text-sm font-medium text-[#1C231F]">
                  {t.scan.leafAgeLabel}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {(['young', 'mature', 'unknown'] as LeafAge[]).map((age) => (
                    <button
                      key={age}
                      type="button"
                      onClick={() => setLeafAge(age)}
                      className={`px-3 py-2.5 rounded-lg border text-xs sm:text-sm font-medium transition-colors min-h-[42px] ${
                        leafAge === age
                          ? 'border-[#1F4E37] bg-[#EEF2EC] text-[#1F4E37]'
                          : 'border-[#E2E5DE] bg-white text-[#4A554E] hover:bg-[#F7F6F2]'
                      }`}
                    >
                      {t.scan.leafAges[age]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="visible-symptom"
                  className="block text-sm font-medium text-[#1C231F]"
                >
                  {t.scan.symptomLabel}
                </label>
                <select
                  id="visible-symptom"
                  value={visibleSymptom}
                  onChange={(e) => setVisibleSymptom(e.target.value as VisibleSymptom)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E5DE] bg-white text-sm text-[#1C231F] min-h-[42px] focus:outline-none focus:ring-2 focus:ring-[#1F4E37]"
                >
                  {(Object.keys(t.scan.symptoms) as VisibleSymptom[]).map((sym) => (
                    <option key={sym} value={sym}>
                      {t.scan.symptoms[sym]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="farmer-notes" className="block text-sm font-medium text-[#1C231F]">
                {t.scan.notesLabel}
              </label>
              <textarea
                id="farmer-notes"
                rows={2}
                maxLength={500}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t.scan.notesPlaceholder}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E5DE] bg-[#F7F6F2]/50 text-sm text-[#1C231F] placeholder:text-[#6A756E] focus:outline-none focus:ring-2 focus:ring-[#1F4E37]"
              />
            </div>
          </section>

          {/* Step 4: Analyze / Auto-Detect Action & Status */}
          <section className="space-y-4">
            {isAnalyzing ? (
              <div
                role="status"
                aria-live="polite"
                className="bg-white border border-[#D4DFD1] rounded-2xl p-6 flex items-center gap-4"
              >
                <Loader2 className="w-6 h-6 text-[#1F4E37] animate-spin shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-base font-semibold text-[#1C231F]">
                    {analysisPhase === 1 ? t.scan.analyzingStep1 : t.scan.analyzingStep2}
                  </p>
                  <p className="text-xs text-[#6A756E] mt-1">{t.common.disclaimer}</p>
                </div>
              </div>
            ) : null}

            {analysisError ? (
              <div
                role="alert"
                className="bg-[#FDF2F0] border border-[#F3D0CA] rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#A8382B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#A8382B]">
                      {t.scan.analysisErrorTitle}
                    </h3>
                    <p className="text-sm text-[#1C231F] mt-1">{analysisError}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleAnalyze}
                  disabled={!imageDataUrl}
                  className="px-4 py-2 rounded-xl bg-[#A8382B] text-white text-sm font-medium hover:bg-[#8E2F24] transition-colors shrink-0 min-h-[40px]"
                >
                  {t.common.retry}
                </button>
              </div>
            ) : null}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-[#6A756E] max-w-xl">{t.common.disclaimer}</p>
              {cropMode === 'auto' ? (
                <button
                  type="button"
                  disabled={!imageDataUrl || isDetectingCrop}
                  onClick={handleDetectCrop}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1F4E37] text-white text-sm font-semibold hover:bg-[#173C2A] disabled:opacity-45 disabled:cursor-not-allowed transition-colors min-h-[48px] whitespace-nowrap shrink-0"
                >
                  {isDetectingCrop ? (
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Sparkles className="w-4 h-4" aria-hidden="true" />
                  )}
                  <span>{t.scan.detectCropButton}</span>
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!imageDataUrl || isAnalyzing}
                  onClick={handleAnalyze}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1F4E37] text-white text-sm font-semibold hover:bg-[#173C2A] disabled:opacity-45 disabled:cursor-not-allowed transition-colors min-h-[48px] whitespace-nowrap shrink-0"
                >
                  {isAnalyzing ? (
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Camera className="w-4 h-4" aria-hidden="true" />
                  )}
                  <span>{t.scan.analyzeButton}</span>
                </button>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
