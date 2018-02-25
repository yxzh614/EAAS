<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
      <el-breadcrumb-item :to="{path: '/Stuff'}">部门列表</el-breadcrumb-item>
      <el-breadcrumb-item>部门信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{stuffDetail.name}}</span>
        <el-dropdown @command="handleCommand" style="float: right; padding: 3px 0;">
          <span class="el-dropdown-link">
            操作<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="changeLeader">换届</el-dropdown-item>
            <el-dropdown-item command="getFresh">招新</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div v-for="(info, key) in stuffDetail" :key="key" class="text item">
        {{key}}:{{ info }}
      </div>
    </el-card>
    <member-list :deptId="stuffDetail.ID"/>
    <el-dialog
      title="换届"
      :visible.sync="dialogVisible"
      width="70%"
      :before-close="handleClose">
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <transition name="fade">
        <el-select v-if="this.active===0" v-model="headerPicked" filterable placeholder="请选择部长">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-if="this.active===1" v-model="helper" filterable placeholder="请选择干事">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select v-if="this.active===2" v-model="value8" filterable placeholder="请选择部长">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </transition>
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </el-dialog>
  </div>
</template>
<script>
import MemberList from './MemberList'
export default {
  name: 'stuffDetail',
  data () {
    return {
      stuffDetail: {
        ID: 0,
        name: '',
        information: '',
        memberAmount: '',
        headerName: '',
        headerTel: ''
      },
      dialogVisible: false,
      active: 0,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value8: ''
    }
  },
  computed: {
  },
  methods: {
    headerPicked () {

    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleCommand (command) {
      console.log(command)
      this.dialogVisible = true
    },
    next () {
      if (this.active++ > 2) {
        this.active = 0
      }
    }
  },
  mounted () {
    this.stuffDetail = {
      ID: this.$route.params.ID,
      name: '1',
      information: '1',
      memberAmount: '1',
      headerName: '1',
      headerTel: '1'
    }
  },
  components: {
    MemberList
  },
  props: ['id']
}
</script>
<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>
