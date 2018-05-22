
// require()方法有两个作用:
//     1.加载文件模块并执行里面的代码
//     2.拿到被加载文件模块中都提供了一个对象:exports
//     exports默认是一个空对象
// 要做的就是把所有需要被外部访问的成员加载到exports对象中



var ret=require("./02-b-被加载")

// console.log(foo)
console.log(ret)
// 和核心模块一样,因为得到的是被引用文件的对象,所有需要使用ret.方法/属性的方式来获取
console.log(ret.add(1,2))
console.log(ret.age)

