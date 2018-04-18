<template>
  <div>
    <span>{{deptId}}届人员信息表</span>
    <el-button>下载excel表格</el-button>
    <el-table
      :data="tableData"
      style="width: 100%">
      <span>22{{deptId}}</span>
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
</template>
<script>
import axios from '../../services/my-axios'
export default {
  data () {
    return {
      tableData: [
        {
          memberId: 1503050115,
          memberName: '岳贤哲',
          memberSex: '男',
          schoolName: '信息科学与工程学院',
          departmentName: '技术部',
          memberQq: 747474741,
          memberWechat: '71717171',
          memberPhone: '13194238686',
          memberIdentify: '部长',
          memberTh: 15
        },
        {
          memberId: 1503050116,
          memberName: '李泽伟',
          memberSex: '男',
          schoolName: '信息科学与工程学院',
          departmentName: '技术部',
          memberQq: 31412414,
          memberWechat: 'grmgv',
          memberPhone: '13194238162',
          memberIdentify: '部员',
          memberTh: 15
        }
      ]
    }
  },
  mounted () {
    axios.getMemberByYear(this.deptId).then(_ => {
      if (_.data.status === 'ok') {
        this.tableData = _.data.result
      }
    })
  },
  props: ['deptId']
}
</script>
<style scoped>
.el-button {
  float: right;
}
</style>
