import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // // Eslint does not work in nextconfig
  // // eslint: {
  // //   ignoreDuringBuilds: true,
  // // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
      }, {
        protocol: "https",
        hostname: "coin-images.coingecko.com",
      },
    ]
  }
};

export default nextConfig;
