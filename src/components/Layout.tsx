import {
  BarChart3,
  BookOpen,
  Camera,
  History,
  LayoutDashboard,
  Settings,
  Globe,
} from 'lucide-react';
import React from 'react';
import { LANGUAGE_OPTIONS, TranslationBundle } from '../i18n/translations';
import { AppRoute, FarmerProfile, Language } from '../types/agritech';
import { ImageWithFallback } from './ImageWithFallback';

interface LayoutProps {
  activeRoute: AppRoute;
  onNavigate: (route: AppRoute) => void;
  profile: FarmerProfile;
  onLanguageChange: (lang: Language) => void;
  t: TranslationBundle;
  children: React.ReactNode;
}

function BrandMark() {
  return (
    <svg
      viewBox="0 0 36 36"
      className="w-9 h-9 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="36" height="36" rx="10" fill="#1F4E37" />
      <path
        d="M25.5 10.5C18.5 10.5 12.5 14.5 11.2 21.8C10.9 23.4 11.4 25.1 12.6 26.2C13.8 25.1 15.1 24.4 16.5 24C21.8 22.6 25.5 17.7 25.5 10.5Z"
        fill="#EEF2EC"
      />
      <path
        d="M11 26.5C14.2 22.4 18.2 18.4 22.8 14.5"
        stroke="#1F4E37"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Layout({
  activeRoute,
  onNavigate,
  profile,
  onLanguageChange,
  t,
  children,
}: LayoutProps) {
  const navItems: { route: AppRoute; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { route: 'overview', label: t.nav.overview, icon: LayoutDashboard },
    { route: 'scan', label: t.nav.scan, icon: Camera },
    { route: 'history', label: t.nav.history, icon: History },
    { route: 'insights', label: t.nav.insights, icon: BarChart3 },
    { route: 'knowledge', label: t.nav.knowledge, icon: BookOpen },
    { route: 'settings', label: t.nav.settings, icon: Settings },
  ];

  const mobileBottomItems = navItems.slice(0, 5);

  const currentPageTitle =
    activeRoute === 'overview'
      ? t.nav.overview
      : activeRoute === 'scan'
      ? t.nav.scan
      : activeRoute === 'result'
      ? t.result.heading
      : activeRoute === 'history'
      ? t.nav.history
      : activeRoute === 'insights'
      ? t.nav.insights
      : activeRoute === 'knowledge'
      ? t.nav.knowledge
      : t.nav.settings;

  const normalizedActiveNav = activeRoute === 'result' ? 'scan' : activeRoute;

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#1C231F] flex flex-col lg:flex-row">
      {/* Desktop Compact Sidebar */}
      <aside className="no-print hidden lg:flex lg:flex-col lg:w-64 lg:shrink-0 lg:sticky lg:top-0 lg:h-screen bg-white border-r border-[#E2E5DE]">
        <div className="px-5 py-5 border-b border-[#E2E5DE]">
          <button
            type="button"
            onClick={() => onNavigate('overview')}
            className="flex items-center gap-3 text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E37] rounded-lg"
          >
            <BrandMark />
            <div className="min-w-0">
              <span className="font-display text-lg font-semibold tracking-tight text-[#1C231F] block truncate">
                {t.brandName}
              </span>
            </div>
          </button>
        </div>

        <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto" aria-label="Main navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = normalizedActiveNav === item.route;
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => onNavigate(item.route)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E37] ${
                  isActive
                    ? 'bg-[#EEF2EC] text-[#1F4E37]'
                    : 'text-[#4A554E] hover:bg-[#F7F6F2] hover:text-[#1C231F]'
                }`}
              >
                <Icon className="w-[18px] h-[18px] shrink-0" aria-hidden="true" />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-[#E2E5DE] bg-[#F7F6F2]/60">
          <p className="text-xs leading-relaxed text-[#4A554E]">{t.tagline}</p>
        </div>
      </aside>

      {/* Main Column */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="no-print sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-[#E2E5DE]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 lg:h-16 flex items-center justify-between gap-4">
            {/* Left: Mobile Logo or Desktop Page Title */}
            <div className="flex items-center gap-3 min-w-0">
              <button
                type="button"
                onClick={() => onNavigate('overview')}
                className="lg:hidden flex items-center gap-2.5 min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E37] rounded-lg"
              >
                <BrandMark />
                <span className="font-display text-base font-semibold text-[#1C231F] truncate">
                  {t.brandName}
                </span>
              </button>
              <h2 className="hidden lg:block font-display text-lg font-semibold text-[#1C231F] truncate">
                {currentPageTitle}
              </h2>
            </div>

            {/* Right: Language Selector & Farmer Profile */}
            <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
              <label className="flex items-center gap-1.5 bg-[#F7F6F2] border border-[#E2E5DE] rounded-lg px-2.5 py-1.5 min-h-[40px] cursor-pointer focus-within:ring-2 focus-within:ring-[#1F4E37]">
                <Globe className="w-4 h-4 text-[#1F4E37] shrink-0" aria-hidden="true" />
                <span className="sr-only">{t.common.language}</span>
                <select
                  value={profile.language}
                  onChange={(e) => onLanguageChange(e.target.value as Language)}
                  aria-label={t.common.language}
                  className="bg-transparent text-xs sm:text-sm font-medium text-[#1C231F] focus:outline-none cursor-pointer pr-1"
                >
                  {LANGUAGE_OPTIONS.map((opt) => (
                    <option key={opt.code} value={opt.code}>
                      {opt.nativeLabel}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="button"
                onClick={() => onNavigate('settings')}
                aria-label={t.common.farmerProfile}
                className="flex items-center gap-2.5 pl-1.5 pr-2.5 py-1 rounded-lg border border-[#E2E5DE] bg-white hover:bg-[#F7F6F2] transition-colors min-h-[40px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4E37]"
              >
                <ImageWithFallback
                  src="/src/assets/images/farmer_avatar_1795764749403.jpg"
                  alt={profile.name}
                  className="w-7 h-7 rounded-full object-cover shrink-0"
                />
                <span className="hidden sm:inline text-sm font-medium text-[#1C231F] max-w-[120px] truncate">
                  {profile.name}
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Viewport */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 pb-24 lg:pb-12">
          {children}
        </main>
      </div>

      {/* Mobile Compact Bottom Navigation */}
      <nav
        className="no-print lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E2E5DE]"
        aria-label="Mobile navigation"
      >
        <div className="grid grid-cols-5 h-16">
          {mobileBottomItems.map((item) => {
            const Icon = item.icon;
            const isActive = normalizedActiveNav === item.route;
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => onNavigate(item.route)}
                className={`flex flex-col items-center justify-center gap-1 px-1 min-h-[44px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1F4E37] ${
                  isActive ? 'text-[#1F4E37]' : 'text-[#4A554E]'
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span className="text-[11px] font-medium leading-none truncate max-w-full">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
