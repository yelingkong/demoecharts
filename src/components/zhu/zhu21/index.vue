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
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(that.$refs.echarts)
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
            'null',
            '仓储租赁',
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
            fontSize: FontChart(16),
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
              fontSize: FontChart(16),
              formatter: function (value, index) {
                let s = value + '亿'
                return s
              },
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
          {
            name: '',
            type: 'bar',
            barWidth: 17,
            barGap: '0%',
            itemStyle: {
              normal: {
                barBorderRadius: [0, 32, 0, 0],
                color: function (params) {
                  return new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 255, 246, 1)'
                  }, {
                    offset: 1,
                    color: 'rgba(0, 255, 246, 0.2)'
                  }], false)
                }
              }
            },
            data: ['50', '75', '105', '130', '105', '130']
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
  height: calc(100% - 60px);
}
</style>
