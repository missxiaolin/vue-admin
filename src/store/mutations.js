import Cookies from 'js-cookie'
import * as types from './mutation-types'

const matutaions = {
  // 导航栏
  [types.OPENED] (state) {
    if (state.opened) {
      Cookies.set('__sidebarStatus__', 1)
    } else {
      Cookies.set('__sidebarStatus__', 0)
    }
    state.opened = !state.opened
  },
  // 添加导航路由
  [types.ADD_VISITED_VIEWS] (state, view) {
    if (state.visitedViews.some(v => v.path === view.path)) return
    state.visitedViews.push({ name: view.name, path: view.path })
  },
  // 删除路由
  [types.DEL_VISITED_VIEWS] (state, view) {
    let index
    for (const [i, v] of state.visitedViews.entries()) {
      if (v.path === view.path) {
        index = i
        break
      }
    }
    state.visitedViews.splice(index, 1)
  }
}

export default matutaions
