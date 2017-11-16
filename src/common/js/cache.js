import Cookies from 'js-cookie'

const SidebarStatus = '__sidebarStatus__'

/**
 * 导航栏sidebarStatus
 */
export function getSidebarStatus () {
  return Cookies.get(SidebarStatus)
}
