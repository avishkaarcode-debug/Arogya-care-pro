export type Language = 'en' | 'te' | 'hi';

export type CropType = 'Tomato' | 'Chili' | 'Potato' | 'Rice' | 'Cotton' | 'Maize';

export const SUPPORTED_CROPS: CropType[] = [
  'Tomato',
  'Chili',
  'Potato',
  'Rice',
  'Cotton',
  'Maize',
];

export type SupportedDisease =
  // Tomato
  | 'Early Blight'
  | 'Late Blight'
  | 'Leaf Mold'
  // Chili
  | 'Leaf Curl'
  | 'Powdery Mildew'
  | 'Anthracnose'
  // Potato (shares Early Blight & Late Blight)
  | 'Leaf Roll'
  // Rice
  | 'Rice Blast'
  | 'Bacterial Leaf Blight'
  | 'Brown Spot'
  // Cotton
  | 'Cotton Leaf Curl'
  | 'Bacterial Blight'
  | 'Alternaria Leaf Spot'
  // Maize
  | 'Northern Corn Leaf Blight'
  | 'Common Rust'
  | 'Gray Leaf Spot'
  // Fallback
  | 'Unable to assess reliably';

export type SeverityLevel = 'Low' | 'Medium' | 'High';

export type CropMatchStatus = 'matched' | 'mismatch';

export type LeafAge = 'young' | 'mature' | 'unknown';

export type VisibleSymptom = 'spots' | 'curling' | 'yellowing' | 'white_powder' | 'unknown';

export type PhotoQualityRating = 'Good' | 'Fair' | 'Poor';

export type GuidanceFeedbackOption = 'helpful' | 'unsure' | 'needs_correction';

export type AppRoute =
  | 'overview'
  | 'scan'
  | 'result'
  | 'history'
  | 'insights'
  | 'knowledge'
  | 'settings';

export interface TranslatedGuidanceFields {
  imageQuality: string;
  symptomsObserved: string[];
  likelyCause: string;
  immediateActions: string[];
  preventionSteps: string[];
  expertHelpAdvice: string;
  disclaimer: string;
}

export interface ScanAnalysisResult extends TranslatedGuidanceFields {
  possibleDisease: SupportedDisease;
  confidence: number;
  severity: SeverityLevel;
  cropMatchStatus?: CropMatchStatus;
  detectedCropSuggestion?: CropType | null;
}

export interface CropDetectionResponse {
  suggestedCrop: CropType | 'Unsupported';
  reason: string;
}

export interface CropSupportRequest {
  id: string;
  cropName: string;
  regionNote: string;
  createdAt: string;
}

export interface SavedScan {
  id: string;
  createdAt: string;
  crop: CropType;
  leafAge: LeafAge;
  visibleSymptom: VisibleSymptom;
  notes: string;
  imageDataUrl: string;
  languageAtScan: Language;
  result: ScanAnalysisResult;
  translations?: Partial<Record<Language, TranslatedGuidanceFields>>;
  feedback?: GuidanceFeedbackOption;
  isDemo?: boolean;
}

export interface FarmerProfile {
  name: string;
  language: Language;
  regionNote: string;
}

export interface LocalizedText {
  en: string;
  te: string;
  hi: string;
}

export interface LocalizedList {
  en: string[];
  te: string[];
  hi: string[];
}

export interface DiseaseGuide {
  id: SupportedDisease;
  crop: CropType;
  name: LocalizedText;
  summary: LocalizedText;
  simpleSummary: LocalizedText;
  symptoms: LocalizedList;
  simpleSymptoms: LocalizedList;
  likelyCause: LocalizedText;
  simpleLikelyCause: LocalizedText;
  prevention: LocalizedList;
  simplePrevention: LocalizedList;
  safeActions: LocalizedList;
  simpleSafeActions: LocalizedList;
  whenToSeekHelp: LocalizedText;
  simpleWhenToSeekHelp: LocalizedText;
}

export interface SeasonalChecklistItem {
  id: string;
  crop: CropType;
  label: LocalizedText;
}
