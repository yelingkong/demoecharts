/**
* @Author: 858834013@qq.com
* @Name: icon
* @Date: 2022-01-16
* @Desc: 根据参数返回不同的图标
*/
<template>
  <div class="icons">
    <template v-if="childNodes>0">
      <div class="icon_home" v-if="type==1"></div>
      <div class="icon_copy" v-else></div>
    </template>
    <div class="icon_car ml20" v-else></div>
  </div>
</template>

<script>

export default {
  name: "icon",
  components: {},
  props: {
    type: {
      type: Number,
      default() {
        return 1;
      }
    },
    childNodes: {
      type: Number,
      default() {
        return 0;
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
.icon_home {
  background: url("../assets/icon_home.png") no-repeat;
  background-size: 100% 100%;
  width: 29px;
  height: 30px;
}

.icon_car {
  background: url("../assets/icon_car.png") no-repeat;
  background-size: 100% 100%;
  width: 31px;
  height: 28px;
}

.icon_copy {
  background: url("../assets/icon_copy.png") no-repeat;
  background-size: 100% 100%;
  width: 31px;
  height: 31px;
}

.ml20 {
  margin-left: 20px;
}
</style>
