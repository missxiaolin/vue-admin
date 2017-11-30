import fetch from '@/common/js/fetch'

/**
 * shop列表
 * @param {*} query
 */
export function shopList (query) {
  return fetch({url: '/v1/shop/list', method: 'get', params: query})
}
