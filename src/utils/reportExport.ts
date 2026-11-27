import { getCropDisplayName } from '../data/crops';
import { getDiseaseDisplayName } from '../data/diseases';
import { formatLocalizedDate } from './storage';
import { TranslationBundle } from '../i18n/translations';
import { Language, SavedScan } from '../types/agritech';

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number {
  const words = text.split(/\s+/);
  let line = '';
  let currentY = y;

  for (let i = 0; i < words.length; i++) {
    const testLine = line ? `${line} ${words[i]}` : words[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = words[i];
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  if (line) {
    ctx.fillText(line, x, currentY);
    currentY += lineHeight;
  }
  return currentY;
}

export async function downloadFarmerSummaryImage(
  scan: SavedScan,
  language: Language,
  t: TranslationBundle
): Promise<void> {
  const canvas = document.createElement('canvas');
  const width = 1080;
  const height = 1320;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Warm off-white background
  ctx.fillStyle = '#F7F6F2';
  ctx.fillRect(0, 0, width, height);

  // Header band
  ctx.fillStyle = '#1F4E37';
  ctx.fillRect(0, 0, width, 132);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 38px Georgia, serif';
  ctx.fillText(t.brandName, 56, 62);

  ctx.fillStyle = '#D9E5DC';
  ctx.font = '20px sans-serif';
  ctx.fillText(t.tagline, 56, 98);

  // Main white card
  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = '#E2E5DE';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(48, 164, width - 96, height - 220, 20);
  ctx.fill();
  ctx.stroke();

  // Draw leaf thumbnail if available
  const img = new Image();
  img.crossOrigin = 'anonymous';
  await new Promise<void>((resolve) => {
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = scan.imageDataUrl;
  });

  if (img.width > 0 && img.height > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(84, 200, 320, 240, 14);
    ctx.clip();
    const ratio = Math.max(320 / img.width, 240 / img.height);
    const drawW = img.width * ratio;
    const drawH = img.height * ratio;
    ctx.drawImage(img, 84 + (320 - drawW) / 2, 200 + (240 - drawH) / 2, drawW, drawH);
    ctx.restore();
  }

  // Right side summary next to image
  const rightX = 436;
  const rightMaxW = width - rightX - 84;
  ctx.fillStyle = '#4A554E';
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText(t.result.heading, rightX, 228);

  const diseaseTitle = getDiseaseDisplayName(scan.result.possibleDisease, language, scan.crop);
  ctx.fillStyle = '#1C231F';
  ctx.font = 'bold 34px Georgia, serif';
  let cursorY = wrapText(ctx, diseaseTitle, rightX, 276, rightMaxW, 42);

  const cropLabel = getCropDisplayName(scan.crop, language);
  const severityLabel =
    scan.result.severity === 'High'
      ? t.common.high
      : scan.result.severity === 'Medium'
      ? t.common.medium
      : t.common.low;

  ctx.fillStyle = '#1F4E37';
  ctx.font = '600 22px sans-serif';
  cursorY += 12;
  ctx.fillText(
    `${t.common.crop}: ${cropLabel}  •  ${t.common.confidence}: ${scan.result.confidence}%`,
    rightX,
    cursorY
  );

  cursorY += 36;
  ctx.fillStyle =
    scan.result.severity === 'High'
      ? '#A8382B'
      : scan.result.severity === 'Medium'
      ? '#C86428'
      : '#1F4E37';
  ctx.fillText(`${t.common.severity}: ${severityLabel}`, rightX, cursorY);

  cursorY += 36;
  ctx.fillStyle = '#6A756E';
  ctx.font = '18px sans-serif';
  ctx.fillText(
    `${t.common.date}: ${formatLocalizedDate(scan.createdAt, language)}`,
    rightX,
    cursorY
  );

  // Divider
  let bodyY = 480;
  ctx.strokeStyle = '#E2E5DE';
  ctx.beginPath();
  ctx.moveTo(84, bodyY);
  ctx.lineTo(width - 84, bodyY);
  ctx.stroke();

  bodyY += 44;
  ctx.fillStyle = '#1F4E37';
  ctx.font = 'bold 24px sans-serif';
  ctx.fillText(t.result.immediateActions, 84, bodyY);
  bodyY += 36;

  ctx.fillStyle = '#1C231F';
  ctx.font = '21px sans-serif';
  const actions = scan.result.immediateActions.slice(0, 4);
  for (const action of actions) {
    bodyY = wrapText(ctx, `• ${action}`, 84, bodyY, width - 168, 30);
    bodyY += 8;
  }

  bodyY += 24;
  ctx.fillStyle = '#1F4E37';
  ctx.font = 'bold 24px sans-serif';
  ctx.fillText(t.result.preventionSteps, 84, bodyY);
  bodyY += 36;

  ctx.fillStyle = '#1C231F';
  ctx.font = '21px sans-serif';
  const preventions = scan.result.preventionSteps.slice(0, 3);
  for (const step of preventions) {
    bodyY = wrapText(ctx, `• ${step}`, 84, bodyY, width - 168, 30);
    bodyY += 8;
  }

  // Disclaimer footer box
  ctx.fillStyle = '#EEF2EC';
  ctx.beginPath();
  ctx.roundRect(84, height - 190, width - 168, 100, 12);
  ctx.fill();

  ctx.fillStyle = '#1C231F';
  ctx.font = '600 19px sans-serif';
  wrapText(ctx, t.common.disclaimer, 106, height - 146, width - 212, 28);

  const link = document.createElement('a');
  link.download = `arogya-care-pro-${scan.crop.toLowerCase()}-summary.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}
