/* Copyright (c) 2017. Suzhou DHMS Information Technology Co.,Ltd.
 * Author: jake Created:03/30/2017
 */
const dirVars = require('../base/dir_vars.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // noParse: [],
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      include: [
        dirVars.srcDir,
        dirVars.staticDir
      ],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-runtime']
        }
      }
    }, {
      test: /bootstrap\/dist\/js\//,
      loader: 'imports-loader',
      options: {
        'jQuery': 'jquery'
      }
    }, {
      test: /jquery\/dist\/jquery\.js$/,
      use: [
        {
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }
      ]
    }, {
      test: /\.jsx$/,
      include: dirVars.srcDir,
      use: [
        'react-hot-loader',
        {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0'],
            plugins: ['transform-runtime']
          }
        }
      ]
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
          use: [
              {
                  loader: 'css-loader'
              },
              {
                  loader: 'postcss-loader'
              }
          ]
      })
    }, {
      test: /\.scss/,
          loader: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                  {
                      loader: 'css-loader'
                  },
                  {
                      loader: 'postcss-loader'
                  },
                  {
                      loader: 'sass-loader'
                  }
              ]
          }),
      }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
          use: [
              {
                  loader: 'css-loader'
              },
              {
                  loader: 'postcss-loader'
              },
              {
                  loader: 'less-loader'
              }
          ]
      }),
    }, {
      test: /\.(jpe?g|png|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            'limit': 10000,
            'name': 'static/img/[name].[ext]'
          }
        }, {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 7,
            },
            pngquant: {
              quality: '75-90',
              speed: 4,
            }
          }
        }
      ]
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      query: {
        name: 'static/font/[name].[ext]',
        minetype: 'application/font-woff'
      }
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      query: {
        name: 'static/font/[name].[ext]',
        minetype: 'application/font-woff2'
      }
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      query: {
        name: 'static/font/[name].[ext]',
        minetype: 'application/octet-stream'
      }
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      query: {
        name: 'static/font/[name].[ext]'
      }
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      query: {
        name: 'static/font/[name].[ext]',
        minetype: 'image/svg+xml'
      }
    }
  ]
}
