/** 
 项目工程化步骤

 1、因为node暂时还不支持es6语法, 
	所以需要安装一个插件 把es6语法变成es5语法
 
 2、先在根目录命令行安装package.json 	npm init -y 

 3、在根目录安装gulp 	npm i gulp --save-dev
 	gulp 需要在当前目录装, 也要在全局装 npm i gulp -g
	http://www.gulpjs.com.cn/docs/api/
	https://github.com/gulpjs/gulp


 4、根目录安装es6转es5插件
 npm install --save-dev gulp-babel babel-preset-es2015
 https://www.npmjs.com/package/gulp-babel

 5、gulp压缩js插件 (压缩插件不支持es6语法, 所以压缩之前需要前转换)
 npm install --save-dev gulp-uglify
 https://www.npmjs.com/package/gulp-uglify

 6、gulp压缩css插件gulp-clean-css
 npm install gulp-clean-css --save-dev
 https://www.npmjs.com/package/gulp-clean-css

 7、gulp压缩图片插件gulp-imagemin
 npm install --save-dev gulp-imagemin
 https://www.npmjs.com/package/gulp-imagemin

 8、gulp压缩html插件gulp-htmlmin
 npm i gulp-htmlmin --save-dev
 https://www.npmjs.com/package/gulp-htmlmin

 9、gulp给css和js文件重命名为MD5插件gulp-rev（可以用来解决cdn或者微信客户端的静态文件缓存问题）
 npm install --save-dev gulp-rev
 https://www.npmjs.com/package/gulp-rev

 10、gulp替换html中引用的css文件名称为md5后的名称gulp-rev-collector
 https://www.npmjs.com/package/gulp-rev-collector
 使用案例：http://www.tuicool.com/articles/iA7zmym

 11、安装bower
 npm i bower -g
 利用bower安装jquery 和 bootstrap(要在.bowerrc文件目录下使用git bash安装)


 12、利用gulp-copy执行文件夹的拷贝工作
 npm i gulp-copy
 https://www.npmjs.com/package/gulp-copy

 13、利用editorconfig来使多个编辑器的代码风格统一，控制tab的缩进
 http://www.cnblogs.com/xiyangbaixue/p/4201490.html
 (sublime想使用这个, 需要先装插件 EditorConfig)

 14、利用npm run dev和nom run dist执行开发环境和生产环境切换测试
 // package.json中script的所有命令都可以用npm run 执行
 // 因为在package.json中script设置的任何指令都需要进行跨平台兼容
 // 所以需要使用cross-env来实现跨平台指令的执行
 npm i cross-env
 https://www.npmjs.com/package/cross-env

 15、安装express xtemplate xtpl 
 express是基于Node.js 平台,快速、开放、极简的 web 开发框架。
 xtemplate是基于浏览器和 Node.js 的可扩展的模板引擎库。
 xtpl是依赖xtemplate的.
 npm i express
 npm i xtemplate
 npm i xtpl

 16、安装opm、mysql
 npm i opm
 npm i mysql
*/
