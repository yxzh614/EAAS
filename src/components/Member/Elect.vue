<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
      <el-breadcrumb-item>换届选举</el-breadcrumb-item>
    </el-breadcrumb>
    <el-upload
      style="
        margin-left: 35%;
        margin-top: 200px;"
      :action="uploadURL"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="1"
      drag
      :on-exceed="handleExceed"
      :file-list="fileList">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传xls文件</div>
    </el-upload>
    <el-tooltip class="item" effect="dark" content="xxx.xls" placement="bottom-start">
    <a class="el-button" target="_blank" :href="fileURL + '/templete1'">下载模板</a></el-tooltip>
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
      return axios.updateMember
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
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style scoped>
.el-upload {
  margin-left: 20px;
}
.el-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
