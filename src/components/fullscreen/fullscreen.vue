<template>
  <div className="full" @click="fullScreen">
    <img v-if="a % 2 == 0" src="../../assets/full.png" alt="">
    <span v-if="a % 2 == 0">全屏</span>
    <img v-if="a % 2 == 1" src="../../assets/icon_exit.png" alt="">
    <span v-if="a % 2 == 1">退出</span>
  </div>
</template>

<script>

export default {
  name: "fullScreen",
  components: {},
  props: {
    id: {
      type: String,
      default() {
        return '';
      }
    }
  },
  data() {
    return {
      a: 0
    }
  },
  watch: {},
  mounted() {
  },
  methods: {
    fullScreen() {
      this.a++
      this.a % 2 == 1 ? this.enterfullscreen() : this.exitfullscreen()
    },
    //控制全屏
    enterfullscreen() { //进入全屏
      var docElm = this.id ? document.getElementById(this.id) : document.documentElement
      //W3C
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen()
      }
      //FireFox
      else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen()
      }
      //Chrome等
      else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen()
      }
      //IE11
      else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen()
      }
    },
    //退出全屏
    exitfullscreen() {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.full {
  width: 140px;
  height: 60px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  position: absolute;
  z-index: 1000;
  right: 20px;
  bottom: 20px;

  img {
    width: 30px;
    margin-right: 20px;
  }

  span {
    font-size: 26px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
  }
}
</style>
