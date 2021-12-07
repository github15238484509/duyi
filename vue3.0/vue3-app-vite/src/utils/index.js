export function fatchTodo() {
    let list = localStorage.getItem("todos")
    if (list) {
        list = JSON.parse(list)
    } else {
        list = []
    }
    return list
}
export function saveTodo(TodoListRef) {
    localStorage.setItem("todos", JSON.stringify(TodoListRef))
}

export function randomId() {
    let time = Date.now()
    let random = Math.random().toString(16).substr(2, 4)
    return time + random
}
export function filter(list,type){
    console.log(type);
    if(type=="all"){
        return list
    }else if(type =="completed"){
        return list.filter((it)=>it.complete)
    }else if(type =="active"){
        return list.filter((it)=>!it.complete)
    }
    throw 'type 非法'
}