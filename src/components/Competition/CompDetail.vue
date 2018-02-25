<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/Competition'}">竞赛列表</el-breadcrumb-item>
      <el-breadcrumb-item>竞赛详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{compDetail.name}}</span>
        <el-dropdown @command="handleCommand" style="float: right; padding: 3px 0;">
          <span class="el-dropdown-link">
            操作<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="changeLeader">修改信息</el-dropdown-item>
            <el-dropdown-item command="getFresh">关闭比赛</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="text item">
        {{compDetail.info}}
      </div>
      <div class="text item">
        报名地址：{{compDetail.officialSite}}
      </div>
      <div class="text item">
        截止日期：{{compDetail.enterDeadline}}
      </div>
      <div class="text item">
        队伍人数：{{compDetail.limit}}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      compDetail: {
        id: '',
        name: '',
        holder: '',
        officialSite: '',
        enterDeadline: '',
        limit: ''
      }
    }
  },
  methods: {
    handleCommand (command) {

    }
  },
  mounted () {
    this.compDetail = {
      id: '',
      limit: 0,
      officialSite: 'www',
      enterDeadline: '2017',
      info: '比赛介绍',
      name: 'game 1'
    }
  }
}
</script>

<style>
</style>
