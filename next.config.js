/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com'
    ],
    // domains: ['lh3.googleusercontent.com'],

    eslint: {
      ignoreDuringBuilds: true,
    },
    
    
  },
  
}

module.exports = nextConfig
