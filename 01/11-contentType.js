// ip 地址用来定位计算机
// 端口号用来定位具体的应用程序
// 所有需要联网通信的应用程序都会占用一个端口号

var http = require('http')

var server = http.createServer()

// 2. 监听 request 请求事件，设置请求处理函数
server.on('request', function (req, res) {
    // 浏览器可能会安装服务器响应内容的编码的情况下回按照操作系统的默认编码去解析
    // 所以传输时最好要加上对应的编码
    // Content-Tppe是用来告知对方发送的数据内容是什么类型
    var url = req.url

    if(url==='/plain'){
        res.setHeader('Content-Type','text/plain;charset=utf-8')
        res.end('hello 世界')
    }else if(url==="/html"){
      // 360浏览器会自动解析为utf-8,但Chrome会用gbk
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end('<p>这个世界真美妙</p>')
    }

})

server.listen(3000, function () {
  console.log('服务器启动成功，可以访问了。。。')
})

//可以同时开启多个监听服务,但是不能占用相同的端口号