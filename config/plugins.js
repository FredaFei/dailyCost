const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const { resolve, assetsPath } = require('./utils');
const path = require('path');


const basePlugins = [
  new CheckerPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    favicon: './favicon.ico',
    title: 'react-typescript',
    template: resolve('../index.html')
  }),
  // 设置chunk大小和数量
  // new webpack.optimize.LimitChunkCountPlugin({
  //   maxChunks: 5, // 必须大于或等于 1
  //   minChunkSize: 1000
  // }),
];
const devPlugins = [
  new webpack.DllReferencePlugin({
    context: path.join(__dirname),
    manifest: require('../dll/react.manifest.json')
  }),
  new AddAssetHtmlPlugin({
    filepath: path.resolve(__dirname, '../dll/*.dll.js'),
    includeSourcemap: false
  }),
  new webpack.HotModuleReplacementPlugin(),
  new MiniCssExtractPlugin({
    filename: assetsPath('css/[name].[hash].css'),
    chunkFilename: assetsPath('css/[id].[hash].css'),
  }),
]
const prodPlugins = [
  new CleanWebpackPlugin(),
  // new BundleAnalyzerPlugin(),
  new MiniCssExtractPlugin({
    filename: assetsPath('css/[name].[contenthash:8].css'),
    chunkFilename: assetsPath('css/[id].[contenthash:8].css'),
  }),
];

const envMap = {
  development: devPlugins,
  production: prodPlugins
};
module.exports = basePlugins.concat(envMap[process.env.NODE_ENV]);