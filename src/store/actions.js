/**
 * 导航栏
 * @param {*} param0
 * @param {*} param1
 */
export const ToggleSideBar = function ({commit}) {
  commit('OPENED')
}

/**
 * 添加导航条路由
 * @param {*} param0
 */
export const addVisitedViews = function ({
  commit
}, view) {
  commit('ADD_VISITED_VIEWS', view)
}

/**
 * 删除导航条路由
 * @param {*} param0
 * @param {*} view
 */
export const delVisitedViews = function ({
  commit
}, view) {
  commit('DEL_VISITED_VIEWS', view)
}
