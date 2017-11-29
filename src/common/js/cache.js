import Cookies from 'js-cookie'

// 导航栏
const SidebarStatus = '__sidebarStatus__'

// 登录token
const TokenKey = 'Admin-Token'

/**
 * 导航栏sidebarStatus
 */
export function getSidebarStatus () {
  return Cookies.get(SidebarStatus)
}

// 获取登录token
export function getToken () {
  return Cookies.get(TokenKey)
}

// 存入token
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

// 删除token
export function removeToken () {
  return Cookies.remove(TokenKey)
}
