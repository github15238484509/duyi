
export function randomId() {
    return new Date().getTime() + Math.random().toString(16).substr(2, 4)
}

const TODOS = 'TODOS'
export function getTodos() {
    let todos = localStorage.getItem(TODOS) || '[]'
    return JSON.parse(todos)
}

export function saveTodos(todo) {
    localStorage.setItem(TODOS, JSON.stringify(todo));
}