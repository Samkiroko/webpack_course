const path = require('path');
const ExamplePlugin = require('./ExamplePlugin');
const webpack = require('webpack');

module.exports = {
  // ...
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.jpe?g$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [new config.optimization.minimize()],
};
