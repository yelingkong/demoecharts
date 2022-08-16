/**
* @Author: 858834013@qq.com
* @Name: lottie
* @Date: 2022-08-13
* @Desc: lottie封装
*/
<template>
  <div ref="lottie" class="lottie">

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
    status: {
      type: Boolean,
      value: false
    },
    canvasId: {
      type: String,
      default: 'canvasId'
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
        this.init();
      }
    }
  },
  mounted() {
    this.intLottie();
  },
  data() {
    return {}
  },
  methods: {
    intLottie() {
      // 渲染主图按钮动画
      let lottieBox = lottie.loadAnimation({
        container: this.$refs.lottie, // 包含动画的dom元素
        renderer: this.renderer, // 渲染出来的是什么格式
        loop: true, // 循环播放
        autoplay: true, // 自动播放
        animationData: this.path
      });
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
