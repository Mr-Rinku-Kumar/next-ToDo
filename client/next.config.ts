import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  
};

module.exports = {
  experimental: {
    incrementalCacheHandlerPath: "node_modules/.cache/next",
  },
};


export default nextConfig;
