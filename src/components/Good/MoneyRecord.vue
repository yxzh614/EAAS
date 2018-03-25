<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
      <el-breadcrumb-item>资金记录</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="moneyDate"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="moneyCost"
        label="花费"
        width="180">
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
export default {
  data () {
    return {
      tableData: [
        {
          moneyId: 8,
          moneyCost: 600.0,
          moneyLeft: 7900.0,
          moneyDate: '2018/03/11',
          moneyReason: '购买了电池1个'
        },
        {
          moneyId: 2,
          moneyCost: 600.0,
          moneyLeft: 7900.0,
          moneyDate: '2018/03/11',
          moneyReason: '购买了电池1个'
        }
      ]
    }
  }
}
</script>