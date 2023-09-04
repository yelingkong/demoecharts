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
      list: ['2022.11.07', '2022.11.07', '2022.11.07', '2022.11.07']
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
      var getname = this.list
      var getvalue = [4, 2, 3, 6,]
      var getvalue2 = [4, 2, 3, 6]

      var option = {
        grid: {
          top: '40px',
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
          left: 0,
          itemWidth: 14,
          itemHeight: 14,
          itemGap: 10,
          textStyle: {
            color: 'rgba(51, 51, 51, 1)',
            fontSize: '13'
          }
        },
        xAxis: [{
          data: getname,
          axisLabel: {
            margin: 10,
            color: 'rgba(153, 153, 153, 1)',
            interval: 0,
            rotate: -60,
            textStyle: {
              fontSize: 13
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(245, 245, 245, 1.00)',
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
            min: 0,
            axisLabel: {
              formatter: '{value}%',
              color: 'rgba(153, 153, 153, 1)',
              textStyle: {
                fontSize: 13
              },
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(245, 245, 245, 1.00)',
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
          }],
        series: [
          {
            name: '目标开动率',
            type: 'bar',
            data: getvalue,
            barWidth: '10px',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(147, 198, 255, 1)'
                }, {
                  offset: 1,
                  color: 'rgba(88, 100, 255, 1)'
                }], false),
                barBorderRadius: [0, 50, 0, 0],
              }
            },
          },
          {
            name: '实际开动率',
            type: 'bar',
            data: getvalue2,
            barWidth: '10px',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(162, 218, 245, 1)'
                }, {
                  offset: 1,
                  color: 'rgba(15, 165, 229, 1)'
                }], false),
                barBorderRadius: [0, 50, 0, 0],
              }
            },
          }, {
            name: '平均值',
            type: 'line',
            yAxisIndex: 0,
            data: getvalue2,
            smooth: true,
            symbol: 'circle', //数值点设定为实心点
            symbolSize: 6, // 折线的点的大小
            itemStyle: {
              normal: {
                color: 'rgba(253, 203, 0, 1)', //点的颜色
                lineStyle: {
                  color: 'rgba(253, 203, 0, 1)', //线的颜色
                  width: 1, // 折线图线条粗细设置
                },
              },
            },
          },]
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
  height: calc(100% - 50PX);
}
</style>
