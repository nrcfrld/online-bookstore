/** @type {import('next').NextConfig} */
console.log(process.env);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_IMAGE_HTTPS,
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOST,
        port: process.env.NEXT_PUBLIC_IMAGE_PORT,
      },
    ],
  },
};

export default nextConfig;
