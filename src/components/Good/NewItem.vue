<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
      <el-breadcrumb-item>入库管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :inline="false" :model="form" class="demo-form-inline">
      <el-form-item label="商品名称">
        <el-input v-model="form.name" placeholder="输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="种类">
        <el-input v-model="form.type" placeholder="输入种类"></el-input>
      </el-form-item>
      <el-form-item label="位置">
        <el-input v-model="form.location" placeholder="位置"></el-input>
      </el-form-item>
      <el-form-item label="尺寸">
        <el-select v-model="form.size" placeholder="请选择">
          <el-option
            v-for="item in [{value: '大', label: '大'},{value: '中', label: '中'},{value: '小', label: '小'}]"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-switch
          v-model="valuexh"
          active-text="可消耗"
          inactive-text="不可消耗">
        </el-switch>
      </el-form-item>
      <el-form-item label="">
        <el-upload
          class="upload-demo"
          ref="upload"
          :action="uploadURL"
          :limit="1"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取图片</el-button>
          <div slot="tip" class="el-upload__tip">上传1个图片</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button class="submit" @click="onSubmit" type="primary">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from '../../services/my-axios'
export default {
  data () {
    return {
      form: {
        name: null,
        isXiaoHao: null,
        type: null,
        location: null,
        size: null
      },
      fileList: [],
      valuexh: false,
      picList: [],
      value8: '',
      num1: 0,
      money: 0
    }
  },
  computed: {
    uploadURL () {
      return axios.baseURL + '/addgoodpic'
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    onSubmit () {
      this.valuexh ? this.form.isXiaoHao = 1 : this.form.isXiaoHao = 0
      axios.newGood(this.form).then(_ => {
        let data = _.data
        console.log(data)
        this.$refs.upload.submit()
        this.$message({
          message: '成功添加了物资！',
          type: 'success'
        })
        this.$router.push({name: 'GoodList'})
      }).catch(_ => {
        console.log(_)
      })
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
