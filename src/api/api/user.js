import request from '../request'

// 百度地图
export function demoechartsbdmap() {
  return request({
    url: '/mock/27/demoecharts/bdmap',
    method: 'get',
  })
}

// 百度地图
export function demoechartspaihang() {
  return request({
    url: '/mock/27/demoecharts/paihang',
    method: 'get',
  })
}
