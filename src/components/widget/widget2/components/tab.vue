/**
* @Author: 858834013@qq.com
* @Name: tabs
* @Date: 2022-05-23
* @Desc:

*/
<template>
  <div>
    <div class="tabsBody horizontal-scrollbar-container">
      <div class="tabs scroll-wrapper" ref="scroll">
        <div class="scroll-content" ref="scroll2">
          <div class="newTabs">
            <div class="tab2 listtg" ref="scrollItem" @click="getactive($event,index)" v-for="(item,index) in list">
              <div class="tab cur" :class="{active:active==item.id}"
                   :key="index"><span>{{ item.name }}</span>
                <div class="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import {switchTime} from '@/api/ipConfig'

export default {
  name: 'tabs',
  data() {
    return {
      flag: false,
      downX: 0,
      scrollLeft: 0,
      index: 0,
      scroll: null,
      lastSpot: 0
    }
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    active: {
      type: Number,
      default() {
        return 0
      }
    },
  },
  mounted() {
    var that = this
    that.$nextTick(() => {
      that.init2()
    })
  },
  watch: {
    list() {
      var that = this
      that.$nextTick(() => {
        that.init2()
      })
    },
    active() {
      this.start()
    }
  },
  methods: {
    start() {
      /**

       * 1)先让选中的元素滚到可视区域的最左边 scrollLeft

       * 2)接着向右移动容器一半的距离 containWidth / 2

       * 3)最后向左移动item一半的距离 offsetWidth / 2

       */
        // let lastSpot = this.$refs.scroll.scrollLeft
      let lastSpot = this.lastSpot
      const nextSpace = 8 //每次移动距离
      let scrollItemTimer = setInterval(() => {
        this.$nextTick(() => {
          let offsetWidth = this.$refs.scrollItem[this.index].offsetWidth //item
          let scrollLeft = this.$refs.scrollItem[this.index].offsetLeft //选中的元素滚到可视区域的最左边
          const containWidth = this.$refs.scroll.offsetWidth //容器的宽度
          let resultSpot = scrollLeft + offsetWidth / 2 - containWidth / 2 //最终要停留的点
          if (Math.abs(lastSpot - resultSpot) < nextSpace) {
            clearInterval(scrollItemTimer)
          }
          if (resultSpot >= lastSpot) {
            lastSpot = lastSpot + nextSpace
          } else {
            lastSpot = lastSpot - nextSpace
          }
          this.lastSpot = lastSpot
          this.$refs.scroll2.style.transform = 'translateX(-' + lastSpot + 'px) translateY(0px) translateZ(1px)'
          // this.$refs.scroll.scrollTo(lastSpot, 0)
        })
      }, 15)
    },
    getactive2() {
      if (this.index < this.list.length - 1) {
        this.index = this.index + 1
      } else {
        this.index = 0
      }
      this.$emit('update:active', this.list[this.index].id)
    },
    getswich() {
      clearInterval(this.time)
      let that = this
      this.time = window.setInterval(() => {
        setTimeout(() => {
          that.getactive2()
        }, 0)
      }, switchTime)
    },
    init2() {
      var that = this
      this.scroll = new BScroll(this.$refs.scroll, {
        scrollX: true,
        scrollY: false,
        click: true,
        probeType: 1,
        scrollbar: {
          fade: true,
          interactive: false,
          scrollbarTrackClickable: false,
          scrollbarTrackOffsetType: 'clickedPoint' // can use 'step'
        }
      })
      this.$nextTick(() => {
        that.getswich()
      })
      this.scroll.on('scrollEnd', () => {
        console.log('scrollEnd')
      })
      this.scroll.on('scrollStart', () => {
        console.log('scrollStart')
      })
      this.scroll.on('scroll', () => {
        console.log('scroll')
      })
    },
    getactive(e, index) {
      console.log(e)
      this.index = index
      this.$emit('update:active', this.list[this.index].id)
    },
  }
}
</script>

<style lang="scss" scoped>
.tabsBody {
  width: 100%;
  overflow: hidden;
}

.newTabs {
  display: flex;
  display: -webkit-flex;
  padding: 0;
}

.tabs {
  display: flex;
  display: -webkit-flex;
  padding: 0;

  .tab {
    height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: flex-start;
    position: relative;
    margin-right: 20px;

    span {
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      white-space: nowrap;
    }

    .line {
      background: rgba(54, 107, 229, 0);
      border-radius: 4px;
      position: absolute;
      bottom: 1px;
      width: 100%;
      height: 4px;
    }
  }

  .tab.active {
    span {
      color: #0DF9E6;
    }

    .line {
      background: #0DF9E6;
    }
  }
}

.scroll-content {
  display: inline-block;
  align-self: center;
}
</style>

<style lang="scss">
.bscroll-indicator {
  height: 100%;
  width: 20px;
  border-radius: 6px;
  background-color: #4BAEFF !important;
}
</style>
