<template>
<div>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
    <el-breadcrumb-item>归还物资</el-breadcrumb-item>
  </el-breadcrumb>
  <el-form :label-position="'top'" :inline="false" :model="form" class="">
    <el-form-item label="学号">
      <el-input v-model="form.memberId" @change="handleChange"></el-input>
    </el-form-item>
    <el-form-item label="商品名称">
      <el-select v-model="form.goodId" filterable placeholder="请选择">
        <el-option
          v-for="item in goodOwe"
          :key="item.goodId"
          :label="item.goodName"
          :value="item.goodId">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="数量">
      <el-input-number v-model="form.num" :min="1" :max="99"></el-input-number>
    </el-form-item>
    <el-form-item>
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
      form: {
        goodId: null,
        memberId: null,
        num: null
      },
      goodOwe: [
        {
          goodId: 1,
          goodName: '无',
          num: 0
        }
      ],
      GoodNames: []
    }
  },
  mounted () {
    axios.getGoodName().then(_ => {
      let data = _.data
      data.result.map(_ => {
        this.GoodNames.push(_)
      })
    })
  },
  methods: {
    handleChange (value) {
      axios.getMemberOwe(value).then(_ => {
        if (_.data.status === 'ok') {
          this.goodOwe = _.data.result
        }
      })
    },
    onSubmit () {
      axios.goodGiveBack(this.form).then(_ => {
        if (_.data.status === 'ok') {
          this.$message({
            message: '归还成功',
            type: 'success'
          })
        } else {
          this.$message({
            message: _.data.result,
            type: 'warning'
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
