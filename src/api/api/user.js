import request from '../request'
import qs from 'qs'

// 今日访客量
export function visitorCount(id) {
  return request({
    url: '/statistics/visitor-count/' + id,
    method: 'get',
  })
}

// 年度预警量
export function annual(id) {
  return request({
    url: '/statistics/alarm-count/annual/' + id,
    method: 'get',
  })
}

// 今日预警量
export function daily(id) {
  return request({
    url: '/statistics/alarm-count/daily/' + id,
    method: 'get',
  })
}
