<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>
import * as echarts from "echarts"
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
      let myChart = echarts.init(that.$refs.echarts)
      var option = {
        color: ['rgba(0, 204, 255, 1)',
          'rgba(39, 120, 255, 1)',
          'rgba(72, 176, 255, 1)',
          'rgba(91, 207, 255, 1)',
          'rgba(108, 227, 255, 1)',
          'rgba(119, 240, 240, 1)',
          'rgba(129, 163, 243, 1)',
          'rgba(243, 170, 104, 1)',
          'rgba(245, 232, 140, 1)',
          'rgba(162, 143, 218, 1)',
          'rgba(162, 238, 250, 1)',
          'rgba(38, 116, 255, 1)',
          'rgba(73, 177, 255, 1)',
        ],
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
            '贷款转入企业主后...',
            '转入第1过渡账户后...',
            '转入第1过渡账户后...',
            '贷款资金直接转入禁...'],
          axisLine: {
            lineStyle: {
              color: '#fff',
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff',
            fontSize: 12,
          }
        },
        yAxis: [
          {
            splitNumber: 3,
            nameTextStyle: {
              color: 'rgba(150, 175, 220, 1)',
              fontSize: 13
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#3d5269',
                type: 'dashed'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#fff',
              fontSize: 13
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(221, 221, 221, 1)',
                type: 'dashed'

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
                  var list = ['rgba(223, 24, 24, 1)',
                    'rgba(223, 77, 29, 1)',
                    'rgba(202, 115, 28, 1)',
                    'rgba(204, 153, 0, 1)',
                  ]
                  var list2 = [
                    'rgba(240, 65, 65, 1)',
                    'rgba(237, 115, 75, 1)',
                    'rgba(229, 145, 61, 1)',
                    'rgba(228, 180, 36, 1)',
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
            data: ["50", "75", "105", "130"]
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
                  var list = ['rgba(223, 24, 24, 1)',
                    'rgba(223, 77, 29, 1)',
                    'rgba(202, 115, 28, 1)',
                    'rgba(204, 153, 0, 1)',
                  ]
                  var list2 = [
                    'rgba(240, 65, 65, 1)',
                    'rgba(237, 115, 75, 1)',
                    'rgba(229, 145, 61, 1)',
                    'rgba(228, 180, 36, 1)',
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
            data: ["50", "75", "105", "130"]
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
                  var list = ['rgba(223, 24, 24, 1)',
                    'rgba(223, 77, 29, 1)',
                    'rgba(202, 115, 28, 1)',
                    'rgba(204, 153, 0, 1)',
                  ]
                  var list2 = [
                    'rgba(240, 65, 65, 1)',
                    'rgba(237, 115, 75, 1)',
                    'rgba(229, 145, 61, 1)',
                    'rgba(228, 180, 36, 1)',
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
            data: ["50", "75", "105", "130"]
          },
          {
            name: '19-28',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            yAxisIndex: 0,
            symbolSize: 0,
            lineStyle: {
              normal: {
                color: 'rgba(255, 174, 1, 1)',
              },
            },
            zlevel: 1,
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: 'rgba(255, 174, 1, 1)',
              }
            },
            itemStyle: {
              color: 'rgba(255, 174, 1, 1)',
              borderColor: '#fff',
              borderWidth: 2,
            },
            data: [100, 111, 100, 154]
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
  height: calc(100% - 50px);
}
</style>
