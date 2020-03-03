const path = require('path');
const { dev, build } = require('./config');
const utils = require('./utils');
const plugins = require('./plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const publicPath = devMode ? dev.assetsPublicPath : build.assetsPublicPath;

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': utils.resolve('../src'),
      'styles': utils.resolve('../src/styles'),
      'utils': utils.resolve('../src/utils'),
      'views': utils.resolve('../src/views'),
      'components': utils.resolve('../src/components'),
    }
  },
  optimization: {
    runtimeChunk: 'single',
    // reuseExistingChunk: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      },
      {
        test: /\.s([ac])ss$/,
        exclude: /node_modules/,
        use: [
          devMode
            ? 'style-loader'
            : {
              loader: MiniCssExtractPlugin.loader,
              options: publicPath === './' ? { publicPath: '../../' } : {}
            },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [utils.resolve('../src/styles')]
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: utils.assetsPath('images/[name].[hash:7].[ext]')
            }
          }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: utils.assetsPath('fonts/[name].[ext]?[hash:7]')
          }
        }]
      }
    ]
  },
  plugins: [...plugins],
  resolveLoader: {
    modules: ['node_modules']
  }
};