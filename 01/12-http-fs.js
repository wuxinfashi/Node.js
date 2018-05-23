// 1.结合fs模块发送文件中的数据
// 2.Content-Type要根据不同数据类型来返回
// 一般只有文字需要返回文字编码



var http = require('http')
var fs = require('fs')

var server = http.createServer()

// 2. 监听 request 请求事件，设置请求处理函数
server.on('request', function (req, res) {
    // 浏览器可能会安装服务器响应内容的编码的情况下回按照操作系统的默认编码去解析
    // 所以传输时最好要加上对应的编码
    // Content-Tppe是用来告知对方发送的数据内容是什么类型
    var url = req.url
    if(url==="/"){
        // 读取需要获取的文件
        fs.readFile('./resource/index.html',function (err,data) {
            if(err){
                res.setHeader('Content-Type','text/plain;charset=utf-8')
                res.end('文件读取失败,请稍后再试')
            }else {
                //data 默认的是二进制数据,可以通过toString来转换为字符串
                // 但这里我们不需要转换,直接发送二进制数据即可
                res.setHeader('Content-Type','text/html;charset=utf-8')
                res.end(data)
            }
        })
    }
    else if(url ==='/a'){
        // 读取需要获取的文件
        fs.readFile('./resource/ab2.jpg',function (err,data) {
            if(err){
                res.setHeader('Content-Type','text/plain;charset=utf-8')
                res.end('文件读取失败,请稍后再试')
            }else {
                // 要根据不同数据类型返回不同的数据头
                res.setHeader('Content-Type','image/jpeg')
                res.end(data)
            }
        })
    }

})

server.listen(3000, function () {
    console.log('服务器启动成功，可以访问了。。。')
})

//可以同时开启多个监听服务,但是不能占用相同的端口号