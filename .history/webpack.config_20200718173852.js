const path = require('path');

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
