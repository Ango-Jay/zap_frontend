/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';


const withPWAWrapper = withPWA({
  dest: 'public',
});
const nextConfig = withPWAWrapper({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});

export default nextConfig;
