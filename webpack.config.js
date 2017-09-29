/**
 * Local: `$ webpack --env.local`
 * Dev: `$ webpack`
 * Production: `$ webpack --env.production`
 */
var path = require('path');
var webpack = require('webpack');

const HMR = 'webpack-hot-middleware/client?reload=true&noInfo=false&quiet=false&react=false';

module.exports = (env = {}) => {
    // Production Build.
    const production = env.production;

    // Local Build.
    const local = env.local;

    // Define the environment. This will be used to load
    // a JS config file (resolve > alias > config).
    const appEnv = env.local ? 'local' : (production ? 'prod' : 'dev');

    // Start WP Config.
    return {
        context: path.resolve(__dirname, 'src', 'js'),
        entry: (() => {
            let entries = {
                main: ['./main.js'],
                head: ['./head.js']
            }

            if(local) {
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
                config: path.resolve(__dirname, 'src/js/config/' + appEnv + '.config.js')
            }
        },
        module: {
            rules: [
                {
                    enforce: 'pre',
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "eslint-loader",
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
            let plugins = [
                new webpack.DefinePlugin({
                    'process.env': {
                        NODE_ENV: this.production ? '"production"' : '"dev"'
                    },
                    ENV: this.production ? '"production"' : '"dev"'
                })
            ];

            if(production) {
                plugins.push(new webpack.optimize.UglifyJsPlugin({
                    sourceMap: true,
                    compress: {
                        warnings: false
                    }
                }));
            }

            if(local) {
                plugins.push(new webpack.HotModuleReplacementPlugin());
                plugins.push(new webpack.NoEmitOnErrorsPlugin());
            }

            return plugins;
        })(),
        devtool: (() => {
            return production ? 'hidden-source-map' : 'eval-source-map';
        })(),
        stats: {
            colors: true
        },
        performance: {
            hints: false // 'warning'
        }
    }
};

