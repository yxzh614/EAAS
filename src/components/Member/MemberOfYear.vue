<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
      <el-breadcrumb-item>人员信息</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <span>{{year}}届人员信息表</span>
      <a class="el-button" :href="downloadURL" :download="downloadURL.split('\\').reverse()[0]">下载Excel表格</a>
      <el-table
        :data="memberList"
        style="width: 100%">
        <el-table-column
          prop="memberId"
          label="学号">
        </el-table-column>
        <el-table-column
          prop="memberName"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="memberSex"
          label="性别">
        </el-table-column>
        <el-table-column
          prop="schoolName"
          label="学院">
        </el-table-column>
        <el-table-column
          prop="departmentName"
          label="部门">
        </el-table-column>
        <el-table-column
          prop="memberQq"
          label="QQ">
        </el-table-column>
        <el-table-column
          prop="memberWechat"
          label="微信">
        </el-table-column>
        <el-table-column
          prop="memberPhone"
          label="电话">
        </el-table-column>
        <el-table-column
          prop="memberIdentify"
          label="职务">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import axios from '../../services/my-axios'
export default {
  name: 'stuffDetail',
  data () {
    return {
      year: null,
      memberList: [],
      downloadURL: ''
    }
  },
  beforeRouteUpdate (to, from, next) { // switch among pages reusing this unit
    console.log('switch', to.params.year)
    this.year = to.params.year
    axios.getMemberByYear(this.year).then(_ => {
      if (_.data.status === 'ok') {
        this.memberList = _.data.result
        axios.downloadMember(this.year).then(_ => {
          this.downloadURL = axios.fileBaseURL + _.data.result
        })
      }
    })
    next()
  },
  beforeRouteEnter (to, from, next) {
    console.log('enter', to.params.year) // first time enter this unit
    next(_ => {
      _.year = to.params.year
      axios.getMemberByYear(_.year).then(_2 => {
        if (_2.data.status === 'ok') {
          _.memberList = _2.data.result
          axios.downloadMember(_.year).then(_3 => {
            _.downloadURL = axios.fileBaseURL + _3.data.result
          })
        }
      })
    })
  },
  methods: {
    downloadMember () {
    }
  },
  mounted () {
    if (this.year) {
      axios.getMemberByYear(this.year).then(_ => {
        if (_.data.status === 'ok') {
          this.memberList = _.data.result
          axios.downloadMember(this.year).then(_ => {
            this.downloadURL = axios.fileBaseURL + _.data.result
          })
        }
      })
    }
  }
}
</script>
<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>
