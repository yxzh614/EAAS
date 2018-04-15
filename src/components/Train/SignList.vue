<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>签到记录</el-breadcrumb-item>
    </el-breadcrumb>
    <el-select @change="handleChange" v-model="value" placeholder="请选择">
      <el-option
        v-for="item in trainList"
        :key="item.trainId"
        :label="item.trainName"
        :value="item.trainId">
      </el-option>
    </el-select>
    <el-button>下载签到汇总表</el-button>
    <el-table
      :data="signList"
      style="width: 100%">
      <el-table-column
        prop="memberId"
        label="学号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="memnberName"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        label="是否到场">
        <template slot-scope="scope">
          {{scope.row.attend | arriveToZHCN}}
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
      signList: [
        // {
        //   memberId: '1501010101',
        //   memnberName: '王小虎',
        //   attend: '未到场'
        // }
      ],
      trainList: [
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
      axios.getSignList(e).then(_ => {
        if (_.data.status === 'ok') {
          this.signList = _.data.result
        }
      })
    }
  },
  mounted () {
    return axios.getTrainList().then(_ => {
      this.trainList = _.data.result
    })
  }
}
</script>