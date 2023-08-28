/**
* @Author: 858834013@qq.com
* @Name: lottieStar
* @Date: 2022-08-13
* @Desc: 动画播放组件
*/
<template>
  <div @click="getChangeStatus" ref="lottie" class="lottie">

  </div>
</template>

<script>
import lottie from 'lottie-web'

export default {
  props: {
    width: {
      type: Number,
      value: 100
    },
    canvasId: {
      type: String,
      default: 'canvasId'
    },
    status: {
      type: Boolean,
      value: false
    },
    height: {
      type: Number,
      value: 100
    },
    renderer: {
      type: String,
      value: 'svg'
    },
    path: {
      type: String | Object,
      observer: function observer() {
        this.intLottie();
      }
    }
  },
  mounted() {
    this.intLottie();
  },
  data() {
    return {
      lottie: null
    }
  },
  methods: {
    intLottie() {
      // 渲染主图按钮动画
      var that = this;
      that.lottie = lottie.loadAnimation({
        container: this.$refs.lottie, // 包含动画的dom元素
        renderer: this.renderer, // 渲染出来的是什么格式
        loop: false, // 循环播放
        autoplay: false, // 自动播放
        animationData: this.path
      });
      this.getStatus()
    },
    getStatus() {
      this.lottie.goToAndStop(this.status ? this.lottie.getDuration(true) - 1 : 0, true)
    },
    getChangeStatus() {
      var that = this;
      that.lottie.setDirection(this.status ? -1 : 1)
      that.$emit('update:status', this.status ? false : true)
      that.lottie.play()
    },
    destory: function destory() {
      if (this.lottie) {
        this.lottie.destroy();
        this.lottie = null;
      }
    }
  },
  onUnload() {
    this.destory();
  }
}
</script>

<style>
.lottie {
  width: 100%;
  height: 100%;
}
</style>
