<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

import {FontChart} from '@/utils/utils'
import dian from './dian.png'
import * as echarts from 'echarts'
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
    return {}
  },
  watch: {
    list() {
      this.drawLine()
    },
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts)
      var list = this.list
      var xdata = ['2016年', '2017年', '2018年', '2019年', '2020年', '2021年']
      var ydata = [20, 20, 30, 40, 20, 10]
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '15%',
          left: '40',
          right: '30',
          bottom: '15%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(32, 72, 141, 1)'
            },
          },
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              color: 'rgba(190, 198, 218, 1)',
              margin: 0,
              fontSize: FontChart(13),
            },
          },
          axisTick: {
            show: false,
          },
          data: xdata
        }],
        yAxis: [{
          splitNumber: 4,
          minInterval: 1,
          name: '(万票)',
          nameTextStyle: {
            fontSize: FontChart(13),
            color: 'rgba(146, 178, 215, 1)',
            padding: [0, 0, 0, 20]
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(21, 58, 121, 0.6)',
              type: 'dashed'
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(32, 72, 141, 1)'
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: 'rgba(146, 178, 215, 1)',
              fontSize: FontChart(13),
            }
          },
          axisTick: {
            show: false,
          },
        }],
        series: [{
          name: '年产值',
          type: 'line',
          showBackground: true,
          smooth: true,
          backgroundStyle: {
            color: 'rgba(245, 246, 250, 1)',
          },
          symbol: 'image://' + dian,
          showAllSymbol: false,
          symbolSize: 20,
          lineStyle: {
            normal: {
              color: '#FBAE4A', // 线条颜色
            },
          },
          itemStyle: {
            color: '#C5FD08',
            borderColor: '#C5FD08',
            borderWidth: 2
          },
          label: {
            normal: {
              show: false,
              position: 'top',
              rich: {
                a: {
                  color: '#fff',
                  align: 'center',
                },
              }
            }
          },
          tooltip: {
            show: true
          },
          data: ydata
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
  height: calc(100% - 40px);
}
</style>
