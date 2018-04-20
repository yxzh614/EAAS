<template>
  <el-menu
    :default-openeds="defaultOpenedMenu"
    :unique-opened="true"
    class="el-menu-demo"
    :router="route"
    background-color="#77818b"
    text-color="#fff">
    <el-submenu index="1">
      <template slot="title">人员管理</template>
      <el-submenu index="1-4">
        <template slot="title">人员列表</template>
        <el-menu-item v-for="year in routeByYear" :key="year.year" :index="year.r">{{year.year}}</el-menu-item>
      </el-submenu>
      <el-menu-item index="/Member/New">社团招新</el-menu-item>
      <el-menu-item index="/Member/Elect">换届选举</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">物资管理</template>
      <el-menu-item index="/Good/List">物资清单</el-menu-item>
      <el-menu-item index="/Good/NewItem">添加物资</el-menu-item>
      <el-menu-item index="/Good/Buy">购买物资</el-menu-item>
      <el-menu-item index="/Good/Borrow">借取物资</el-menu-item>
      <el-menu-item index="/Good/GiveBack">归还物资</el-menu-item>
      <el-menu-item index="/Good/Records">物资记录</el-menu-item>
      <el-menu-item index="/Good/MoneyRecord">资金记录</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
        <template slot="title">竞赛管理</template>
        <el-menu-item index="/Competition">竞赛列表</el-menu-item>
        <el-menu-item index="/Comp/New">发布竞赛</el-menu-item>
        <el-menu-item index="/Comp/CompJoin">比赛报名情况</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">培训管理</template>
      <el-menu-item index="/Train/New">发布培训</el-menu-item>
      <el-menu-item index="/Train/List">培训列表</el-menu-item>
      <el-menu-item index="/Train/SignUpload">签到上传</el-menu-item>
      <el-menu-item index="/Train/SignList">签到记录</el-menu-item>
      <el-menu-item index="/Train/Elect">年度评选</el-menu-item>
      <el-menu-item index="/Train/Sat">活动统计</el-menu-item>
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
      defaultOpenedMenu: ['1']
    }
  },
  computed: {
    route: function () {
      return this.routeByMenu
    }
  },
  mounted () {
    axios.getYears().then(_ => {
      let data = _.data
      console.log(data)
      let years = data.result
      for (let year of years) {
        console.log(year)
        this.routeByYear.push({
          year: year,
          r: `/Member/year/${year}`
        })
      }
    })
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


