/** @type {import('next').NextConfig} */
module.exports = {
  experimental: { images: { allowFutureImage: true } },
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
  },
};
