const  mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true })
// 连接成功提示
mongoose.connection.once('open', () => {
	console.log("连接成功")
})
// 关闭提示
mongoose.connection.once('close', () => {
	console.log("断开连接")
})