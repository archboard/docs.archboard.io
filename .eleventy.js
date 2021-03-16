const i18n = require('eleventy-plugin-i18n')
const translations = require('./src/_data/i18n')

module.exports = (config) => {
  config.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': 'en',
    }
  })

  config.addPassthroughCopy({ 'public': './' })
  config.setBrowserSyncConfig({
    files: ['dist/**/*'],
    open: true,
    // Tweak for Turbolinks & Browserstack Compatibility
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match;
        }
      }
    }
  })
  config.setDataDeepMerge(true)

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
