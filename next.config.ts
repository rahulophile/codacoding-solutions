import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "http://codacoding.dev/:path*",
        destination: "https://codacoding.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
