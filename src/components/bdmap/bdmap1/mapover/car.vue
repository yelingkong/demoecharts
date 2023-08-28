<template>
  <bm-overlay
    ref="customOverlay"
    pane="floatPane"
    :class="{active}"
    class="overlay"
    @draw="draw">
    <div class="overx" :style="{'margin-top':top+'px','margin-left':left+'px',}">
      <img class="shexiangtou1" v-if="item.isonline==1" ref="overx" @click="handleClick" src="../assets/icon_car.png"
           alt="">
      <img class="shexiangtou1" v-if="item.isonline==0" ref="overx" @click="handleClick"
           src="../assets/icon_car2.png" alt="">
      <!--      <div class="mapnum" :class="{active:active}" @click.stop="godetail" v-show="!show">{{ text }}</div>-->
      <div class="mappopwin" v-if="show">
        <img class="close" @click.stop="show=false" src="../assets/icon_close.png" alt="">
        <div class="maphead">
          <div class="mapheadl">
            <span></span>
            <p>车辆信息</p>
          </div>
          <div class="status" v-if="item.isonline==1">
            状态在线
          </div>
          <div class="status1" v-else>
            状态离线
          </div>
        </div>
        <p class="desc">设备号:{{ item.num }}</p>
        <p class="desc">车牌号:{{ item.carNum }}</p>
        <p class="desc">作业时间:{{ item.createTime }}</p>
      </div>
    </div>
  </bm-overlay>
</template>

<script>
import {mapGetters} from 'vuex';
import {GetRandomNum} from "../../../../utils/utils";
export default {
  props: ['text', 'position', 'active', 'item', 'num', 'createTime', 'carNum', 'isonline'],
  watch: {
    position: {
      handler() {
        this.$refs.customOverlay.reload()
      },
      deep: true
    },
    item: {
      handler() {
        this.$refs.customOverlay.reload()
      },
      deep: true
    },
    popshow() {
      this.show = false
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
  background: url("../assets/cheliangpop.png") no-repeat;
  background-size: 100% 100%;
  width: 250px;
  height: 172px;
  position: absolute;
  left: 40px;
  top: 0px;
  z-index: 1000;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;

  h3 {
    font-size: 14px;
    font-family: PingFang;
    font-weight: bold;
    color: #FFFFFF;
    margin: 0;
    margin-left: 10px;
    margin-top: 10px;
    padding: 0;
  }

  p.desc {
    font-size: 13px;
    font-family: PingFang;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 18px;
    margin: 5px 15px 0 30px;
  }

  p.mapinfo {
    font-size: 13px;
    font-family: PingFang;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 18px;
    margin-left: 10px;
    margin-top: 5px;

    span {
      color: #FCFF00;
      margin-left: 5px;
    }
  }

}

.shexiangtou1 {
  width: 21px;
  position: relative;
  z-index: 10;
}

.close {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  width: 14px;
  height: 14px;
}

.maphead {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  padding-top: 20px;

  .mapheadl {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    margin-left: 30px;

    span {
      width: 2px;
      height: 14px;
      background: #00C0FF;
    }

    p {
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: bold;
      color: #00B8FF;
      margin-left: 5px;
    }
  }

  .status {
    width: 50px;
    height: 18px;
    background: rgba(116, 227, 255, 0);
    border: 1px solid #24FF00;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    font-size: 10px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #24FF00;
    margin-right: 25px;
  }

  .status1 {
    width: 50px;
    height: 18px;
    background: rgba(116, 227, 255, 0);
    border: 1px solid #BCBEC1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    font-size: 10px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #BCBEC1;
    margin-right: 25px;
  }
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
