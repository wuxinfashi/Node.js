// 浏览器中的js是没有文件操作的能力
// 但是nodejs中的js具有文件操作能力

// fa是文件系统的简写
// NODE中如果想要进行文件操作,就必须引入fs这个核心模块
// fs这个核心模块中,就提供了所有文件操作的API
// 例如fs.readFile就是用来读取文件的

// 1.使用require方法加载fs核心模块
// 2.读取文件
    // 1.第一个参数是读取文件的路径
    // 第二个参数是回调函数(注意要写形参)
    // 成功:
    //     data 数据
    //     error null
    // 失败:
    //     data undefined没有数据
    //     error 错误对象

var fs = require('fs');

fs.readFile("./test/helloworld.txt",function (error,data) {
    if(error)console.log(error);
    console.log(data.toString())
});

// 读取结果:
    // <Buffer e7 ac ac e4 b8 80 e4 b8 aa e8 a2 ab e8 af bb e5 8f 96 e7 9a 84 e6 96 87 e4 bb b6>
// 读取的是二进制数据,转换为了16进制的数据
// 我们可以使用toString的方法进行转换