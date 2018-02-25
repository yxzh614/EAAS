import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import StuffList from '@/components/Stuff/StuffList'
import StuffDetail from '@/components/Stuff/StuffDetail'

import CompList from '@/components/Competition/CompList'
import CompDetail from '@/components/Competition/CompDetail'
import NewComp from '@/components/Competition/NewComp'

import User from '@/components/User/Index'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Index'
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index // 首页
    },
    {
      path: '/Stuff',
      name: 'StuffList',
      component: StuffList // 部门
    },
    {
      path: '/Stuff/Detail/:id',
      name: 'StuffDetail',
      component: StuffDetail, // 部门详情
      props: true
    },
    {
      path: '/Competition',
      name: 'CompList',
      component: CompList // 比赛列表
    },
    {
      path: '/Comp/Detail/:id',
      name: 'CompDetail',
      component: CompDetail,
      props: true // 比赛详情
    },
    {
      path: '/Comp/New',
      name: 'NewComp',
      component: NewComp // 新建比赛
    },
    {
      path: '/User',
      name: 'User',
      component: User
    }
  ]
})
