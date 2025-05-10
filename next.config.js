/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true, // For static export compatibility
  },
  // Enabling static exports for Netlify
  output: 'export',
  // Setting a basePath in case the site is not deployed at the root
  // basePath: '',
  // Disable trailing slashes to match with Netlify routing
  trailingSlash: false,
};

module.exports = nextConfig; 