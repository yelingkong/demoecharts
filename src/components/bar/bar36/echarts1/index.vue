<template>
  <div class="echartsBodys">
    <echarts1 title="园区概况-设备统计" :total="total" :list="list" ref="echarts"></echarts1>
    <div class="list">
      <div class="listItem cur" @click="getChecked(index)" v-for="(item,index) in list" :key="index">
        <div class="listIteml">
          <div class="dot" :class="{disabled:!item.checked}"
               :style="'background: linear-gradient(0deg,'+item.color1+' 0%, '+item.color2+' 100%);'"></div>
          <span :class="{disabled:!item.checked}">{{ item.name }}</span>
        </div>
        <div class="num2">
          <span>{{item.value}}</span>
        </div>
        <div class="num"
             v-if="item.checked"
             :style="'background: linear-gradient(0deg,'+item.color1+' 0%, '+item.color2+' 100%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;'">
          <proportion :list="list" :value="item.value"></proportion>
        </div>
        <div class="num"
             v-else>
          <proportion :list="list" :value="item.value"></proportion>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import echarts1 from "./components/echarts.vue";
import proportion from "./proportion.vue";

export default {
  name: "title",
  computed: {
    total: function () {
      var total = 0
      this.list.forEach((type) => {
        total += type.value
      });
      return total
    }
  },
  components: {echarts1, proportion},
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
  },
  watch: {},
  mounted() {
    var that = this;
  },
  methods: {
    getChecked(index) {
      this.list[index].checked = !this.list[index].checked
      this.$refs.echarts.drawEcharts()
    }
  },
}
</script>

<style lang="scss" scoped>
.list {
  margin-left: 0px;
  position: relative;
  width: 50%;
  height: calc(100% - 10px);
  //background: url("./assets/jiaobiaobg.png") no-repeat;
  //background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: flex-start;

  .listItem {
    font-size: 14px;
    display: flex;
    height: 30%;
    width: calc(100% - 20px);
    margin: 0 auto;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;

    .listIteml {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: #FFFFFF;
      width: 340px;
    }

    span {
      font-size: 14px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #E0F9FF;
      line-height: 20px;
    }

    .dot {
      width: 10px;
      height: 10px;
      margin-right: 10px;
      flex-shrink: 0;
    }

    .dot.disabled {
      background: rgba(#999, 0.8) !important;
    }

    span.disabled {
      color: rgba(#999, 0.8) !important;
    }

    .num {
      font-size: 16px;
      font-family: DIN-Bold;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 20px;
      background: linear-gradient(0deg, rgba(#999, 0.8) 0.1220703125%, rgba(#999, 0.8) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .num2{
      margin-right: 20px;
      font-size: 16px;
      font-family: DIN-Bold;
      font-weight: bold;
      color: #EBFFFF;
    }
  }
}

.echartsBodys {
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}
</style>
