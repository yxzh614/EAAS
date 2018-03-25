<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>发布培训</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form label-width="100px">
      <el-form-item label="培训名称">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="培训时间">
        <el-date-picker
          v-model="date"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="培训地点">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="培训说明">
        <el-input type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: '',
      input: ''
    }
  }
}
</script>

<style scoped>
.el-form {
  width: 35%;
}
.el-input {
  width: 100%;
}
.el-date-picker {
  width: 100%;
}
</style>
