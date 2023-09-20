/** @type {import('next').NextConfig} */

const nextConfig = {
        reactStrictMode: true, 
        images: {
          domains: ['res.cloudinary.com'],
        },
        env: {
          API_URL : 'https://cubuild.onrender.com/api/v1',
        }
}

module.exports = nextConfig;
