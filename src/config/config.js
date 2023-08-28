const prefixhost = require('../../qiniu-upload-prefiex.js');
const prefix = require('../../qiniu-upload-prefiex.js');
var productionUrl = prefixhost + prefix //生产地址
var developmentUrl = '/' // 开发地址
var links = process.env.NODE_ENV === 'production' ? productionUrl : developmentUrl
var configs = {
  mapkey: 'LE5BZ-TQ7C2-I65U7-CQ36U-EBAWH-6TFL4',
  expires: 60, // 签名有效期(单位：秒)
  link: links,
}

export default configs
