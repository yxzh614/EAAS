<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>发布竞赛</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="比赛名称">
        <el-input v-model="form.comName"></el-input>
      </el-form-item>
      <el-form-item label="比赛简介">
        <el-input v-model="form.explain"></el-input>
      </el-form-item>
      <el-form-item label="比赛日期">
        <el-date-picker
          v-model="form.comTime"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="报名截止日期">
        <el-date-picker
          v-model="form.jiezhibaoming"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="队伍人数限制">
        <el-input-number v-model="form.memberLimit" :min="1" :max="10" label=""></el-input-number>
      </el-form-item>
      <el-form-item label="">
        <el-upload
          class="upload-demo"
          ref="upload"
          action="http://localhost:8080/addfujian/"
          :limit="2"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <div slot="tip" class="el-upload__tip">上传2个附件</div>
        </el-upload>
        <el-button @click="onSubmit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import myAxs from '../../services/my-axios'
export default {
  data () {
    return {
      form: {
        memberLimit: 0,
        comName: '123123',
        comTime: '123123',
        explain: '123123',
        jiezhibaoming: '123123'
      },
      fileList: []
    }
  },
  methods: {
    onSubmit () {
      myAxs.newComp(this.form).then(_ => {
        let data = _.data
        console.log(data)
        this.$refs.upload.submit()
        this.$message({
          message: '成功发布了比赛！',
          type: 'success'
        })
        this.$router.push({name: 'CompList'})
      })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
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
