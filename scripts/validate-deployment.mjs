#!/usr/bin/env node
/**
 * Deployment validation for Netlify SSR.
 *
 * Verifies that:
 *   1. `npm run build` produced the expected client + server output
 *   2. The SSR bundle entry exists and exports a `fetch` handler
 *   3. The Netlify adapter function exists
 *   4. netlify.toml is configured to include the SSR bundle in the function package
 *
 * Exits non-zero (failing the build) if any check fails.
 * Run via:  node scripts/validate-deployment.mjs
 */

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const errors = [];
const warnings = [];
const ok = [];

function fail(msg) { errors.push(msg); }
function warn(msg) { warnings.push(msg); }
function pass(msg) { ok.push(msg); }

// --- 1. Client build output ---
const clientDir = join(root, "dist", "client");
if (!existsSync(clientDir) || !statSync(clientDir).isDirectory()) {
  fail(`Missing client build output: dist/client/ (did 'npm run build' run?)`);
} else {
  const clientFiles = readdirSync(clientDir);
  if (clientFiles.length === 0) {
    fail(`dist/client/ is empty`);
  } else {
    pass(`dist/client/ exists (${clientFiles.length} entries)`);
  }
}

// --- 2. Server bundle output ---
const serverDir = join(root, "dist", "server");
let serverEntry = null;
if (!existsSync(serverDir) || !statSync(serverDir).isDirectory()) {
  fail(`Missing SSR bundle directory: dist/server/`);
} else {
  const candidates = ["index.mjs", "_worker.js", "index.js", "server.js", "server.mjs"];
  for (const name of candidates) {
    const p = join(serverDir, name);
    if (existsSync(p)) { serverEntry = p; break; }
  }
  if (!serverEntry) {
    const fallback = readdirSync(serverDir).filter(
      (f) => (f.endsWith(".mjs") || f.endsWith(".js")) && !f.endsWith(".map") && !f.startsWith("_")
    );
    if (fallback.length > 0) serverEntry = join(serverDir, fallback[0]);
  }

  if (!serverEntry) {
    fail(
      `No SSR entry found in dist/server/. Looked for: index.mjs, _worker.js, index.js, server.js, server.mjs`
    );
  } else {
    pass(`SSR bundle entry: ${serverEntry.replace(root + "/", "")}`);
  }
}

// --- 3. SSR bundle exports a fetch handler ---
if (serverEntry) {
  try {
    const mod = await import(pathToFileURL(serverEntry).href);
    const handler = mod.default?.fetch
      ? mod.default
      : typeof mod.default === "function"
      ? { fetch: mod.default }
      : mod.fetch
      ? mod
      : null;
    if (!handler || typeof handler.fetch !== "function") {
      fail(
        `SSR bundle does not export a { fetch } handler. ` +
          `Exports: ${Object.keys(mod).join(", ") || "(none)"}`
      );
    } else {
      pass(`SSR bundle exports a valid fetch handler`);
    }
  } catch (err) {
    fail(`Failed to import SSR bundle (${serverEntry}): ${err?.message || err}`);
  }
}

// --- 4. Netlify adapter function exists ---
const adapter = join(root, "netlify", "functions", "server.mjs");
if (!existsSync(adapter)) {
  fail(`Missing Netlify adapter: netlify/functions/server.mjs`);
} else {
  pass(`Netlify adapter present: netlify/functions/server.mjs`);
}

// --- 5. netlify.toml includes the SSR bundle ---
const tomlPath = join(root, "netlify.toml");
if (!existsSync(tomlPath)) {
  fail(`Missing netlify.toml at project root`);
} else {
  const toml = readFileSync(tomlPath, "utf8");
  if (!/\[functions\]/.test(toml)) {
    fail(`netlify.toml missing [functions] section`);
  }
  if (!/included_files\s*=\s*\[[^\]]*["']dist\/server\/\*\*["']/.test(toml)) {
    fail(
      `netlify.toml [functions] is missing included_files = ["dist/server/**"]. ` +
        `Without this, the SSR bundle is not packaged into the function and runtime ` +
        `will fail with "SSR bundle not found".`
    );
  } else {
    pass(`netlify.toml includes "dist/server/**" in function package`);
  }
  if (!/to\s*=\s*["']\/\.netlify\/functions\/server["']/.test(toml)) {
    warn(`netlify.toml has no redirect to /.netlify/functions/server — SSR may not be routed`);
  } else {
    pass(`netlify.toml routes traffic to /.netlify/functions/server`);
  }
}

// --- Report ---
const line = "─".repeat(60);
console.log(`\n${line}\nDeployment validation\n${line}`);
for (const m of ok) console.log(`  ✓ ${m}`);
for (const m of warnings) console.log(`  ⚠ ${m}`);
for (const m of errors) console.log(`  ✗ ${m}`);
console.log(line);

if (errors.length > 0) {
  console.error(`\nDeployment validation FAILED with ${errors.length} error(s).\n`);
  process.exit(1);
}
console.log(`\nDeployment validation passed.\n`);
