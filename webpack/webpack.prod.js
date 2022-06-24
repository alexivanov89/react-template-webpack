const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  target: 'browserslist',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('nameProjectProd'),
    }),
    new BundleAnalyzerPlugin(),
  ],
};
