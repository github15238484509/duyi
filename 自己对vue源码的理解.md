## init Vue

1. 合并new Vue传进来的options和一些默认配置

2. 初始和生命周期相关的内容 

   - 定义组件的状态信息 比如

     vm.$parent = parent 自己的父级

      vm.$root = parent ? parent.$root : vm 根

     vm.$children = []

      vm.$refs = {}

      vm._watcher = null

      vm._inactive = null

      vm._directInactive = false

      vm._isMounted = false

      vm._isDestroyed = false

      vm._isBeingDestroyed = false

3. 初始化 initEvents 参数为 new Vue的实例

   - 更新组件就是vue的实例的 listeners，就是组件的内部的eventbus

4. 初始化initRender

   - $attrs,和$listeners定义响应式 这就是props，和listeners，也有一部分不是（现在还没有，为以以后做铺垫）

5. 执行beforeCreate

6. 执行injections 就是provide注入的inject变成响应式

7. 初始化 initstate

   - initProps

   - initMethods

     - 绑定方法，并看看有没有和重名的

   - initData

     - new Observer 的方式添加响应式，并且Observer 里面有this.dep = new Dep（）
     - 如果是数组调用this.observeArray
       - 判断里面的每一项继续 observe
     - 是对象调用walk直接定义 definedReactive
       - 为每一项定义响应式的对象创建一个new Dep（）
       - 会判断里面的对象的值是否可以配置configurable，不可配置直接返回（从这一点可以判断冻结对象可以优化性能，长列表优化）
       - 使用Object.defineProperty定义响应式，
       - get的时候执行 dep.depend（）加入依赖
       - 对于set如果设置的值和以前一样，直接返回不管
       - 调用dep.notify（）然后执行，加入的depend，的updata

   - initCoomputed

     - 调用defineComputed  维护一个对象 sharedPropertyDefinition

       - ```js
         const sharedPropertyDefinition = {
         	enumerable: true,
         	configurable: true,
         	get: noop,
         	set: noop
         }
         ```

     - 看看有没有缓存

       - 有缓存就调用createComputedGetter（get）
         - 返回一个函数这个函数这个函数执行，会获取缓存换成是个对象，看看缓存的dirty是否是脏值，如果在重新设置 缓存的vuale，和dirty = false
         - 为每一个使用这个计算属性的值绑定   depend
       - 没有就调用 createConputedInvoker
         - 执行函数获取返回值

     - 定义响应式 

   - initWatch Object.defineProperty(target, key, sharedPropertyDefinition)

     - 判断watch对象的对应的属性值是数组（一个watch监听多个函数）还是函数，然后调用createWctcher函数  createWatcher(vm, key, handler)
     - 然后调用vm，new Vue实例上面的$watch绑定

8. initProvide 注入属性为自己的后代组件使用  （对应6）

9. 执行created

10. 看看有么可有el，有执行$mount挂载

    

## stateMixin

 	1. 为Vue.prototype定义$data返回的是this.__data_
 	2. 为Vue.prototype定义$props 返回的是this.__prop_
 	3. 设置 $set,$delete
 	4. 设置Vue.prototype.$watch



## eventsMixin

1. 为Vue.prototype.$on
2. 为Vue.prototype.$once
3. 为Vue.prototype.$emit
4. 为Vue.prototype.$off

## lifecycleMixin

​		定义原型操作的生命周期

1. Vue.prototype._update
2. Vue.prototype.$forceUpdate
3. Vue.prototype.$destroy

## renderMixin

定义原型方法

1. Vue.prototype.$nextTick
2.  Vue.prototype._render