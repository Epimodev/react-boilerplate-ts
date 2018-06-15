const path = require('path')
const SvgSpriteHtmlWebpackPlugin = require('svg-sprite-html-webpack');
const config = require('../webpack/config');

const projectRoot = path.resolve(__dirname, '../');

/**
 * We use ts-loader instead of awesome-typescript-loader
 * becase storybook is not compatible with last version of ts-loader and awesome-typescript-loader
 * and we need awesome-typescript-loader at the last version to support last webpack version
 */

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    modules: [
      'node_modules',
      projectRoot,
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: config.cssOptions },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader', options: config.sassOptions },
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: SvgSpriteHtmlWebpackPlugin.getLoader(),
      },
    ]
  },
  plugins: [
    new SvgSpriteHtmlWebpackPlugin(),
  ],
};
