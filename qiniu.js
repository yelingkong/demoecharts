var fs = require('fs')
var path = require('path')
var qiniu = require("qiniu")
var qiniuPrefix = require("./qiniu-upload-prefiex")
//自己七牛云的秘钥
var accessKey = qiniuPrefix.accessKey
var secretKey = qiniuPrefix.secretKey
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
var config = new qiniu.conf.Config()
// 空间对应的机房，zone_z1代表华北，其他配置参见七牛云文档
// Zone_z0 华东
// Zone_z1 华北
// Zone_z2 华南
// Zone_na0 北美
// Zone_as0 东南亚
// Zone_cn-east-2 华东-浙江2
config.zone = qiniu.zone.Zone_z0
// 是否使用https域名
config.useHttpsDomain = true
// 上传是否使用cdn加速
config.useCdnDomain = true
var formUploader = new qiniu.form_up.FormUploader(config)
var putExtra = new qiniu.form_up.PutExtra()
//文件前缀
const prefix = qiniuPrefix.prefix
main()

function main() {
  displayFile('./dist')
}

function upload(key, localFile) {
  var Bucket = key
  var options = {
    scope: Bucket,
  }
  var putPolicy = new qiniu.rs.PutPolicy(options)
  var uploadToken = putPolicy.uploadToken(mac)
  let str = null
  if (localFile.indexOf("./dist\\") >= 0) {
    str = localFile.replace("./dist\\", "")
  } else if (localFile.indexOf("./dist/") >= 0) {
    str = localFile.replace("./dist/", "")
  } else {
    str = localFile
  }
  key = prefix + str
  key = key.replace("\\", "/")
  formUploader.putFile(uploadToken, key, localFile, null, function (respErr, respBody, respInfo) {
    if (respErr) {
      console.log(localFile + "文件上传失败,正在重新上传-----------")
      upload(qiniuPrefix.space, localFile)
    } else {
      if (respInfo.statusCode == 200) {
        console.log(respBody)
      } else {
        console.log(respInfo.statusCode)
        console.log(respBody)
        if (respBody.error) {
          console.log(respBody.error)
        }
      }
    }
  })
}

function displayFile(param) {
  //转换为绝对路径
  //var param = path.resolve(param);
  fs.stat(param, function (err, stats) {
    //如果是目录的话，遍历目录下的文件信息
    if (stats.isDirectory()) {
      fs.readdir(param, function (err, file) {
        file.forEach((e) => {
          //遍历之后递归调用查看文件函数
          //遍历目录得到的文件名称是不含路径的，需要将前面的绝对路径拼接
          var absolutePath = path.join(param, e)
          //var absolutePath = path.resolve(path.join(param, e));
          displayFile(absolutePath)
        })
      })
    } else {
      //file2/这里是空间里的文件前缀
      var key = qiniuPrefix.space
      var localFile = './' + param
      if (!localFile.endsWith(".gz")) {
        upload(key, localFile)
      }
    }
  })
}
