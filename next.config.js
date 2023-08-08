const withMDX = require("@next/mdx")({
  // ...
  options: {
    providerImportSource: "@mdx-js/react"
  }
});

// when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
const isDev = process.env.NODE_ENV === "development";

const devEnv = {
  REACT_APP_ANALYTIC_HOSTNAME: "http://127.0.0.1:1337/api"
};

const prodEnv = {
  REACT_APP_ANALYTIC_HOSTNAME: process.env.NEXT_PUBLIC_HOSTNAME
};

const env = isDev ? devEnv : prodEnv;

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/article",
        destination: "/",
        permanent: true
      }
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["127.0.0.1"]
  },

  reactStrictMode: true,
  output: "standalone",
  swcMinify: true,
  env
};

module.exports = nextConfig;

module.exports = withMDX(nextConfig);
