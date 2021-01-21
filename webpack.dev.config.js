const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口
  entry: './src/index.js',

  // 输出
  output: {
    path: __dirname, // 当前目录
    filename: './release/bundle.js'
  },

  // 编译规则
  module: {
    rules: [{
      test: /\.js?$/, // 检测后缀为js的文件
      exclude: /(node_modules)/, // 忽略node-modules
      loader: 'babel-loader'
    }]
  },

  // 插件
  plugins: [
    // 引入模板文件
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ],

  // 开发环境服务器配置（本地）
  devServer: {
    contentBase: path.join(__dirname, './release'), // 本地服务，启动的加载根目录文件
    open: true,  // 服务启动，默认打开浏览器
    port: 9000, 
  }
};