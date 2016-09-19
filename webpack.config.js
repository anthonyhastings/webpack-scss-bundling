// Loading dependencies.
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Webpack configuration options.
 * @type {Object}
 */
module.exports = {
    entry: {
        'core': './src/components/core/scripts/index.js',
        'core.min': './src/components/core/scripts/index.js',
        'vendor': [
            'jquery',
            'underscore',
            'backbone'
        ]
    },
    output: {
        path: './dist/',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.handlebars$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                loader: ExtractTextPlugin.extract('css?-autoprefixer!postcss!sass')
            }
        ],
        noParse: [
            /underscore/,
            /jquery/
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css', {
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            compress: {
                'drop_console': false,
                'drop_debugger': false,
                'warnings': false
            }
        })
    ],
    sassLoader: {
        outputStyle: 'compact',
        precision: 3
    },
    postcss: function() {
        return [
            autoprefixer({
                browsers: [
                    'last 2 versions',
                    'iOS >= 7.1',
                    'Android >= 4'
                ],
                cascade: false
            })
        ];
    }
};
