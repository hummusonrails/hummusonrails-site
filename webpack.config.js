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

// Ensure manifest is written to root directory for Bridgetown integration
const path = require('path')
const manifestConfig = {
  plugins: [
    new (require('webpack-manifest-plugin').WebpackManifestPlugin)({
      fileName: path.resolve(__dirname, '.bridgetown-webpack', 'manifest.json')
    })
  ]
}

////////////////////////////////////////////////////////

module.exports = merge(config, performanceConfig, manifestConfig)
