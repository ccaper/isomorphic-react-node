const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', './client/isomorphic-react-node.js'],
  output: {
    path: __dirname,
    filename: './public/static/bundle.js'
  },
  context: __dirname,
  resolve: {
    extensions: ['.js', '.json', '*']
  },
  module: {
    rules: [{
      test: /js?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }]
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
    ]
  }
};
