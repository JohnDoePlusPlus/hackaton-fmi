const withTypescript = require("@zeit/next-typescript")
const withSass = require("@zeit/next-sass")

module.exports = withTypescript(
  withSass({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.css$/,
        use: ['css-loader']
      })
      return config
    },
    cssModules: true,
    extensions: ['scss', 'sass', 'css'],
  }),
)