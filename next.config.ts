/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedDevOrigins: ['127.0.0.1:3000', '0.0.0.0:3000', 'localhost:3000']
  }
};

export default nextConfig;
