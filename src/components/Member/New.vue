<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
      <el-breadcrumb-item>社团招新</el-breadcrumb-item>
    </el-breadcrumb>
    <el-upload
      style="
        margin-left: 35%;
        margin-top: 200px;"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      :limit="1"
      drag
      :on-exceed="handleExceed"
      :file-list="fileList">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-tooltip class="item" effect="dark" content="xxx.xls" placement="bottom-start">
      <el-button type="primary">下载模板</el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: [
      ]
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
