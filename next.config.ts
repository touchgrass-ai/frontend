import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
	unoptimized: true
  }
};

module.exports = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
