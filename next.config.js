/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Important: disable any experimental options that could cause issues
  experimental: {}
};

module.exports = nextConfig; 