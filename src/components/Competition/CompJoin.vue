<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>比赛报名情况</el-breadcrumb-item>
    </el-breadcrumb>
    <el-select @change="handleChange" v-model="value" placeholder="请选择">
      <el-option
        v-for="item in Options"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
    <a class="el-button" :href="downloadURL" target="_blank" :download="downloadURL.split('\\').reverse()[0]">下载比赛报名汇总表</a>
    <el-table
      :data="JoinList"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="学号">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
          <i v-if="scope.row.captain" class="el-icon-star-on"></i>
        </template>
      </el-table-column>
      <el-table-column
        prop="school"
        label="学院">
      </el-table-column>
      <el-table-column
        prop="teamName"
        label="队名">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="mailbox"
        label="邮箱">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from '../../services/my-axios'
export default {
  data () {
    return {
      JoinList: [],
      Options: [],
      compSelected: '',
      downloadURL: ''
    }
  },
  methods: {
    handleChange (e) {
      axios.getCompMembers(e).then(_ => {
        this.JoinList = _.data.result
        axios.getJoinExcel(e).then(_ => {
          this.downloadURL = axios.fileBaseURL + _.data.result
        })
      })
    }
  },
  mounted () {
    axios.getAllComp().then(_ => {
      this.Options = _.data.result
    })
  }
}
</script>