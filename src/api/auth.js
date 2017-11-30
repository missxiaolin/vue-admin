import fetch from '@/common/js/fetch'
import Qs from 'qs'

/**
 * 登录
 * @param {*} query
 */
export function login (query = {}) {
  query = Qs.stringify(query)
  return fetch({
    url: '/v1/user/login',
    method: 'post',
    data: query
  })
}
