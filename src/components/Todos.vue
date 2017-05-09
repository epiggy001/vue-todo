<template>
  <div>
    <form>
      <input type="text" v-model="text" @keyup.enter="addTodo({text})"/>
    </form>
    <ul>
      <TodoItem v-for="todo of todos" :todo="todo" :key="todo.id"/>
    </ul>
  </div>
</template>
<script>
import TodoItem from './TodoItem'
export default {
  props: ['todos', 'addTodo'],
  components: {TodoItem},
  data () {
    return {text: ''}
  }
}
</script>
