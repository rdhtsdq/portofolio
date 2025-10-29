import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:'export',
  basePath: '/portofolio',
  images:{
    unoptimized:true
  }
};

export default nextConfig;
