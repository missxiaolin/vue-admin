import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { getToken } from 'common/js/cache'
import * as error from 'api/config'
import routes from '@/router'
import Qs from 'qs'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000                  // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  if (config.method === 'post' && typeof config.data === 'string') {
    config.data = Qs.stringify(config.data)
  }
  // Do something before request is sent
  let token = getToken()
  if (token) {
    config.headers['X-TOKEN'] = token
  }

  // config.headers['Content-Type'] = 'application/json'
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
  // config.headers['Content-Type'] = 'multipart/form-data'
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    let res = response.data
    // token
    if (res.code != 0) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
    }
    if (res.code == error.ERROR_TOKEN_EXPIRE || res.code == error.ERROR_TOKEN_ILLEGAL) {
      MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '提示', { // token过期情况
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        routes.push({name: 'login'})
      })
    } else if (res.code == error.ERROR_AUTHORITY) { // 权限
      routes.push({name: '401'})
    }
    return Promise.resolve(response)
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
