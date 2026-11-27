export function getAnalyzeEndpoint(): string {
  return import.meta.env.PROD ? '/.netlify/functions/analyze' : '/api/analyze';
}

export function getDetectCropEndpoint(): string {
  return import.meta.env.PROD ? '/.netlify/functions/detect-crop' : '/api/detect-crop';
}

export function getTranslateEndpoint(): string {
  return import.meta.env.PROD ? '/.netlify/functions/translate' : '/api/translate';
}
