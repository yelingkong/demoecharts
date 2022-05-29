<template>
  <div class="uploadimg">
    <div class="imglist" v-for="(item,index) in imgList" :key="index">
      <uploadimg ref="uploadimg" @getdata="getimg">
        <div class="imageItem" :class="{mr0:maxCount==1}">
          <el-image
            class="elimage"
            :src="item"
            fit="cover"
          />
          <div class="uploadAgain">
            重新上传
          </div>
        </div>
      </uploadimg>
    </div>
    <uploadimg ref="uploadimg" @getdata="getimg" v-if="maxCount>imgList.length">
      <img class="imgupload" src="../../assets/imgupload.png" alt="">
    </uploadimg>
  </div>
</template>

<script>
import uploadimg from './uploadImg.vue'
import configs from '@/config/config.js'

export default {
  data () {
    return {
      imgList: [],
      keyList: []
    }
  },
  components: {
    uploadimg
  },
  props: {
    maxCount: {
      type: Number,
      default () {
        return 100
      }
    },
    list: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted () {
    if (this.list.length > 0) {
      this.getImgListByKey()
    }
  },
  methods: {
    getimg (e) {
      var that = this
      that.imgList[0] = configs.uploadImg + e
      that.keyList[0] = e
    },
    getKey () {
      return this.keyList
    },
    deleteImg () {
      var that = this
      that.imgList.splice(0, 1)
      that.keyList.splice(0, 1)
      that.getKeyList()
    },
    // 根据key获取图片
    getImgListByKey (list) {
      var that = this
      try {
        that.keyList = list
        that.imgList = []
        for (const key of that.keyList) {
          that.imgList.push(configs.uploadImg + key)
        }
      } catch (error) {
        console.log(error)
      }
    },
    getKeyList () {
      var that = this
      const keyList = that.keyList.join(',')
      this.$emit('getdata', keyList)
    }
  }
}
</script>

<style scoped lang="scss">
.upload {
  width: 140px;
  height: 140px;
  background: #EDEDED;
  border-radius: 20px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;

  img {
    width: 34px;
  }
}

.uploadimg {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  .imageItem {
    margin-right: 32px;
    position: relative;

    .deleteimg {
      width: 30px;
      height: 30px;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  .imageItem:nth-child(4n) {
    margin-right: 0;
  }

}

.mr0 {
  margin-right: 0 !important;
}

.elimage {
  width: 150px;
  height: 150px;
  border-radius: 10px;

}

.uploadAgain {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 150px;
  height: 50px;
  background: rgba(#000000, 0.5);
  border-radius: 0px 0px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  font-size: 20px;
  font-family: Heiti SC-Light, Heiti SC;
  font-weight: 300;
  color: #FFFFFF;
}

.imglist {
  :deep(.el-upload--picture-card) {
    border: none;
  }
}
</style>
