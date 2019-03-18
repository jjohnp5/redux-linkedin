const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output : {
        path: path.resolve(__dirname, 'dist/assets'),
        publicPath: '/',
		filename: "bundle.js"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000,
        publicPath: path.resolve(__dirname, './dist'),
        writeToDisk: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['latest', 'stage-0']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },{
                        loader:  'css-loader',
                    },{
                        loader: 'postcss-loader'
                    }
                        
                ]

            },
            {
                test: /\.scss/,
                use : ['style-loader','postcss-loader','sass-loader'
                ]
            }
        ]
    }
}