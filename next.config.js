/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'lh3.googleusercontent.com'
    ],
    // domains: ['lh3.googleusercontent.com'],
    

    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'firebasestorage.googleapis.com',
    //     port: '',
    //     pathname: '/v0/b/th3-hackathon.appspot.com/**',
    //   },
    // ],

    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'lh3.googleusercontent.com',
    //     port: '',
    //     pathname: '/a/**',
    //   },
    // ],
    
    
    eslint: {
      ignoreDuringBuilds: true,
    },
  },
  
}

module.exports = nextConfig
