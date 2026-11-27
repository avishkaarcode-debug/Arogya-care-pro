import { PhotoQualityRating } from '../types/agritech';

export interface PhotoQualityAssessment {
  rating: PhotoQualityRating;
  reasonKey: 'good' | 'fair' | 'poor';
  brightness: number;
  sharpness: number;
}

/**
 * Lightweight client-side image clarity & brightness check before sending to Gemini Vision.
 */
export async function assessLeafPhotoQuality(dataUrl: string): Promise<PhotoQualityAssessment> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      try {
        const sampleSize = 180;
        const scale = Math.min(1, sampleSize / Math.max(img.width, img.height));
        const w = Math.max(32, Math.round(img.width * scale));
        const h = Math.max(32, Math.round(img.height * scale));

        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve({ rating: 'Fair', reasonKey: 'fair', brightness: 120, sharpness: 12 });
          return;
        }

        ctx.drawImage(img, 0, 0, w, h);
        const { data } = ctx.getImageData(0, 0, w, h);

        const gray = new Float32Array(w * h);
        let sumLum = 0;
        for (let i = 0; i < w * h; i++) {
          const r = data[i * 4];
          const g = data[i * 4 + 1];
          const b = data[i * 4 + 2];
          const lum = 0.299 * r + 0.587 * g + 0.114 * b;
          gray[i] = lum;
          sumLum += lum;
        }

        const meanBrightness = sumLum / (w * h);

        // Compute Laplacian variance as a fast sharpness proxy
        let lapSum = 0;
        let lapSqSum = 0;
        let count = 0;
        for (let y = 1; y < h - 1; y++) {
          for (let x = 1; x < w - 1; x++) {
            const idx = y * w + x;
            const lap =
              gray[idx - 1] +
              gray[idx + 1] +
              gray[idx - w] +
              gray[idx + w] -
              4 * gray[idx];
            lapSum += lap;
            lapSqSum += lap * lap;
            count++;
          }
        }

        const lapMean = count > 0 ? lapSum / count : 0;
        const sharpnessVariance = count > 0 ? lapSqSum / count - lapMean * lapMean : 0;
        const sharpnessScore = Math.sqrt(Math.max(0, sharpnessVariance));

        // Classify rating conservatively
        if (meanBrightness < 48 || meanBrightness > 235 || sharpnessScore < 8.5) {
          resolve({
            rating: 'Poor',
            reasonKey: 'poor',
            brightness: Math.round(meanBrightness),
            sharpness: Math.round(sharpnessScore),
          });
          return;
        }

        if (meanBrightness >= 68 && meanBrightness <= 215 && sharpnessScore >= 14) {
          resolve({
            rating: 'Good',
            reasonKey: 'good',
            brightness: Math.round(meanBrightness),
            sharpness: Math.round(sharpnessScore),
          });
          return;
        }

        resolve({
          rating: 'Fair',
          reasonKey: 'fair',
          brightness: Math.round(meanBrightness),
          sharpness: Math.round(sharpnessScore),
        });
      } catch {
        resolve({ rating: 'Fair', reasonKey: 'fair', brightness: 120, sharpness: 12 });
      }
    };

    img.onerror = () => {
      resolve({ rating: 'Fair', reasonKey: 'fair', brightness: 120, sharpness: 12 });
    };

    img.src = dataUrl;
  });
}
