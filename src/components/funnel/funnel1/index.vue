<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

import {ArrayMax, FontChart} from "@/utils/utils";
import types from '../../../data/type.json'

export default {
  name: 'echarts1',
  components: {},
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      ...types
    }
  },
  computed: {
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this;
      window.addEventListener("resize", this.drawLine);
      let myChart = this.$echarts.init(this.$refs.echarts);
      var colorList = [
        new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
          {
            offset: 0,
            color: "#8EB415",
          },
          {
            offset: 1,
            color: "#688D20",
          },
        ]),
        new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
          {
            offset: 0,
            color: "#068577",
          },
          {
            offset: 1,
            color: "#15B58A",
          },
        ]),
        new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
          {
            offset: 0,
            color: "#047DA3",
          },
          {
            offset: 1,
            color: "#04A7C6",
          },
        ]),
        new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
          {
            offset: 0,
            color: "#0D5797",
          },
          {
            offset: 1,
            color: "#0777C8",
          },
        ]),
      ];
      var colorList = ["#73981C", "#0DA583", "#0295B6", "#0B5899"];
      var option = {
        calculable: true,
        color: colorList,
        series: [
          {
            name: "漏斗图",
            type: "funnel",
            left: "0%",
            right: "0%",
            top: "10%",
            bottom: "10%",
            minSize: "0%",
            maxSize: "50%",
            sort: "ascending",
            gap: 3,
            label: {
              show: true,
              formatter: function (params) {
                console.log(params);
                return params.percent + "%";
              },
            },
            labelLine: {
              length: 50,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              //去掉默认白色边框线
              borderWidth: 0,
              borderColor: "#fff",
            },
            data: [
              { value: 10, name: "四级" },
              { value: 20, name: "三级" },
              { value: 30, name: "二级" },
              { value: 40, name: "一级" },
            ],
          },
          {
            name: "漏斗图",
            type: "funnel",
            left: "0%",
            right: "0%",
            top: "10%",
            bottom: "10%",
            minSize: "0%",
            maxSize: "50%",
            sort: "ascending",
            gap: 3,
            label: {
              show: true,
              formatter: function (params) {
                return params.name;
              },
              color: "#fff",
              fontSize: 13,
              position: "center",
            },
            labelLine: {
              length: 50,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              //去掉默认白色边框线
              borderWidth: 0,
              borderColor: "#fff",
            },
            data: [
              { value: 10, name: "四级" },
              { value: 20, name: "三级" },
              { value: 30, name: "二级" },
              { value: 40, name: "一级" },
            ],
          },
        ],
      };
      myChart.clear();
      myChart.resize();
      myChart.setOption(option);
    },
  }
}
</script>

<style lang="scss" scoped>
.echarts1 {
  position: relative;
  width: 100%;
  height: calc(100% - 10px);
}
</style>
