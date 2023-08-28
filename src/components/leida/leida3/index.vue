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
  watch: {
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts)
      var option = {
        normal: {
          top: 200,
          left: 300,
          width: 500,
          height: 400,
          zIndex: 6,
          backgroundColor: "",
        },
        color: ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
        tooltip: {
          show: true,
          trigger: "item",
        },
        legend: {
          show: true,
          icon: "circle",
          left: "43%",
          top: "90%",
          orient: "horizontal",
          textStyle: {
            fontSize: 16,
            color: "#fff",
          },
          data: ["采购到货分析"],
        },
        radar: {
          center: ["50%", "50%"],
          radius: "70%",
          startAngle: 90,
          splitNumber: 4,
          shape: "polygon",
          name: {
            textStyle: {
              color: "rgba(145, 162, 166, 1.00)",
              fontSize: 23,
            },
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: "rgba(3, 50, 68, 1.00)",
              opacity: 0.1,
            },
          },
          axisLabel: {
            show: false,
            fontSize: 23,
            color: "rgba(145, 162, 166, 1.00)",
            fontWeight: "normal",
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#4f8bbe",
              opacity: 1,
            },
          },
          splitLine: {
            lineStyle: {
              color: "#4f8bbe",
              opacity: 0.5,
            },
          },
          indicator: [
            {
              name: "钦北改扩建",
              max: 88,
            },
            {
              name: "来都路",
              max: 88,
            },
            {
              name: "巴平路",
              max: 88,
            },
            {
              name: "崇爱路",
              max: 88,
            },
            {
              name: "吴隆路",
              max: 88,
            },
            {
              name: "信梧路",
              max: 88,
            },
            {
              name: "蒙象路",
              max: 88,
            },
            {
              name: "云南昌宝",
              max: 88,
            },
          ],
        },
        series: [
          {
            name: "正常指标",
            type: "radar",
            symbol: "circle",
            symbolSize: 10,
            areaStyle: {
              normal: {
                color: "rgba(43, 213, 200, 0.4)",
              },
            },
            itemStyle: {
              color: "rgba(43, 213, 200, 1.00)",
              borderColor: "rgba(43, 213, 200, 1.00)",
              borderWidth: 10,
            },
            lineStyle: {
              normal: {
                type: "dashed",

                color: "rgba(43, 213, 200, 1.00)",
                width: 2,
              },
            },
            data: [[80, 50, 55, 80, 50, 80, 48, 48]],
          }
        ],
      };
      myChart.clear()
      myChart.resize()
      myChart.setOption(option)
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
