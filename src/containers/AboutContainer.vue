<template>
  <div>{{msg}}</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: mapState('about', ['msg'])
}
</script>
