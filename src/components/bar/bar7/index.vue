<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>

import * as echarts from "echarts"
export default {
  name: 'echarts1',
  components: {},
  data() {
    return {}
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this;
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts1)
      var option = {
        color: ["#0163D7",
          "#F26A3B",
          "#D5A022"],
        title: [
          {
            text: '95',
            x: 'center',
            top: 'center',
            textStyle: {
              fontSize: 30,
              color: 'rgba(255, 255, 255, 1)',
            },
          }
        ],
        series: [
          {
            name: "标签使用频率",
            type: "pie",
            radius: ["44%", "70%"],
            center: ["50%", "50%"],
            roseType: "radius",
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: false
              }
            },
            itemStyle: {
              shadowBlur: 1,
              shadowColor: 2,
              shadowOffsetX: 5,
              shadowOffsetY: 5
            },
            data: [40, 30, 20]
          }
        ]
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
