/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY_NEWS: process.env.API_KEY_NEWS
  }
}

module.exports = nextConfig
