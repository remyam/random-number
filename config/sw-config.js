module.exports = {
  cache: {
    cacheId: 'random-number',
    runtimeCaching: [{
      handler: 'fastest',
      urlPattern: '\/$'
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: '#FFFFFF',
    title: 'random-number',
    short_name: 'PWA',
    theme_color: '#FFFFFF'
  }
};
