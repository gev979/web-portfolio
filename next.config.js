/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EMAIL: process.env.EMAIL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
