const allowedImageWordPressDomain = new URL(
  process.env.NEXT_PUBLIC_WORDPRESS_URL
).hostname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  // Specifying the allowed domains to ensure external urls can't be abused https://nextjs.org/docs/basic-features/image-optimization#domains
  images: {
    domains: [allowedImageWordPressDomain],
  },
  nextConfig,
};
