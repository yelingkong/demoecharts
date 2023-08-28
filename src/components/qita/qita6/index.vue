<!--
@Time : 2021/1/3 7:08 下午
@Author : yekong
@File : index.vue
@Software : PhpStorm
-->
<template>
  <div class="zhakai">
    <left></left>
    <right></right>
  </div>
</template>

<script>
import left from "./left";
import right from "./right";

export default {
  name: "zhankai",
  components: {
    left,
    right
  },
  data: function () {
    return {
      list: []
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
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.zhankai {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
