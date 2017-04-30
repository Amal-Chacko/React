var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "index.js",
    publicPath: '/static/'
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot'],
        include: path.join(__dirname, './src')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, './src'),
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].html'
      },
      { test: /\.scss$/, loader: 'style-loader!css-loader?minimize!sass-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader?minimize' }
    ]
  }
};
