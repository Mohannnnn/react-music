# React-music
React Music WebApp，在听音乐的时候忽然想听腾格尔的钢铁之翼（隐形的翅膀），在网易云上却找不到，就很气。于是想到了做一个，音乐搜索的功能，把所有想听的歌，能够一次性在酷狗、网易云、QQ、虾米等平台上找找完。

### 地址(欢迎start哦~)

> 在线地址:[http://music.wuhann.cn/#/home](http://music.wuhann.cn/#/home)
> 后端github地址:[https://github.com/Mohannnnn/react-music-koa2](https://github.com/Mohannnnn/react-music-koa2)
> 前端github地址:[https://github.com/Mohannnnn/react-music](https://github.com/Mohannnnn/react-music)

### 技术栈

`React` + `React-router` + `Redux` + `React-redux` + `ES6/7` + `webpack4` + `Ant Design` + `Ant Motion` + `Fetch/Axios` + `Scss`

### 目录结构
```bash
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
    │-api               #接口api等配置
    │-compontents       #组件
    │-store             #Redux管理目录
    │-utils             #工具函数位置
    │-router            #路由
    └─assets			#静态目录，存放静态资源
```
### V1.0实现的功能
- [x] 1.推荐歌单页
- [x] 2.推荐歌单详情页
- [x] 3.热门歌曲页
- [x] 4.播放页
- [x] 5.搜索（QQ音乐、网易云、酷狗）
- [x] 6.音乐全局播放
- [x] 7.歌词同步(在播放页，点击转动的图片)
- [x] 8.切换上一首、下一首

### V2.0实现的功能
- [x] 1.添加到歌单、从歌单删除、删除全部
- [x] 2.歌词动画、以及每个路由下的页面出场动画
- [x] 3.随机播放、顺序播放
- [ ] 4.音量控制（未做,感觉意义不大,手机能自己调）
- [ ] 5.其他(待定功能，想到在做)

### 安装依赖
```bash
yarn install / npm install
```
### 启动项目
```
yarn dev/npm run dev
```
### 打包项目
```
yarn build/npm run build
```
### 第三方接口
* 1.网易云: [https://www.bzqll.com/2018/10/39.html](https://www.bzqll.com/2018/10/39.html)
* 2.QQ: [https://www.bzqll.com/2019/01/262.html](https://www.bzqll.com/2019/01/262.html)
* 3.酷狗: [https://www.bzqll.com/2019/01/259.html](https://www.bzqll.com/2019/01/259.html)
* 非常感谢该博主，打Call！！！

### Demo
![推荐歌单]('./demo/1.png')
![热门歌曲]('./demo/2.png')
![搜索]('./demo/3.png')
![歌单详情]('./demo/4.png')
![播放页]('./demo/5.png')
![gif预览播放]('./demo/6.gif')

