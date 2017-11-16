import {getSidebarStatus} from 'common/js/cache'

const state = {
  opened: !+getSidebarStatus() // 导航栏
}

export default state
