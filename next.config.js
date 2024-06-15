/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
        {
            hostname:"lh3.googleusercontent.com",
            
        },
        {
          
            protocol: 'http',
            hostname: 'localhost',
            pathname: '**',
            port: '3000',
          
        }
    ]
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"],
      allowedForwardedHosts: ["localhost:3000"],
      // ^ You might have to use this property depending on your exact version.
    }
  }
  
};

module.exports = nextConfig;
