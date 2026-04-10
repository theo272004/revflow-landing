/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/revflow-landing',
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
}

export default nextConfig
