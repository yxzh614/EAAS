import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import MemberNew from '@/components/Member/New'
import MemberElect from '@/components/Member/Elect'
import MemberOfYear from '@/components/Member/MemberOfYear'

import GoodList from '@/components/Good/GoodList'
import GoodBorrow from '@/components/Good/Borrow'
import GoodGiveBack from '@/components/Good/GiveBack'
import GoodRecords from '@/components/Good/Records'
import GoodNewItem from '@/components/Good/NewItem'
import GoodMoneyRecord from '@/components/Good/MoneyRecord'
import BuyGood from '@/components/Good/BuyGood'
import NewMoney from '@/components/Good/NewMoney'

import CompList from '@/components/Competition/CompList'
import CompDetail from '@/components/Competition/CompDetail'
import NewComp from '@/components/Competition/NewComp'

import NewTrain from '@/components/Train/NewTrain'
import TrainList from '@/components/Train/TrainList'
import TrainElect from '@/components/Train/Elect'
import TrainSat from '@/components/Train/Satisfact'
import TrainDetail from '@/components/Train/TrainDetail'
import SignUpload from '@/components/Train/SignUpload'
import SignList from '@/components/Train/SignList'

import User from '@/components/User/Index'
import Sign from '@/components/User/Sign'

import TZList from '@/components/TongZhi/TZList'
import TZDetail from '@/components/TongZhi/TZDetail'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Sign' // 重定向到登陆页
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index // 首页
    },
    {
      path: '/Member/year/:year',
      name: 'MemberOfYear',
      component: MemberOfYear // 每届成员
    },
    {
      path: '/Member/New',
      name: 'MemberNew',
      component: MemberNew // 添加新成员
    },
    {
      path: '/Member/Elect',
      name: 'MemberElect',
      component: MemberElect // 换届选举
    },
    {
      path: '/Good/List',
      name: 'GoodList',
      component: GoodList // 物资列表
    },
    {
      path: '/Good/Borrow',
      name: 'GoodBorrow',
      component: GoodBorrow // 借取物资
    },
    {
      path: '/Good/GiveBack',
      name: 'GoodGiveBack',
      component: GoodGiveBack // 归还物资
    },
    {
      path: '/Good/Records',
      name: 'GoodRecords',
      component: GoodRecords // 物品借取记录
    },
    {
      path: '/Good/NewItem',
      name: 'GoodNewItem',
      component: GoodNewItem // 添加新物资
    },
    {
      path: '/Good/Buy',
      name: 'BuyGood',
      component: BuyGood // 添加新物资
    },
    {
      path: '/Good/MoneyRecord',
      name: 'GoodMoneyRecord',
      component: GoodMoneyRecord // 资金使用记录
    },
    {
      path: '/Good/MoneyRecord/NewMoney',
      name: 'NewMoney',
      component: NewMoney // 资金使用记录
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
      component: NewTrain // 新建培训
    },
    {
      path: '/Train/List',
      name: 'TrainList',
      component: TrainList // 培训列表
    },
    {
      path: '/Train/Elect',
      name: 'TrainElect',
      component: TrainElect // 评选
    },
    {
      path: '/Train/Sat',
      name: 'TrainSat',
      component: TrainSat // 统计
    },
    {
      path: '/Train/Detail/:id',
      name: 'TrainDetail',
      component: TrainDetail, // 培训详情
      props: true
    },
    {
      path: '/Train/SignUpload',
      name: 'SignUpload',
      component: SignUpload // 上传签到表
    },
    {
      path: '/Train/SignList',
      name: 'SignList',
      component: SignList // 签到列表
    },
    {
      path: '/User',
      name: 'User',
      component: User // 用户
    },
    {
      path: '/Sign',
      name: 'Sign',
      component: Sign // 登录
    },
    {
      path: '/TongZhi/List',
      name: 'TZList',
      component: TZList // 通知列表
    },
    {
      path: '/TongZhi/Detail',
      name: 'TZDetail',
      component: TZDetail, // 通知信息
      props: true
    }
  ]
})
