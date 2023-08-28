/**
* @Author: 858834013@qq.com
* @Name: item
* @Date: 2022-08-23
* @Desc:
*/
<template>
  <div class="pageItem">
    <img class="icon_left_top" src="./assets/icon_left_top.png" alt="">
    <img class="icon_left_bottom" src="./assets/icon_left_bottom.png" alt="">
    <img class="icon_right_bottom" src="./assets/icon_right_bottom.png" alt="">
    <img class="icon_right_top" src="./assets/icon_right_top.png" alt="">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "item",
  components: {},
  props: {
    id: {
      type: String,
      default() {
        return '';
      }
    }
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
.pageItem {
  width: 100%;
  height: 100%;
  background: rgba(#001678, 0.4);
  border: 1px solid rgba(#01A3FF, 0.4);
  position: relative;

  .icon_left_top {
    position: absolute;
    left: -1px;
    top: -1px;
    width: 42px;
    height: 39px;
  }

  .icon_left_bottom {
    position: absolute;
    left: -1px;
    bottom: -1px;
    width: 42px;
    height: 40px;
  }

  .icon_right_bottom {
    position: absolute;
    right: -1px;
    bottom: -1px;
    width: 42px;
    height: 40px;
  }

  .icon_right_top {
    position: absolute;
    right: -1px;
    top: -1px;
    width: 42px;
    height: 41px;
  }
}
</style>
