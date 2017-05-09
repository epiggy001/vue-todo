<template>
  <todos :todos="todos" :addTodo="addTodo"></todos>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Todos from '../components/Todos'

export default {
  computed: mapState('todos', ['todos']),
  components: {Todos},
  methods: mapActions('todos', ['updateTodos', 'addTodo']),
  created () {
    this.updateTodos()
  }
}
</script>
