<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/Train/List'}">培训列表</el-breadcrumb-item>
      <el-breadcrumb-item>培训详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{trainDetail.name}}</span>
        <el-dropdown @command="handleCommand" style="float: right; padding: 3px 0;">
          <span class="el-dropdown-link">
            操作<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="getFresh">删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="text item">
        简介：{{trainDetail.info}}
      </div>
      <div class="text item">
        详细信息：{{trainDetail.detail}}
      </div>
      <div class="text item">
        时间：{{trainDetail.date}}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      trainDetail: {
        id: '',
        name: '',
        info: '',
        detail: '',
        date: ''
      }
    }
  },
  methods: {
    handleCommand (command) {

    }
  },
  mounted () {
    this.trainDetail = {
        id: this.$route.params.id,
        name: this.$route.params.id,
        info: this.$route.params.id,
        detail: this.$route.params.id,
        date: this.$route.params.id
    }
  }
}
</script>

<style>
</style>
