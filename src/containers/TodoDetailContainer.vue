<template>
  <TodoDetail :todo="todo"/>
</template>
<script>
import TodoDetail from '../components/TodoDetail'
import { mapGetters } from 'vuex'
export default {
  props: ['id'],
  components: {TodoDetail},
  computed: mapGetters('todos', ['findTodo']),
  created () {
    var id = parseInt(this.id, 10)
    this.todo = this.findTodo(id)
  }
}
</script>
