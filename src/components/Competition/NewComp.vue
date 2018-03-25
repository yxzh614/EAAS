<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>发布竞赛</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button>上传报名信息表格</el-button>
    <el-form ref="form" :model="form" label-width="100px">

    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        limit: 0,
        officialSite: '',
        enterDeadline: '',
        info: '',
        name: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$message({
        message: '成功发布了比赛！',
        type: 'success'
      })
      this.$router.push({name: 'CompList'})
    },
    handleChange () {

    }
  }
}
</script>

<style scoped>
  div {
    width: 700px;
  }
  .el-form {
    margin: 0 auto;
  }
  .el-input-number {
    width: 33%;
  }
  .el-date-picker {
    width: 50%;
  }
</style>
