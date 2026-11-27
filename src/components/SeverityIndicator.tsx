import { AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { TranslationBundle } from '../i18n/translations';
import { SeverityLevel } from '../types/agritech';

interface SeverityIndicatorProps {
  severity: SeverityLevel;
  t: TranslationBundle;
  compact?: boolean;
}

export function SeverityIndicator({ severity, t, compact = false }: SeverityIndicatorProps) {
  const label =
    severity === 'High'
      ? t.common.high
      : severity === 'Medium'
      ? t.common.medium
      : t.common.low;

  if (severity === 'High') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 font-medium text-[#A8382B] bg-[#FDF2F0] border border-[#F3D0CA] rounded-lg whitespace-nowrap shrink-0 ${
          compact ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
        }`}
      >
        <ShieldAlert className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>
          {label} {compact ? '' : t.result.riskLabelSuffix}
        </span>
      </span>
    );
  }

  if (severity === 'Medium') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 font-medium text-[#A14B18] bg-[#FDF6EE] border border-[#F2DCC4] rounded-lg whitespace-nowrap shrink-0 ${
          compact ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
        }`}
      >
        <AlertTriangle className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>
          {label} {compact ? '' : t.result.riskLabelSuffix}
        </span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium text-[#1F4E37] bg-[#EEF2EC] border border-[#D4DFD1] rounded-lg whitespace-nowrap shrink-0 ${
        compact ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
      }`}
    >
      <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span>
        {label} {compact ? '' : t.result.riskLabelSuffix}
      </span>
    </span>
  );
}
