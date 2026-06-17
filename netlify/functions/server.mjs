/**
 * Netlify SSR Adapter for TanStack Start (Cloudflare Workers build)
 *
 * The vite build produces dist/server/<bundle>.js with a Cloudflare Workers-style
 * default export: { fetch(request, env, ctx): Promise<Response> }
 *
 * Netlify invokes this file as a Node.js serverless function (event, context).
 * This adapter bridges the two.
 */

import { existsSync, readdirSync } from "fs";
import { join } from "path";

// --- Bundle discovery ---
// Netlify sets process.cwd() to the site root (repo root) at function runtime.
// The build puts the SSR bundle in dist/server/.
function findServerBundle() {
  const serverDir = join(process.cwd(), "dist", "server");
  // Try known filenames in priority order (Nitro emits .mjs)
  for (const name of ["index.mjs", "_worker.js", "index.js", "server.js", "server.mjs"]) {
    const p = join(serverDir, name);
    if (existsSync(p)) return p;
  }
  // Fallback: first top-level .mjs/.js entry in dist/server/
  try {
    const files = readdirSync(serverDir).filter(
      (f) => (f.endsWith(".mjs") || f.endsWith(".js")) && !f.endsWith(".map") && !f.startsWith("_")
    );
    if (files.length > 0) return join(serverDir, files[0]);
  } catch (_) {}
  return null;
}

let serverHandler = null;

async function getHandler() {
  if (serverHandler) return serverHandler;

  const bundlePath = findServerBundle();
  if (!bundlePath) {
    throw new Error(
      `SSR bundle not found. Looked in ${join(process.cwd(), "dist", "server")}. ` +
        `Make sure the build command ran and produced dist/server/*.js`
    );
  }

  console.log(`[SSR] Loading bundle: ${bundlePath}`);
  const mod = await import(bundlePath);

  // The Cloudflare Workers export shape is: export default { fetch }
  // Handle both: export default { fetch } and export default function / export { fetch }
  const candidate = mod.default?.fetch
    ? mod.default
    : typeof mod.default === "function"
    ? { fetch: mod.default }
    : mod.fetch
    ? mod
    : null;

  if (!candidate || typeof candidate.fetch !== "function") {
    throw new Error(
      `SSR bundle at ${bundlePath} did not export a { fetch } handler. ` +
        `Exports: ${Object.keys(mod).join(", ")}`
    );
  }

  serverHandler = candidate;
  return serverHandler;
}

// --- Netlify function handler ---
export const handler = async (event, context) => {
  let handler;
  try {
    handler = await getHandler();
  } catch (err) {
    console.error("[SSR] Failed to load server bundle:", err);
    return {
      statusCode: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
      body: `<h1>Server Error</h1><pre>${String(err.message)}</pre>`,
    };
  }

  // Build a Web API Request from the Netlify event
  const protocol =
    event.headers["x-forwarded-proto"] ||
    event.headers["X-Forwarded-Proto"] ||
    "https";
  const host =
    event.headers["host"] || event.headers["Host"] || "localhost";
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
    response = await handler.fetch(request, {}, ctx);
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
