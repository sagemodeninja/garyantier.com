const path = require('path');
const autoDiscovery = require('./src/auto-discovery');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = () => {
    return {
        target: 'web',
        entry: autoDiscovery.lookupEntries('./src'),
        output: {
            filename: 'scripts/[name].js',
            path: path.resolve(__dirname, 'build'),
            clean: true,
        },
        plugins: [
            ...autoDiscovery.lookupViews('./src'),
            new MiniCssExtractPlugin({
                filename : 'styles/[name].css'
            }),
            new CopyPlugin({
                patterns: [{
                    from: './.htaccess',
                    to: '.'
                }]
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
                '@': path.resolve(__dirname, 'src'),
            }
        },
        devtool: 'inline-source-map',
    }
}