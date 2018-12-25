'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = (process.env.PORT && Number(process.env.PORT)) || '8080'

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: utils.styleLoaders({ sourceMap: true, usePostCSS: true, extract: false, })
  },
  devtool: 'eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    contentBase: path.resolve(__dirname, '../src'),
    compress: true,
    hot: true, // 热加载
    inline: true, //自动刷新
    open: true, //自动打开浏览器
    host: HOST||'localhost',
    port: PORT,
    overlay: { warnings: false, errors: true }, // 在浏览器上全屏显示编译的errors或warnings。
    publicPath: '/',
    proxy: {},
    quiet: true, // necessary for FriendlyErrorsPlugin // 终端输出的只有初始启动信息。 webpack 的警告和错误是不输出到终端的
    watchOptions: {
      poll: false
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      ...process.env
    }),
    //开启HMR(热替换功能,替换更新部分,不重载页面！)
    new webpack.HotModuleReplacementPlugin(),
    //显示模块相对路径
    new webpack.NamedModulesPlugin(),
    //不显示错误信息
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    //配置html入口信息
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'React Demo',
      template: path.resolve(__dirname, '../src/index.ejs'),
      inject: true
    }),
    new CopyWebpackPlugin([{
      from: './src/assets/img/favicon.ico'
    }, ])
  ]
})
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = PORT
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port
      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: utils.createNotifierCallback(),
      }))
      resolve(devWebpackConfig)
    }
  })
})

