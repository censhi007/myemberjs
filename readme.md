#EmberJs Demo(EmberJs演示项目)
本项目出于学习目的而创建，参照于(This project created only for learning,refer to)

- [30天学会30种技能中的emberJs入门指南(译文)](http://segmentfault.com/a/1190000000365519)
- [learning-30-technologies-in-30-days-day19(原文)](https://www.openshift.com/blogs/day-19-ember-the-missing-emberjs-tutorial)
- [emberJs 基础demo](https://github.com/emberjs/starter-kit)

##工具
要使用本项目需要使用nodeJs/npm/grunt

###nodeJs/npm
从nodejs官网下载最新的nodeJs安装包安装即可，安装包含有npm。

###grunt
命令行中执行

	npm install grunt-cli -g

##需要的插件
项目中用到了grunt的一些插件

	npm install grunt-contrib-uglify --save-dev
	npm install grunt-contrib-watch --save-dev
	
这两个插件与具体的应用其实并无关系，主要作用是方便开发。其中ugilify用于压缩打包文件.grunt watch用来监视文件的变更。当修改了某些文件后，浏览器中打开的页面会自动刷新(需要引入http://ip:端口/livereload.js)。其中ip是你的电脑ip，端口是watch监听的端口。