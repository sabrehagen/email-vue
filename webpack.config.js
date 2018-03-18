var path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    mode: 'development',
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    // devtool: '#inline-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: [ 'es2015' ] }
            },
            {
                test: /\.(html)$/,
                use: 'raw-loader'
            }

            // {
            //     test: /\.scss$/,
            //     loaders: ['style-loader', 'css-loader', 'sass-loader?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')]
            // },
            // {
            //     test: /\.(jpe?g|png)(\?[a-z0-9=&.]+)?$/,
            //     use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
            // },
            // {
            //     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: 'url-loader?publicPath=dist/&limit=10000&mimetype=application/font-woff'
            // },
            // {
            //     test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            //     loader: 'file-loader?publicPath=dist/'
            // }
        ]
    }
};