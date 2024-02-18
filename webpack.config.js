const path = require('path');
const autoDiscovery = require('./src/auto-discovery');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = () => {
    return {
        target: 'web',
        entry: autoDiscovery.discover('./src', 'entry'),
        output: {
            filename: 'static/scripts/[name].js',
            path: path.resolve(__dirname, 'build'),
            clean: true,
        },
        plugins: [
            ...autoDiscovery.discover('./src', 'view'),
            new MiniCssExtractPlugin({
                filename : 'static/styles/[name].css'
            }),
            new CopyPlugin({
                patterns: [
                    './src/.htaccess',
                    './src/router.php',
                    {from: './src/static', to: 'static'}
                ]
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ]
        },
        resolve: {
            extensions: ['.ts', '.js'],
            alias: {
                '@': path.resolve(__dirname, 'src/static/scripts'),
            }
        },
        devtool: 'inline-source-map',
    }
}