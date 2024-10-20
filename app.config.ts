export default defineAppConfig({
  title: '_subcode Links',
  description: 'Simple link shortener.',
  image: 'https://soillink.app/logo.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
