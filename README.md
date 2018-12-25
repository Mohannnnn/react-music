# react-cli4
React 16.0 boilerplate with react & webpack 4

[TOC]
## 项目初始化
### 统一规范代码格式
1. 配置 `.editorconfig` 使得IDE的方式统一 (见代码)
2. 配置 `.eslintrc.js` 使得代码规范统一 (见代码)
### 预期功能
1. 管理资源： 能加载css、sccc、less、以及静态文件
2. 管理输出：将打包后的静态文件输出至static目录下，以各自的文件类型管理
3. dev：使用source map，方便调试时代码定位
4. dev：配置devServer，并配置热替换，热加载，自动刷新，自动打开浏览器，并预留proxyTable
5. dev：设置默认打开8080，被占用则寻找下一个空接口
6. production：代码分离，打包css文件，css代码压缩，js代码压缩，输出到模板html，配置gzip
7. analysis:：使用BundleAnalyzerPlugin 分析打包后的性能
### 目录结构
```bash
:.
│  .babelrc      		#babel的规则以及插件
│  .editorconfig		#IDE/编辑器相关的配置
│  .eslintignore		#Eslint忽视的目录
│  .eslintrc.js			#Eslint的规则和插件
│  .gitignore			#Git忽视的目录
│  .postcssrc.js		#postcss的插件
│  package-lock.json
│  package.json			#项目相关的包
│  README.md
│  yarn.lock
│
├─build					#webpack相关的配置
│      utils.js			#webpack配置中的通用方法
│      webpack.base.conf.js	#webpack的基础配置
│      webpack.dev.conf.js	#webpack的开发环境配置
│      webpack.prod.conf.js	#webpack的生产环境配置
│
└─src					#主目录，业务代码
    │  app.css
    │  App.js
    │  favicon.ico
    │  index.ejs
    │  index.js
    │
    └─assets			#静态目录，存放静态资源
        │  config.json
        │
        └─img
                logo.svg
```
### 安装依赖
```bash
yarn install / npm install
```
### 启动项目
```
yarn start/npm run start
```
### 打包项目
```
yarn build/npm run build
```
### 部署项目
```
yarn deploy
```

