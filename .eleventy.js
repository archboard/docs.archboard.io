const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const htmlmin = require('html-minifier')

module.exports = (config) => {
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

  config.setLibrary(
    'md',
    markdownIt({ html: true })
      .use(markdownItAnchor, {
        permalink: true,
        permalinkBefore: true,
        permalinkSymbol: '#',
        permalinkClass: 'text-gray-500',
      })
  )

  config.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
      })
    }

    return content
  })

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
