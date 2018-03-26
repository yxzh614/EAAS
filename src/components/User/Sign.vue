<template>
  <div>
    <el-card class="login-form">
      <el-form>
        <el-form-item label="用户名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-button @click="goHome()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Con from './Control'
export default {
  methods: {
    goHome () {
      this.$message({
        message: '登陆成功',
        type: 'success'
      })
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
.login-form {
  width: 50%;
  margin-left: 25%;
}
</style>
