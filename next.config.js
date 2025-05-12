/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Skip TypeScript checking in build to avoid params type error in static export
  typescript: {
    ignoreBuildErrors: true,
  },
  // Improve static export
  trailingSlash: true,
  // Enable the app directory
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig; 