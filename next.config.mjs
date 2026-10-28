/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // الإضافة الجديدة الخاصة بالصور
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shutterstock.sa7eer.com',
      },
    ],
  },
};

export default nextConfig;