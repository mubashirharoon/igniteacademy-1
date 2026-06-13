/**
 * Netlify SSR Adapter for TanStack Start
 *
 * Uses a static import so Netlify's esbuild bundler includes dist/server/server.js
 * and all its asset chunks in the function package. A dynamic process.cwd()-based
 * import is invisible to esbuild and leaves the bundle absent at Lambda runtime.
 *
 * dist/server/server.js exports: { default: { fetch(request, env, ctx): Promise<Response> } }
 */

import ssrServer from "../../dist/server/server.js";

// ssrServer is the Cloudflare Workers-style export: { fetch }
const cfHandler = ssrServer?.default ?? ssrServer;

// --- Netlify function handler ---
export const handler = async (event, _context) => {
  if (!cfHandler || typeof cfHandler.fetch !== "function") {
    return {
      statusCode: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
      body: "<h1>Server Error</h1><pre>SSR bundle did not export a fetch handler.</pre>",
    };
  }

  // Build a Web API Request from the Netlify event
  const protocol =
    event.headers["x-forwarded-proto"] ||
    event.headers["X-Forwarded-Proto"] ||
    "https";
  const host = event.headers["host"] || event.headers["Host"] || "localhost";
  const qs = event.rawQuery ? "?" + event.rawQuery : "";
  const url = `${protocol}://${host}${event.path}${qs}`;

  const reqInit = {
    method: event.httpMethod,
    headers: new Headers(event.headers),
  };

  if (
    event.body &&
    event.httpMethod !== "GET" &&
    event.httpMethod !== "HEAD"
  ) {
    reqInit.body = event.isBase64Encoded
      ? Buffer.from(event.body, "base64")
      : event.body;
  }

  const request = new Request(url, reqInit);

  let response;
  try {
    const ctx = { waitUntil: () => {}, passThroughOnException: () => {} };
    response = await cfHandler.fetch(request, {}, ctx);
  } catch (err) {
    console.error("[SSR] Handler threw:", err);
    return {
      statusCode: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
      body: "<h1>Internal Server Error</h1>",
    };
  }

  // Convert Web API Response → Netlify response
  const responseHeaders = {};
  response.headers.forEach((value, key) => {
    responseHeaders[key] = value;
  });

  const bodyBuffer = await response.arrayBuffer();
  const bodyBase64 = Buffer.from(bodyBuffer).toString("base64");

  return {
    statusCode: response.status,
    headers: responseHeaders,
    body: bodyBase64,
    isBase64Encoded: true,
  };
};
