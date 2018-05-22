console.log("b.js文件被加载执行了")


// b中定义的foo不影响a中定义的foo
// var foo = "hahaha"
// b中没有a中定义的foo变量
// console.log(foo)
// 没有a中定义的add方法
// console.log(add(1,2));

/* ./不能省略,否则会当做是核心模块   */
require('./c')
console.log('b end')