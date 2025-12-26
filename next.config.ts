import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "codacoding.dev",
          },
        ],
        destination: "https://codacoding.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
