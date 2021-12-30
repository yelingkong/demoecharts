// 线上地址
var url1 = 'https://www.fastmock.site/mock/9a80a7ebf1e7d23919a9c51962dcbc25'
// 本地地址
var url2 = 'https://www.fastmock.site/mock/9a80a7ebf1e7d23919a9c51962dcbc25'
var ip = process.env.NODE_ENV === 'production' ? url1 + "/" : url2 + "/"
export const devIp = ip
