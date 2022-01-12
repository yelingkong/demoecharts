<template>
  <div class="renyuan">
    <div class="renyuanuser cur" v-show="!show" @click="show=!show">
      <img class="icon_user" src="./assets/icon_user.png" alt="">
    </div>
    <transition name="custom-classes-transition" enter-active-class="animated slideInLeft"
                leave-active-class="animated slideOutLeft">
      <renyuan @gethide="gethide" v-if="show"></renyuan>
    </transition>
  </div>
</template>

<script>
import renyuan from "./renyuan";

export default {
  name: "renyuans",
  components: {renyuan},
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
      show: false
    }
  },
  watch: {},
  mounted() {
  },
  methods: {
    gethide() {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.renyuan {
  position: relative;
  left: 100px;
  top: 100px;
  overflow: hidden;
  height: 500px;
  width: 380px;

  .renyuanuser {
    position: absolute;
    top: 0;
    left: 0;

    .icon_user {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }
}
</style>
