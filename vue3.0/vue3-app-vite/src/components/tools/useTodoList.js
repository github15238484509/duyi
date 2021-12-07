import { fatchTodo, saveTodo } from "../..//utils/index.js"
import { ref, watchEffect } from "vue"

export default function useTodoList() {
    let TodosRef = ref(fatchTodo())
    watchEffect(() => {
        saveTodo(TodosRef.value)
    })
    window.TodosRef = TodosRef
    return TodosRef
}