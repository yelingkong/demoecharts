import axios from 'axios'
import {Message} from 'element-ui'
import {devIp} from '@/api/ipConfig'
import router from '../router'
// create an axios instance

const service = axios.create({
  baseURL: devIp + '', // 测试IP
  timeout: 100000, // request timeout
  // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  headers: {'Content-Type': 'application/json'},
  transformRequest: function (obj) {
    var str = []
    for (var p in obj) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
    return str.join('&')
  }
})

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent
  let token = localStorage.getItem('token')
  if (token) {
    config.headers['token'] = token // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  }
  return config
}, error => {
  // Do something with request error
  // console.log(error); // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  // response => response,
  response => {
    const res = response.data
    return res;
    if (res.status == 1) {
      return res
    } else if (res.code == 100) {
      if (res.message == 'token无效') {
        localStorage.removeItem('token')
        router.push({path: '/login'})
      } else if (res.message == '暂未有任何机器') {

      } else {
        Message({
          message: res.message,
          type: 'error',
          duration: 2 * 1000
        })
      }
      return res
    } else {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      return res
    }
  },
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3000
    })
    return Promise.reject(error)
  })

export default service
