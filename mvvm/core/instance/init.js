import {constructProxy} from "./proxy.js"
let id = 0

function initMinix(Due) {
  Due.prototype._init = function (option) {
    const vm = this
    vm._id = id++
    vm.idDue = true
    // 初始化data
    if(option&&option.data){
      vm._data = constructProxy(vm,option.data(),"")
    }
    // 初始化created 函数执行
    // 初始化methods
    // 初始化 computed
    // 初始化el的挂载

  }
}
export default initMinix