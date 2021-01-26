##
npm init ===>
src/index.js ===> 
cnpm install webpack webpack-cli --save-dev ===>
编写webpack.dev.config.js ===> 
cnpm install webpack-dev-server html-webpack-plugin ===>
继续编写webpack.dev.config.js ===>
配置babel相关
babel（install）： 
  1. babel-core
  2. babel-loader
  3. babel-polyfill
  4. babel-preset-es2015
  5. babel-preset-latest ===>
  babel-loader和babel-core版本不对应所产生的，
    <1>. babel-loader 8.x对应babel-core 7.x
    <2>. babel-loader 7.x对应babel-core 6.x

  babel-plugin-transform-decorators-legacy 装饰器代码转化, 并且babelrc中需要配置

###
为什么要用面向对象？
程序执行： 顺序，循环，判断 ---- 结构化
面向对象 ---- 数据结构化
，对于计算机来说，结构化才是最简单的
##