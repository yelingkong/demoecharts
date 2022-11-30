/**
* @Author: 858834013@qq.com
* @Name: jindu
* @Date: 2022-11-30
* @Desc:
*/
<template>
  <div class="jindu">
    <img src="./icon_sanjiao.png" alt="">
    <span class="name">{{ name }}</span>
    <div class="jindu2">
      <vprogress :color1="color1" :color2="color2" :progress="progress"></vprogress>
    </div>
    <span class="num" :style="'color:'+color1">{{ num }}</span>
  </div>
</template>

<script>
import vprogress from "./progress";

export default {
  name: "jindu",
  components: {vprogress},
  props: {
    name: {
      type: String,
      default() {
        return '';
      }
    },
    color1: {
      type: String,
      default() {
        return '';
      }
    },
    color2: {
      type: String,
      default() {
        return '';
      }
    },
    progress: {
      type: String,
      default() {
        return '';
      }
    },
    num: {
      type: String,
      default() {
        return '';
      }
    },
  },
  data() {
    return {
      status: ''
    }
  },
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.jindu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  height: 60px;
  width: 100%;

  .name {
    font-size: 16px;
    font-family: MiSans;
    font-weight: 400;
    color: #F0F1F7;
    margin-left: 9px;
    margin-right: 19px;
  }

  .jindu2 {
    width: 416px;
  }

  .num {
    font-size: 16px;
    font-family: MiSans;
    font-weight: 400;
    color: #4AC8F3;
    margin-left: 13px;
  }
}
</style>
