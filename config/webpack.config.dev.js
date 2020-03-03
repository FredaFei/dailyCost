const path = require('path');
const { assetsPath } = require('./utils');
const base = require('./webpack.config');
const { dev } = require('./config');

module.exports = Object.assign({}, base, {
  mode: 'development',
  output: {
    path: dev.assetsRoot,
    filename: assetsPath('js/[name].[hash].js'),
    chunkFilename: assetsPath('js/[id].[hash].js'),
    publicPath: dev.assetsPublicPath
  },
  // 根据提供的选项将运行时代码拆分成单独的块，创建单个运行时 bundle(one runtime bundle)
  optimization: {
    namedChunks: true,
    moduleIds: 'hashed',
    runtimeChunk: { name: 'manifest' }
  },
  devServer: {
    host: 'localhost',
    port: 3030,
    historyApiFallback: true,
    overlay: {
      //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
      errors: true
    },
    inline: true,
    hot: true,
    proxy: {}
  }
});