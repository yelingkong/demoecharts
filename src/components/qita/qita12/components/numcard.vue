<template>
  <div class="numCard">
    <span :class="className" v-if="show">{{ num }}</span>
  </div>
</template>

<script>
import '@/utils/jquery.leoTextAnimate'
import $ from 'jquery'

export default {
  name: 'numCard',
  components: {},
  props: {
    num: {
      type: String | Number,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      show: true,
      className: ""
    }
  },
  watch: {
    num() {
      this.show = false
      this.$nextTick(() => {
        this.show = true
        setTimeout(() => {
          $('.' + this.className).leoTextAnimate({
            delay: 2000,
            speed: 3000,
            autorun: true,
            fixed: [',', ':', '.'],
            start: '-'
          })
        }, 10)
      })
    }
  },
  mounted() {
    // 初始动画
    this.className = 'num' + this.randomString(10)
    this.$nextTick(() => {
      $('.' + this.className).leoTextAnimate({
        delay: 2000,
        speed: 3000,
        autorun: true,
        fixed: [',', ':', '.'],
        start: '-'
      })
    })
  },
  methods: {
    randomString(e) {
      e = e || 32;
      var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        a = t.length,
        n = "";
      for (var i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
      return n
    },
  }
}
</script>

<style lang="scss" scoped>
.numCard {
  background: url("assets/numbg.png") no-repeat;
  width: 36px;
  height: 47px;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-left: 3px;
  margin-right: 3px;

  span {
    font-size: 36px;
    font-family: DIN;
    font-weight: bold;
    color: #FFFFFF;
  }
}
</style>
