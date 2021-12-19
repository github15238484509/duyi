import { randomId } from "../../utils"

export default function useNewTodos(TodosRef) {
    function addTodo(title) {
        let info = {
            title: title.trim(),
            complete: false,
            date: Date.now(),
            id:randomId()
        }

        TodosRef.value.push(info)
    }
    window.addTodo = addTodo
    return {
        addTodo
    }
}