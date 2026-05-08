/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
