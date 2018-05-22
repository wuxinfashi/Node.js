// require()是一个用来加载模块的方法
// 在NODE中模块有三种:
// 1.具名的核心模块,例如:fa、os、http
// 2.用户自己编写的文件模块
// NODE中没有全局作用域,只有模块作用域,无论方法还是变量都是模块作用域
//     外部访问不到内部,内部访问不到外部
// 问题:既然是模块作用域,那么如何在模块之间通信

var foo = 'bar'
function add(x,y){
    return x+y;
}
console.log("a start")
// 后缀名可以不写
 require("./b.js")
console.log(foo)
console.log("a end")

