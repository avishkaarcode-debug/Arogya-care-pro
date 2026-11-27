import { CropType, Language, SupportedDisease } from '../types/agritech';

export interface CropCatalogEntry {
  id: CropType;
  imagePath: string;
  supportedDiseases: SupportedDisease[];
}

export const CROP_CATALOG: CropCatalogEntry[] = [
  {
    id: 'Tomato',
    imagePath: '/src/assets/images/crop_tomato_healthy_1795764746610.jpg',
    supportedDiseases: ['Early Blight', 'Late Blight', 'Leaf Mold'],
  },
  {
    id: 'Chili',
    imagePath: '/src/assets/images/crop_chili_healthy_1795764748263.jpg',
    supportedDiseases: ['Leaf Curl', 'Powdery Mildew', 'Anthracnose'],
  },
  {
    id: 'Potato',
    imagePath: '/src/assets/images/crop_potato_healthy_1795769101757.jpg',
    supportedDiseases: ['Early Blight', 'Late Blight', 'Leaf Roll'],
  },
  {
    id: 'Rice',
    imagePath: '/src/assets/images/crop_rice_healthy_1795769101870.jpg',
    supportedDiseases: ['Rice Blast', 'Bacterial Leaf Blight', 'Brown Spot'],
  },
  {
    id: 'Cotton',
    imagePath: '/src/assets/images/crop_cotton_healthy_1795769102497.jpg',
    supportedDiseases: ['Cotton Leaf Curl', 'Bacterial Blight', 'Alternaria Leaf Spot'],
  },
  {
    id: 'Maize',
    imagePath: '/src/assets/images/crop_maize_healthy_1795769102538.jpg',
    supportedDiseases: ['Northern Corn Leaf Blight', 'Common Rust', 'Gray Leaf Spot'],
  },
];

export const CROP_LABELS: Record<CropType, Record<Language, string>> = {
  Tomato: { en: 'Tomato', te: 'టమాటా', hi: 'टमाटर' },
  Chili: { en: 'Chili', te: 'మిరప', hi: 'मिर्च' },
  Potato: { en: 'Potato', te: 'బంగాళదుంప', hi: 'आलू' },
  Rice: { en: 'Rice', te: 'వరి', hi: 'धान' },
  Cotton: { en: 'Cotton', te: 'పత్తి', hi: 'कपास' },
  Maize: { en: 'Maize', te: 'మొక్కజొన్న', hi: 'मक्का' },
};

export function getCropDisplayName(crop: CropType, language: Language): string {
  return CROP_LABELS[crop]?.[language] ?? crop;
}
