import server from "../../dist/server/server.js";

function buildRequest(event) {
  const protocol = event.headers?.["x-forwarded-proto"] ?? "https";
  const host =
    event.headers?.["x-forwarded-host"] ??
    event.headers?.["host"] ??
    "localhost";

  let url = `${protocol}://${host}${event.path}`;

  if (event.multiValueQueryStringParameters) {
    const params = new URLSearchParams();
    for (const [key, values] of Object.entries(
      event.multiValueQueryStringParameters
    )) {
      for (const value of values ?? []) {
        params.append(key, value);
      }
    }
    const qs = params.toString();
    if (qs) url += `?${qs}`;
  }

  const headers = new Headers();
  for (const [key, value] of Object.entries(event.headers ?? {})) {
    if (value != null) headers.set(key, value);
  }

  const init = { method: event.httpMethod, headers };
  if (event.body) {
    init.body = event.isBase64Encoded
      ? Buffer.from(event.body, "base64")
      : event.body;
  }

  return new Request(url, init);
}

export const handler = async (event) => {
  const request = buildRequest(event);
  const response = await server.fetch(request, {}, {});

  const arrayBuffer = await response.arrayBuffer();
  const body = Buffer.from(arrayBuffer).toString("base64");

  const headers = {};
  for (const [key, value] of response.headers.entries()) {
    headers[key] = value;
  }

  return {
    statusCode: response.status,
    headers,
    body,
    isBase64Encoded: true,
  };
};
