
//装饰器的参数有两种写法；装饰器可以有多个，执行顺序为从下到上，装饰器必须是一个函数，，可以是个高阶函数
// function test1(target: Function) {
//     console.log("test1");
// }
// function test2(target: new () => object) {
//     console.log("test2");
// }
// function test3(str: string) {
//     console.log(str);
//     return function (target: new () => object) {
//         console.log("test3",str);
//     }
// }
// @test3('我好帅呀')
// @test1
// @test2
// class A {
// }
// 我好帅呀
// test2
// test1
// test3 我好帅呀


// 装饰器可以修饰静态属性，和实例属性，都有两个参数
// 饰静态属性 1 是构造函数 ，2 就是属性
// 实例属性  1 是构造函数的原型， prototype ，2 就是属性
// 如果有方法，则会有第三个参数，参数为属性的描述符对现象
function test() {
    return function (target: any, key: string, description?: PropertyDescriptor) {
        console.log(target, key, description);
    }
}
class A {
    @test()
    prop1: string = "132"

    @test()
    static prop2: string

    @test()
    prop3() {

    };
}