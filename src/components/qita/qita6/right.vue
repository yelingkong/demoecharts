<!--
@Time : 2020/12/24 11:37 上午
@Author : yekong
@File : right.vue
@Software : PhpStorm
-->
<template>
  <div class="ruqi" :class="{hide:!show}">
    <div class="rightclose" :class="{show:!show}" @click="getshow">
      <img v-if="show" src="./assets/imgright.png" alt="">
      <img v-if="!show" src="./assets/leftjiantou.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "right",
  data: function () {
    return {
      active: 0,
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
  filters: {},
  methods: {
    getshow() {
      this.show = !this.show;
    },
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.ruqi {
  width: 237px;
  height: 710px;
  top: 50%;
  margin-top: -355px;
  border: 1px solid #60E3D5;
  position: fixed;
  transition: 0.3s;
  z-index: 100;
  right: 0;
  background: rgba(2, 39, 39, 0.86);

  .title {
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #60E3D5;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    padding-top: 18px;
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
    left: 0;
    margin-top: -42px;

    img {
      width: 11px;
    }
  }

  .rightclose.show {
    left: -23px;
  }
}

.ruqi.hide {
  right: -237px;
}

.title2 {
  //position: relative;
  //.el-icon-close {
  //  position: absolute;
  //  right: 14px;
  //  top: 20px;
  //  cursor: pointer;
  //  font-size: 14px;
  //  color: rgba(96, 227, 213, 1);
  //}
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #60E3D5;
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  text-indent: 10px;
}

.shexiangtou {
  margin-left: 10px;

  img {
    width: 215px;
    height: 117px;
  }
}

.tabx {
  width: 215px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 16px;
  margin-left: 10px;

  .tabx1 {
    height: 24px;
    border: 1px solid #227F75;
    padding: 0 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    font-size: 11px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #7AA8A8;
    box-sizing: border-box;
    cursor: pointer;
  }

  .tabx1.hover, .tabx1:hover {
    height: 24px;
    background: #00AD66;
    font-size: 12px;
    border: 1px solid #00AD66;
    font-family: PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
  }
}

.quyu {
  width: 215px;
  min-height: 75px;
  margin-left: 10px;
  margin-top: 10px;
  padding-bottom: 5px;

  h3 {
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #60E3D5;
    padding-top: 6px;
    margin-left: 10px;
  }

  p {
    font-size: 10px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #C8FBFB;
    margin-left: 10px;
    padding-top: 0px;
  }
}
</style>
