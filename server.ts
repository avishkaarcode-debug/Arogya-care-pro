import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import {
  analyzeCropLeaf,
  detectCropFromLeaf,
  translateGuidance,
} from './server/screeningService';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;

async function startServer() {
  const app = express();

  app.use(express.json({ limit: '16mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({
      ok: true,
      geminiConfigured: Boolean(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim().length > 0),
    });
  });

  const handleDetectCrop: express.RequestHandler = async (req, res) => {
    const result = await detectCropFromLeaf(req.body, process.env.GEMINI_API_KEY);
    res.status(result.status).json(result.body);
  };

  const handleAnalyze: express.RequestHandler = async (req, res) => {
    const result = await analyzeCropLeaf(req.body, process.env.GEMINI_API_KEY);
    res.status(result.status).json(result.body);
  };

  const handleTranslate: express.RequestHandler = async (req, res) => {
    const result = await translateGuidance(req.body, process.env.GEMINI_API_KEY);
    res.status(result.status).json(result.body);
  };

  app.post('/api/detect-crop', handleDetectCrop);
  app.post('/.netlify/functions/detect-crop', handleDetectCrop);

  app.post('/api/analyze', handleAnalyze);
  app.post('/.netlify/functions/analyze', handleAnalyze);

  app.post('/api/translate', handleTranslate);
  app.post('/.netlify/functions/translate', handleTranslate);

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      const indexPath = path.join(distDir, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).send('Build output not found. Run npm run build first.');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Arogya Care Pro server listening on http://localhost:${PORT}`);
  });
}

startServer();
