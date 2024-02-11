const { withSentryConfig } = require('@sentry/nextjs')
const CopyPlugin = require('copy-webpack-plugin');
const { resolve } = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: 'node_modules/leaflet/dist/images',
              to: resolve(__dirname, 'public', 'leaflet', 'images')
            },
          ],
        })
    );
    return config;
  },
  images: {
    domains: ['cdn.sanity.io']
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'api.ts', 'api.js'],
  sentry: {
    // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
    // for client-side builds. (This will be the default starting in
    // `@sentry/nextjs` version 8.0.0.) See
    // https://webpack.js.org/configuration/devtool/ and
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
    // for more information.
    hideSourceMaps: true,
  },
}

module.exports = withSentryConfig(
    nextConfig,
    {
      // For all available options, see:
      // https://github.com/getsentry/sentry-webpack-plugin#options

      // Suppresses source map uploading logs during build
      silent: true,

      dryRun: process.env.NODE_ENV !== 'production',

      org: "comma-5l",
      project: "arch-studio-multi-page-web",
    },
    {
      // For all available options, see:
      // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

      // Upload a larger set of source maps for prettier stack traces (increases build time)
      widenClientFileUpload: true,

      // Transpiles SDK to be compatible with IE11 (increases bundle size)
      transpileClientSDK: true,

      // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
      tunnelRoute: "/monitoring",

      // Hides source maps from generated client bundles
      hideSourceMaps: true,

      // Automatically tree-shake Sentry logger statements to reduce bundle size
      disableLogger: true,
    }
);
