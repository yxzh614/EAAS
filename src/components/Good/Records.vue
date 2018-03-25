<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
      <el-breadcrumb-item>物资借取记录</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="goodName"
        label="物品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="memberId"
        label="学号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="memberName"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="num"
        label="数量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="state"
        label="行为"
        width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        goodRecordId: '1',
        goodId: '1',
        goodName: '继电器',
        memberId: '1503050115',
        memberName: '岳贤哲',
        num: '3',
        date: '2015-02-01',
        state: '买入'
      },
      {
        goodRecordId: '2',
        goodId: '1',
        goodName: '继电器',
        memberId: '1503050115',
        memberName: '岳贤哲',
        num: '3',
        date: '2015-02-01',
        state: '买入'
      },
      {
        goodRecordId: '3',
        goodId: '1',
        goodName: '继电器',
        memberId: '1503050115',
        memberName: '岳贤哲',
        num: '3',
        date: '2015-02-01',
        state: '买入'
      }]
    }
  },
  methods: {
    handleDelete (index, row) {
      this.deleteRecord(row.recordId)
    },
    deleteRecord (recordId) {
      console.log(`删除ID=${recordId}`)
    }
  }
}
</script>
