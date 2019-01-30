const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './index.ts'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name]_[hash].js' 
    },
    devtool: 'source-map',
    devServer: { 
        contentBase: path.resolve(__dirname, './dist'), 
        inline: true, 
        hot: true 
    },
    resolve: {
        extensions: ['.js','.ts']
    },
    module: {
        rules: [{
                test: /\.(ts|js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "es2015" 
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(tsx|ts)?$/,
                use: [{
                    loader: 'babel-loader'
                },{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                            loader: "css-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]?v=[hash:6]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new ExtractTextPlugin('css/[name]_[hash].css')  // 分离css文件
    ]
};