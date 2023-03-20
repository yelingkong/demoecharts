<template>
  <div>
    <div class="jz1">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: '渐变动画',
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
    function jz() {
      $('.jz1 ul li').each((index, item) => {
        item.style.opacity = 1 - index / 10;
      })
      setInterval(() => {
        $('.jz1 ul li').each((index, item) => {
          if (item.style.opacity == 0) {
            item.style.opacity = 1
          }
          item.style.opacity = parseFloat(item.style.opacity) - 0.1
        })
      }, 100)
    }
    jz()
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.jz1 {
  opacity: 0;
  animation: show4 0.1s linear forwards 3.8s;
  position: relative;

  ul {
    width: 30px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;

    li {
      width: 100%;
      height: 8%;
      margin: 40% 0;
      background-color: #ff7a9a;
    }
  }
}

@keyframes show4 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
