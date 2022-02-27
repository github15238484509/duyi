function add(m = 0, n = 0) {
  function fn(...j) {
    var result = j.reduce((a, b) => {
      return a + b
    }, 0)
    return add(m + n, result)
  }
  fn.toString = function () {
    return m + n
  }
  return fn
}

// var a = add(3, 5)(6)(20, 10)
// console.log(a.call({}));


function add(...arg1) {
  function Fn(...arg2) {
    var arg = [].concat(arg1, arg2)
    return add(...arg)
  }
  Fn.toString = () => {
    return arg1
  }
  return Fn
}
var a = add(3, 5)(6)(20, 10)
console.log(a);