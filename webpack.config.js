const webpack = require('webpack');
const path = require('path');

console.log();

const BUILD_DIR = path.resolve(__dirname, 'src/client/build');
const APP_DIR = path.resolve(__dirname, 'src/client/dev');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: /flexboxgrid/,
      },
    ],
  },
};


module.exports = config;
