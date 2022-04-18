//如果我们不用泛型返回的arr数组我们将不知道数据的每一项的值的类型
//在函数中使用
function tack<T>(arr: T[], n: number): T[] {
  if (arr.length <= n) {
    return arr
  }
  let newArr: T[] = []
  for (let i = 0; i < n; i++) {
    newArr.push(arr[i])

  }
  return newArr
}
let newArr = tack<number>([1, 2, 6, 4, 8, 5], 2)


// 泛型的继承

interface Name{
  name:string
}
let info = {
  name:'liu meng',
  age:12
}
function changeName<T extends Name>(user:T):T{
    user.name = user.name.split(" ").map(it=>it[0].toLocaleUpperCase()+it.substring(1)).join(" ")
    return user
}
let user2 = changeName(info)
user2.age

