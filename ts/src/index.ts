
let str: string = "lmg";
console.log("5566132 2")

function add(a: number, b: number = 10): number {
  return a + b
}
var num: number = add(1)
console.log(num)
// let name: null = null;

let name: number | string = "132";

let obj: {
  name: string
  age: number
}

obj = {
  name: 'kl',
  age: 12,
}

let gender: '男' | '女'
gender = "男"

type Gender = "男" | '女'
type User = {
  name: string
  age: number
  gender: Gender
}


let user: User;
user = {
  name: "132",
  age: 12,
  gender: '男'
}

function getUser(g: Gender): User[] {

  return []
}

// 函数重载
/**
 * a和b字符拼接的结果
 * @param a 
 * @param b 
 */
function combine(a: string, b: string): string;
/**
 * a*b 的结果
 * @param a 
 * @param b 
 */
function combine(a: number, b: number): number;
function combine(a: string | number, b: string | number): string | number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b
  }
  throw new Error('参数的类型必须一样')
}
const com = combine("2", "3")

// 可选参数
function choosable(a: number, b: number, c?: number): number {
  if (c) {
    return a + b + c
  } else {
    return a + b
  }
}
let choosablenum = choosable(1, 2, 5)


// 枚举
// 枚举会在编译结果中出现
enum Enumerable {
  level1,
  level2,
  level3,
}
console.log(Enumerable.level1);

enum Enumerable2 {
  level1 = '等级一',
  level2 = '等级二',
  level3 = '等级三',
}
console.log(Enumerable2.level1);

console.log('=========');

abstract class OneUser {
  name: string = '465'
  sayHello(){
    console.log(`===${this.name}`);
  }
  abstract age:number
}
class tow extends OneUser{
  age: number=132;
  say(){
    super.sayHello()
  }
}
new tow().say()



