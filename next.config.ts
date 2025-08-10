import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL("https://static.exercisedb.dev/**")],
  },
};

export default nextConfig;
