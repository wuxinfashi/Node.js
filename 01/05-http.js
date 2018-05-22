//使用node构建一个web服务器
//在NODE中有一个核心模块:http,专门用于创建和编写服务器

// 1.引入http模块
var http = require("http");

// 2.使用http.createServer()方法创建一个web服务器
var server = http.createServer();

// 3.使用服务器提供对数据的服务
// 流程:发送请求 接收请求 处理请求 发送反馈
// 1.接收请求,并执行回填函数
server.on("request",function () {
    console.log("接收到了请求了")
})

// 4.绑定端口号,启动服务器(第二个参数:回填函数)
server.listen(3000,function () {
    console.log('服务器启动成功了,可以通过http://127.0.0.1:3000/ 来进行访问')
})