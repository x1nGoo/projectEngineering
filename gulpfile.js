'use strict';

const gulp = require('gulp');

// 1. 定义任务 gulp默认执行名称为default的任务
// []里面的是依赖的任务, 该任务依赖哪些任务, 先执行所有的依赖任务
gulp.task('default', ['es6Toes5'], () => {
	console.log('所有任务执行完毕');
});

/*
  注意:
  1、在gulp.src里面一定要加上第二个参数{base: 'src'}， 
  	如果不加，不会将原有的目录结构拷贝到dist中

  2、压缩js的插件uglify是不支持es6语法的，所以必须将es6转换为es5后再调用
*/

// 2. es6Toes5 和 压缩js 任务
const babel = require('gulp-babel');
// 压缩js的包
const uglify = require('gulp-uglify');
gulp.task('es6Toes5', () => {
	// 将数组里的文件转为es5
	gulp.src(['./src/controller/*.js', 
		'./src/model/*.js',
		'./src/routes/*.js'],				
	{base: 'src'})						
	.pipe(babel({presets: ['es2015']}))
	.pipe(uglify())		// 压缩js
	.pipe(gulp.dest('dist'));				// 输出到该目录
});

// 3. 压缩js
// 压缩插件不支持es6语法, 所以需要先转为es5,
// 因此压缩js和转换es5合并一起写
// const uglify = require('gulp-uglify');
// gulp.task('minjs', () => {
// 	gulp.src(['./src/controller/*.js'], {base: 'src'})
// 	.pipe(uglify())
// 	.pipe(gulp.dest('dist'));
// });


// 4. 压缩css
const cleanCSS = require('gulp-clean-css');
const rev = require('gulp-rev');

gulp.task('mincss', () => {
	gulp.src('./src/statics/css/*.css', {base: 'src'})
    .pipe(cleanCSS({compatibility: 'ie8'}))		// 兼容IE8
    .pipe(rev())	// 这行是md5的
    .pipe(gulp.dest('dist'))
    .pipe(rev.manifest())		// 自动生成一个manifest文件  这行是md5的
    .pipe(gulp.dest('./src/rev/'));		// 这行是md5的
});

// 5. 压缩图片
const imagemin = require('gulp-imagemin');
 
gulp.task('minimages', () => {
    gulp.src('./src/statics/images/*.*', {base: 'src'})
        .pipe(imagemin())
        .pipe(gulp.dest('dist'));
});

// 6. 压缩html
const htmlmin = require('gulp-htmlmin');

// 替换html中引用的css文件名称为md5后的名称
const revCollector = require('gulp-rev-collector');

// collapseWhitespace: true 表示将结构中的空白行, 空格等压缩掉
gulp.task('minhtml', () => {
    gulp.src(['src/rec/**/*.json', './src/views/*.html'], {base: 'src'})
        .pipe(revCollector())
	    .pipe(htmlmin({collapseWhitespace: true}))
	    .pipe(gulp.dest('dist'));
});

// 7. css和js的md5化
// 在css压缩的同时可以md5化，所以和css压缩合并在一起

// gulp替换html中引用的css文件名称为md5后的名称, 
// 将这个和压缩html合并在一起操作
// const revCollector = require('gulp-rev-collector');

/**
 将css文件MD5化的步骤
 1、调用插件const rev = require('gulp-rev'); 来将css文件名进行md5化，
 生成一个json文件

 2、调用另外一个插件const revCollector = require('gulp-rev-collector'); 
 将所有指定的html文件中的site.css重命名

 */

 // 8. 利用gulp-copy插件实现文件拷贝
 // 参数必须加上{prefix: 1} 
 const copyfile = require('gulp-copy');
 gulp.task('copy', () => {
	// 路径中的第一个*代表第一级文件夹, 第二个*代表一级文件夹里的所有子文件夹
	gulp.src(['./src/statics/bowersrc/**/*.*',
		'./src/app.js'], {base: 'src'})
	// .pipe(copyfile('dist', {prefix: 1}))
	.pipe(gulp.dest('dist'));
 });
