const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

process.env.NODE_ENV = process.env.NODE_ENV || 'development';


module.exports = {
    entry: './app/app.jsx',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'

    },
    resolve:{
        modules: [__dirname, 'node_modules', './app/components', './app/api' ],
        alias: {
          firebaseConf: 'app/firebase/index.js',
          actions: 'app/actions/actions.jsx',
          reducers: 'app/reducers/reducers.jsx',
          configureStore: 'app/store/configureStore.jsx'
        },
        extensions: ['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {loader:'babel-loader', options:{presets:['react', 'es2015', 'stage-0'] } }

            },
            {
                test:/\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test:/\.css$/,
                use: extractPlugin.extract({
                    use: ['css-loader']
                })
            },
            {
                test: /\.(woff2?|svg)$/,
                loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
            },
            {
                 test: /\.(ttf|eot|png)$/,
                 loader: 'file-loader?name=fonts/[name].[ext]'
            }
               ]
    },
    plugins: [
    new UglifyJSPlugin(),
    extractPlugin
    ],
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'

}
