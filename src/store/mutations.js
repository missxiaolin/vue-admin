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
  }
}

export default matutaions
