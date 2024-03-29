const withMDX = require("@next/mdx");
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://blog.rohitprakash.dev",
        permanent: true,
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
