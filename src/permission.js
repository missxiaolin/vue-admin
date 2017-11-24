import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
// import { Message } from 'element-ui' // 错误提示

// 路由
router.beforeEach((to, from, next) => {
  NProgress.start() // 开启Progress
  next()
})

// 执行结束
router.afterEach(() => {
  NProgress.done() // 结束Progress
})
