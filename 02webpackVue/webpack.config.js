const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = { 
    // 入口
    entry:path.join(__dirname,'src','main.js'),
    // 出口
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    // 模式选择
    mode:'development',
    // 插件
    plugins:[
        new HtmlWebpackPlugin ({
            template:'./src/index.html'
        }),
        new VueLoaderPlugin()
    ],
    // loader
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader,css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader,css-loader,less-loader']
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:1024*30
                    }
                }
            },
            {
                test:/\.(woff|eot|svg|ttf)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:30*1024
                    }
                }
            },
            {
                test:/\.(mp3|mp4)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:30*1024
                    }
                }
            },
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    devServer:{
        open:true,
        hot:true
    }
}