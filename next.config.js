/** @type {import('next').NextConfig} */

const nextConfig = {
        reactStrictMode: true, 
        images: {
          domains: ['res.cloudinary.com'],
        },
        env: {
          API_URL : 'https://api.cubuild.net/api/v1',
        }
}

module.exports = nextConfig;
