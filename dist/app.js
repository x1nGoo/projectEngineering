/*
	express服务器文件
	作用: 开启服务器
*/

'use strict'

// 
let PORT = process.env.PORT;

const express = require('express');

let app = express();

app.listen(PORT, () => {
	console.log('启动环境' + PORT);
});
 
