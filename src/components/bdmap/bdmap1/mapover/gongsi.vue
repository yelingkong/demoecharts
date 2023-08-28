<template>
  <bm-overlay
    ref="customOverlay"
    pane="markerShadow"
    :class="{active}"
    class="overlay"
    @draw="draw">
    <div class="overx" :style="{'margin-top':top+'px','margin-left':left+'px',}">
      <img class="shexiangtou2" ref="overx" @click="handleClick" src="../assets/icon_gongsi.png" alt="">
      <div class="mappopwin" v-show="show">
        <img class="close" @click.stop="show=false" src="../assets/icon_close.png" alt="">
        <h3>公司简介：{{ item.orgName }}</h3>
        <div class="desc"><p>{{ item.describe }}</p></div>
        <a class="seemore" :href="item.website" target="_blank">查看更多 >></a>
      </div>
    </div>
  </bm-overlay>
</template>

<script>
import {mapGetters} from 'vuex';
import {GetRandomNum} from "../../../../utils/utils";

export default {
  props: ['text', 'position', 'active', 'item', 'name', 'img', 'desc', 'url'],
  watch: {
    position: {
      handler() {
        this.$refs.customOverlay.reload()
      },
      deep: true
    },
    popshow() {
      this.show = false
    },
    item: {
      handler() {
        this.$refs.customOverlay.reload()
        let height = this.$refs.overx.offsetHeight;
        let width = this.$refs.overx.offsetWidth;
        this.top = -height
        this.left = -(width / 2)
      },
      deep: true
    },
  },
  computed: mapGetters(['popshow']),
  data() {
    return {
      show: false,
      top: 0,
      left: 0,
      moveDoc: { //显示文档初始位置
        x: null,
        y: null
      },
      moveTools: { //显示工具栏位置
        x: null,
        y: null
      }
    }
  },
  mounted() {
    let height = this.$refs.overx.offsetHeight;
    let width = this.$refs.overx.offsetWidth;
    this.top = -height
    this.left = -(width / 2)
  },
  methods: {
    handleClick() {
      console.log(123)
      var that = this;
      var timestamp = Date.parse(new Date()) + GetRandomNum(10000, 999999);
      this.$store.commit('popshow', timestamp);
      setTimeout(() => {
        that.$nextTick(() => {
          that.show = !that.show
        })
      }, 200)
    },
    draw({
           el,
           BMap,
           map
         }) {
      const {
        lng,
        lat
      } = this.position
      console.log('经纬度')
      console.log(lng)
      console.log(lat)
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      el.style.left = pixel.x - 0 + 'px'
      el.style.top = pixel.y - 0 + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
.sample {
  overflow: hidden;
  color: #fff;
  text-align: center;
  position: absolute;
}

.overlay {
  background-size: 100% 100%;
  position: absolute;
  color: #fff;
  font-size: 0px;
}

.overlay .overx {
  position: relative;
}

.mapnum {
  width: 18px;
  height: 18px;
  background: #009944;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  position: absolute;
  left: 25px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  top: -0px;
}

.mapnum.active {
  width: 18px;
  height: 18px;
  background: #009944;
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  position: absolute;
  left: 10px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  top: -5px;
}

.ceshi {
  color: red !important;
}

.overlay.active .overx .mapnum {
  background: red !important;
}

.mappopwin {
  background: url("../assets/gongsipop.png") no-repeat;
  background-size: 100% 100%;
  width: 400px;
  height: 409px;
  position: absolute;
  left: -400px;
  top: -390px;
  display: flex;
  z-index: 100000;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;

  .close {
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    width: 14px;
    height: 14px;
  }

  h3 {
    font-size: 14px;
    font-family: PingFang;
    font-weight: bold;
    color: #FFFFFF;
    margin: 0 auto;
    padding: 0;
    width: 340px;
    text-align: left;
    margin-top: 40px;
  }

  img {
    width: 340px;
    height: 180px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .desc {
    font-size: 12px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #FFFFFF;
    height: 100px;
    width: 340px;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: column;
    text-align: left;

    p {
      text-align: left;
      width: 100%;
    }
  }
}

.shexiangtou1 {
  width: 21px;
}

.shexiangtou2 {
  width: 27px;
  position: relative;
  z-index: 10;
}

.seemore {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  font-size: 14px;
  font-family: PingFang;
  font-weight: 500;
  color: #00C0FF;
  text-decoration: none;
  width: 320px;
  margin: 0 auto;
  text-indent: -10px;
}

.popwin {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
