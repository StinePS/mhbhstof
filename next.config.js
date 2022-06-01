// Specifying the allowed domains to ensure external urls can't be abused https://nextjs.org/docs/basic-features/image-optimization#domains

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const allowedImageWordPressDomain = new URL(
  process.env.NEXT_PUBLIC_WORDPRESS_URL
).hostname;

module.exports = {
  images: {
    domains: [allowedImageWordPressDomain],
  },
  nextConfig,
};
