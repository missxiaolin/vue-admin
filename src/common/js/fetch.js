import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from 'common/js/cache'
import * as error from 'api/config'
import routes from '@/router'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000                  // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  let token = getToken()
  if (token) {
    config.headers['X-TOKEN'] = token
  }

  // config.headers['Content-Type'] = 'application/json'
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
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
    if (res.code == error.ERROR_TOKEN_EXPIRE || res.code == error.ERROR_TOKEN_ILLEGAL) {
      routes.push({name: 'login'})
    } else if (res.code == error.ERROR_AUTHORITY) { // 权限

    }
    return response
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
