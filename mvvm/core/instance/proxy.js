import { renderData } from "./render.js";

export function constructProxy(vm, obj, namespace) {
  var proxyObj = null
  if (obj instanceof Array) {
    proxyObj = new Array(obj.length)
    proxyObj = proxyArray(vm, obj, namespace);
    for (let i = 0; i < obj.length; i++) {
      proxyObj[i] = constructProxy(vm, obj[i], namespace);
    }
  } else if (obj instanceof Object) {
    proxyObj = proxyObject(vm, obj, namespace)
  } else {
    return obj
  }

  return proxyObj
}

var arrPrototype = Array.prototype

function defineArrayFfun(vm, arrobj, type, namespace) {
  Object.defineProperty(arrobj, type, {
    configurable: true,
    enumerable: true,
    value: function (...arg) {
      var fn = arrPrototype[type]
      var list = []
      for (let i = 0; i < arg.length; i++) {
        list.push(constructProxy(vm, arg[i], namespace))
      }
      var result = fn.apply(this, list)
      renderData(vm,namespace)
      return result
    }
  })
}

function proxyArray(vm, arr, namespace) {
  var arrobj = {
    eleTyle: "Array",
    toString() {
      return JSON.stringify(this)
      var result = ""
      for (let index = 0; index < arr.length; index++) {
        result += arr[index] + ', '
      }
      return result.substring(0, result.length - 2)
    },
    push() {},
    pop() {},
    unshift() {},
    shift() {},
  }
  defineArrayFfun.call(vm, vm, arrobj, "push", namespace)
  defineArrayFfun.call(vm, vm, arrobj, "pop", namespace)
  defineArrayFfun.call(vm, vm, arrobj, "unshift", namespace)
  defineArrayFfun.call(vm, vm, arrobj, "shift", namespace)
  arr.__proto__ = arrobj
  return arr
}

function proxyObject(vm, obj, namespace) {
  var proxyObj = {}
  for (const props in obj) {
    if (Object.hasOwnProperty.call(obj, props)) {
      Object.defineProperty(proxyObj, props, {
        configurable: true,
        enumerable: true,
        get() {
          return obj[props]
        },
        set: function (value) {
          console.log(getRightName(namespace, props));
          obj[props] = value
          renderData(vm ,getRightName(namespace, props))
        }
      })
      Object.defineProperty(vm, props, {
        configurable: true,
        enumerable: false,
        get() {
          return obj[props]
        },
        set: function (value) {
          console.log(getRightName(namespace, props));
          obj[props] = value
          renderData(vm ,getRightName(namespace, props))
        }
      })
    }
    if (obj[props] instanceof Object) {
      obj[props] = constructProxy(vm, obj[props], getRightName(namespace, props))
    }
  }
  return proxyObj
}


function getRightName(namespace, props) {
  if (namespace == null || namespace == "") {
    return props
  } else if (props == null || props == "") {
    return namespace
  } else {
    return `${namespace}.${props}`
  }
}