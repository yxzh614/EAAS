<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
      <el-breadcrumb-item>人员信息</el-breadcrumb-item>
    </el-breadcrumb>
    <member-list :deptId="stuffDetail.ID"/>
  </div>
</template>
<script>
import MemberList from '../Stuff/MemberList'
export default {
  name: 'stuffDetail',
  data () {
    return {
      stuffDetail: {
        ID: 0,
        name: '',
        information: '',
        memberAmount: '',
        headerName: '',
        headerTel: ''
      }
    }
  },
  methods: {
    handleCommand (command) {
      console.log(command)
    }
  },
  beforeRouteUpdate (to, from, next) { // switch among pages reusing this unit
    console.log(this.stuffDetail)
    console.log(to.params.year)
    this.stuffDetail = {
      ID: to.params.year,
      name: '',
      information: '',
      memberAmount: '',
      headerName: '',
      headerTel: ''
    }
    next()
  },
  beforeRouteEnter (to, from, next) {
    console.log(to.params.year) // first time enter this unit
    next(_ => {
      _.stuffDetail = {
        ID: to.params.year,
        name: '',
        information: '',
        memberAmount: '',
        headerName: '',
        headerTel: ''
      }
    })
  },
  mounted () {
    this.stuffDetail = {
      ID: 0,
      name: '',
      information: '',
      memberAmount: '',
      headerName: '',
      headerTel: ''
    }
  },
  components: {
    MemberList
  },
  props: ['year']
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
