
var http = require("http");

var server = http.createServer();

// request请求时间处理函数,需要接收两个参数(注意要写形参)
// request 请求对象
// 请求对象可以用来获取客户端的一些请求信息,如请求路径
// response 响应对象
// 方法:write() end() 必须有end()
// 响应对象可以用来给客户端发送响应消息
// 其中write方法来给客户端发送响应数据,write方法可以使用多次,但最后一定要使用end来结束响应,否则客户端会一直等待

server.on("request",function (request,response) {
    console.log("接收到了请求了,请求路径是"+request.url)
    // 接收到了请求了,请求路径是/a
    // response.write("hello")
    // response.write("nodejs")
    // response一定要有end()来告诉客户端已经响应完毕,否则客户端会一直等待
    // response.end();

    // 根据路径反馈
    var url = request.url
    switch (url){
        case "/login":
            response.write("登录");
            response.end();
            break;
        case "/register":
            response.write("注册");
            response.end();
            break;
        case "/haha":
            response.write("哈哈哈");
            response.end();
            break;
    }

})
server.listen(3000,function () {
    console.log('服务器启动成功了,可以通过http://127.0.0.1:3000/ 来进行访问')
})


// 如果想根据不同的路径响应不同的结果
// /index
// /login 登录
// /regist 注册
// /haha 哈哈哈
//
//



