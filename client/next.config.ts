import type { NextConfig } from "next";

const NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  experimental: {
    optimizeCss: true,  // CSS optimization के लिए
    scrollRestoration: true, // Scroll position restore करने के लिए
  },
};

export default NextConfig;

