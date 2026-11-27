# Arogya Care Pro

AI-assisted multilingual crop disease screening and recommendation platform built for **AVISHKAAR Season 4 Virtual Hackathon**.

## Problem Statement

**AG-03 — Multilingual Crop Disease Management Recommendation System**

Farmers may struggle to obtain timely, understandable crop-disease guidance. Arogya Care Pro helps farmers screen crop-leaf images, understand possible issues, and receive practical next steps in their preferred language.

## Features

- Crop-leaf image upload and AI-assisted possible-disease screening
- Supported crops: Tomato, Chili, Potato, Rice, Cotton, and Maize
- English, Telugu, and Hindi interface and guidance
- Crop selection and crop-mismatch validation
- Auto-detect crop suggestion (Beta), with farmer confirmation
- Photo-quality guidance before analysis
- Symptoms, possible causes, prevention, and safe next-step guidance
- Persistent scan history using browser localStorage
- Crop insights generated from saved scan history
- Knowledge Hub for supported crop conditions
- Farmer-friendly safety and privacy guidance

## Important Disclaimer

Arogya Care Pro provides **possible disease predictions**, not confirmed diagnoses. Results are informational and should be verified with a qualified agriculture expert for serious crop issues.

The app does not claim to diagnose every crop or every plant disease. Unsupported crops are clearly identified instead of receiving a fabricated diagnosis.

## Technology Stack

- React
- TypeScript
- Vite
- Node.js server runtime
- Gemini Vision API for image analysis
- Browser localStorage for local scan history and preferences

## How It Works

1. Select a supported crop or use Auto-detect Crop (Beta).
2. Upload a clear photo of one crop leaf.
3. Review image quality and submit for analysis.
4. View a possible-disease result, confidence level, severity, and safe guidance.
5. Save the scan and revisit it in Scan History.

## Supported Crops

| Crop | Supported Conditions |
|---|---|
| Tomato | Early Blight, Late Blight, Leaf Mold |
| Chili | Leaf Curl, Powdery Mildew, Anthracnose |
| Potato | Early Blight, Late Blight, Leaf Roll |
| Rice | Rice Blast, Bacterial Leaf Blight, Brown Spot |
| Cotton | Cotton Leaf Curl, Bacterial Blight, Alternaria Leaf Spot |
| Maize | Northern Corn Leaf Blight, Common Rust, Gray Leaf Spot |

## Local Setup

```bash
npm install
npm run dev

<!-- Netlify redeploy -->
