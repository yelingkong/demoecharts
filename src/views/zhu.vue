<template>
  <div class="homebody">
    <headers class="wow fadeInDown"></headers>
    <div class="homemain">
      <div class="items">
        <item title="zhu" link="/zhu/zhu1">
          <zhu class="bars"></zhu>
        </item>
      </div>
      <div class="items">
        <item title="zhu2" link="/zhu/zhu2">
          <zhu2 class="bars"></zhu2>
        </item>
      </div>
      <div class="items">
        <item title="zhu3" link="/zhu/zhu3">
          <zhu3 class="bars"></zhu3>
        </item>
      </div>
      <div class="items">
        <item title="zhu4" link="/zhu/zhu3">
          <zhu4 class="bars"></zhu4>
        </item>
      </div>
    </div>
  </div>
</template>

<script>
import headers from "../components/header";
import item from "../components/item";
import zhu from "@/components/zhu/zhu/zhu";
import zhu2 from "@/components/zhu/zhu2/index";
import zhu3 from "@/components/zhu/zhu3/index";
import zhu4 from "@/components/zhu/zhu4/index";

export default {
  data() {
    return {
    }
  },
  components: {
    headers,
    item,
    zhu,
    zhu2,
    zhu3,
    zhu4
  },
  created() {

  },
  watch: {
  },
  mounted() {
    new this.$wow.WOW().init()
  },
  methods: {
  },
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

  .homemain {
    width: calc(100% - 40px);
    margin: 10px auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 100px;
  }
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
  width: 25%;
  height: 200px;
}

.bars {
  width: 100%;
  height: 400px;
}
</style>
