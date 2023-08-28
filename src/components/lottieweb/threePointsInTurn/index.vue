<template>
  <div>
    <div class="desc">小色块随机闪烁</div>
    <div class="lottie">
      <lottie2 :path="data"></lottie2>
    </div>
  </div>
</template>

<script>
import lottie2 from "../../lottie";
import data from './data.json'

export default {
  name: 'colorPiece',
  components: {lottie2},
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
