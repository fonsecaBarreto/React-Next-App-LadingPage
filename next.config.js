const withCSS = require('@zeit/next-css')
module.exports = withCSS({
  externals: ['axios'],
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/home' },
      '/faleinglesagora': { page: '/home' },
      '/newsletter': { page: '/newsletter' }
    }
  },
})
