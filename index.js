/**
	作用: 根据不同的环境变量, 运行不同的目录结构
	set PROT = 6001 npm run dev   --启动开发环境
	set PROT = 7001 npm run dist  --启动生成环境

	入口文件, 判断进入哪个环境
	这个文件不是真正的web服务器启动文件
 */

'use strict'

// 获取从环境变量中设置好的NODE_ENV的值
// dev 和 dist 是在package.json中的script预先配置好的
let NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV == 'dev') {
	// dev: 开发环境
	// 当在cmd命令面板中执行npm run dev 就进入该行代码
	require('./src/app.js');
} else {
	// dist: 生产环境
	// 当在cmd命令面板中执行npm run dist 就进入该行代码
	require('./dist/app.js');
}
