import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import StuffList from '@/components/Stuff/StuffList'
import StuffDetail from '@/components/Stuff/StuffDetail'

import MemberNew from '@/components/Member/New'
import MemberElect from '@/components/Member/Elect'
import MemberOfYear from '@/components/Member/MemberOfYear'

import GoodList from '@/components/Good/GoodList'
import GoodBorrow from '@/components/Good/Borrow'
import GoodGiveBack from '@/components/Good/GiveBack'
import GoodRecords from '@/components/Good/Records'
import GoodNewItem from '@/components/Good/NewItem'
import GoodMoneyRecord from '@/components/Good/MoneyRecord'

import CompList from '@/components/Competition/CompList'
import CompDetail from '@/components/Competition/CompDetail'
import NewComp from '@/components/Competition/NewComp'

import NewTrain from '@/components/Train/NewTrain'
import TrainList from '@/components/Train/TrainList'
import TrainDetail from '@/components/Train/TrainDetail'
import SignUpload from '@/components/Train/SignUpload'
import SignList from '@/components/Train/SignList'

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
      path: '/Member/year/:year',
      name: 'MemberOfYear',
      component: MemberOfYear
    },
    {
      path: '/Member/New',
      name: 'MemberNew',
      component: MemberNew
    },
    {
      path: '/Member/Elect',
      name: 'MemberElect',
      component: MemberElect
    },
    {
      path: '/Good/List',
      name: 'GoodList',
      component: GoodList
    },
    {
      path: '/Good/Borrow',
      name: 'GoodBorrow',
      component: GoodBorrow
    },
    {
      path: '/Good/GiveBack',
      name: 'GoodGiveBack',
      component: GoodGiveBack
    },
    {
      path: '/Good/Records',
      name: 'GoodRecords',
      component: GoodRecords
    },
    {
      path: '/Good/NewItem',
      name: 'GoodNewItem',
      component: GoodNewItem
    },
    {
      path: '/Good/MoneyRecord',
      name: 'GoodMoneyRecord',
      component: GoodMoneyRecord
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
      path: '/Train/new',
      name: 'NewTrain',
      component: NewTrain
    },
    {
      path: '/Train/List',
      name: 'TrainList',
      component: TrainList
    },
    {
      path: '/Train/Detail/:id',
      name: 'TrainDetail',
      component: TrainDetail,
      props: true
    },
    {
      path: '/Train/SignUpload',
      name: 'SignUpload',
      component: SignUpload
    },
    {
      path: '/Train/SignList',
      name: 'SignList',
      component: SignList
    },
    {
      path: '/User',
      name: 'User',
      component: User
    }
  ]
})
