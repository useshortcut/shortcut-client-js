/** Preserve pre-v4 reference URLs and fail the docs build if an entrypoint is missing. */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [outDir = 'docs'] = process.argv.slice(2);

for (const page of [
  'modules/v3.html',
  'modules/v4.html',
  'modules/webhooks.html',
  'classes/v3.ShortcutClient.html',
  'classes/v4.ShortcutV4Client.html',
  'classes/v4.ShortcutOAuth.html',
  'classes/webhooks.ShortcutWebhookClient.html',
]) {
  if (!existsSync(join(outDir, page))) {
    throw new Error(`Missing API reference: ${page}`);
  }
}

// The old single-entrypoint build omitted the module prefix. Every v3 page
// therefore has an equivalent legacy path, including interfaces and aliases.
let redirects = 0;
for (const entry of readdirSync(outDir, {
  recursive: true,
  withFileTypes: true,
})) {
  if (!entry.isFile() || !/^v3\..+\.html$/.test(entry.name)) continue;
  const legacyPath = join(entry.parentPath, entry.name.slice('v3.'.length));
  const target = encodeURIComponent(entry.name);
  // Preserve method anchors and query strings; the meta refresh/link also
  // provide a destination for readers who have JavaScript disabled.
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>API reference moved</title>
<link rel="canonical" href="${target}">
<script>location.replace(${JSON.stringify(target)} + location.search + location.hash);</script>
<meta http-equiv="refresh" content="0; url=${target}">
</head>
<body><a href="${target}">Continue to the API reference</a></body>
</html>
`;
  if (existsSync(legacyPath) && readFileSync(legacyPath, 'utf8') !== html) {
    throw new Error(`Refusing to overwrite an API reference: ${legacyPath}`);
  }
  writeFileSync(legacyPath, html);
  redirects += 1;
}
if (redirects === 0) throw new Error('No legacy v3 reference URLs were found');
console.log(
  `Verified all API entrypoints; preserved ${redirects} v3 reference URLs`,
);
