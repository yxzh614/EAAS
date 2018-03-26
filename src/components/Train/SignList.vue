<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>签到记录</el-breadcrumb-item>
    </el-breadcrumb>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button>下载签到汇总表</el-button>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="学号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="attented"
        label="是否到场">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [{
          id: '1501010101',
          name: '王小虎',
          attented: '未到场'
        }],
        options: [{
          value: '选项1',
          label: '培训1'
        }, {
          value: '选项2',
          label: '培训2'
        }, {
          value: '选项3',
          label: '培训3'
        }, {
          value: '选项4',
          label: '培训4'
        }, {
          value: '选项5',
          label: '培训5'
        }],
        value: ''
      }
    }
  }
</script>