/* tslint:disable:object-literal-sort-keys */
/* tslint:disable:no-implicit-dependencies */

import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as path from 'path';
import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';

import * as common from './webpack.common';

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { minimize: true },
            },
            'sass-loader',
          ],
        }),
      },
    ],
  },
  plugins: [
    new UglifyJsPlugin(),
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env': 'production',
    }),
  ],
});
