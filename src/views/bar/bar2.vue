<template>
  <div class="items">
    <item title="bar2">
      <bar2 class="bars"></bar2>
    </item>
  </div>
</template>

<script>
// 头部
import item from "@/components/item";
import bar2 from "@/components/bar/bar2/bar2";

export default {
  data() {
    return {}
  },
  components: {
    item,
    bar2
  },
  created() {

  },
  watch: {},
  mounted() {
    new this.$wow.WOW().init()
  },
  methods: {},
  filters: {}
}
</script>

<style lang="scss" scoped>
.homebody {
  width: 100%;
  position: relative;
  height: 100%;
  background: #09254C;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: row;
}

.homemainctop {
  width: 100%;
}

.itembody {
  position: relative;
  width: 100%;
  height: 100%;
}

.items {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #0F75C1;
}

.bars {
  width: 100%;
  height: calc(100% - 100PX);
  position: relative;
}
</style>
