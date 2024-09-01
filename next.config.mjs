/** @type {import("next").NextConfig} */
import rehypePrism from "@mapbox/rehype-prism";
import nextMDX from "@next/mdx";
import remarkEmoji from "remark-emoji";
import remarkGfm from "remark-gfm";
import remarkImage from "remark-images";

const nextConfig = {
  images: {
    domains: ["imgix.datadoghq.com", "images.unsplash.com"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    mdxRs: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkEmoji, remarkImage],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
