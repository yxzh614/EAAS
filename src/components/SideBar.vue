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
        <template slot="title">人员列表</template>
        <el-menu-item v-for="year in routeByYear" :key = "year.year" :index="year.r">{{year.year}}</el-menu-item>
      </el-submenu>
      <el-menu-item index="/Member/New">社团招新</el-menu-item>
      <el-menu-item index="/Member/Elect">换届选举</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">物资管理</template>
      <el-menu-item index="/Good/List">物资清单</el-menu-item>
      <el-menu-item index="/Good/Borrow">借取物资</el-menu-item>
      <el-menu-item index="/Good/GiveBack">归还物资</el-menu-item>
      <el-menu-item index="/Good/NewItem">入库管理</el-menu-item>
      <el-menu-item index="/Good/Records">物资借取记录</el-menu-item>
      <el-menu-item index="/Good/MoneyRecord">资金记录</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">竞赛管理</template>
      <el-menu-item-group>
        <template slot="title">竞赛通知</template>
        <el-menu-item index="/Competition">竞赛列表</el-menu-item>
        <el-menu-item index="/Comp/New">发布竞赛</el-menu-item>
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
      <el-menu-item index="/Train/New">发布培训</el-menu-item>
      <el-menu-item index="/Train/List">培训列表</el-menu-item>
      <el-menu-item-group>
        <template slot="title">培训发布</template>
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
import axios from '../services/my-axios'
export default {
  name: 'navbar',
  data () {
    return {
      years: [],
      routeByYear: [],
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
    handleSelect (index, indexPath) {
    },
    handleOpen (key, keyPath) {
      if (key === '/Stuff') {
        axios.init()
      }
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
  },
  mounted () {
    let years = [14, 15, 16, 17]
    for (let year of years) {
      console.log(year)
      this.routeByYear.push({
        year: year,
        r: `/Member/year/${year}`
      })
    }
  }
}
</script>
<style scoped>
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


