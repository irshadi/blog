const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = phase => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const devEnv = {
    REACT_APP_ANALYTIC_HOSTNAME: "http://127.0.0.1:1337/api"
  };

  const prodEnv = {
    REACT_APP_ANALYTIC_HOSTNAME: "http://[::1]:1337/api"
  };

  const env = isDev ? devEnv : prodEnv;

  // next.config.js object
  return {
    images: {
      formats: ["image/avif", "image/webp"],
      domains: ["127.0.0.1"]
    },

    reactStrictMode: true,
    output: "standalone",
    swcMinify: true,
    env
  };
};
module.exports = nextConfig;
