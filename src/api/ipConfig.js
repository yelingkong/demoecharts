// 线上地址
var url1 = '//mock.wanjunshijie.com'
// 本地地址
var url2 = '//mock.wanjunshijie.com'
var ip = process.env.NODE_ENV === 'production' ? url1 + "/" : url2 + "/"
export const devIp = ip
export const switchTime = 5000
