import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/* layout */
import layout from '@/components/layout/Layout'

export const asyncRouterMap = [
  {
    path: '/401',
    name: '401',
    component: _import('errorPage/401'),
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: _import('errorPage/404'),
    hidden: true
  },
  {
    path: '/login', // 登录
    name: 'login',
    hidden: true,
    component: _import('login/login')
  }, {
    path: '/',
    component: layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: _import('dashboard/index')
      }
    ]
  }, {
    path: '/introduction',
    component: layout,
    redirect: '/introduction/index',
    icon: 'icon-ren',
    noDropdown: true,
    children: [
      {
        path: 'index',
        component: _import('introduction/index'),
        name: '简述'
      }
    ]
  }, {
    path: '/excel',
    component: layout,
    redirect: '/excel/download',
    name: 'excel',
    icon: 'icon-Excel',
    children: [
      {
        path: 'download',
        component: _import('excel/index'),
        name: 'excel导出'
      }
    ]
  }, {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: asyncRouterMap
})
