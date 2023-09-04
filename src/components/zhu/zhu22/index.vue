<template>
  <div class="echarts1" ref="echarts">
  </div>
</template>
<script>
import { FontChart } from '@/utils/utils'
import * as echarts from "echarts"
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
    return {}
  },
  watch: {},
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts)
      var getname = this.list
      var getvalue = [4, 2, 3, 6, 5, 4, 2, 3, 6, 5, 4, 2, 3, 6, 5,]
      var getvalue1 = [8, 2, 3, 8, 6, 8, 2, 3, 8, 6, 8, 2, 3, 8, 6]
      var option = {
        grid: {
          top: '30px',
          bottom: '30px',
          left: '40px',
          right: '20px',
          containLabel: true,
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
          left: '5%',
          itemWidth: FontChart(8),
          itemHeight: FontChart(8),
          itemGap: FontChart(8),
          textStyle: {
            color: '#fff',
            fontSize: '11'
          },
          data: ['落地企业', '在建项目'],
        },
        xAxis: [{
          data: ['2016年', '2017年', '2018年', '2019年', '2020年', '2021年',],
          axisLabel: {
            margin: 10,
            interval: 0,
            color: 'rgba(130, 153, 191, 1)',
            textStyle: {
              fontSize: 13
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(39, 76, 129, 0.26)',
              width: 1
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#1B2D49',
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
            interval: 5, //  平均分为5份
            nameTextStyle: {
              color: 'rgba(0, 156, 255, 1)',
              fontSize: 13,
              padding: [0, 20, -5, 0]
            },
            axisLabel: {
              color: 'rgba(130, 153, 191, 1)',
              textStyle: {
                fontSize: 13
              },
            },
            axisLine: {
              lineStyle: {
                color: '#1B2D49',
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#1B2D49',
                width: 1,
              }
            }
          }],
        series: [
          {
            name: '落地企业',
            type: 'bar',
            data: getvalue,
            barWidth: '7px',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(89, 241, 255, 1)'
                }, {
                  offset: 1,
                  color: 'rgba(89, 165, 255, 1)'
                }], false),
                barBorderRadius: [4, 4, 0, 0],
              }
            },
          },
          {
            name: '在建项目',
            type: 'bar',
            data: getvalue1,
            barWidth: '7px',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0, 255, 68, 1)'
                }, {
                  offset: 1,
                  color: 'rgba(0, 126, 33, 1)'
                }], false),
                barBorderRadius: [4, 4, 0, 0],
              }
            },
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
  height: calc(100% - 44px);
}
</style>
