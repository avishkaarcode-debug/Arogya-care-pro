import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { getCropDisplayName } from '../data/crops';
import { DISEASE_GUIDES } from '../data/diseases';
import { TranslationBundle } from '../i18n/translations';
import { CropType, Language, SUPPORTED_CROPS } from '../types/agritech';

interface KnowledgeHubPageProps {
  language: Language;
  t: TranslationBundle;
}

export function KnowledgeHubPage({ language, t }: KnowledgeHubPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [cropFilter, setCropFilter] = useState<'all' | CropType>('all');
  const [farmerFriendly, setFarmerFriendly] = useState(false);

  const filteredGuides = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return DISEASE_GUIDES.filter((guide) => {
      if (cropFilter !== 'all' && guide.crop !== cropFilter) return false;
      if (!q) return true;

      const haystack = [
        guide.crop,
        getCropDisplayName(guide.crop, language),
        guide.name[language],
        guide.summary[language],
        guide.likelyCause[language],
        ...guide.symptoms[language],
        ...guide.safeActions[language],
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [searchQuery, cropFilter, language]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C231F]">
            {t.knowledge.title}
          </h1>
          <p className="text-sm sm:text-base text-[#4A554E] mt-1">{t.knowledge.subtitle}</p>
        </div>

        {/* Farmer-Friendly Language Toggle */}
        <button
          type="button"
          role="switch"
          aria-checked={farmerFriendly}
          onClick={() => setFarmerFriendly((prev) => !prev)}
          className={`inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border transition-colors min-h-[44px] shrink-0 ${
            farmerFriendly
              ? 'bg-[#EEF2EC] border-[#1F4E37] text-[#1F4E37]'
              : 'bg-white border-[#E2E5DE] text-[#1C231F] hover:bg-[#F7F6F2]'
          }`}
        >
          <div className="text-left">
            <span className="text-sm font-semibold block">{t.knowledge.farmerFriendlyToggle}</span>
            <span className="text-[11px] text-[#4A554E] block">
              {t.knowledge.farmerFriendlyDesc}
            </span>
          </div>
          <span
            className={`w-10 h-6 rounded-full p-0.5 transition-colors flex items-center shrink-0 ${
              farmerFriendly ? 'bg-[#1F4E37] justify-end' : 'bg-[#C5CBC0] justify-start'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-white shadow-xs" />
          </span>
        </button>
      </div>

      {/* Search & Crop Filter */}
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
            placeholder={t.knowledge.searchPlaceholder}
            aria-label={t.knowledge.searchPlaceholder}
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

      {/* Disease Guidance Cards */}
      {filteredGuides.length === 0 ? (
        <div className="bg-white border border-[#E2E5DE] rounded-2xl p-8 text-center text-sm text-[#4A554E]">
          {t.knowledge.noResults}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filteredGuides.map((guide) => {
            const cropLabel = getCropDisplayName(guide.crop, language);
            const summary = farmerFriendly
              ? guide.simpleSummary[language]
              : guide.summary[language];
            const symptoms = farmerFriendly
              ? guide.simpleSymptoms[language]
              : guide.symptoms[language];
            const likelyCause = farmerFriendly
              ? guide.simpleLikelyCause[language]
              : guide.likelyCause[language];
            const safeActions = farmerFriendly
              ? guide.simpleSafeActions[language]
              : guide.safeActions[language];
            const prevention = farmerFriendly
              ? guide.simplePrevention[language]
              : guide.prevention[language];
            const helpAdvice = farmerFriendly
              ? guide.simpleWhenToSeekHelp[language]
              : guide.whenToSeekHelp[language];

            return (
              <article
                key={`${guide.crop}-${guide.id}`}
                className="bg-white border border-[#E2E5DE] rounded-2xl p-6 space-y-5"
              >
                <div className="space-y-1.5 pb-4 border-b border-[#E2E5DE]">
                  <p className="text-xs font-semibold text-[#1F4E37]">{cropLabel}</p>
                  <h2 className="font-display text-xl font-semibold text-[#1C231F]">
                    {guide.name[language]}
                  </h2>
                  <p className="text-sm text-[#4A554E] leading-relaxed">{summary}</p>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="text-xs font-semibold text-[#1C231F] mb-1.5">
                      {t.knowledge.commonSymptoms}
                    </h3>
                    <ul className="space-y-1 text-[#4A554E] list-disc pl-5 leading-relaxed">
                      {symptoms.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-[#1C231F] mb-1">
                      {t.knowledge.likelyCause}
                    </h3>
                    <p className="text-[#4A554E] leading-relaxed">{likelyCause}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-[#1F4E37] mb-1.5">
                      {t.knowledge.safeNextActions}
                    </h3>
                    <ul className="space-y-1 text-[#1C231F] list-disc pl-5 leading-relaxed">
                      {safeActions.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-[#1C231F] mb-1.5">
                      {t.knowledge.prevention}
                    </h3>
                    <ul className="space-y-1 text-[#4A554E] list-disc pl-5 leading-relaxed">
                      {prevention.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-[#EEF2EC]/70 border border-[#D4DFD1] p-3.5">
                    <h3 className="text-xs font-semibold text-[#1F4E37] mb-1">
                      {t.knowledge.whenToSeekHelp}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1C231F] leading-relaxed">
                      {helpAdvice}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
