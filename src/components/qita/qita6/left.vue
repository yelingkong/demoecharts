<!--
@Time : 2020/12/24 11:37 上午
@Author : yekong
@File : left.vue
@Software : PhpStorm
-->
<template>
  <div>
    <div class="homeleft" :class="{hide:!show}">
      <div class="rightclose" :class="{show:!show}" @click="getshow">
        <img v-if="show" src="./assets/leftjiantou.png" alt="">
        <img v-if="!show" src="./assets/imgright.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "left",
  data: function () {
    return {
      show: false
    }
  },
  props: {
    top: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created: function () {

  },
  mounted() {
  },
  filters: {},
  methods: {
    getshow() {
      this.show = !this.show;
    },
  },
}
</script>

<style lang="scss" scoped>
.homeleft {
  position: fixed;
  left: 0px;
  top: 50%;
  margin-top: -355px;
  width: 300px;
  height: 710px;
  background: rgba(0, 44, 43, 0.86);
  border: 1px solid #33847C;
  transition: 0.3s;
  z-index: 100;


  .biaoti {
    margin-left: 23px;
    width: 255px;
    height: 35px;
    border-bottom: 1px solid rgba(27, 63, 68, 1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;

    span {
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #60E3D5;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      border-bottom: 2px solid rgba(96, 227, 213, 1);
    }
  }
}

.homeleft.hide {
  left: -300px;
}


.rightclose {
  width: 23px;
  height: 63px;
  background: rgba(31, 154, 144, 0.5);
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  position: absolute;
  top: 50%;
  margin-top: -42px;
  right: 0;

  img {
    width: 11px;
  }
}

.rightclose.show {
  right: -23px;
}

.myChart1 {
  height: 220px;
  width: 255px;
  margin-left: 23px;
}

.myChart2 {
  height: 200px;
  width: 255px;
  margin-left: 23px;
}

.myChart3 {
  height: 180px;
  width: 255px;
  margin-left: 23px;
}

</style>
