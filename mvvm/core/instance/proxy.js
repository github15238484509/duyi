export function constructProxy(vm, obj, namespace) {
  var proxyObj = {}
  if (obj instanceof Array) {

  } else if (obj instanceof Object) {
    for (const props in obj) {
      if (Object.hasOwnProperty.call(obj, props)) {
        Object.defineProperty(proxyObj, props, {
          configurable: true,
          enumerable: false,
          get() {
            return obj[props]
          },
          set: function (value) {
            obj[props] = value
          }
        })
        Object.defineProperty(vm, props, {
          configurable: true,
          enumerable: false,
          get() {
            return obj[props]
          },
          set: function (value) {
            console.log(props);
            obj[props] = value
          }
        })
      }
    }
  }
  return proxyObj
}