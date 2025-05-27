/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ⛔ Tắt kiểm tra eslint khi build production
  },
  typescript: {
    ignoreBuildErrors: true, // ⛔ Tắt kiểm tra lỗi TS khi build
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig 