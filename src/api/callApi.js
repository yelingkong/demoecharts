import axios from 'axios'
import { Message } from 'element-ui'
import { devIp } from './ipConfig'

function checkStatus (response) {
  const data = response.data    // 响应数据
  const status = response.status    // 网络状态
  const programsStatus = data.code    // 程序状态

  if (status === 200) {
    if (programsStatus === 200) {
      return data
    } else {
      const error = data
      throw error
    }
  }
}

// 判断是网络异常还是程序异常
function checkError (error) {
  const { response } = error

  if (response) {
    const status = response.status
    switch (status) {
      case 404:
        Message.error({
          showClose: true,
          message: `您的请求不存在！！！(${status})`
        })
        break
      case 502:
        Message.error({
          showClose: true,
          message: `服务器异常了！！！(${status})`
        })
        break
      case 400:
        Message.error({
          showClose: true,
          message: `参数错误了！！！(${status})`
        })
        break
      default:
        Message.error({
          showClose: true,
          message: `网络异常了！！！(${status})`
        })
    }
  } else {
    Message.error({
      showClose: true,
      message: `${error.message} (${error.code})` || '服务器异常了！！！'
    })
  }
  throw error
}

function CALL_API (url, method = 'GET', request) {
  let params = request
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  return axios({
    url,
    baseURL: devIp,
    method,
    headers,
    timeout: 20000,
    data: params
  }).then(checkStatus).catch(checkError)
}

export default CALL_API
