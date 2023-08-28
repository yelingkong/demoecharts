<!--
@Time : 2020/12/24 10:35 上午
@Author : yekong
@File : set.vue
@Software : PhpStorm
-->

<template>
  <div class="setbody">
    <div class="footerset" id="driftset" @mousedown="mousedown">
      <div class="setx" v-if="type==1">
        <div class="setxtabx" v-if="show">
          <div class="getseturl" v-if="active==0">
            <router-link to="/" class="getseturlitem">
              <img src="./assets/tubiao_mubiaozhuizong.png" alt="">
              <p>目标追踪</p>
            </router-link>
            <router-link to="/" class="getseturlitem">
              <img src="./assets/tubiao_weixieganzhi.png" alt="">
              <p>威胁感知</p>
            </router-link>
            <router-link to="/" class="getseturlitem">
              <img src="./assets/tubiao_weixieganzhi.png" alt="">
              <p>执勤状态</p>
            </router-link>
            <router-link to="/ruqinjiance" class="getseturlitem">
              <img src="./assets/tubiao_ruqinjiance.png" alt="">
              <p>入侵检测</p>
            </router-link>
            <router-link to="/" class="getseturlitem">
              <img src="./assets/tubiao_zonghetaishi.png" alt="">
              <p>综合态势</p>
            </router-link>
            <router-link to="/" class="getseturlitem">
              <img src="./assets/tubiao_chururenyuan.png" alt="">
              <p>出入人员</p>
            </router-link>
          </div>
          <div class="getlist" v-if="active==1">
            <div class="getlist2" @click="getactive2(0)" :class="{active:active2==0}">
              <div class="getlist2img">
                <img src="./assets/tubiao_wurenjiweizhi.png" alt="">
              </div>
              <p>无人机位置</p>
            </div>
            <div class="getlist2" @click="getactive2(1)" :class="{active:active2==1}">
              <div class="getlist2img">
                <img src="./assets/tubiao_shexiangtouweizhi.png" alt="">
              </div>
              <p>摄像头位置</p>
            </div>
            <div class="getlist2" @click="getactive2(2)" :class="{active:active2==2}">
              <div class="getlist2img">
                <img src="./assets/tubiao_anbaobingliweizhi.png" alt="">
              </div>
              <p>安保兵力位置</p>
            </div>
          </div>
          <div class="setxlist">
            <div class="setxlist_item" :class="{active:active==index}" @click="getcative(index)"
                 v-for="(item,index) in list"
                 :key="index">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="set" @click="show=!show">
        </div>
      </div>
      <div class="setx" v-if="type==0">
        <div class="setxtabx" v-if="show">
          <div class="getseturl">
            <router-link to="/" class="getseturlitem">
              <img src="./assets/tubiao_mubiaozhuizong.png" alt="">
              <p>目标追踪</p>
            </router-link>
            <router-link to="/" class="getseturlitem">
              <img src="./assets/tubiao_weixieganzhi.png" alt="">
              <p>威胁感知</p>
            </router-link>
            <router-link to="/" class="getseturlitem">
              <img src="./assets/tubiao_weixieganzhi.png" alt="">
              <p>执勤状态</p>
            </router-link>
            <router-link to="/" class="getseturlitem">
              <img src="./assets/tubiao_ruqinjiance.png" alt="">
              <p>入侵检测</p>
            </router-link>
            <router-link to="/" class="getseturlitem">
              <img src="./assets/tubiao_zonghetaishi.png" alt="">
              <p>综合态势</p>
            </router-link>
            <router-link to="/" class="getseturlitem">
              <img src="./assets/tubiao_chururenyuan.png" alt="">
              <p>出入人员</p>
            </router-link>
          </div>
        </div>
        <div class="set" @click="show=!show">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "set",
  data: function () {
    return {
      list: ['二级菜单', '图层选择'],
      show: false,
      active: 1,
      active2: 0
    }
  },
  props: {
    type: {
      type: Number,
      default() {
        return 1;
      }
    }
  },
  created: function () {

  },
  filters: {},
  methods: {
    getshow() {
      this.show = true
    },
    getcative(e) {
      this.active = e;
    },
    getactive2(e) {
      this.active2 = e;
    },
    mousedown(event) {
      this.selectElement = document.getElementById('driftset')
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
      }
      document.onmouseup = function () {
        document.onmousemove = null
        document.onmouseup = null
        div1.style.cursor = 'default'
      }
    },
    mousedown1(event) {
      this.selectElement = document.getElementById('driftset1')
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
.set {
  right: 10px;
  cursor: pointer;
  background: url("./assets/setingimg2.png");
  width: 56px;
  height: 56px;
  background-size: 100% 100%;
}

.setxlist {
  position: absolute;
  bottom: 60px;
  width: 75px;
  right: 0;

  .setxlist_item {
    width: 75px;
    cursor: pointer;
    height: 24px;
    background: rgba(15, 55, 54, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    font-size: 13px;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 24px;
    color: #FFFFFF;
  }

  .setxlist_item.active {
    color: #5CE4D6;
  }
}

.getseturl {
  width: 243px;
  height: 243px;
  background: rgba(15, 55, 54, 0.78);
  opacity: 0.78;
  border-radius: 50%;
  position: absolute;
  right: 40px;
  bottom: 100px;

  .getseturlitem {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100px;
    position: absolute;
    top: 40px;
    left: 10px;
    font-size: 13px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #C3D3DF;

    p {
      margin-top: 10px;
    }
  }

  .getseturlitem.router-link-exact-active {
    color: rgba(0, 252, 254, 1);
  }

  .getseturlitem:nth-child(2) {
    position: absolute;
    top: 10px;
    left: 90px;
  }

  .getseturlitem:nth-child(3) {
    position: absolute;
    top: 70px;
    left: 150px;
  }

  .getseturlitem:nth-child(4) {
    position: absolute;
    top: 90px;
    left: 80px;
  }

  .getseturlitem:nth-child(5) {
    position: absolute;
    top: 135px;
    left: 10px;
  }

  .getseturlitem:nth-child(6) {
    position: absolute;
    top: 155px;
    left: 120px;
  }
}

.getlist {
  background: rgba(15, 55, 54, 0.7);
  width: 133px;
  height: 115px;
  position: absolute;
  right: 100px;
  bottom: 20px;

  .getlist2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    font-size: 13px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(195, 211, 223, 1);
    height: 35px;
    cursor: pointer;

    .getlist2img {
      height: 35px;
      width: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;

    }
  }

  .getlist2.active {
    color: rgba(92, 228, 214, 1);
  }
}

.footerset {
  position: absolute;
  right: 120px;
  bottom: 120px;
}

.setbody {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
