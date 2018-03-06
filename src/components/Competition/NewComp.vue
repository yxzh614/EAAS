<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>发布竞赛</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="比赛名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="官方网址">
        <el-input v-model="form.officialSite"></el-input>
      </el-form-item>
      <el-form-item label="报名截止日期">
        <el-col>
          <el-date-picker type="date" placeholder="选择日期" v-model="form.enterDeadline" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="队伍人数限制">
        <el-input-number v-model="form.limit" @change="handleChange" :min="1" :max="20" label=""></el-input-number>
      </el-form-item>
      <el-form-item label="比赛简介">
        <el-input type="textarea" v-model="form.info"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
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
