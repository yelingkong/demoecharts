/**
* @Author: 858834013@qq.com
* @Name: stepsDemo
* @Date: 2022-08-08
* @Desc:
*/
<template>
  <div class="support">
    <div class="desc">步骤条 步骤进度条</div>
    <steps :list="stepsList" :active="stepsActive"></steps>
  </div>
</template>

<script>

import steps from "./steps";

export default {
  name: 'home',
  components: {steps},
  data() {
    return {
      stepsActive: 0,
      stepsList: [{
        title: '确认订单'
      }, {
        title: '订单支付'
      }, {
        title: '支付成功'
      }]
    }
  },
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
