import { Camera, Search, Sprout, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { SeverityIndicator } from '../components/SeverityIndicator';
import { getCropDisplayName } from '../data/crops';
import { getDiseaseDisplayName } from '../data/diseases';
import { TranslationBundle } from '../i18n/translations';
import { AppRoute, CropType, Language, SavedScan, SUPPORTED_CROPS } from '../types/agritech';
import { isScanInconclusive } from '../utils/resultValidator';
import { formatLocalizedDate } from '../utils/storage';

interface ScanHistoryPageProps {
  scans: SavedScan[];
  language: Language;
  t: TranslationBundle;
  onSelectScan: (scan: SavedScan) => void;
  onDeleteScan: (id: string) => void;
  onNavigate: (route: AppRoute) => void;
}

export function ScanHistoryPage({
  scans,
  language,
  t,
  onSelectScan,
  onDeleteScan,
  onNavigate,
}: ScanHistoryPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [cropFilter, setCropFilter] = useState<'all' | CropType>('all');
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  const filteredScans = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return [...scans]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .filter((scan) => {
        if (cropFilter !== 'all' && scan.crop !== cropFilter) return false;
        if (!q) return true;
        const inconclusive = isScanInconclusive(scan);
        const displayTitle =
          scan.result.cropMatchStatus === 'mismatch'
            ? t.result.cropMismatchTitle.toLowerCase()
            : inconclusive
            ? t.result.inconclusiveBadge.toLowerCase()
            : getDiseaseDisplayName(scan.result.possibleDisease, language, scan.crop).toLowerCase();
        const canonicalDisease = scan.result.possibleDisease.toLowerCase();
        const cropLabel = getCropDisplayName(scan.crop, language).toLowerCase();
        return (
          displayTitle.includes(q) ||
          canonicalDisease.includes(q) ||
          cropLabel.includes(q) ||
          scan.crop.toLowerCase().includes(q) ||
          scan.notes.toLowerCase().includes(q)
        );
      });
  }, [scans, searchQuery, cropFilter, language, t]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C231F]">
            {t.history.title}
          </h1>
          <p className="text-sm sm:text-base text-[#4A554E] mt-1">{t.history.subtitle}</p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate('scan')}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1F4E37] text-white text-sm font-semibold hover:bg-[#173C2A] transition-colors min-h-[44px] whitespace-nowrap shrink-0"
        >
          <Camera className="w-4 h-4" aria-hidden="true" />
          <span>{t.common.scanLeafCta}</span>
        </button>
      </div>

      {/* Search & Crop Filter Bar */}
      {scans.length > 0 ? (
        <div className="bg-white border border-[#E2E5DE] rounded-xl p-3.5 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search
              className="w-4 h-4 text-[#6A756E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.history.searchPlaceholder}
              aria-label={t.history.searchPlaceholder}
              className="w-full pl-10 pr-3.5 py-2 rounded-lg border border-[#E2E5DE] bg-[#F7F6F2]/60 text-sm text-[#1C231F] placeholder:text-[#6A756E] focus:outline-none focus:ring-2 focus:ring-[#1F4E37] min-h-[42px]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1 p-1 bg-[#F7F6F2] border border-[#E2E5DE] rounded-lg">
            {(['all', ...SUPPORTED_CROPS] as const).map((filterVal) => {
              const label =
                filterVal === 'all'
                  ? t.common.allCrops
                  : getCropDisplayName(filterVal, language);
              const isActive = cropFilter === filterVal;
              return (
                <button
                  key={filterVal}
                  type="button"
                  onClick={() => setCropFilter(filterVal)}
                  className={`px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap min-h-[36px] ${
                    isActive
                      ? 'bg-white text-[#1F4E37] shadow-xs'
                      : 'text-[#4A554E] hover:text-[#1C231F]'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {/* Empty States or List */}
      {scans.length === 0 ? (
        <div className="bg-white border border-[#E2E5DE] rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-xl bg-[#EEF2EC] text-[#1F4E37] flex items-center justify-center mx-auto mb-4">
            <Sprout className="w-6 h-6" aria-hidden="true" />
          </div>
          <h2 className="font-display text-lg font-semibold text-[#1C231F]">{t.history.emptyTitle}</h2>
          <p className="text-sm text-[#4A554E] mt-2 mb-6 leading-relaxed">{t.history.emptyBody}</p>
          <button
            type="button"
            onClick={() => onNavigate('scan')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F4E37] text-white text-sm font-semibold hover:bg-[#173C2A] transition-colors min-h-[44px]"
          >
            <Camera className="w-4 h-4" aria-hidden="true" />
            <span>{t.common.scanLeafCta}</span>
          </button>
        </div>
      ) : filteredScans.length === 0 ? (
        <div className="bg-white border border-[#E2E5DE] rounded-2xl p-8 text-center max-w-xl mx-auto">
          <h2 className="font-display text-lg font-semibold text-[#1C231F]">
            {t.history.noMatchesTitle}
          </h2>
          <p className="text-sm text-[#4A554E] mt-1.5 mb-5">{t.history.noMatchesBody}</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setCropFilter('all');
            }}
            className="px-4 py-2 rounded-xl border border-[#E2E5DE] bg-[#F7F6F2] text-sm font-medium text-[#1C231F] hover:bg-[#EEF2EC] transition-colors min-h-[40px]"
          >
            {t.history.clearFilters}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredScans.map((scan) => {
            const cropLabel = getCropDisplayName(scan.crop, language);
            const inconclusive = isScanInconclusive(scan);
            const isMismatch = scan.result.cropMatchStatus === 'mismatch';
            const displayTitle = isMismatch
              ? t.result.cropMismatchTitle
              : inconclusive
              ? t.result.inconclusiveBadge
              : getDiseaseDisplayName(scan.result.possibleDisease, language, scan.crop);

            return (
              <div
                key={scan.id}
                className="bg-white border border-[#E2E5DE] rounded-2xl p-4 flex flex-col justify-between gap-4 hover:border-[#C5CBC0] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <button
                    type="button"
                    onClick={() => onSelectScan(scan)}
                    className="w-24 h-24 rounded-xl overflow-hidden border border-[#E2E5DE] shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E37]"
                  >
                    <ImageWithFallback
                      src={scan.imageDataUrl}
                      alt={`${cropLabel} - ${displayTitle}`}
                      className="w-full h-full object-cover"
                    />
                  </button>

                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex items-center justify-between gap-2 text-xs text-[#6A756E]">
                      <span>
                        {cropLabel}
                        {scan.isDemo ? ` · ${t.common.demoData}` : ''}
                      </span>
                      <span className="tabular-nums">
                        {formatLocalizedDate(scan.createdAt, language)}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectScan(scan)}
                      className="text-left block w-full focus:outline-none focus-visible:underline"
                    >
                      <h3 className="text-base font-semibold text-[#1C231F] hover:text-[#1F4E37] transition-colors truncate">
                        {displayTitle}
                      </h3>
                    </button>

                    <div className="flex flex-wrap items-center gap-2 pt-0.5">
                      {inconclusive ? (
                        <span className="text-xs font-medium text-[#4A554E] bg-[#F7F6F2] border border-[#E2E5DE] px-2.5 py-1 rounded-lg">
                          {isMismatch ? t.result.inconclusiveBadge : t.result.inconclusiveTitle}
                        </span>
                      ) : (
                        <>
                          <SeverityIndicator severity={scan.result.severity} t={t} compact />
                          <span className="text-xs font-medium text-[#4A554E] tabular-nums">
                            {t.common.confidence}: {scan.result.confidence}%
                          </span>
                        </>
                      )}
                    </div>

                    {scan.notes ? (
                      <p className="text-xs text-[#4A554E] line-clamp-1 pt-0.5">{scan.notes}</p>
                    ) : null}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#E2E5DE]">
                  <button
                    type="button"
                    onClick={() => onSelectScan(scan)}
                    className="text-sm font-semibold text-[#1F4E37] hover:underline min-h-[36px] px-1"
                  >
                    {t.history.openDetails}
                  </button>

                  <button
                    type="button"
                    onClick={() => setPendingDeleteId(scan.id)}
                    aria-label={`${t.common.delete} ${displayTitle}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#A8382B] hover:bg-[#FDF2F0] transition-colors min-h-[36px]"
                  >
                    <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{t.common.delete}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {pendingDeleteId ? (
        <div
          className="fixed inset-0 z-50 bg-[#1C231F]/40 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-scan-title"
        >
          <div className="bg-white border border-[#E2E5DE] rounded-2xl max-w-sm w-full p-6 space-y-4">
            <h2 id="delete-scan-title" className="font-display text-lg font-semibold text-[#1C231F]">
              {t.history.deleteConfirmTitle}
            </h2>
            <p className="text-sm text-[#4A554E] leading-relaxed">{t.history.deleteConfirmBody}</p>
            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setPendingDeleteId(null)}
                className="px-4 py-2 rounded-xl border border-[#E2E5DE] bg-white text-sm font-medium text-[#1C231F] hover:bg-[#F7F6F2] min-h-[40px]"
              >
                {t.common.cancel}
              </button>
              <button
                type="button"
                onClick={() => {
                  onDeleteScan(pendingDeleteId);
                  setPendingDeleteId(null);
                }}
                className="px-4 py-2 rounded-xl bg-[#A8382B] text-white text-sm font-semibold hover:bg-[#8E2F24] min-h-[40px]"
              >
                {t.common.confirmDelete}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
