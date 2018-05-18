<template>
  <div>
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#FFFFFF">
      <el-menu-item index="/Index">主页</el-menu-item>
      <!-- <el-menu-item class="right" index="/Sign">登录</el-menu-item> -->
      <p>电子协会管理系统</p>
    </el-menu>
  </div>
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
      this.$router.push({name: 'Index'})
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
p {
  color: white;
  font-size: 18px;
  text-align: center;
}
</style>