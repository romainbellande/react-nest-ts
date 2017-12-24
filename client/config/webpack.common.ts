/* tslint:disable:object-literal-sort-keys */
/* tslint:disable:no-implicit-dependencies */

import * as CleanWebpackPlugin from 'clean-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';

import { AppConfig } from '../../common/config';

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.tsx',
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loaders: [
          'react-hot-loader/webpack',
          'awesome-typescript-loader',
        ],
        exclude: path.resolve('node_modules'),
        include: path.resolve('src'),
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      /**
       * File loader for supporting images, for example, in CSS files.
       */
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader',
      },

      /* File loader for supporting fonts, for example, in CSS files.
      */
      {
        test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin([path.resolve('dist')]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: './src/index.html',
      chunksSortMode: 'dependency',
      title: AppConfig.APP_NAME,
    }),
    /**
     * Plugin: CopyWebpackPlugin
     * Description: Copy files and directories in webpack.
     *
     * Copies project static assets.
     *
     * See: https://www.npmjs.com/package/copy-webpack-plugin
     */
    new CopyWebpackPlugin([{ from: path.resolve('src/assets'), to: path.resolve('dist/assets') }]),
  ],
};
