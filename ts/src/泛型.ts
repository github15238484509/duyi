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

//多种类型的泛型合并
function combin<T,K>(arr1:T[],arr2:K[]){
  let arr:(T|K)[] = []
  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i]);
    arr.push(arr2[i]);
  }
  return arr
}
var arr1 = [1,2,34,4]
var arr2 = ["2","6","7","2"]
let result = combin(arr1,arr2)