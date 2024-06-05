import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';
export const useTodoListStore = defineStore('todoList', () => {
  // 방응형 상태
  const state = reactive({
    todoList: [
      { id: 1, todo: 'ES6 학습', done: false },
      { id: 2, todo: 'React 학습', done: false },
      { id: 3, todo: 'ContextAPI 학습', done: true },
      { id: 4, todo: '야구경기 관람', done: false },
    ],
  });
  const todoList = computed(() => state.todoList);
  // action
  const addTodo = (todo) => {
    state.todoList.push({ id: new Date().getTime(), todo, done: false });
  };
  const deleteTodo = (id) => {
    let index = state.todoList.findIndex((todo) => todo.id === id);
    state.todoList.splice(index, 1);
  };
  const toggleDone = (id) => {
    let index = state.todoList.findIndex((todo) => todo.id === id);
    state.todoList[index].done = !state.todoList[index].done;
  };
  // 계산된 속성
  const doneCount = computed(() => {
    return state.todoList.filter((todoItem) => todoItem.done === true).length;
  });
  return { todoList, doneCount, addTodo, deleteTodo, toggleDone };
});
