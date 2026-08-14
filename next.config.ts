import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.sugoai.com" }],
        destination: "https://sugoai.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
