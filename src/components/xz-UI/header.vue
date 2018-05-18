<template>
  <header :style="{ height }">
    <slot></slot>
  </header>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>

<style>

</style>
