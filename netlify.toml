[build]
  command = "npm run build"
  publish = "dist/client"

[functions]
  # SOURCE directory for Netlify function files (NOT the build output).
  # The adapter at netlify/functions/server.mjs wraps the SSR bundle.
  directory = "netlify/functions"
  node_bundler = "esbuild"

# Route all requests to the SSR function.
# Static files in dist/client are served directly (Netlify does this automatically
# for the publish directory before evaluating redirects).
[[redirects]]
  from = "/*"
  to = "/.netlify/functions/server"
  status = 200
  force = false
