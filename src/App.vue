<template>
  <div id="app">
      <el-container class="main">
    <el-header>
      <HeadBar/>
    </el-header>
    <el-container>
      <el-aside>
        <SideBar/>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
import SideBar from './components/SideBar'
import HeadBar from './components/HeadBar'

import Con from './components/User/Control'
export default {
  name: 'app',
  components: {
    SideBar,
    HeadBar
  },
  beforeCreate () {
    this.$router.beforeEach((to, from, next) => {
      console.log(to.name)
      console.log(Con.data.isLogged)
      if (to.name !== 'Sign') {
        if (!Con.data.isLogged) {
          this.$message({
            message: '请先登录',
            type: 'warning'
          })
          next('/Sign')
        }
      }
      next()
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.el-header {
  padding: 0;
}
.el-breadcrumb {
  margin-bottom: 15px;
}
.half-form {
  width: 50%;
  margin-left: 25%;
}
.el-aside {
  background-color: #77818b;
  min-height: 800px;
}
</style>
