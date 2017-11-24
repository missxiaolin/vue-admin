import {getSidebarStatus} from 'common/js/cache'

const state = {
  opened: !+getSidebarStatus(), // 导航栏 getSidebarStatus获取状态
  visitedViews: [] // 导航路由
}

export default state
