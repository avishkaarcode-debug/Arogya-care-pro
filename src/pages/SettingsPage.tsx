import { Check, ShieldCheck, Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import { LANGUAGE_OPTIONS, TranslationBundle } from '../i18n/translations';
import { FarmerProfile, Language } from '../types/agritech';

interface SettingsPageProps {
  profile: FarmerProfile;
  onSaveProfile: (updated: FarmerProfile) => void;
  onResetAllData: () => void;
  t: TranslationBundle;
}

export function SettingsPage({
  profile,
  onSaveProfile,
  onResetAllData,
  t,
}: SettingsPageProps) {
  const [name, setName] = useState(profile.name);
  const [regionNote, setRegionNote] = useState(profile.regionNote);
  const [statusMessage, setStatusMessage] = useState('');
  const [showResetModal, setShowResetModal] = useState(false);

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedName = name.trim() || profile.name;
    onSaveProfile({
      ...profile,
      name: cleanedName,
      regionNote: regionNote.trim(),
    });
    setName(cleanedName);
    setStatusMessage(t.settings.savedToast);
    window.setTimeout(() => setStatusMessage(''), 3000);
  };

  const handleLanguageSelect = (lang: Language) => {
    onSaveProfile({
      ...profile,
      name: name.trim() || profile.name,
      regionNote: regionNote.trim(),
      language: lang,
    });
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C231F]">
          {t.settings.title}
        </h1>
        <p className="text-sm sm:text-base text-[#4A554E] mt-1">{t.settings.subtitle}</p>
      </div>

      {statusMessage ? (
        <div
          role="status"
          className="rounded-xl border border-[#D4DFD1] bg-[#EEF2EC] px-4 py-3 text-sm font-medium text-[#1F4E37] flex items-center gap-2"
        >
          <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>{statusMessage}</span>
        </div>
      ) : null}

      {/* Farmer Profile */}
      <form
        onSubmit={handleProfileSubmit}
        className="bg-white border border-[#E2E5DE] rounded-2xl p-6 space-y-5"
      >
        <h2 className="font-display text-lg font-semibold text-[#1C231F]">
          {t.settings.profileSection}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="settings-farmer-name" className="block text-sm font-medium text-[#1C231F]">
              {t.settings.farmerNameLabel}
            </label>
            <input
              id="settings-farmer-name"
              type="text"
              maxLength={40}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E5DE] bg-[#F7F6F2]/50 text-sm text-[#1C231F] focus:outline-none focus:ring-2 focus:ring-[#1F4E37] min-h-[44px]"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="settings-region-note" className="block text-sm font-medium text-[#1C231F]">
              {t.settings.regionLabel}
            </label>
            <input
              id="settings-region-note"
              type="text"
              maxLength={60}
              value={regionNote}
              onChange={(e) => setRegionNote(e.target.value)}
              placeholder={t.settings.regionPlaceholder}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E2E5DE] bg-[#F7F6F2]/50 text-sm text-[#1C231F] placeholder:text-[#6A756E] focus:outline-none focus:ring-2 focus:ring-[#1F4E37] min-h-[44px]"
            />
          </div>
        </div>

        <div className="pt-1">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-[#1F4E37] text-white text-sm font-semibold hover:bg-[#173C2A] transition-colors min-h-[44px]"
          >
            {t.common.save}
          </button>
        </div>
      </form>

      {/* Preferred Language */}
      <section className="bg-white border border-[#E2E5DE] rounded-2xl p-6 space-y-4">
        <div>
          <h2 className="font-display text-lg font-semibold text-[#1C231F]">
            {t.settings.languageSection}
          </h2>
          <p className="text-sm text-[#4A554E] mt-1">{t.settings.languageHelp}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {LANGUAGE_OPTIONS.map((opt) => {
            const isActive = profile.language === opt.code;
            return (
              <button
                key={opt.code}
                type="button"
                onClick={() => handleLanguageSelect(opt.code)}
                className={`p-3.5 rounded-xl border text-left transition-colors min-h-[56px] ${
                  isActive
                    ? 'border-[#1F4E37] bg-[#EEF2EC] text-[#1F4E37]'
                    : 'border-[#E2E5DE] bg-white text-[#1C231F] hover:bg-[#F7F6F2]'
                }`}
              >
                <span className="text-base font-semibold block">{opt.nativeLabel}</span>
                <span className="text-xs text-[#4A554E] block mt-0.5">{opt.englishLabel}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Privacy & Safety */}
      <section className="bg-white border border-[#E2E5DE] rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-5 h-5 text-[#1F4E37] shrink-0" aria-hidden="true" />
          <h2 className="font-display text-lg font-semibold text-[#1C231F]">
            {t.settings.privacySection}
          </h2>
        </div>
        <p className="text-sm text-[#1C231F] leading-relaxed bg-[#F7F6F2] border border-[#E2E5DE] rounded-xl p-4">
          {t.settings.privacyNote}
        </p>
        <p className="text-sm text-[#4A554E] leading-relaxed">{t.settings.safetyNote}</p>
      </section>

      {/* Local Device Data Reset */}
      <section className="bg-white border border-[#E2E5DE] rounded-2xl p-6 space-y-4">
        <div>
          <h2 className="font-display text-lg font-semibold text-[#1C231F]">
            {t.settings.localDataSection}
          </h2>
          <p className="text-sm text-[#4A554E] mt-1 leading-relaxed">{t.settings.localDataDesc}</p>
        </div>

        <button
          type="button"
          onClick={() => setShowResetModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#F3D0CA] bg-[#FDF2F0] text-sm font-semibold text-[#A8382B] hover:bg-[#FBE6E2] transition-colors min-h-[44px]"
        >
          <Trash2 className="w-4 h-4" aria-hidden="true" />
          <span>{t.settings.resetButton}</span>
        </button>
      </section>

      {/* Confirmation Modal */}
      {showResetModal ? (
        <div
          className="fixed inset-0 z-50 bg-[#1C231F]/40 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reset-data-title"
        >
          <div className="bg-white border border-[#E2E5DE] rounded-2xl max-w-sm w-full p-6 space-y-4">
            <h2 id="reset-data-title" className="font-display text-lg font-semibold text-[#1C231F]">
              {t.settings.resetConfirmTitle}
            </h2>
            <p className="text-sm text-[#4A554E] leading-relaxed">{t.settings.resetConfirmBody}</p>
            <div className="flex items-center justify-end gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2 rounded-xl border border-[#E2E5DE] bg-white text-sm font-medium text-[#1C231F] hover:bg-[#F7F6F2] min-h-[40px]"
              >
                {t.common.cancel}
              </button>
              <button
                type="button"
                onClick={() => {
                  onResetAllData();
                  setName('Ramesh');
                  setRegionNote('');
                  setShowResetModal(false);
                  setStatusMessage(t.settings.resetToast);
                  window.setTimeout(() => setStatusMessage(''), 3000);
                }}
                className="px-4 py-2 rounded-xl bg-[#A8382B] text-white text-sm font-semibold hover:bg-[#8E2F24] min-h-[40px]"
              >
                {t.settings.resetConfirmAction}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
