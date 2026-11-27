import type { Handler, HandlerEvent } from '@netlify/functions';
import { detectCropFromLeaf } from '../../server/screeningService';

const JSON_HEADERS = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-store',
};

function parseJsonBody(event: HandlerEvent): Record<string, unknown> | null {
  if (!event.body) return {};
  try {
    const raw = event.isBase64Encoded
      ? Buffer.from(event.body, 'base64').toString('utf8')
      : event.body;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? (parsed as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        ...JSON_HEADERS,
        Allow: 'POST, OPTIONS',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        ...JSON_HEADERS,
        Allow: 'POST, OPTIONS',
      },
      body: JSON.stringify({
        error: 'METHOD_NOT_ALLOWED',
        message: 'Only POST requests are supported.',
      }),
    };
  }

  const parsedBody = parseJsonBody(event);
  if (parsedBody === null) {
    return {
      statusCode: 400,
      headers: JSON_HEADERS,
      body: JSON.stringify({
        error: 'INVALID_REQUEST_BODY',
        message: 'Invalid JSON request payload.',
      }),
    };
  }

  const result = await detectCropFromLeaf(parsedBody, process.env.GEMINI_API_KEY);
  return {
    statusCode: result.status,
    headers: JSON_HEADERS,
    body: JSON.stringify(result.body),
  };
};
