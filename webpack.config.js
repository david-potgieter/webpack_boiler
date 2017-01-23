const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index.js',
    ],
    output: {
        filename: 'bundle.js',
        path: './build',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                test: /\.jsx?$/,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'stage-0'],
                },
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                query: {
                    configFile: './.eslintrc.json',
                    failOnWarning: false,
                    failOnError: true,
                },
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]',
            },
        ],
    },
};
