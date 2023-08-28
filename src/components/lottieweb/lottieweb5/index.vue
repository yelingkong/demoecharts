<template>
  <div>
    <div class="desc">爆炸效果</div>
    <div class="lottie">
      <lottie :path="data"></lottie>
    </div>
  </div>
</template>

<script>
import lottie from "../../lottie";
import data from './data.json'

export default {
  name: 'lottieWeb3',
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
      data,
      status: true
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}
</style>
