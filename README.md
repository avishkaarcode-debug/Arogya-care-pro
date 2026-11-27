# Arogya Care Pro

AI-assisted multilingual crop disease screening and practical recommendation platform built for **AVISHKAAR Season 4 Virtual Hackathon**.

## Project Links

- **Live Demo:** https://arogya-care-pro.netlify.app
- **Evidence Folder:** https://drive.google.com/drive/folders/1PlVNAbCvU-W-qnlIQJs1fIUYB0EKxx7t?usp=sharing

## Problem Statement

**AG-03 — Multilingual Crop Disease Management Recommendation System**

Farmers may not receive timely, clear, or language-accessible crop-health guidance. Arogya Care Pro helps farmers upload a crop-leaf photo, receive an AI-assisted possible disease screening, and understand practical next steps in their preferred language.

## Features

- Crop-leaf image upload and AI-assisted possible-disease screening
- Supported crops: Tomato, Chili, Potato, Rice, Cotton, and Maize
- English, Telugu, and Hindi interface and guidance
- Manual crop selection and crop-mismatch validation
- Auto-detect crop suggestion (Beta), with farmer confirmation
- Photo-quality guidance before analysis
- Possible symptoms, causes, prevention, and safe next-step guidance
- Persistent scan history using browser localStorage
- Crop insights generated from saved scan history
- Knowledge Hub for supported crop conditions
- Farmer-friendly safety and privacy guidance

## How It Works

1. Select one supported crop or use Auto-detect Crop (Beta).
2. Upload a clear photo of a single crop leaf.
3. Review photo quality and submit the image for analysis.
4. View the possible condition, confidence estimate, severity guidance, and recommended next steps.
5. Save the scan and revisit it through Scan History.

## Supported Crops and Conditions

| Crop | Supported Conditions |
|---|---|
| Tomato | Early Blight, Late Blight, Leaf Mold |
| Chili | Leaf Curl, Powdery Mildew, Anthracnose |
| Potato | Early Blight, Late Blight, Leaf Roll |
| Rice | Rice Blast, Bacterial Leaf Blight, Brown Spot |
| Cotton | Cotton Leaf Curl, Bacterial Blight, Alternaria Leaf Spot |
| Maize | Northern Corn Leaf Blight, Common Rust, Gray Leaf Spot |

## Technology Stack

- React
- TypeScript
- Vite
- Netlify Functions
- Gemini Vision API for image analysis
- Browser localStorage for local scan history and preferences

## Local Setup

```bash
npm install
npm run dev
```

For deployed Netlify screening, add `GEMINI_API_KEY` in the Netlify project’s **Keys and secrets** settings. Never add API keys to this repository.

## Important Disclaimer

Arogya Care Pro provides **possible disease predictions**, not confirmed diagnoses. Results are informational and serious crop issues should be verified with a qualified agriculture expert.

The application supports only the crops and conditions listed above. It should identify unsupported crops rather than inventing a disease result.

## Hackathon Submission

- Problem statement: **AG-03 — Multilingual Crop Disease Management Recommendation System**
- Source code: public GitHub repository
- Live demo: Netlify deployment
- Supporting screenshots and demo evidence: public Google Drive folder
