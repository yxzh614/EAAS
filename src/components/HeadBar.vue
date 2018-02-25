<template>
<!-- <header
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <h1>
    <a href="/">管理系统</a>
  </h1>
</header> -->
<el-menu
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#FFFFFF">
  <el-menu-item index="0">INDEX</el-menu-item>
  <el-menu-item class="right" index="1">用户中心</el-menu-item>
</el-menu>
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
    handleSelect: function (index) {
      this.$router.push({name: 'User'})
    }
  }
}
</script>
<style>
header > h1 > a {
  text-decoration: none;
}
</style>
<style scoped>
.right {
  float: right;
}
</style>

