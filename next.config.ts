import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        {
          loader: "resolve-url-loader",
          options: {
            sourceMap: true,
          },
        },
        "sass-loader",
      ],
    });
    return config;
  },
};

export default nextConfig;
