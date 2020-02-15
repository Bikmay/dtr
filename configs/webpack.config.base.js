/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
import { dependencies as externals } from '../app/package.json';

export default {
  externals: [...Object.keys(externals || {})],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
<<<<<<< HEAD
      },
      {test: /.jsx$/ , loader:'babel-loader', exclude: '/node_modules/'},
      {test: /\.js$/ , loader:'babel-loader', exclude: '/node_modules/'},
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
=======
      }
>>>>>>> 2dfcfc6694269c7cafeb24463636bb7e8019f8cb
    ]
  },

  output: {
    path: path.join(__dirname, '..', 'app'),
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
<<<<<<< HEAD
    extensions: ['.js', '.jsx', '.json','.ts'],
=======
    extensions: ['.js', '.jsx', '.json'],
>>>>>>> 2dfcfc6694269c7cafeb24463636bb7e8019f8cb
    modules: [path.join(__dirname, '..', 'app'), 'node_modules']
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),

    new webpack.NamedModulesPlugin()
  ]
};
