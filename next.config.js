/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com',
          },
          {
            protocol: 'https',
            hostname: '4wqlelucdhof1fxg.public.blob.vercel-storage.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
