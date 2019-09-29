const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    content: './src/content.js',
    background: './src/background.js'
  },
  output: {
    path: `${__dirname}/build`,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: `${__dirname}/src/manifest.json`, to: `${__dirname}/build` }
    ])
  ]
}
