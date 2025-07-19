import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**', // '**' is a wildcard that matches ANY domain
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
