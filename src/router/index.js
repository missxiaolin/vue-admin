import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/* layout */
import layout from '@/components/layout/Layout'

export const asyncRouterMap = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: _import('login/login') // 登录
  }, {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: _import('dashboard/index'),
      }
    ]
  }
]

export default new Router({mode: 'history', routes: asyncRouterMap})
