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
      default() {
        return ''
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
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this;
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(that.$refs.echarts)
      var option = {
        color: [
          "rgba(0, 204, 255, 1)",
          "rgba(39, 120, 255, 1)",
          "rgba(72, 176, 255, 1)",
          "rgba(91, 207, 255, 1)",
          "rgba(108, 227, 255, 1)",
          "rgba(119, 240, 240, 1)",
        ],
        grid: {
          left: "3%",
          right: "3%",
          top: "12%",
          bottom: "15%",
          containLabel: true,
        },
        legend: {
          x: 'center',
          y: 'top',
          itemWidth: 15,
          itemHeight: 15,
          textStyle: {
            color: 'rgba(51, 51, 51, 1)'
          },
          itemGap: 20,
        },
        tooltip: {
          show: true,
          trigger: "axis",
        },
        xAxis: [
          {
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            axisLine: {
              lineStyle: {
                color: "rgba(221, 221, 221, 1)",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "rgba(51, 51, 51, 1)",
              fontSize: 12,
            },
          },
        ],
        yAxis: [
          {
            name: '单位：条',
            nameTextStyle: {
              color: 'rgba(51, 51, 51, 1)',
              fontSize: 13,
              padding: [0, 0, 0, -20]
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: "rgba(88, 118, 143, 1)",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              color: "rgba(51, 51, 51, 1)",
              fontSize: 13,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(221, 221, 221, 1)",
                type: 'dashed'
              },
            },
            yAxisIndex: 0,
          },
        ],
        series: [
          {
            name: "海关失信企业",
            type: "bar",
            barWidth: 12,
            zlevel: 2,
            itemStyle: {
              normal: {
                barBorderRadius: 0,
                color: 'rgba(77, 169, 255, 1)',
              },
            },
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(245, 246, 250, 1)',
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
            data: [150, 100, 220, 50, 50, 60, 60, 220, 220, 150, 210, 40],
          },
          {
            name: "跨境灰名单客户",
            type: "bar",
            barWidth: 12,
            zlevel: 2,
            yAxisIndex: 0,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(245, 246, 250, 1)',
            },
            itemStyle: {
              normal: {
                barBorderRadius: 0,
                color: 'rgba(255, 121, 13, 1)',
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
            data: [40, 110, 160, 130, 50, 50, 50, 190, 60, 50, 50, 50],
          },
          {
            name: "贸易便利化企业",
            type: "bar",
            barWidth: 12,
            zlevel: 2,
            yAxisIndex: 0,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(245, 246, 250, 1)',
            },
            itemStyle: {
              normal: {
                barBorderRadius: 0,
                color: '#0CB7A1',
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
            data: [220, 230, 120, 40, 30, 150, 150, 200, 140, 100, 110, 120],
          },
          {
            name: "其他",
            type: "bar",
            barWidth: 12,
            zlevel: 2,
            yAxisIndex: 0,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(245, 246, 250, 1)',
            },
            itemStyle: {
              normal: {
                barBorderRadius: 0,
                color: '#0F99FA',
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
            data: [90, 60, 180, 100, 100, 70, 80, 170, 110, 110, 110, 110],
          },
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
  height: calc(100% - 50px);
}
</style>
