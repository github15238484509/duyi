<template>
  <div id="app" >
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus=""
          autocomplete="off"
          placeholder="What needs to be done?"
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li class="todo" v-for="it in todoFilterRef" :key="it.id">
            <div class="view">
              <input class="toggle" type="checkbox" v-model="it.complete" />
              <label>{{ it.title }}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" type="text" />
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          <strong>3</strong>
          <span>items left</span>
        </span>
        <ul class="filters">
          <li><a href="#/all" class="selected">All</a></li>
          <li><a href="#/active" class="">Active</a></li>
          <li><a href="#/completed" class="">Completed</a></li>
        </ul>
        <button class="clear-completed" style="display: none">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import useTodoList from "./useTodoList.js";
import useNewTodos from "./useNewTodo..js";
import useFilter from "./useFilter.js";
export default {
  setup() {
    let Todolist = useTodoList();
    console.log(Todolist);

    return {
      Todolist,
      ...useNewTodos(Todolist),
      ...useFilter(Todolist),
    };
  },
};
</script>
