import { reactive, ref, readonly, toRefs, computed, watchEffect } from "vue"


function useUser() {
    // 在这里补全函数
    let originUser = reactive({})
    let user = readonly(originUser)
    function setUserAge(age) {
        originUser.age = age
    }
    function setUserName(name) {
        originUser.name = name
    }
    return {
        user, // 这是一个只读的用户对象，响应式数据，默认为一个空对象
        setUserName, // 这是一个函数，传入用户姓名，用于修改用户的名称
        setUserAge, // 这是一个函数，传入用户年龄，用户修改用户的年龄
    }
}
window.useUser = useUser()

function useDebounce(obj, duration) {
    // 在这里补全函数
    let originUse = reactive(obj)
    let value = readonly(originUse)
    let timer = null
    function setValue(info) {
        clearTimeout(timer)
        setTimeout(() => {
            for (const key in info) {
                if (Object.hasOwnProperty.call(info, key)) {
                    originUse[key] = info[key];
                }
            }
        }, duration)
    }
    return {
        value, // 这里是一个只读对象，响应式数据，默认值为参数值
        setValue // 这里是一个函数，传入一个新的对象，需要把新对象中的属性混合到原始对象中，混合操作需要在duration的时间中防抖
    }
}
window.useDebounce = useDebounce({ name: 5 }, 3000)

let obj = reactive({
    name: 123
})
watchEffect(() => {
    console.log(0);
    console.log(obj.name);
})
setTimeout(()=>{
    obj.name = 852
    console.log(obj);
},1000)