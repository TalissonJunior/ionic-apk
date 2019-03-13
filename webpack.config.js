const tsLintPlugin = require('tslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/app.ts',
    target: 'node',
    node: {
        __dirname: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: [ 'ts-loader'],
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
             }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: [
        /^[a-z\-0-9]+$/ // Ignore node_modules folder
    ],
    plugins: [
        new CopyPlugin([
            { from: 'src/views/**', to: './' }
        ]),
        new tsLintPlugin({
            files: ['./src/**/*.ts']
        }),
        new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true })
    ],
    output: {
        filename: 'ionic.apk.js',
        path: path.resolve(__dirname, './dist'),
        libraryTarget: "commonjs",
        devtoolModuleFilenameTemplate: '[absolute-resource-path]'
    },
    mode: 'development',
    devtool: 'inline-source-map'
};