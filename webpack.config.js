const { merge } = require('webpack-merge')

var config = require("./config/webpack.defaults.js")

// Add any overrides to the default webpack config here:
//
// Eg:
//
//  ```
//    const path = require("path")
//    config.resolve.modules.push(path.resolve(__dirname, 'frontend', 'components'))
//    config.resolve.alias.frontendComponents = path.resolve(__dirname, 'frontend', 'components')
//  ```
//
// You can also merge in a custom config using the included `webpack-merge` package.
// Complete docs available at: https://github.com/survivejs/webpack-merge
//
// Eg:
//
//  ```
//    const customConfig = { ..... }
//    config = merge(config, customConfig)
//  ```

// Performance configuration to suppress warnings for large CSS bundles
const performanceConfig = {
  performance: {
    maxAssetSize: 1000000, // 1MB
    maxEntrypointSize: 1000000, // 1MB
    hints: 'warning'
  }
}

// Override manifest plugin to write to root directory where Bridgetown expects it
const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const manifestConfig = {
  output: {
    publicPath: '/_bridgetown/static/js/'
  },
  plugins: [
    new WebpackManifestPlugin({
      fileName: path.resolve(__dirname, '.bridgetown-webpack', 'manifest.json'),
      publicPath: '/_bridgetown/static/'
    })
  ]
}


////////////////////////////////////////////////////////

module.exports = merge(config, performanceConfig, manifestConfig)
