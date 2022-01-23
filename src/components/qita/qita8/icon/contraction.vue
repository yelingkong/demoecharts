/**
* @Author: 858834013@qq.com
* @Name: contraction
* @Date: 2022-01-16
* @Desc: 展开收缩图标
*/
<template>
  <div class="contraction">
    <div class="icon" :class="{expand:isExpand}"></div>
  </div>
</template>

<script>

export default {
  name: "contraction",
  components: {},
  props: {
    isExpand: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  background: url("../assets/icon_right.png") no-repeat;
  width: 22px;
  height: 24px;
  background-size: 100% 100%;
}

.expand {
  transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  /* Internet Explorer 9*/
  -moz-transform: rotate(90deg);
  /* Firefox */
  -webkit-transform: rotate(90deg);
  /* Safari 和 Chrome */
  -o-transform: rotate(90deg);
  /* Opera */
}
</style>
