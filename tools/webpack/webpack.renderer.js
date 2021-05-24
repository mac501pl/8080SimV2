const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  module: {
    rules: require('./webpack.rules'),
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new MonacoWebpackPlugin({features: [], languages: []})
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};
