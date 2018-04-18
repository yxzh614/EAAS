<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>年度评选</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        label="名次">
        <template slot-scope="scope">
          <span :style="scope.row.id | setStyle">第{{scope.row.id}}名</span>
        </template>
      </el-table-column>
      <el-table-column
        label="学号">
        <template slot-scope="scope">
          <span :style="scope.row.id | setStyle">{{scope.row.memberid}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名">
        <template slot-scope="scope">
          <span :style="scope.row.id | setStyle">{{scope.row.memberName}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="分数">
        <template slot-scope="scope">
          <span :style="scope.row.id | setStyle">{{scope.row.score.toFixed(2)}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from '../../services/my-axios'
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.getGrade(2015).then(_ => {
      if (_.data.status === 'ok') {
        this.list = _.data.result
      }
    })
  },
  filters: {
    setStyle (no) {
      console.log(no)
      let res
      switch (no) {
        case 1: {
          res = `color:red;font-size:20px;`
          break
        }
        case 2: {
          res = `color:green;font-size:17px`
          break
        }
        default: {
          res = ``
        }
      }
      return res
    }
  }
}
</script>

<style>

</style>
