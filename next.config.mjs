/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/app/assets/:path*',
      },
    ];
  },
};

export default nextConfig;
