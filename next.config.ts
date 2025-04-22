import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    
    domains: [         
      "127.0.0.1"  ,
     "43.204.144.192",
      "rdabucket.s3.amazonaws.com"
    ],
  },  
};

export default nextConfig;
