import { CropType, SavedScan, SupportedDisease } from '../types/agritech';

export const SUPPORTED_DISEASES_BY_CROP: Record<CropType, SupportedDisease[]> = {
  Tomato: ['Early Blight', 'Late Blight', 'Leaf Mold'],
  Chili: ['Leaf Curl', 'Powdery Mildew', 'Anthracnose'],
  Potato: ['Early Blight', 'Late Blight', 'Leaf Roll'],
  Rice: ['Rice Blast', 'Bacterial Leaf Blight', 'Brown Spot'],
  Cotton: ['Cotton Leaf Curl', 'Bacterial Blight', 'Alternaria Leaf Spot'],
  Maize: ['Northern Corn Leaf Blight', 'Common Rust', 'Gray Leaf Spot'],
};

const ALL_DISEASE_TERMS = Array.from(
  new Set(Object.values(SUPPORTED_DISEASES_BY_CROP).flat())
).map((d) => d.toLowerCase());

const OTHER_CROP_NAMES_BY_CROP: Record<CropType, string[]> = {
  Tomato: ['chili', 'chilli', 'potato', 'rice', 'paddy', 'cotton', 'maize', 'corn'],
  Chili: ['tomato', 'potato', 'rice', 'paddy', 'cotton', 'maize', 'corn'],
  Potato: ['tomato', 'chili', 'chilli', 'rice', 'paddy', 'cotton', 'maize', 'corn'],
  Rice: ['tomato', 'chili', 'chilli', 'potato', 'cotton', 'maize', 'corn'],
  Cotton: ['tomato', 'chili', 'chilli', 'potato', 'rice', 'paddy', 'maize', 'corn'],
  Maize: ['tomato', 'chili', 'chilli', 'potato', 'rice', 'paddy', 'cotton'],
};

function containsWholeTerm(text: string, term: string): boolean {
  const escaped = term.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (!escaped) return false;
  return new RegExp(`(?:^|[^a-z])${escaped}(?:$|[^a-z])`, 'i').test(text);
}

export interface ValidatedScanView {
  isInconclusive: boolean;
  isCropMismatch: boolean;
  isConsistent: boolean;
  disease: SupportedDisease;
  confidence: number;
  suggestedCrop: CropType | null;
}

export function isScanInconclusive(scan: SavedScan): boolean {
  return (
    scan.result.cropMatchStatus === 'mismatch' ||
    scan.result.possibleDisease === 'Unable to assess reliably' ||
    scan.result.confidence < 40
  );
}

export function validateScanConsistency(scan: SavedScan): ValidatedScanView {
  if (scan.result.cropMatchStatus === 'mismatch') {
    return {
      isInconclusive: true,
      isCropMismatch: true,
      isConsistent: true,
      disease: 'Unable to assess reliably',
      confidence: 0,
      suggestedCrop: scan.result.detectedCropSuggestion ?? null,
    };
  }

  if (isScanInconclusive(scan)) {
    return {
      isInconclusive: true,
      isCropMismatch: false,
      isConsistent: true,
      disease: 'Unable to assess reliably',
      confidence: Math.min(scan.result.confidence, 39),
      suggestedCrop: null,
    };
  }

  const allowedDiseases = SUPPORTED_DISEASES_BY_CROP[scan.crop];
  if (!allowedDiseases || !allowedDiseases.includes(scan.result.possibleDisease)) {
    return {
      isInconclusive: true,
      isCropMismatch: false,
      isConsistent: false,
      disease: 'Unable to assess reliably',
      confidence: 0,
      suggestedCrop: null,
    };
  }

  const currentDiseaseLower = scan.result.possibleDisease.toLowerCase();
  const maskCurrent = (text: string) => text.split(currentDiseaseLower).join(' ');

  const combinedAllMasked = maskCurrent(
    [
      ...scan.result.symptomsObserved,
      scan.result.likelyCause,
      ...scan.result.immediateActions,
      ...scan.result.preventionSteps,
      scan.result.expertHelpAdvice,
    ]
      .join(' ')
      .toLowerCase()
  );

  const diagnosisOnlyMasked = maskCurrent(
    [...scan.result.symptomsObserved, scan.result.likelyCause]
      .join(' ')
      .toLowerCase()
  );

  const allowedLower = new Set(allowedDiseases.map((d) => d.toLowerCase()));
  const forbiddenDiseases = ALL_DISEASE_TERMS.filter((term) => !allowedLower.has(term));

  for (const term of forbiddenDiseases) {
    if (containsWholeTerm(combinedAllMasked, term)) {
      return {
        isInconclusive: true,
        isCropMismatch: false,
        isConsistent: false,
        disease: 'Unable to assess reliably',
        confidence: 0,
        suggestedCrop: null,
      };
    }
  }

  const forbiddenCropTerms = OTHER_CROP_NAMES_BY_CROP[scan.crop] ?? [];
  for (const cropTerm of forbiddenCropTerms) {
    if (containsWholeTerm(diagnosisOnlyMasked, cropTerm)) {
      return {
        isInconclusive: true,
        isCropMismatch: false,
        isConsistent: false,
        disease: 'Unable to assess reliably',
        confidence: 0,
        suggestedCrop: null,
      };
    }
  }

  const otherDiseases = allowedDiseases.filter((d) => d !== scan.result.possibleDisease);
  for (const otherDisease of otherDiseases) {
    if (containsWholeTerm(diagnosisOnlyMasked, otherDisease.toLowerCase())) {
      return {
        isInconclusive: true,
        isCropMismatch: false,
        isConsistent: false,
        disease: 'Unable to assess reliably',
        confidence: 0,
        suggestedCrop: null,
      };
    }
  }

  return {
    isInconclusive: false,
    isCropMismatch: false,
    isConsistent: true,
    disease: scan.result.possibleDisease,
    confidence: scan.result.confidence,
    suggestedCrop: null,
  };
}
