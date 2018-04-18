<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
      <el-breadcrumb-item>资金记录</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button @click="goNewMoney">添加</el-button>
    <el-table
      :data="billList"
      style="width: 100%">
      <el-table-column
        prop="moneyDate"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="state"
        label="种类">
      </el-table-column>
      <el-table-column
        prop="moneyCost"
        label="花费">
      </el-table-column>
      <el-table-column
        prop="moneyReason"
        label="原因">
      </el-table-column>
      <el-table-column
        prop="moneyLeft"
        label="剩余">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from '../../services/my-axios'
export default {
  data () {
    return {
      billList: [
        // {
        //   moneyId: 8,
        //   moneyCost: 600.0,
        //   moneyLeft: 7900.0,
        //   moneyDate: '2018/03/11',
        //   moneyReason: '购买了电池1个'
        // },
        // {
        //   moneyId: 2,
        //   moneyCost: 600.0,
        //   moneyLeft: 7900.0,
        //   moneyDate: '2018/03/11',
        //   moneyReason: '购买了电池1个'
        // }
      ]
    }
  },
  methods: {
    goNewMoney () {
      this.$router.push({name: 'NewMoney'})
    }
  },
  mounted () {
    axios.getBills().then(_ => {
      if (_.data.status === 'ok') {
        this.billList = _.data.result
      }
    })
  }
}
</script>

<style scoped>
.el-button {
  float: right;
}
</style>
