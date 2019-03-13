module.exports = {
    entry: './src/bundle.config.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.ttf$/,
                loaders: [
                    'url-loader'
                ]
            }
        ]
    }
}