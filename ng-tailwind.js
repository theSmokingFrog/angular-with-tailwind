module.exports = {
  // Tailwind Paths
  configJS: './tailwind.js',
  sourceCSS: './src/assets/styles/tailwind.scss',
  outputCSS: './src/assets/styles/application.scss', // Sass
  sass: true, // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [],
  whitelistPatterns: [],
  whitelistPatternsChildren: []
};
