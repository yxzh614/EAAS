<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>签到上传</el-breadcrumb-item>
    </el-breadcrumb>
    <el-upload
      style="
        margin-left: 35%;
        margin-top: 200px;"
      drag
      ref="upload"
      :action="uploadURL"
      multiple
      :on-success="handleSuccess"
      accept="dat">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传.dat文件</div>
      </el-upload>
  </div>
</template>

<script>
import axios from '../../services/my-axios'
export default {
  data () {
    return {
      fileList: []
    }
  },
  computed: {
    uploadURL () {
      return axios.baseURL + '/qiandaoauto'
    }
  },
  methods: {
    handleSuccess () {
      this.$message({
        message: '上传成功',
        type: 'success'
      })
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
    },
    beforeRemove (file, fileList) {
    }
  }
}
</script>