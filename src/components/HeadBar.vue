<template>
<header>
  <h1>
    <a href="/">管理系统</a>
  </h1>
</header>
</template>
<script>
export default {
  name: 'HeadBar',
  Data () {
    return {
      _activeIndex: '1'
    }
  },
  computed: {
    activeIndex: function () {
      return this._activeIndex
    }
  },
  methods: {
    handleSelect: function () {

    }
  }
}
</script>
<style>
header > h1 > a {
  text-decoration: none;
}
</style>
