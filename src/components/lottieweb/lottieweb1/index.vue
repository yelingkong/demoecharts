<template>
  <div class="lottie">
    <lottie :path="data"></lottie>
  </div>
</template>

<script>
import lottie from "../../lottie";
import data from './data.json'

export default {
  name: 'echarts1',
  components: {lottie},
  props: {
    id: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      data
    }
  },
  watch: {},
  mounted() {

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.lottie {
  position: relative;
  width: 100%;
  height: calc(100% - 0px);
}
</style>
