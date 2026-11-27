import {
  ArrowRight,
  BookOpen,
  Camera,
  Check,
  MessageSquareHeart,
  Pencil,
  ShieldAlert,
  Sprout,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { SeverityIndicator } from '../components/SeverityIndicator';
import { CROP_CATALOG, getCropDisplayName } from '../data/crops';
import { getDiseaseDisplayName } from '../data/diseases';
import { TranslationBundle } from '../i18n/translations';
import { AppRoute, CropType, FarmerProfile, SavedScan, SupportedDisease } from '../types/agritech';
import { isScanInconclusive } from '../utils/resultValidator';
import { formatLocalizedDate } from '../utils/storage';

interface OverviewPageProps {
  profile: FarmerProfile;
  onUpdateName: (name: string) => void;
  scans: SavedScan[];
  onNavigate: (route: AppRoute, preselectCrop?: CropType) => void;
  onSelectScan: (scan: SavedScan) => void;
  onLoadDemoData: () => void;
  t: TranslationBundle;
}

const HERO_IMAGES = [
  '/src/assets/images/hero_village_sunrise_1795766497424.jpg',
  '/src/assets/images/hero_fields_morning_1795766497791.jpg',
  '/src/assets/images/hero_village_golden_1795766498473.jpg',
];

function DriftingLeafIcon({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.5 4.5C13.5 4.5 8 7.8 6.8 14.2C6.5 15.8 7 17.3 8.1 18.4C9.2 17.4 10.5 16.8 11.8 16.4C16.5 15.2 19.5 10.9 19.5 4.5Z" />
    </svg>
  );
}

export function OverviewPage({
  profile,
  onUpdateName,
  scans,
  onNavigate,
  onSelectScan,
  onLoadDemoData,
  t,
}: OverviewPageProps) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [draftName, setDraftName] = useState(profile.name);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const timer = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 12000);

    return () => window.clearInterval(timer);
  }, []);

  const hasDemoScans = scans.some((s) => s.isDemo);
  const dataSourceNote = hasDemoScans
    ? `${t.common.basedOnSavedScans} · ${t.common.includesDemoData}`
    : t.common.basedOnSavedScans;

  const totalScans = scans.length;
  const assessedScans = scans.filter((s) => !isScanInconclusive(s));
  const lowRiskScans = assessedScans.filter((s) => s.result.severity === 'Low').length;
  const attentionScans = assessedScans.filter(
    (s) => s.result.severity === 'Medium' || s.result.severity === 'High'
  ).length;
  const highRiskCount = assessedScans.filter((s) => s.result.severity === 'High').length;
  const mediumRiskCount = assessedScans.filter((s) => s.result.severity === 'Medium').length;

  const diseaseCounts = assessedScans.reduce<
    Record<string, { crop: CropType; disease: SupportedDisease; count: number }>
  >((acc, s) => {
    const d = s.result.possibleDisease;
    if (d && d !== 'Unable to assess reliably') {
      const key = `${s.crop}::${d}`;
      if (!acc[key]) {
        acc[key] = { crop: s.crop, disease: d, count: 0 };
      }
      acc[key].count += 1;
    }
    return acc;
  }, {});

  const sortedDiseases = Object.values(diseaseCounts).sort((a, b) => b.count - a.count);
  const mostCommonDisease =
    sortedDiseases.length > 0
      ? `${getCropDisplayName(sortedDiseases[0].crop, profile.language)} · ${getDiseaseDisplayName(
          sortedDiseases[0].disease,
          profile.language,
          sortedDiseases[0].crop
        )}`
      : t.overview.noIssueYet;

  const helpfulCount = scans.filter((s) => s.feedback === 'helpful').length;
  const unsureCount = scans.filter((s) => s.feedback === 'unsure').length;
  const correctionCount = scans.filter((s) => s.feedback === 'needs_correction').length;
  const totalFeedback = helpfulCount + unsureCount + correctionCount;

  const recentScans = [...scans]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 4);

  const handleSaveName = () => {
    const cleaned = draftName.trim();
    if (cleaned) {
      onUpdateName(cleaned);
    } else {
      setDraftName(profile.name);
    }
    setIsEditingName(false);
  };

  const actionRecommendations: {
    id: string;
    title: string;
    body: string;
    tone: 'high' | 'medium' | 'low';
    actionLabel: string;
    route: AppRoute;
  }[] = [];

  if (highRiskCount > 0) {
    actionRecommendations.push({
      id: 'high-risk',
      title: t.overview.highRiskAlertTitle,
      body: t.overview.highRiskAlertBody,
      tone: 'high',
      actionLabel: t.overview.viewAllHistory,
      route: 'history',
    });
  }
  if (mediumRiskCount > 0) {
    actionRecommendations.push({
      id: 'medium-risk',
      title: t.overview.mediumRiskTitle,
      body: t.overview.mediumRiskBody,
      tone: 'medium',
      actionLabel: t.nav.knowledge,
      route: 'knowledge',
    });
  }
  if (assessedScans.length > 0 && highRiskCount === 0 && mediumRiskCount === 0) {
    actionRecommendations.push({
      id: 'routine',
      title: t.overview.routineMonitoringTitle,
      body: t.overview.routineMonitoringBody,
      tone: 'low',
      actionLabel: t.nav.insights,
      route: 'insights',
    });
  }
  actionRecommendations.push({
    id: 'knowledge-guide',
    title: t.overview.checkKnowledgeTitle,
    body: t.overview.checkKnowledgeBody,
    tone: 'low',
    actionLabel: t.nav.knowledge,
    route: 'knowledge',
  });

  return (
    <div className="space-y-8">
      {/* Refined Animated Farming-Village Hero (Overview Page Only) */}
      <section className="relative overflow-hidden rounded-2xl border border-[#D4DFD1] bg-[#163626] min-h-[300px] sm:min-h-[340px] flex items-center">
        {/* Cross-fading landscape backgrounds */}
        {HERO_IMAGES.map((src, idx) => {
          const isActive = idx === heroIndex;
          return (
            <img
              key={src}
              src={src}
              alt=""
              aria-hidden="true"
              loading={idx === 0 ? 'eager' : 'lazy'}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ease-out hero-parallax-active ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            />
          );
        })}

        {/* Dark green to transparent contrast overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#10291B]/95 via-[#173A28]/82 to-[#173A28]/40"
        />

        {/* Subtle drifting leaf silhouettes (respects prefers-reduced-motion via CSS) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <DriftingLeafIcon className="hero-leaf-drift-1 absolute top-6 right-[22%] w-6 h-6 text-[#D8EAD2]" />
          <DriftingLeafIcon className="hero-leaf-drift-2 absolute top-12 right-[10%] w-5 h-5 text-[#D8EAD2]" />
          <DriftingLeafIcon className="hero-leaf-drift-3 absolute top-4 right-[36%] w-4 h-4 text-[#D8EAD2]" />
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-10 w-full p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              {isEditingName ? (
                <div className="flex items-center gap-2 flex-wrap">
                  <label className="sr-only" htmlFor="overview-farmer-name">
                    {t.overview.namePlaceholder}
                  </label>
                  <input
                    id="overview-farmer-name"
                    type="text"
                    value={draftName}
                    onChange={(e) => setDraftName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSaveName();
                      if (e.key === 'Escape') {
                        setDraftName(profile.name);
                        setIsEditingName(false);
                      }
                    }}
                    placeholder={t.overview.namePlaceholder}
                    maxLength={40}
                    className="px-3.5 py-2 text-lg font-medium border border-white/40 rounded-xl bg-white text-[#1C231F] focus:outline-none focus:ring-2 focus:ring-[#D8EAD2]"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={handleSaveName}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#EEF2EC] text-[#1F4E37] text-sm font-semibold hover:bg-white transition-colors min-h-[42px]"
                  >
                    <Check className="w-4 h-4" aria-hidden="true" />
                    <span>{t.common.save}</span>
                  </button>
                </div>
              ) : (
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white text-balance tracking-tight">
                    {t.overview.welcomePrefix} {profile.name}
                  </h1>
                  <button
                    type="button"
                    onClick={() => {
                      setDraftName(profile.name);
                      setIsEditingName(true);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/25 bg-white/10 text-xs font-medium text-white hover:bg-white/20 transition-colors min-h-[34px]"
                  >
                    <Pencil className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{t.overview.editName}</span>
                  </button>
                </div>
              )}
            </div>

            <p className="text-base sm:text-lg text-[#E6EFE4] max-w-xl leading-relaxed">
              {t.overview.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onNavigate('scan')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-[#1F4E37] text-sm font-semibold hover:bg-[#EEF2EC] transition-colors min-h-[46px] whitespace-nowrap"
              >
                <Camera className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{t.common.scanLeafCta}</span>
              </button>

              {totalScans === 0 ? (
                <button
                  type="button"
                  onClick={onLoadDemoData}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-white/30 bg-[#10291B]/55 text-white text-sm font-medium hover:bg-[#10291B]/75 transition-colors min-h-[46px] whitespace-nowrap"
                >
                  <span>{t.common.loadDemoData}</span>
                </button>
              ) : null}
            </div>
          </div>

          {/* 6 Supported Crops Editorial Preview Grid */}
          <div className="hidden lg:grid lg:col-span-5 grid-cols-3 gap-2.5">
            {CROP_CATALOG.map((entry) => {
              const cropLabel = getCropDisplayName(entry.id, profile.language);
              return (
                <button
                  key={entry.id}
                  type="button"
                  onClick={() => onNavigate('scan', entry.id)}
                  className="group text-left rounded-xl overflow-hidden border border-white/20 bg-white/10 hover:bg-white/15 transition-colors"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={entry.imagePath}
                      alt={cropLabel}
                      className="w-full h-full object-cover"
                      fallbackLabel={cropLabel}
                    />
                  </div>
                  <p className="px-2.5 py-1.5 text-xs font-semibold text-white truncate">
                    {cropLabel}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Crop Health Overview */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-2xl font-semibold text-[#1C231F]">
            {t.overview.healthOverviewTitle}
          </h2>
          <span className="text-xs text-[#6A756E]">{dataSourceNote}</span>
        </div>

        {totalScans === 0 ? (
          <div className="bg-white border border-[#E2E5DE] rounded-2xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <div className="w-12 h-12 rounded-xl bg-[#EEF2EC] text-[#1F4E37] flex items-center justify-center mx-auto mb-4">
              <Sprout className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl font-semibold text-[#1C231F] mb-2">
              {t.overview.emptyTitle}
            </h3>
            <p className="text-sm text-[#4A554E] max-w-md mx-auto mb-6 leading-relaxed">
              {t.overview.emptyBody}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('scan')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1F4E37] text-white text-sm font-semibold hover:bg-[#173C2A] transition-colors min-h-[44px]"
              >
                <Camera className="w-4 h-4" aria-hidden="true" />
                <span>{t.common.scanLeafCta}</span>
              </button>
              <button
                type="button"
                onClick={onLoadDemoData}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E2E5DE] bg-[#F7F6F2] text-sm font-medium text-[#1C231F] hover:bg-[#EEF2EC] transition-colors min-h-[44px]"
              >
                <span>{t.common.loadDemoData}</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* 4 Summary KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="bg-white border border-[#E2E5DE] rounded-xl p-5 flex flex-col justify-between gap-3">
                <span className="text-sm font-medium text-[#4A554E]">{t.overview.totalScans}</span>
                <span className="text-3xl font-semibold text-[#1C231F] tabular-nums">{totalScans}</span>
                <span className="text-xs text-[#6A756E]">{dataSourceNote}</span>
              </div>

              <div className="bg-white border border-[#E2E5DE] rounded-xl p-5 flex flex-col justify-between gap-3">
                <span className="text-sm font-medium text-[#4A554E]">{t.overview.lowRiskScans}</span>
                <span className="text-3xl font-semibold text-[#1F4E37] tabular-nums">{lowRiskScans}</span>
                <span className="text-xs text-[#6A756E]">{dataSourceNote}</span>
              </div>

              <div className="bg-white border border-[#E2E5DE] rounded-xl p-5 flex flex-col justify-between gap-3">
                <span className="text-sm font-medium text-[#4A554E]">{t.overview.attentionNeeded}</span>
                <span className="text-3xl font-semibold text-[#C86428] tabular-nums">{attentionScans}</span>
                <span className="text-xs text-[#6A756E]">{dataSourceNote}</span>
              </div>

              <div className="bg-white border border-[#E2E5DE] rounded-xl p-5 flex flex-col justify-between gap-3">
                <span className="text-sm font-medium text-[#4A554E]">{t.overview.mostCommonIssue}</span>
                <span className="text-base font-semibold text-[#1C231F] leading-snug line-clamp-2">
                  {mostCommonDisease}
                </span>
                <span className="text-xs text-[#6A756E]">{dataSourceNote}</span>
              </div>
            </div>

            {/* Recent Scans + Action Centre + Guidance Feedback */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 pt-1">
              {/* Recent Scans */}
              <div className="xl:col-span-7 bg-white border border-[#E2E5DE] rounded-2xl overflow-hidden flex flex-col">
                <div className="px-6 py-4 border-b border-[#E2E5DE] flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-[#1C231F]">
                      {t.overview.recentScansTitle}
                    </h3>
                    <p className="text-xs text-[#6A756E] mt-0.5">{dataSourceNote}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigate('history')}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1F4E37] hover:underline whitespace-nowrap shrink-0 min-h-[40px]"
                  >
                    <span>{t.overview.viewAllHistory}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>

                <div className="divide-y divide-[#E2E5DE]">
                  {recentScans.map((scan) => {
                    const cropLabel = getCropDisplayName(scan.crop, profile.language);
                    const inconclusive = isScanInconclusive(scan);
                    const isMismatch = scan.result.cropMatchStatus === 'mismatch';
                    const title = isMismatch
                      ? t.result.cropMismatchTitle
                      : inconclusive
                      ? t.result.inconclusiveBadge
                      : getDiseaseDisplayName(scan.result.possibleDisease, profile.language, scan.crop);

                    return (
                      <button
                        key={scan.id}
                        type="button"
                        onClick={() => onSelectScan(scan)}
                        className="w-full text-left px-6 py-4 hover:bg-[#F7F6F2] transition-colors flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-[#EEF2EC]"
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <ImageWithFallback
                            src={scan.imageDataUrl}
                            alt={`${cropLabel} - ${title}`}
                            className="w-12 h-12 rounded-lg object-cover border border-[#E2E5DE] shrink-0"
                          />
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-[#1C231F] truncate">
                              {title}
                            </p>
                            <p className="text-xs text-[#4A554E] mt-0.5 flex flex-wrap items-center gap-1.5">
                              <span>{cropLabel}</span>
                              {!inconclusive ? (
                                <>
                                  <span aria-hidden="true">·</span>
                                  <span className="tabular-nums">{scan.result.confidence}%</span>
                                </>
                              ) : null}
                              <span aria-hidden="true">·</span>
                              <span className="tabular-nums">
                                {formatLocalizedDate(scan.createdAt, profile.language)}
                              </span>
                              {scan.isDemo ? (
                                <>
                                  <span aria-hidden="true">·</span>
                                  <span className="text-[#A14B18] font-medium">{t.common.demoData}</span>
                                </>
                              ) : null}
                            </p>
                          </div>
                        </div>

                        <div className="shrink-0">
                          {inconclusive ? (
                            <span className="text-xs font-medium text-[#4A554E] bg-[#F7F6F2] border border-[#E2E5DE] px-2.5 py-1 rounded-lg whitespace-nowrap">
                              {isMismatch ? t.result.inconclusiveBadge : t.result.inconclusiveTitle}
                            </span>
                          ) : (
                            <SeverityIndicator severity={scan.result.severity} t={t} compact />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Action Centre + Guidance Feedback Summary */}
              <div className="xl:col-span-5 space-y-6">
                {/* Action Centre */}
                <div className="bg-white border border-[#E2E5DE] rounded-2xl p-6 flex flex-col gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-[#1C231F]">
                      {t.overview.actionCentreTitle}
                    </h3>
                    <p className="text-xs text-[#6A756E] mt-0.5">{t.overview.actionCentreSubtitle}</p>
                  </div>

                  <div className="space-y-3">
                    {actionRecommendations.map((item) => {
                      const bgClass =
                        item.tone === 'high'
                          ? 'bg-[#FDF2F0] border-[#F3D0CA]'
                          : item.tone === 'medium'
                          ? 'bg-[#FDF6EE] border-[#F2DCC4]'
                          : 'bg-[#EEF2EC] border-[#D4DFD1]';
                      return (
                        <div key={item.id} className={`rounded-xl border p-4 space-y-2 ${bgClass}`}>
                          <div className="flex items-start gap-2.5">
                            {item.tone === 'high' ? (
                              <ShieldAlert className="w-4 h-4 text-[#A8382B] shrink-0 mt-0.5" aria-hidden="true" />
                            ) : (
                              <BookOpen className="w-4 h-4 text-[#1F4E37] shrink-0 mt-0.5" aria-hidden="true" />
                            )}
                            <div className="space-y-1 min-w-0">
                              <h4 className="text-sm font-semibold text-[#1C231F]">{item.title}</h4>
                              <p className="text-xs leading-relaxed text-[#4A554E]">{item.body}</p>
                            </div>
                          </div>
                          <div className="pt-1">
                            <button
                              type="button"
                              onClick={() => onNavigate(item.route)}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1F4E37] hover:underline"
                            >
                              <span>{item.actionLabel}</span>
                              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Guidance Feedback Summary Card */}
                <div className="bg-white border border-[#E2E5DE] rounded-2xl p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-[#1C231F] flex items-center gap-2">
                        <MessageSquareHeart className="w-4 h-4 text-[#1F4E37] shrink-0" aria-hidden="true" />
                        <span>{t.overview.feedbackCardTitle}</span>
                      </h3>
                      <p className="text-xs text-[#6A756E] mt-0.5">{t.overview.feedbackCardSubtitle}</p>
                    </div>
                    <span className="text-[11px] text-[#6A756E] shrink-0">{t.common.basedOnSavedScans}</span>
                  </div>

                  {totalFeedback === 0 ? (
                    <p className="text-xs text-[#4A554E] bg-[#F7F6F2] border border-[#E2E5DE] rounded-xl p-3.5">
                      {t.overview.noFeedbackYet}
                    </p>
                  ) : (
                    <div className="grid grid-cols-3 gap-2.5 text-center">
                      <div className="rounded-xl bg-[#EEF2EC] p-3">
                        <p className="text-xl font-semibold text-[#1F4E37] tabular-nums">{helpfulCount}</p>
                        <p className="text-[11px] font-medium text-[#1F4E37] mt-1 leading-tight">
                          {t.result.feedbackOptions.helpful}
                        </p>
                      </div>
                      <div className="rounded-xl bg-[#F7F6F2] border border-[#E2E5DE] p-3">
                        <p className="text-xl font-semibold text-[#1C231F] tabular-nums">{unsureCount}</p>
                        <p className="text-[11px] font-medium text-[#4A554E] mt-1 leading-tight">
                          {t.result.feedbackOptions.unsure}
                        </p>
                      </div>
                      <div className="rounded-xl bg-[#FDF6EE] border border-[#F2DCC4] p-3">
                        <p className="text-xl font-semibold text-[#A14B18] tabular-nums">{correctionCount}</p>
                        <p className="text-[11px] font-medium text-[#A14B18] mt-1 leading-tight">
                          {t.result.feedbackOptions.needs_correction}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
