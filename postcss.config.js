const purgecss = require('@fullhuman/postcss-purgecss')({

  content: [
    './_includes/**/*',
    './_layouts/**/*',
    './_posts/**/*',
    './*.html',
    './*.md',
  ],

  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
