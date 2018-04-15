<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>发布培训</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :label-position="'top'" label-width="100px">
      <el-form-item label="培训名称">
        <el-input v-model="form.trainName" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="培训时间">
        <el-date-picker
          v-model="form.trainTime"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="培训地点">
        <el-input v-model="form.trainRoom" placeholder="请输入内容"></el-input>
      </el-form-item>
      <el-form-item label="培训说明">
        <el-input type="textarea" v-model="form.trainExplain"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="onSubmit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from '../../services/my-axios'
export default {
  data () {
    return {
      date: '',
      input: '',
      form: {
        trainTime: '',
        trainName: '',
        trainRoom: '',
        trainExplain: ''
      }
    }
  },
  methods: {
    onSubmit () {
      axios.addTrain(this.form).then(_ => {
        if (_.data.status === 'ok') {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.el-select {
  width: 100%;
}
.el-input-number {
  width: 100%;
}
.el-date-editor {
  width: 100%;
}
.el-form {
  width: 30%;
  margin-left: 35%;
}
.el-button {
  width: 100%;
  margin-left: 0;
  margin-right: auto;
}
</style>
