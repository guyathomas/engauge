const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer-stylus');

const BUILD_DIR = path.resolve(__dirname, 'src/build');
const APP_DIR = path.resolve(__dirname, 'src/dev');

const config = {
  entry: [
    `${APP_DIR}/index.jsx`,
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [autoprefixer()],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'url-loader',
        ],
      },
    ],
  },
};

module.exports = config;
