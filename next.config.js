/** @type {import('next').NextConfig} */
const nextConfig = {
//   distDir: "build",
  output:'standalone',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
