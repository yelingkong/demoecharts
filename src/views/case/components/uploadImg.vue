/**
* @Author: 858834013@qq.com
* @Name: uploadImg
* @Date: 2022-05-28
* @Desc: uploadImg
*/
<template>
  <div class="upload-file">
    <el-upload list-type="picture-card" action="#"
               :before-upload="handleBeforeUpload"
               :show-file-list="true" ref="upload">
      <slot></slot>
    </el-upload>
  </div>
</template>

<script>
import configs from '@/config/config'
import { uuid } from 'vue-uuid'

const COS = require('cos-js-sdk-v5')
const Bucket = configs.Bucket
const Region = configs.Region
const cos = new COS({
  SecretId: configs.SecretId,
  SecretKey: configs.SecretKey
})
export default {
  name: 'uploadImg',
  props: {
    // 值
    value: [String, Object, Array],
    // 大小限制(MB)
    fileSize: {
      type: Number,
      default: 5
    },
    fileType: {
      type: Array,
      default: () => ['png', 'jpg', 'jpeg']
    }
  },
  data () {
    return {}
  },
  methods: {
    handleStart () {
    },
    // 上传前校检格式和大小
    handleBeforeUpload (file) {
      // 校检文件类型
      if (this.fileType) {
        let fileExtension = ''
        if (file.name.lastIndexOf('.') > -1) {
          fileExtension = file.name.slice(file.name.lastIndexOf('.') + 1)
        }
        const isTypeOk = this.fileType.some(type => {
          if (file.type.indexOf(type) > -1) return true
          if (fileExtension && fileExtension.indexOf(type) > -1) return true
          return false
        })
        if (!isTypeOk) {
          this.$message.error(`文件格式不正确, 请上传${this.fileType.join('/')}格式文件!`)
          return false
        }
      }
      // 校检文件大小
      if (this.fileSize) {
        const isLt = file.size / 1024 / 1024 < this.fileSize
        if (!isLt) {
          this.$message.error(`上传文件大小不能超过 ${this.fileSize} MB!`)
          return false
        }
      }
      this.uploadFileToTencentClound(file).then(response => {
        console.log(response)
        this.$emit('getdata', response)
      })
    },
    /** 上传图片到腾讯云**/
    uploadFileToTencentClound (file) {
      console.log(file)
      console.log('文件名')
      var key = uuid.v1() + '.' + file.name.split('.').pop().toLowerCase()
      return new Promise(resolve => {
        cos.putObject(
          {
            Bucket: Bucket /* 存储桶 */,
            Region: Region /* 存储桶所在地域，必须字段 */,
            Key: key,
            StorageClass: 'STANDARD', // 上传模式, 标准模式
            Body: file, // 上传文件对象
            onProgress: function (info) {
              console.log('[cos.postObject-seccess]', JSON.stringify(info))
            }
          },
          function (err, data) {
            console.log('[cos.postObject-err]', err || data)
            resolve(key)
          }
        )
      })
    }
  }
}
</script>

<style scoped lang="scss">
.upload-file {
  :deep(.el-upload-list__item) {
    width: 100px;
    height: 100px;
    margin-right: 20px;
  }
}

:deep(.el-upload--picture-card) {

}

.upload-file.hide {
  :deep(.el-upload--picture-card) {
    display: none;
  }
}
</style>
