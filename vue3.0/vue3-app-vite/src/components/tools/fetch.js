import { ref, watchEffect } from "vue"
import { getTodos, saveTodos } from "./utils"


export function fetchData() {
    let todosRef = ref(getTodos())
    window.todos = todosRef
    watchEffect(() => {
        saveTodos(todosRef.value)
    })
    return {
        todosRef,
    }
}



