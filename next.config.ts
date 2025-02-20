/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  i18n: {
    locales: ['en', 'es', 'fr', 'de', 'zh', 'ja', 'ar', 'ru', 'pt', 'hi', 'ko', 'it'],
    defaultLocale: 'en',
  },
}
 
module.exports = nextConfig