import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Stuff from '@/components/Staff'
import DeptDetail from '@/components/Stuff/DeptDetail'
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
      component: Index
    },
    {
      path: '/Stuff',
      name: 'Stuff',
      component: Stuff
    },
    {
      path: '/Stuff/Dept/:ID',
      name: 'Dept',
      component: DeptDetail
    }
  ]
})
