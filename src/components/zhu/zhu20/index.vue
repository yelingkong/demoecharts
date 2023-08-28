<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

import {FontChart} from "@/utils/utils";

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
        grid: {
          left: '5%',
          right: '3%',
          top: '15%',
          bottom: '10%',
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'axis',
        },
        xAxis: {
          data: [
            '2017年',
            '2018年',
            '2019年',
            '2020年',
            '2021年',
            '2022年',
          ],
          axisLine: {
            lineStyle: {
              color: 'rgba(94, 115, 152, 1)',
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: 'rgba(146, 178, 215, 1)',
            fontSize: FontChart(16)
          }
        },
        yAxis: [
          {
            splitNumber: 3,
            nameTextStyle: {
              color: 'rgba(146, 178, 215, 1)',
              fontSize: FontChart(16)
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#3d5269'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: 'rgba(146, 178, 215, 1)',
              fontSize: FontChart(16)
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(94, 115, 152, 1)'
              }
            },
            yAxisIndex: 0
          }],
        series: [
          {//柱底圆片
            name: "",
            type: "pictorialBar",
            symbolSize: [18, 8],//调整截面形状
            symbolOffset: [0, 5],
            tooltip: {
              show: false
            },
            z: 12,
            itemStyle: {
              normal: {
                borderRadius: [5, 5, 5, 5],
                color: function (params) {
                  var list = ['rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                  ]
                  var list2 = [
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                  ]
                  return new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: list[params.dataIndex]
                  }, {
                    offset: 1,
                    color: list2[params.dataIndex]
                  }], false)
                }
              }
            },
            data: ["50", "75", "105", "130", "105", "130"]
          },

          //柱体
          {
            name: '',
            type: 'bar',
            barWidth: 18,
            barGap: '0%',
            itemStyle: {
              normal: {
                borderRadius: [5, 5, 5, 5],
                color: function (params) {
                  var list = [
                    'rgba(0, 255, 246, 0.3)',
                    'rgba(0, 255, 246, 0.3)',
                    'rgba(0, 255, 246, 0.3)',
                    'rgba(0, 255, 246, 0.3)',
                    'rgba(0, 255, 246, 0.3)',
                    'rgba(0, 255, 246, 0.3)',
                  ]
                  var list2 = [
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                    'rgba(0, 255, 246, 1)',
                  ]
                  return new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: list[params.dataIndex]
                  }, {
                    offset: 1,
                    color: list2[params.dataIndex]
                  }], false)
                }
              }
            },
            data: ["50", "75", "105", "130", "105", "130"]
          },
          //柱顶圆片
          {
            name: "",
            type: "pictorialBar",
            symbolSize: [18, 8],//调整截面形状
            symbolOffset: [0, -5],
            z: 12,
            tooltip: {
              show: false
            },
            symbolPosition: "end",
            itemStyle: {
              normal: {
                borderRadius: [5, 5, 5, 5],
                color: function (params) {
                  var list = [
                    'rgba(0, 255, 246, 0.3)',
                    'rgba(0, 255, 246, 0.3)',
                    'rgba(0, 255, 246, 0.3)',
                    'rgba(0, 255, 246, 0.3)',
                    'rgba(0, 255, 246, 0.3)',
                    'rgba(0, 255, 246, 0.3)',
                  ]
                  var list2 = [
                    'rgba(0, 255, 246, 0.3)',
                    'rgba(0, 255, 246, 0.3)',
                    'rgba(0, 255, 246, 0.3)',
                    'rgba(0, 255, 246, 0.3)',
                    'rgba(0, 255, 246, 0.3)',
                    'rgba(0, 255, 246, 0.3)',
                  ]
                  return new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: list[params.dataIndex]
                  }, {
                    offset: 1,
                    color: list2[params.dataIndex]
                  }], false)
                }
              }
            },
            data: ["50", "75", "105", "130", "105", "130"]
          },
          {
            name: '员工总数',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            yAxisIndex: 0,
            symbolSize: 0,
            lineStyle: {
              normal: {
                color: '#00FFF6',
              },
            },
            zlevel: 1,
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#00FFF6',
              }
            },
            itemStyle: {
              color: '#00FFF6',
              borderColor: '#fff',
              borderWidth: 3,
            },
            data: [100, 111, 100, 154, 100, 154]
          },
        ]
      }
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
  height: calc(100% - 0px);
}
</style>
