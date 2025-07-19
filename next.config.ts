import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '**', // '**' is a wildcard that matches ANY domain
      },
    ],
    unoptimized: true, // Disables Next.js image optimization to allow any source
    // WARNING: This removes many performance benefits
  },
};

export default nextConfig;
