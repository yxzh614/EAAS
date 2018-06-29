<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path: '/Competition'}">竞赛列表</el-breadcrumb-item>
      <el-breadcrumb-item>竞赛详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{compDetail.competationName}}</span>
        <el-dropdown @command="handleCommand" style="float: right; padding: 3px 0;">
          <span class="el-dropdown-link">
            操作<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="deleteComp">删除比赛</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="text item">
        比赛简介:{{compDetail.generalization}}
      </div>
      <div class="text item">
        比赛介绍:{{compDetail.competationExplain}}
      </div>
      <div class="text item">
        比赛日期:{{compDetail.competationTime}}
      </div>
      <div class="text item">
        队伍人数:{{compDetail.memberLimit}}
      </div>
      <div class="text item">
        发布日期:{{compDetail.fabuTime}}
      </div>
      <a class="el-button" v-if="compDetail.competationFujian1" target="_blank" :href="fileURL + '?path=' + compDetail.competationFujian1">下载附件:{{(compDetail.competationFujian1).split('\\').reverse()[0]}}</a>
      <a class="el-button" v-if="compDetail.competationFujian2" target="_blank" :href="fileURL + '?path=' + compDetail.competationFujian2">下载附件:{{(compDetail.competationFujian1).split('\\').reverse()[0]}}</a>
    </el-card>
  </div>
</template>

<script>
import axios from '../../services/my-axios'
export default {
  data () {
    return {
      compDetail: {
        competationId: '',
        competationName: '',
        competationTime: '',
        fabuTime: '',
        memberLimit: '',
        competationExplain: '',
        generalization: ''
      }
    }
  },

  computed: {
    fileURL () {
      return axios.fileBaseURL
    }
  },
  methods: {
    handleCommand (command) {

    }
  },
  mounted () {
    axios.getCompMessage(this.$route.params.id).then(_ => {
      let data = _.data
      this.compDetail = data.result
    })
    console.log(this.compDetail.competationFujian1)
  },
  props: [
    'id'
  ]
}
</script>

<style>
</style>
