<template>
  <div>
    <input type="text">
    <button @click="goHome()">go</button>
  </div>
</template>

<script>
import Con from './Control'
export default {
  methods: {
    goHome () {
      Con.data.isLogged = true
      this.$router.push({name: 'Index'})
    }
  },
  beforeRouteLeave (to, from, next) {
    if (Con.data.isLogged) {
      next()
    }
  }
}
</script>

<style>

</style>
