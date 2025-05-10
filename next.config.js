/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true, // Required for static export
  },
  // Set output to export for static site generation
  output: 'export',
  // Disable trailing slashes to match Netlify routing
  trailingSlash: false,
  // Disable image optimization for static export
  experimental: {
    images: {
      allowFutureImage: true
    }
  }
};

module.exports = nextConfig; 