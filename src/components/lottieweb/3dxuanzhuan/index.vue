<template>
  <div class="cicle3">

  </div>
</template>

<script>

export default {
  name: 'xuanzhuan',
  components: {},
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
.cicle3 {
  background: url(./images/circle.png) no-repeat center;
  background-size: 100%;
  position: relative;
  width: 100%;
  height: 100%;
  top: 20%;
  left: 50%;
  transform-style: preserve-3d;
  transform: translateX(-50%) rotateX(75deg);
  animation: rotate3 15s linear infinite;
}

// 旋转动画3
@keyframes rotate3 {
  0% {
    transform: translateX(-50%) rotateX(75deg) rotateZ(0)
  }

  100% {
    transform: translateX(-50%) rotateX(75deg) rotateZ(360deg)
  }
}
</style>
