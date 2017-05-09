<template>
  <li><router-link :to="'/todo/'+ todo.id">{{todo.text}}</router-link></li>
</template>
<script>
export default {
  props: ['todo']
}
</script>
