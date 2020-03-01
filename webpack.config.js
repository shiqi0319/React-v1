const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')


//  创建一个插件的实例
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),      //  源文件
    filename: 'index.html'  //  生成的内存中的首页
})



//  向外暴露一个打包的配置对象
//  因为webpack是基于Node.JS开发的所以支持所有Node.js的语法
//  webpack 默认值打包处理 .js后缀名类型的文件, 像.png .vue无法主动处理,所以要配置第三方的loader
module.exports = {
    mode: 'development',   //  development  production 两个环境
    //  在webpack4.x中有很大的特性，默认的打包文件是src下的 index.js
    plugins: [
        htmlPlugin
    ],
    module: {   //  所有第三方 模块的配置规则
        rules: [    //  第三方匹配规则
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ } //  千万不要忘记添加 exclude 排除项
        ]
    }
}