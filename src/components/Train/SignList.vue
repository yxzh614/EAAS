<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>签到记录</el-breadcrumb-item>
    </el-breadcrumb>
    <el-cascader
      :value="caV"
      :options="options"
      v-model="selectedOptions"
      @change="handleChange">
    </el-cascader>
    <a class="el-button" :href="downloadURL" :download="downloadURL.split('\\').reverse()[0]">下载年度签到汇总表</a>
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
      caV: [],
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
      options: [],
      selectedOptions: [],
      downloadURL: ''
    }
  },
  filters: {
    arriveToZHCN (e) {
      return e ? '到场' : '未到场'
    }
  },
  methods: {
    handleChange (e) {
      axios.getSignList(e[1]).then(_ => {
        if (_.data.status === 'ok') {
          this.signList = _.data.result
          axios.getTrainExcel(e[0]).then(_ => {
            this.downloadURL = axios.fileBaseURL + _.data.result
          })
        }
      })
    },
    downloadExcel () {
    }
  },
  mounted () {
    axios.getTrainYear().then(_ => {
      _.data.result.forEach(element => {
        let option = {
          value: element,
          label: element,
          children: []
        }
        console.log(option)
        axios.getTrainByYear(element).then(_ => {
          _.data.result.forEach(element => {
            console.log('2' + element.trainName)
            option.children.push({
              value: element.trainId,
              label: element.trainName
            })
          })
        })
        this.options.push(option)
      })
    })
    axios.getTrainList().then(_ => {
      this.trainList = _.data.result
    })
  }
}
</script>