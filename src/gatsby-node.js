const path = require('path')

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}, pluginOptions) => {
  if (!pluginOptions) return

  const aliases = {}

  for (let key in pluginOptions.alias) {
    const value = pluginOptions.alias[key]

    aliases[key] = path.isAbsolute(value) ? value : path.resolve(value)
  }

  actions.setWebpackConfig({
    resolve: {
      alias: aliases,
      extensions: pluginOptions.extensions || []
    },
  })
}