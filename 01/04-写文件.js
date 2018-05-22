var fs = require('fs');
// 第一个参数:文件路径
// 第二个参数:要写入的文件内容(默认会覆盖文件中的内容)
// 第三个参数:回调函数(只有一个参数error)
// 成功:文件写入成功,error为null
// 失败:文件写入失败,error为错误对象
fs.writeFile("./test/02-被写的文件.txt","大家好,我叫哈哈哈",function (error) {
    if(error) console.log(error);
    else console.log("写入文件成功")

})