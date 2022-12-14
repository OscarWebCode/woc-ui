const path = require('path');

module.exports = {
  entry: './demo/index.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'demo'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'demo'),
    },
    compress: false,
    port: 1000,
  },
};
