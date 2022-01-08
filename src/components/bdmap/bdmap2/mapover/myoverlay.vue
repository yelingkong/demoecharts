<template>
  <bm-overlay
    ref="customOverlay"
    pane="floatPane"
    :class="{active}"
    class="overlay"
    @draw="draw">
    <div class="overx" @click="handleClick">
      <img class="shexiangtou1" v-if="active" src="../assets/icon_shexiangtou1.png" alt="">
      <img class="shexiangtou2" v-else src="../assets/shexiangtou2.png" alt="">
      <div class="mapnum" :class="{active:active}" @click.stop="godetail" v-show="!show">{{ text }}</div>
      <div class="mappopwin" v-show="show">
        <h3>某某区西口</h3>
        <p class="desc">告警信息说明文案告警信息说明文案</p>
        <p class="mapinfo">未处理告警：<span>{{ text }}</span></p>
      </div>
    </div>
  </bm-overlay>
</template>

<script>
export default {
  props: ['text', 'position', 'active'],
  watch: {
    position: {
      handler () {
        this.$refs.customOverlay.reload()
      },
      deep: true
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    godetail () {
      this.$router.push({
        path: '/news',
        query: { userId: 123 }
      })
    },
    handleClick () {
      this.show = !this.show
    },
    draw ({
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

/*.sample.active {*/
/*  background: rgba(0,0,0,0.75);*/
/*  color: #fff;*/
/*}*/

.overlay {
  //background: url("../../assets/mapjiankongimg.png");
  //width: 42px;
  //height: 47px;
  background-size: 100% 100%;
  position: relative;
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
  background: url("../assets/mappopbg.png") no-repeat;
  width: 165px;
  height: 99px;
  position: absolute;
  left: 40px;
  top: 0px;
  display: flex;
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
    margin: 5px 15px 0 10px;
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
}

.shexiangtou2 {
  width: 35px;
}
</style>
