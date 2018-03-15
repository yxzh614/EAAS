<template>
<div>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
    <el-breadcrumb-item>借取物资</el-breadcrumb-item>
  </el-breadcrumb>
  <span>物资名称：</span>
  <el-select
    v-model="value9"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="请输入物资名称"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in options4"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <span>借取数量：</span>
  <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
  <el-button type="primary">确定</el-button>
</div>
</template>

<script>
  export default {
    data () {
      return {
        num1: null,
        options4: [],
        value9: [],
        list: [],
        loading: false,
        states: ['a']
      }
    },
    mounted () {
      this.list = this.states.map(item => {
        return { value: item, label: item }
      })
    },
    methods: {
      remoteMethod (query) {
        if (query !== '') {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1
            })
          }, 200)
        } else {
          this.options4 = []
        }
      },
      handleChange () {

      }
    }
  }
</script>

<style scoped>
.el-select {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 280px;
}
el-input-number {
  width: 280px;
}
</style>
