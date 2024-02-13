/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'developers.elementor.com',
          },
        ],
    },
};

export default nextConfig;
