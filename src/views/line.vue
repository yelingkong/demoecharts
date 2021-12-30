<template>
  <div class="homebody">
    <headers class="wow fadeInDown"></headers>
    <div class="homemain">
      <div class="items">
        <item title="line1" link="/line/line1">
          <line1 class="bars"></line1>
        </item>
      </div>
    </div>
  </div>
</template>

<script>
// 头部
import headers from "../components/header";
import item from "../components/item";
import line1 from "@/components/line/line1/line1";

export default {
  data() {
    return {
      time: null
    }
  },
  components: {
    headers,
    item,
    line1
  },
  created() {
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
  width: 30%;
  height: 200px;
}

.bars {
  width: 100%;
  height: 400px;
}
</style>
