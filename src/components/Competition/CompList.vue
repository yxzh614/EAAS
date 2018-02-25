<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
      <el-breadcrumb-item>竞赛列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card v-for="comp in dataList" :key='comp.stuffID' class="box-card">
      <div slot="header" class="clearfix">
      <span>{{comp.name}}</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="goDetail(comp.id)">详细信息</el-button>
      </div>
      <img class="stuff-pic" src="@/assets/logo.png" alt="">
      <div class="text item">简介：{{comp.information}}</div>
      <div class="text item">报名截止日期：{{comp.endDate}}</div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'CompList',
  data () {
    return {
      msg: '2233',
      dataList: [
        {
          id: 0,
          name: '',
          information: '',
          endDate: 0
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    goDetail: function (ID) {
      this.$router.push({name: 'CompDetail', params: {ID: ID}})
    }
  },
  mounted () {
    this.dataList = [
      {
        id: 1,
        name: '中国大学生计算机设计大赛',
        information: '中国大学生计算机设计大赛',
        endDate: '2017-01-01'
      },
      {
        id: 2,
        name: 'bisai2',
        information: 'info1',
        endDate: '2017-01-01'
      }
    ]
  }
}
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
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
<style scoped>
.el-card {
  margin-bottom: 10px;
}
.stuff-pic {
  width: 150px;
  height: 120px;
  float: left;
  margin: 0 2%;
}
</style>

