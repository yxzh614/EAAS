<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>培训列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card v-for="train in trainList" :key='train.trainId' class="box-card">
      <div slot="header" class="clearfix">
      <span>{{train.trainName}}</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="goDetail(train.trainId)">详细信息</el-button>
      </div>
      <div class="text item">培训日期：{{train.fabuTime}}</div>
    </el-card>
  </div>
</template>
<script>
import axios from '../../services/my-axios'
export default {
  name: 'TrainList',
  data () {
    return {
      msg: '2233',
      trainList: [
        {
          id: 0,
          name: '',
          information: '',
          startDate: 0
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    goDetail: function (ID) {
      this.$router.push({name: 'TrainDetail', params: {id: ID}})
    }
  },
  mounted () {
    axios.getTrainList().then(_ => {
      let data = _.data
      this.trainList = data.result
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

