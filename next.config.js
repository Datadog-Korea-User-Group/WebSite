/** @type {import("next").NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV !== "production" ? "standalone" : "export",
    reactStrictMode: true,
    trailingSlash: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

module.exports = nextConfig;
