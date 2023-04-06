// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.tsx',
})

/* eslint-disable */
module.exports = withNextra({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
});
