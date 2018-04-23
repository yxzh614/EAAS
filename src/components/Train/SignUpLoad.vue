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
      :on-error="handleError"
      accept="dat">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传.dat文件</div>
      </el-upload>
      <el-alert
      style="width: 50%;
        margin-left :25%;
        margin-top :20px;"
      title="上传文件请注意"
      type="warning"
      description="请严格按照模板(在右下角处下载)填写表格,否则上传数据将无效"
      show-icon>
    </el-alert>
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
    handleError () {
      this.$message({
        message: '文件不可用,请重新上传',
        type: 'warning'
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