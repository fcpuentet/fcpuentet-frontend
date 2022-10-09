/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['yxyqlflqvbnkyhamwrfj.supabase.co'],
  },
};

module.exports = nextConfig;
