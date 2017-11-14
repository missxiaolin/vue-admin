import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

/* layout */
import layout from '@/components/layout/Layout'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: _import('login/login') // 登录
    }, {
      path: '/',
      component: layout,
      name: '首页'
    }
  ]
})
