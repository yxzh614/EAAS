<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    @select="handleSelect"
    :router="route"
    @open="handleOpen"
    @close="handleClose">
    <el-submenu index="/Stuff">
      <template slot="title">人员管理</template>
      <el-submenu index="1-4">
        <template slot="title">部门管理</template>
        <el-menu-item index="/Stuff">部门信息</el-menu-item>
        <el-menu-item index="/x">人员信息</el-menu-item>
        <el-menu-item index="/x">社团招新</el-menu-item>
        <el-menu-item index="/x">新人信息</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">物资管理</template>
      <el-menu-item-group>
        <template slot="title">库存管理</template>
        <el-menu-item index="/Index/Stuff">入库管理</el-menu-item>
        <el-menu-item index="/Index/Stuff">现存信息</el-menu-item>
        <el-menu-item index="/Index/Stuff">支出记录</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">资金管理</template>
        <el-menu-item index="/Index/Stuff">现存资金</el-menu-item>
        <el-menu-item index="/Index/Stuff">报销申请</el-menu-item>
        <el-menu-item index="/Index/Stuff">报销记录</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">设备操作记录</template>
        <el-menu-item index="/Index/Stuff">设备信息</el-menu-item>
        <el-menu-item index="/Index/Stuff">操作记录</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">竞赛管理</template>
      <el-menu-item-group>
        <template slot="title">竞赛通知</template>
        <el-menu-item index="/Index/Stuff">发布通知</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">方案发布</template>
        <el-menu-item index="/Index/Stuff">提交方案</el-menu-item>
        <el-menu-item index="/Index/Stuff">招募成员</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">报名管理</template>
        <el-menu-item index="/Index/Stuff">报名信息</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">奖项管理</template>
        <el-menu-item index="/Index/Stuff">颁布奖项</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">培训管理</template>
      <el-menu-item-group>
        <template slot="title">培训发布</template>
        <el-menu-item index="/Index/Stuff">发布通知</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">报名管理</template>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">签到管理</template>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">视频上传</template>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
      routeByMenu: true,
      activeIndex: '1',
      activeIndex22: '/Index',
      msg: 'navbar'
    }
  },
  computed: {
    activeIndex2: function () {
      return this.activeIndex22
    },
    route: function () {
      return this.routeByMenu
    }
  },
  methods: {
    handleSelect (index) {

    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    goStuff () {
    },
    showStuffList () {
      this.msg = 'none'
    },
    goHome () {
      this.$router.push({ path: `/` })
    }
  }
}
</script>
<style>
span {
  float: left;
}
.navbar > ul {
  list-style: none;
}
.navbar > ul > li {
  display: inline-block;
  width: 10%;
  text-align: center;
  vertical-align: top;
}
.navbar > ul > li > ul {
  position: relative;
}
</style>


