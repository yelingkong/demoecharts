<!--
@Time : 2020/12/29 10:14 上午
@Author : yekong
@File : anbaobingli.vue
@Software : PhpStorm
-->
<template>
  <div v-show="data.show"
       :style="{left:data.x + 'px',top:data.y + 'px'}"
       class="anbaoxinxi" :ref="id" @mousedown="mousedown">
    <div class="anbaoxinxitop">
      <div class="anbaoxinxitop_left">
        <p>无人机离线</p>
      </div>
      <div class="anbaoxinxitop_close" @click="close">
        <!--        <img src="../../assets/iconclose1.png" alt="">-->
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "jianyibingli",
  data: function () {
    return {}
  },
  props: {
    data: {
      type: Object,
      default() {
        return {x: 0, y: 0, show: false};
      }
    },
    index: {
      type: Number,
      default() {
        return 0;
      }
    },
    id: {
      type: String,
      default() {
        return '';
      }
    }
  },
  computed: mapGetters(['wurenjishow']),
  created: function () {

  },
  filters: {},
  methods: {
    close() {
      this.$emit('getindex', this.index)
    },

    mousedown(event) {
      var that = this;
      this.selectElement = this.$refs[this.id]
      var div1 = this.selectElement
      this.selectElement.style.cursor = 'move'
      this.isDowm = true
      var distanceX = event.clientX - this.selectElement.offsetLeft
      var distanceY = event.clientY - this.selectElement.offsetTop
      // alert(distanceX)
      // alert(distanceY)
      console.log(distanceX)
      console.log(distanceY)
      document.onmousemove = function (ev) {
        var oevent = ev || event
        div1.style.top = oevent.clientY - distanceY + 'px'
        div1.style.left = oevent.clientX - distanceX + 'px'
        div1.style.right = 'auto'
        that.$emit('gettopandleft', {top: oevent.clientY - distanceY, left: oevent.clientX - distanceX})
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
        div1.style.cursor = 'default'
      }
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.anbaoxinxi {
  width: 246px;
  height: 172px;
  background: url("./wurenjibg.png") no-repeat rgba(15, 55, 54, 0.8);
  border: 1px solid #604268;
  background-size: 100% 100%;
  position: absolute;
  top: 100px;
  left: 100px;

  .anbaoxinxitop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;

    .anbaoxinxitop_left {
      padding-top: 10px;
      padding-left: 10px;

      p {
        font-size: 16px;
        font-family: PingFang;
        font-weight: 800;
        color: rgba(217, 120, 253, 1);
      }
    }

    .anbaoxinxitop_close {
      width: 20px;
      height: 20px;
      cursor: pointer;


      img {
        width: 11px;
        margin-right: 10px;
        height: 11px;
        margin-top: 10px;
        cursor: pointer;
      }
    }
  }

  .anbaoxinxibottom {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: column;

    p {
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      margin-left: 11px;
      margin-right: 22px;
      line-height: 25px;

      span {
        color: #cdb33d;
        font-weight: bold;
      }
    }

    p:nth-child(5) {
      color: #dfca36;

      span {
        color: #e3e5e3;
      }
    }

  }

}
</style>
