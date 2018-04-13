<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
      <el-breadcrumb-item>入库管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="false" :model="form" class="demo-form-inline">
      <el-form-item label="商品名称">
        <el-input v-model="form.user" placeholder="输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="种类">
        <el-input v-model="form.user" placeholder="输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="位置">
        <el-input v-model="form.user" placeholder="输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="尺寸">  
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in [{value: 'da', label: 'da'},{value: 'da', label: 'da'},{value: 'da', label: 'da'}]"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-switch
          v-model="value2"
          active-text="可消耗"
          inactive-text="不可消耗">
        </el-switch>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="picList"
          list-type="picture"
          :auto-upload="false">
          <el-button size="small" type="primary">点击上传图片</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button class="submit" type="primary">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {

      },
      value2: 'false',
      picList: [],
      options: [{
        value: '选项1',
        label: '继电器1'
      }, {
        value: '选项2',
        label: '继电器2'
      }, {
        value: '选项3',
        label: '继电器3'
      }, {
        value: '选项4',
        label: '继电器4'
      }, {
        value: '选项5',
        label: '继电器5'
      }],
      value8: '',
      num1: 0,
      money: 0
    }
  },
  methods: {
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
.el-form {
  width: 40%;
  margin-left: 30%;
}
.el-select {
  width: 100%;
}
.submit {
  width: 20%;
  margin-left: 40%;
}
</style>
