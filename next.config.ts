import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Trailing slashes for better GitHub Pages compatibility
  trailingSlash: true,

  experimental: {
    optimizePackageImports: ['@vritti/quantum-ui', 'lucide-react'],
  },

  typescript: {
    // Allow production builds to succeed even if there are type errors
    ignoreBuildErrors: false,
  },

  eslint: {
    // Allow production builds to succeed even if there are ESLint errors
    // TODO: Fix ESLint errors and set back to false
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
