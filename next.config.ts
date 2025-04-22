import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    
    domains: [         
      "127.0.0.1"  ,
     
      "rdabucket.s3.amazonaws.com"
    ],
  },  
};

export default nextConfig;
