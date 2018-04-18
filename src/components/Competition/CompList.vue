<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>竞赛列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card v-for="comp in compList" :key='comp.id' class="box-card">
      <div slot="header" class="clearfix">
      <span>{{comp.name}}</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="goDetail(comp.id)">详细信息</el-button>
      </div>
      <div class="text item">比赛简介: {{comp.generalization}}</div>
      <div class="text item">发布日期：{{comp.fabuTime}}</div>
    </el-card>
  </div>
</template>
<script>
import axios from '../../services/my-axios'
export default {
  name: 'CompList',
  data () {
    return {
      compList: [
        // {
        //   id: 0,
        //   name: '',
        // generalization: '',
        //   fabuTime: ''
        // }
      ]
    }
  },
  methods: {
    goDetail: function (ID) {
      this.$router.push({name: 'CompDetail', params: {id: ID}})
    }
  },
  mounted () {
    axios.getAllComp().then(_ => {
      let data = _.data
      let comps = data.result
      for (let comp of comps) {
        this.compList.push(comp)
      }
    })
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

