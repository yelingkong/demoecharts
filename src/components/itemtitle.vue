<template>
  <div class="itemtitle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "itemtitle",
  components: {},
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
.itemtitle {
  width: 100%;
  height: 40PX;
  background-size: 100% 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  color: #fff;
  font-size: 16PX;
  z-index: 10;
  position: absolute;
  text-indent: 20px;
  left: 0;
  top: 0;
}
</style>
