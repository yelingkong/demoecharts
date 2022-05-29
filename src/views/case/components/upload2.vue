<template>
  <div class="uploadimgBody">
    <div class="imageItem" :class="{mr0:maxCount==1}" v-for="(item,index) in imgList" :key="index">
      <el-image
        class="elimage"
        :src="item"
        :preview-src-list="imgList"
        :initial-index="4"
        fit="cover"
      />
      <img @click="deleteImg(index)" class="deleteimg"
           src="https://cdn.hifreeter.com/xiaochengxu/static/login/icon_delete.png"/>
    </div>
    <uploadimg @getdata="getimg" v-if="maxCount>imgList.length">
      <slot></slot>
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
  methods: {
    getimg (e) {
      var that = this
      that.imgList.push(configs.uploadImg + e)
      that.keyList.push(e)
      that.getKeyList()
    },
    getKey () {
      return this.keyList
    },
    deleteImg (index) {
      var that = this
      that.imgList.splice(index, 1)
      that.keyList.splice(index, 1)
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
  width: 100px;
  height: 100px;
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

.uploadimgBody {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  width: 500px;

  :deep(.el-upload) {
    width: 100px;
    height: 100px;
  }

  :deep(.imgupload) {
    width: 100px;
    height: 100px;
  }

  .imageItem {
    margin-right: 32px;
    position: relative;
    margin-bottom: 12px;

    .deleteimg {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 5px;
      right: 5px;
      cursor: pointer;
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
  width: 100px;
  height: 100px;
  border-radius: 10px;

  :deep(.uploadimg) {
    width: 100px;
    height: 100px;
  }
}
</style>
