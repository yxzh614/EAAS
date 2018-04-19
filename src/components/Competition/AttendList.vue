<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>参赛者名单</el-breadcrumb-item>
    </el-breadcrumb>
    <el-select @change="handleChange" v-model="value" placeholder="请选择">
      <el-option
        v-for="item in compList"
        :key="item.trainId"
        :label="item.trainName"
        :value="item.trainId">
      </el-option>
    </el-select>
    <el-button>下载签到汇总表</el-button>
    <el-table
      :data="attendList"
      style="width: 100%">
      <el-table-column
        prop="memberId"
        label="学号">
      </el-table-column>
      <el-table-column
        prop="memnberName"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="memnberName"
        label="学院">
      </el-table-column>
      <el-table-column
        prop="memnberName"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="memnberName"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="memnberName"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="memnberName"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="memnberName"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="memnberName"
        label="姓名">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from '../../services/my-axios'
export default {
  data () {
    return {
      attendList: [
        // {
        //   memberId: '1501010101',
        //   memnberName: '王小虎',
        //   attend: '未到场'
        // }
      ],
      compList: [
        // {
        //   trainId: '',
        //   trainName: ''
        // }
      ],
      value: ''
    }
  },
  filters: {
    arriveToZHCN (e) {
      return e ? '到场' : '未到场'
    }
  },
  methods: {
    handleChange (e) {
      axios.getattendList(e).then(_ => {
        if (_.data.status === 'ok') {
          this.attendList = _.data.result
        }
      })
    }
  },
  mounted () {
    return axios.getcompList().then(_ => {
      this.compList = _.data.result
    })
  }
}
</script>