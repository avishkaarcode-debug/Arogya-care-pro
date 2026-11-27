import { BarChart3, Camera, CheckSquare, Square } from 'lucide-react';
import { getCropDisplayName } from '../data/crops';
import { getDiseaseDisplayName, SEASONAL_CHECKLIST } from '../data/diseases';
import { TranslationBundle } from '../i18n/translations';
import {
  AppRoute,
  CropType,
  Language,
  SavedScan,
  SUPPORTED_CROPS,
  SupportedDisease,
} from '../types/agritech';
import { isScanInconclusive } from '../utils/resultValidator';

interface CropInsightsPageProps {
  scans: SavedScan[];
  language: Language;
  checklistState: Record<string, boolean>;
  onToggleChecklist: (id: string) => void;
  onNavigate: (route: AppRoute) => void;
  t: TranslationBundle;
}

function getWeekLabel(dateString: string, language: Language): string {
  const date = new Date(dateString);
  const startOfWeek = new Date(date);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  startOfWeek.setDate(diff);
  const locale = language === 'te' ? 'te-IN' : language === 'hi' ? 'hi-IN' : 'en-IN';
  return startOfWeek.toLocaleDateString(locale, { month: 'short', day: 'numeric' });
}

export function CropInsightsPage({
  scans,
  language,
  checklistState,
  onToggleChecklist,
  onNavigate,
  t,
}: CropInsightsPageProps) {
  const hasDemoScans = scans.some((s) => s.isDemo);
  const sourceNote = hasDemoScans
    ? `${t.common.basedOnSavedScans} · ${t.common.includesDemoData}`
    : t.common.basedOnSavedScans;

  const assessedScans = scans.filter((s) => !isScanInconclusive(s));

  // Compute weekly scan buckets
  const weekCountsMap = new Map<string, { label: string; sortTime: number; count: number }>();
  for (const scan of scans) {
    const d = new Date(scan.createdAt);
    const startOfWeek = new Date(d);
    const day = d.getDay();
    startOfWeek.setDate(d.getDate() - day + (day === 0 ? -6 : 1));
    startOfWeek.setHours(0, 0, 0, 0);
    const key = startOfWeek.toISOString().slice(0, 10);
    const existing = weekCountsMap.get(key);
    if (existing) {
      existing.count += 1;
    } else {
      weekCountsMap.set(key, {
        label: getWeekLabel(scan.createdAt, language),
        sortTime: startOfWeek.getTime(),
        count: 1,
      });
    }
  }
  const weeklyBuckets = Array.from(weekCountsMap.values()).sort((a, b) => a.sortTime - b.sortTime);
  const maxWeekCount = Math.max(1, ...weeklyBuckets.map((b) => b.count));

  // Disease distribution keyed by `${crop}::${disease}` so shared names (Tomato vs Potato Early/Late Blight) stay distinct
  const diseaseCounts = assessedScans.reduce<
    Record<string, { crop: CropType; disease: SupportedDisease; count: number }>
  >((acc, s) => {
    const key = `${s.crop}::${s.result.possibleDisease}`;
    if (!acc[key]) {
      acc[key] = { crop: s.crop, disease: s.result.possibleDisease, count: 0 };
    }
    acc[key].count += 1;
    return acc;
  }, {});
  const sortedDiseases = Object.entries(diseaseCounts).sort((a, b) => b[1].count - a[1].count);

  // Per-crop scan counts across all 6 supported crops
  const cropBreakdown = SUPPORTED_CROPS.map((crop) => ({
    crop,
    count: scans.filter((s) => s.crop === crop).length,
  }));

  // Risk breakdown (only assessed scans)
  const lowCount = assessedScans.filter((s) => s.result.severity === 'Low').length;
  const medCount = assessedScans.filter((s) => s.result.severity === 'Medium').length;
  const highCount = assessedScans.filter((s) => s.result.severity === 'High').length;

  const mostCommonEntry = sortedDiseases[0]?.[1];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C231F]">
            {t.insights.title}
          </h1>
          <p className="text-sm sm:text-base text-[#4A554E] mt-1">{t.insights.subtitle}</p>
        </div>
        {scans.length >= 2 ? (
          <span className="text-xs text-[#6A756E]">{sourceNote}</span>
        ) : null}
      </div>

      {/* Honest Insufficient-Data State when < 2 scans */}
      {scans.length < 2 ? (
        <div className="bg-white border border-[#E2E5DE] rounded-2xl p-8 sm:p-10 text-center max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-xl bg-[#EEF2EC] text-[#1F4E37] flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-6 h-6" aria-hidden="true" />
          </div>
          <h2 className="font-display text-lg font-semibold text-[#1C231F]">
            {t.insights.insufficientTitle}
          </h2>
          <p className="text-sm text-[#4A554E] mt-2 mb-6 leading-relaxed">
            {t.insights.insufficientBody}
          </p>
          <button
            type="button"
            onClick={() => onNavigate('scan')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F4E37] text-white text-sm font-semibold hover:bg-[#173C2A] transition-colors min-h-[44px]"
          >
            <Camera className="w-4 h-4" aria-hidden="true" />
            <span>{t.common.scanLeafCta}</span>
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Top Row: Most Common Observation + 6-Crop Breakdown + Risk Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Most Common Observation */}
            <div className="bg-white border border-[#E2E5DE] rounded-2xl p-5 flex flex-col justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-[#4A554E]">{t.insights.mostCommonTitle}</p>
                <p className="font-display text-xl font-semibold text-[#1C231F] mt-2">
                  {mostCommonEntry
                    ? `${getDiseaseDisplayName(
                        mostCommonEntry.disease,
                        language,
                        mostCommonEntry.crop
                      )}`
                    : '—'}
                </p>
                {mostCommonEntry ? (
                  <p className="text-xs font-medium text-[#1F4E37] mt-1">
                    {getCropDisplayName(mostCommonEntry.crop, language)}
                  </p>
                ) : null}
              </div>
              <p className="text-xs text-[#6A756E] tabular-nums">
                {mostCommonEntry ? `${mostCommonEntry.count} ${t.insights.scansUnit} · ` : ''}
                {sourceNote}
              </p>
            </div>

            {/* 6-Crop Scan Breakdown */}
            <div className="bg-white border border-[#E2E5DE] rounded-2xl p-5 space-y-3">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="text-sm font-medium text-[#4A554E]">{t.insights.cropSplitTitle}</h2>
                <span className="text-xs text-[#6A756E] tabular-nums">
                  {scans.length} {t.insights.scansUnit}
                </span>
              </div>
              <div className="space-y-2">
                {cropBreakdown.map(({ crop, count }) => (
                  <div key={crop}>
                    <div className="flex justify-between text-xs font-medium text-[#1C231F] mb-1">
                      <span>{getCropDisplayName(crop, language)}</span>
                      <span className="tabular-nums">{count}</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#EEF2EC] overflow-hidden">
                      <div
                        className="h-full bg-[#1F4E37] rounded-full"
                        style={{
                          width: `${count === 0 ? 0 : Math.max(6, Math.round((count / scans.length) * 100))}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk-Level Breakdown */}
            <div className="bg-white border border-[#E2E5DE] rounded-2xl p-5 flex flex-col justify-between gap-4">
              <h2 className="text-sm font-medium text-[#4A554E]">{t.insights.riskBreakdownTitle}</h2>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-[#EEF2EC] p-3">
                  <p className="text-xs font-medium text-[#1F4E37]">{t.common.low}</p>
                  <p className="text-2xl font-semibold text-[#1F4E37] mt-1 tabular-nums">{lowCount}</p>
                </div>
                <div className="rounded-xl bg-[#FDF6EE] p-3">
                  <p className="text-xs font-medium text-[#A14B18]">{t.common.medium}</p>
                  <p className="text-2xl font-semibold text-[#A14B18] mt-1 tabular-nums">{medCount}</p>
                </div>
                <div className="rounded-xl bg-[#FDF2F0] p-3">
                  <p className="text-xs font-medium text-[#A8382B]">{t.common.high}</p>
                  <p className="text-2xl font-semibold text-[#A8382B] mt-1 tabular-nums">{highCount}</p>
                </div>
              </div>
              <p className="text-xs text-[#6A756E]">{sourceNote}</p>
            </div>
          </div>

          {/* Charts Row: Weekly Trend & Disease Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Weekly Scan Trend */}
            <div className="bg-white border border-[#E2E5DE] rounded-2xl p-5 sm:p-6 space-y-5">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="text-base font-semibold text-[#1C231F]">
                  {t.insights.weeklyTrendTitle}
                </h2>
                <span className="text-xs text-[#6A756E]">{sourceNote}</span>
              </div>

              <div className="flex items-end gap-4 h-44 pt-4 border-b border-[#E2E5DE] pb-2">
                {weeklyBuckets.map((bucket) => {
                  const pct = Math.max(12, Math.round((bucket.count / maxWeekCount) * 100));
                  return (
                    <div
                      key={bucket.label}
                      className="flex-1 flex flex-col items-center justify-end h-full gap-2 min-w-[44px]"
                    >
                      <span className="text-xs font-semibold text-[#1C231F] tabular-nums">
                        {bucket.count}
                      </span>
                      <div
                        className="w-full max-w-[48px] bg-[#1F4E37] rounded-t-lg transition-all"
                        style={{ height: `${pct}%` }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-4">
                {weeklyBuckets.map((bucket) => (
                  <span
                    key={bucket.label}
                    className="flex-1 text-center text-xs text-[#4A554E] truncate tabular-nums"
                  >
                    {bucket.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Disease Distribution */}
            <div className="bg-white border border-[#E2E5DE] rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="text-base font-semibold text-[#1C231F]">
                  {t.insights.diseaseDistTitle}
                </h2>
                <span className="text-xs text-[#6A756E]">{sourceNote}</span>
              </div>

              {sortedDiseases.length === 0 ? (
                <p className="text-sm text-[#4A554E] py-8 text-center">
                  {t.result.inconclusiveBadge}
                </p>
              ) : (
                <div className="space-y-3.5">
                  {sortedDiseases.map(([entryKey, item]) => {
                    const pct = Math.round((item.count / assessedScans.length) * 100);
                    const display = `${getCropDisplayName(item.crop, language)} · ${getDiseaseDisplayName(
                      item.disease,
                      language,
                      item.crop
                    )}`;
                    return (
                      <div key={entryKey} className="space-y-1.5">
                        <div className="flex items-center justify-between gap-3 text-sm">
                          <span className="font-medium text-[#1C231F] truncate">{display}</span>
                          <span className="text-xs font-semibold text-[#4A554E] shrink-0 tabular-nums">
                            {item.count} ({pct}%)
                          </span>
                        </div>
                        <div className="h-2.5 rounded-full bg-[#EEF2EC] overflow-hidden">
                          <div
                            className="h-full bg-[#2D6A4F] rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 6-Crop Seasonal-Care Checklist */}
      <section className="bg-white border border-[#E2E5DE] rounded-2xl p-5 sm:p-6 space-y-5">
        <div>
          <h2 className="font-display text-xl font-semibold text-[#1C231F]">
            {t.insights.checklistTitle}
          </h2>
          <p className="text-xs sm:text-sm text-[#4A554E] mt-1">{t.insights.checklistSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUPPORTED_CROPS.map((crop) => {
            const cropItems = SEASONAL_CHECKLIST.filter((c) => c.crop === crop);
            return (
              <div key={crop} className="space-y-3">
                <h3 className="text-sm font-semibold text-[#1F4E37] pb-2 border-b border-[#E2E5DE]">
                  {getCropDisplayName(crop, language)}
                </h3>
                <div className="space-y-2">
                  {cropItems.map((item) => {
                    const checked = Boolean(checklistState[item.id]);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onToggleChecklist(item.id)}
                        className={`w-full text-left flex items-start gap-3 p-3 rounded-xl border transition-colors min-h-[44px] ${
                          checked
                            ? 'bg-[#EEF2EC]/70 border-[#D4DFD1] text-[#4A554E]'
                            : 'bg-white border-[#E2E5DE] text-[#1C231F] hover:bg-[#F7F6F2]'
                        }`}
                      >
                        {checked ? (
                          <CheckSquare className="w-5 h-5 text-[#1F4E37] shrink-0 mt-0.5" aria-hidden="true" />
                        ) : (
                          <Square className="w-5 h-5 text-[#6A756E] shrink-0 mt-0.5" aria-hidden="true" />
                        )}
                        <span className={`text-sm leading-relaxed ${checked ? 'line-through' : ''}`}>
                          {item.label[language]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
