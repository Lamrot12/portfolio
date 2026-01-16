/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Image optimization configuration
  images: {
    domains: ['images.unsplash.com'],
  },
  // Webpack configuration
  webpack: (config) => {
    return config;
  },
  // Environment variables
  env: {
    // Add your environment variables here
  },
};

export default nextConfig;
