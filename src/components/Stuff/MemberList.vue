<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <span>22{{deptId}}</span>
    <el-table-column
      prop="id"
      label="学号"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="enterYear"
      label="入团时间">
    </el-table-column>
    <el-table-column
      prop="job"
      label="职务">
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        id: '1503050115',
        name: '岳贤哲',
        enterYear: '2016',
        job: '社团成员'
      }, {
        id: '1503050115',
        name: '岳贤哲',
        enterYear: '2016',
        job: '社团成员'
      }, {
        id: '1503050115',
        name: '岳贤哲',
        enterYear: '2016',
        job: '社团成员'
      }, {
        id: '1503050115',
        name: '岳贤哲',
        enterYear: '2016',
        job: '社团成员'
      }]
    }
  },
  props: [
    'deptId'
  ]
}
</script>
