//  向外暴露一个打包的配置对象
//  因为webpack是基于Node.JS开发的所以支持所有Node.js的语法

module.exports = {
    mode: 'development',   //  development  production 两个环境
    //  在webpack4.x中有很大的特性，默认的打包文件是src下的 index.js
}