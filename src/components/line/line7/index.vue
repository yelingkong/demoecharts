<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>
import { FontChart } from '@/utils/utils'

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
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts)
      var option = {
        tooltip: {
          show: true,
          trigger: 'axis',
        },
        legend: {
          icon: 'circle',
          top: 0,
          left: '20',
          itemWidth: FontChart(10),
          itemHeight: FontChart(10),
          itemGap: FontChart(40),
          textStyle: {
            color: 'rgba(146, 178, 215, 1)',
            fontSize: FontChart(16)
          },
          data: ['总车流量', '入口车流量', '出口车流量'],
        },
        grid: {
          left: '30px',
          right: '30px',
          bottom: '0px',
          top: '40px',
          containLabel: true
        },
        xAxis: {
          data: [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12'
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
        series: [{
          name: '总车流量',
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'circle',
          yAxisIndex: 0,
          symbolSize: 0,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          itemStyle: {
            normal: {
              color: 'rgba(0, 255, 246, 1)'
            }
          },
          data: [96.3, 96.4, 97.5, 95.6, 98.1, 94.8, 89.6, 94.1, 80.1, 52.4, 75.8, 94.7]
        }, {
          name: '入口车流量',
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'circle',
          yAxisIndex: 0,
          symbolSize: 0,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          itemStyle: {
            normal: {
              color: 'rgba(255, 210, 0, 1)'
            }
          },
          data: [97.3, 99.2, 99.3, 100.0, 99.6, 90.6, 80.0, 91.5, 69.8, 67.5, 90.4, 84.9]
        },
          {
            name: '出口车流量',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'circle',
            yAxisIndex: 0,
            symbolSize: 0,
            lineStyle: {
              normal: {
                width: 1
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(0, 255, 126, 1)'
              }
            },
            data: [84.2, 81.0, 67.5, 72.1, 43.7, 88.5, 91.9, 101.8, 79.7, 87.6, 92.9, 0]
          }]
      }
      myChart.clear()
      myChart.resize()
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts1 {
  position: relative;
  width: 100%;
  height: calc(100% - 80px);
}
</style>
