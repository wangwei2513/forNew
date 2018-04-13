import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from './auth'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 15000 // 请求时间
})
// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-token'] = getToken() // 让每个请求携带自定义token
  }
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})
// response拦截器
service.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 20000) {
    Message({
      message: res.message,
      type: 'error',
      duration: 5 * 1000
    })
    // 50008:非法的token; 50012:其他客户端登录了;50014:token过期了
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      MessageBox.confirm('你已被登出，可以继续停留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('FedLogOut').then(() => {
          location.reload() // 重新实例化vue-router对象
        })
      })
    }
    return Promise.reject('error')
  } else {
    return response.data
  }
}, error => {
  console.log('error' + error)
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
}
)
export default service
