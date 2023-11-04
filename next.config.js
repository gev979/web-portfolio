/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EMAIL: process.env.EMAIL,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
