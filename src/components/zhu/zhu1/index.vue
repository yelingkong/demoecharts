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
      status: '',
      active: false,
      xData: ['1月', '2月', '3月', '4月', '5月', '6月'],
      yData1: [10, 20, 30, 40, 20, 30, 20],
      yData2: [10, 20, 30, 40, 20, 30, 20],
      yData3: [10, 20, 30, 40, 20, 30, 20],
      yData4: [20, 30, 20, 10, 20, 30, 40],
    }
  },
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts)
      var option = {
        grid: {
          top: '30px',
          bottom: '0px',
          left: '0px',
          right: '0px',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255, 174, 0, 0.1)'
              }, {
                offset: 1,
                color: 'rgba(255, 174, 0, 0.5)'
              }], false),
            }
          }
        },
        legend: {
          top: 0,
          right: 0,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: 'rgba(157, 185, 233, 1)',
            fontSize: '14'
          },
        },
        xAxis: [{
          data: this.xData,
          axisLabel: {
            margin: 10,
            color: 'rgba(202, 215, 245, 1)',
            textStyle: {
              fontSize: 14
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(49, 119, 214, 1)',
              width: 1
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(39, 76, 129, 0.26)',
              width: 1,
            }
          },
          axisTick: {
            show: false
          },
        }],

        yAxis: [
          {
            type: 'value',
            axisLabel: {
              color: 'rgba(202, 215, 245, 1)',
              textStyle: {
                fontSize: 14
              },
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(49, 119, 214, 1)',
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(39, 76, 129, 0.26)',
                width: 1,
              }
            }
          },
          {
            type: 'value',
            show: false,
            axisLabel: {
              formatter: '{value}%',
              color: 'rgba(130, 153, 191, 1)',
              textStyle: {
                fontSize: 13
              },
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(39, 76, 129, 0.26)',
                width: 1,
              }
            }
          }],
        series: [
          {
            name: '贸易额',
            type: 'bar',
            data: this.yData1,
            barWidth: '7px',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(47, 156, 252, 1)'
                }, {
                  offset: 1,
                  color: 'rgba(254, 221, 66, 1)'
                }], false),
                barBorderRadius: [4, 4, 0, 0],
              }
            },
          },
          {
            name: '数重量',
            type: 'bar',
            data: this.yData2,
            barWidth: '7px',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(182, 90, 145, 1)'
                }, {
                  offset: 1,
                  color: 'rgba(253, 122, 60, 1)'
                }], false),
                barBorderRadius: [4, 4, 0, 0],
              }
            },
          },
          {
            name: '毛利率',
            type: 'line',
            yAxisIndex: 0,
            data: this.yData3,
            smooth: true,
            symbol: 'circle', //数值点设定为实心点
            symbolSize: 0, // 折线的点的大小
            itemStyle: {
              normal: {
                color: 'rgba(253, 203, 0, 1)', //点的颜色
                lineStyle: {
                  color: 'rgba(253, 203, 0, 1)', //线的颜色
                  width: 1, // 折线图线条粗细设置
                },
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(253, 203, 0, 0.5)'
                },
                  {
                    offset: 1,
                    color: 'rgba(253, 203, 0, 0)'
                  }
                ], false),
              }
            },
          },
          {
            name: '查验率',
            type: 'line',
            yAxisIndex: 0,
            data: this.yData4,
            smooth: true,
            symbol: 'circle', //数值点设定为实心点
            symbolSize: 0, // 折线的点的大小
            itemStyle: {
              normal: {
                color: 'rgba(75, 168, 252, 1)', //点的颜色
                lineStyle: {
                  color: 'rgba(75, 168, 252, 1)', //线的颜色
                  width: 1, // 折线图线条粗细设置
                },
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(75, 168, 252, 0.5)'
                },
                  {
                    offset: 1,
                    color: 'rgba(75, 168, 252, 0)'
                  }
                ], false),
              }
            },
          }]
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
  height: 100%;
}
</style>
