import type { NextConfig } from "next";

/**
 * Next.js configuration for VoteWise
 * Optimized for Google Cloud Run deployment with standalone output
 */
const nextConfig: NextConfig = {
  // Standalone output for optimized Docker container on Cloud Run
  output: "standalone",

  // Image optimization settings
  images: {
    // Cloud Run has ephemeral storage; use unoptimized for simplicity
    unoptimized: true,
  },

  // Security headers for all routes
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security: Prevent clickjacking attacks
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Security: Prevent MIME type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Security: Control referrer information
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Security: Permissions policy for browser features
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
          },
          // Security: Strict Transport Security
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
