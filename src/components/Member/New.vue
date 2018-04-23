<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
      <el-breadcrumb-item>社团招新</el-breadcrumb-item>
    </el-breadcrumb>
    <el-upload
      style="
        margin-left: 30%;
        margin-top: 150px;"
      :action="uploadURL"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="1"
      :on-success="onSuccess"
      :on-error="onError" 
      drag
      :on-exceed="handleExceed"
      :file-list="fileList">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传xls文件</div>
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
    <el-tooltip class="item" effect="dark" content="招新模板.xls" placement="bottom-start">
      <a class="el-button" target="_blank" style="background-color: #b2b2e0;" :href="fileURL + 'st/static/招新模板.xls'" download="招新模板.xls">招新模板</a>
    </el-tooltip>
  </div>
</template>

<script>
import axios from '../../services/my-axios'
export default {
  data () {
    return {
      fileList: [
      ]
    }
  },
  computed: {
    uploadURL () {
      return axios.baseURL + axios.updateNew
    },
    fileURL () {
      return axios.fileBaseURL
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件`
      )
    },
    onSuccess () {
      this.$message({
        message: '上传成功',
        type: 'success',
        duration: 1000
      })
    },
    onError () {
      this.$message({
        message: '上传失败,请重新检查文件',
        type: 'warning',
        duration: 1000
      })
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style scoped>
.el-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.el-upload {
  margin-left: 200px;
  margin-top: 200px;
}
</style>
