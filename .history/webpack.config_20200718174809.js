const path = require('path');
const ExamplePlugin = require('./ExamplePlugin.js');

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
};
