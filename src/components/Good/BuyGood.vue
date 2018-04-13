<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
      <el-breadcrumb-item>添加物资</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form :label-position="'top'" :inline="false" :model="form" class="">
      <el-form-item label="商品名称">
        <el-select v-model="value8" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="数量">
        <el-input-number v-model="num1" :min="1" :max="99"></el-input-number>
      </el-form-item>
      <el-form-item label="总价">
        <el-input-number v-model="money" :min="0" :max="5000" :step="0.01"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num1: null,
      money: null,
      form: {
        value8: null
      }
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
