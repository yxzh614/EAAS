<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/Train/List'}">培训列表</el-breadcrumb-item>
      <el-breadcrumb-item>培训详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{trainDetail.trainName}}</span>
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
        时间:{{trainDetail.trainTime}}
      </div>
      <div class="text item">
        地点:{{trainDetail.trainRoom}}
      </div>
      <div class="text item">
        详细信息:{{trainDetail.trainExplain}}
      </div>
      <div class="text item">
        发布时间:{{trainDetail.fabuTime}}
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from '../../services/my-axios'
export default {
  data () {
    return {
      trainDetail: {
        trainId: '',
        trainName: '',
        trainTime: '',
        trainRoom: '',
        fabuTime: '',
        trainExplain: ''
      }
    }
  },
  methods: {
    handleCommand (command) {

    }
  },
  mounted () {
    axios.getTrain(this.$route.params.id).then(_ => {
      this.trainDetail = _.data.result
    })
  }
}
</script>

<style>
</style>
