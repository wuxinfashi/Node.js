var foo = "bbb"

// 如果没有定义exports,那返回给引用文件的就是个空对象
exports.foo = "hello"
// console.log(exports)
exports.add = function (x,y) {
    return x+y;
}

// b中这样定义的方法不影响a获取到的方法
/*
function add(x,y) {
    return x-y
}*/

var age = 18;
exports.age = age;