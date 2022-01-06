// 线上地址
var url1 = 'http://mock.wanjunshijie.com'
// 本地地址
var url2 = 'http://mock.wanjunshijie.com'
var ip = process.env.NODE_ENV === 'production' ? url1 + "/" : url2 + "/"
export const devIp = ip
