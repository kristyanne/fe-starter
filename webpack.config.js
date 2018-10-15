const path = require('path');
const webpack = require('webpack');

const HMR = 'webpack-hot-middleware/client?reload=true&noInfo=false&quiet=false&react=false';

const MODE_PROD = 'production';
const MODE_DEV = 'development';

module.exports = (env = {}) => {
  const {production} = env;

  const ENV = production ? MODE_PROD : MODE_DEV;
  const PROD = ENV === MODE_PROD;

  return {
    mode: ENV,
    context: path.resolve(__dirname, 'src', 'js'),
    entry: (() => {
      const entries = {
        main: ['./main.js'],
        head: ['./head.js']
      };

      if(!PROD) {
        entries.main.push(HMR);
        entries.head.push(HMR);
      }

      return entries;
    })(),
    output: {
      path: path.normalize(path.resolve(__dirname, 'dist/assets/js')),
      publicPath: '/assets/js/',
      filename: '[name].bundle.js'
    },
    resolve: {
      alias: {
        lib: path.resolve(__dirname, 'src/js/lib/'),
      }
    },
    optimization: {
      minimize: true
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            emitWarning: true
          }
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins: (() => {
      const plugins = [
        new webpack.DefinePlugin({
          ENV: this.production ? '"production"' : '"dev"'
        })
      ];

      if(!PROD) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new webpack.NoEmitOnErrorsPlugin());
      }

      return plugins;
    })(),
    devtool: (() => {
      return PROD ? 'hidden-source-map' : 'eval-source-map';
    })(),
    stats: {
      colors: true
    },
    performance: {
      hints: false // 'warning'
    }
  };
};
