import { ref } from "vue"
import { randomId} from "./utils"


export function useNewTodo(todosRef) {
    let dotoTitleRef = ref("")
    function addTodo() {
        console.log(dotoTitleRef);
        if (!dotoTitleRef.value.trim()) {
            return
        }
        let info = {
            id: randomId,
            date: new Date().getTime(),
            completed: false,
            title: dotoTitleRef.value
        }
        todosRef.value.push(info)
        dotoTitleRef.value = ""
    }

    return {
        dotoTitleRef,
        addTodo
    }
}