<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

export default {
  name: 'echarts1',
  components: {},
  props: {
    id: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      status: ''
    }
  },
  watch: {},
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this;
      window.addEventListener("resize", this.drawLine);
      let myChart = this.$echarts.init(this.$refs.echarts);
      var option = {
        color: [
          "rgba(0, 204, 255, 1)",
          "rgba(39, 120, 255, 1)",
          "rgba(72, 176, 255, 1)",
          "rgba(91, 207, 255, 1)",
          "rgba(108, 227, 255, 1)",
          "rgba(119, 240, 240, 1)",
          "rgba(129, 163, 243, 1)",
          "rgba(243, 170, 104, 1)",
          "rgba(245, 232, 140, 1)",
          "rgba(162, 143, 218, 1)",
          "rgba(162, 238, 250, 1)",
          "rgba(38, 116, 255, 1)",
          "rgba(73, 177, 255, 1)",
        ],
        grid: {
          left: "5%",
          right: "3%",
          top: "10%",
          bottom: "10%",
          containLabel: true,
        },
        tooltip: {
          show: true,
        },
        xAxis: [
          {
            data: [
              "视频设备",
              "门禁",
              "可视对讲",
              "报警",
              "广播",
              "视频设备",
              "门禁",
              "可视对讲",
              "报警",
            ],
            axisLine: {
              lineStyle: {
                color: "rgba(32, 72, 141, 1)",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "rgba(150, 175, 220, 1)",
              fontSize: 12,
            },
          },
          {
            data: [
              "视频设备",
              "门禁",
              "可视对讲",
              "报警",
              "广播",
              "视频设备",
              "门禁",
              "可视对讲",
              "报警",
            ],
            axisLine: {
              show: false,
              lineStyle: {
                color: "#3d5269",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            nameTextStyle: {
              color: "rgba(150, 175, 220, 1)",
              fontSize: 13,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "rgba(32, 72, 141, 1)",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "rgba(150, 175, 220, 1)",
              fontSize: 13,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(21, 58, 121, 1)",
              },
            },
            yAxisIndex: 0,
          },
        ],
        series: [
          {
            name: "设备统计",
            type: "bar",
            barWidth: 10,
            zlevel: 2,
            itemStyle: {
              normal: {
                color: new that.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 204, 255, 1)",
                    },
                    {
                      offset: 1,
                      color: "rgba(11, 46, 116, 1)",
                    },
                  ],
                  false
                ),
              },
            },
            label: {
              normal: {
                show: false,
                fontSize: 18,
                fontWeight: "bold",
                color: "#ffffff",
                position: "top",
              },
            },
            data: [600, 790, 900, 130, 600, 800, 800, 600, 790, 790],
          },
          {
            name: "在所数量",
            type: "bar",
            barWidth: 18,
            zlevel: 1,
            xAxisIndex: 1,
            itemStyle: {
              normal: {
                color: new that.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: "rgba(0, 204, 255, 0.2)",
                    },
                    {
                      offset: 1,
                      color: "rgba(11, 46, 116, 0.2)",
                    },
                  ],
                  false
                ),
              },
            },
            label: {
              normal: {
                show: false,
                fontSize: 18,
                fontWeight: "bold",
                color: "#ffffff",
                position: "top",
              },
            },
            data: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
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
  height: 100%;
}
</style>
