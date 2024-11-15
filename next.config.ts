import withPWA from "next-pwa";
import type { NextConfig } from "next";

const nextConfig: NextConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // desativa o PWA em desenvolvimento
  reactStrictMode: true,
});
export default nextConfig;
