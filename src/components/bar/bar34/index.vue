<template>
  <div class="itemBodys">
    <div class="echartsBody">
      <echarts :list="list"></echarts>
      <div class="list">
        <div class="listItem" v-for="(item,index) in list" :key="index">
          <div class="dot"></div>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "./echarts.vue";

export default {
  data() {
    return {
      active: '1',
      list: [
        {
          name: '焚烧',
          value: 40
        },
        {
          name: '填埋',
          value: 30
        },
        {
          name: '资源化',
          value: 30
        },
        {
          name: '水泥窑协同',
          value: 30
        }]
    }
  },
  components: {echarts},
  computed: {},
  mounted() {
    var that = this;
  },
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.itemBodys {
  width: 100%;
  position: relative;
  height: calc(100% - 0px);
}

.echartsBody {
  position: relative;
  width: 100%;
  height: calc(100% - 0px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

  .list {
    margin-left: 46px;

    .listItem {
      font-size: 14px;
      margin-bottom: 20px;
      margin-top: 20px;
      font-family: PingFang;
      font-weight: 500;
      color: #B8C4DD;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;

      .dot {
        width: 8px;
        height: 8px;
        background: #1AFFFF;
        margin-right: 10px;
      }
    }

    .listItem:nth-child(2) {
      .dot {
        background: rgba(30, 85, 244, 1);
      }
    }

    .listItem:nth-child(3) {
      .dot {
        background: rgba(249, 102, 122, 1);
      }
    }

    .listItem:nth-child(4) {
      .dot {
        background: rgba(249, 160, 38, 1);
      }
    }
  }
}
</style>
