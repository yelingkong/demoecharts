<template>
  <div class="echarts1" ref="echarts">
  </div>
</template>

<script>

import { FontChart } from '@/utils/utils'
import _ from 'lodash'
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
    var that = this
    _.delay(function (text) {
      that.drawLine()
    }, 1000, 'later')
  },
  methods: {
    drawLine () {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(that.$refs.echarts)

      var option = {
        color: ['#004EFF', 'rgba(0, 144, 255, 1)'],
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
        legend: {
          top: 0,
          right: 20,
          itemWidth: FontChart(10),
          itemHeight: FontChart(10),
          itemGap: 10,
          textStyle: {
            color: 'rgba(146, 178, 215, 1)',
            fontSize: FontChart(16)
          },
        },
        xAxis: {
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月',
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
            name: '进港量',
            type: 'pictorialBar',
            symbolSize: [FontChart(18), FontChart(8)],//调整截面形状
            symbolOffset: [FontChart(-10), FontChart(1)],
            barGap: '10%',
            tooltip: {
              show: false
            },
            z: 12,
            itemStyle: {
              normal: {
                borderRadius: [5, 5, 5, 5],
                color: function (params) {
                  return new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 84, 255, 1)'
                  }, {
                    offset: 1,
                    color: 'rgba(0, 84, 255, 1)'
                  }], false)
                }
              }
            },
            data: ['50', '75', '105', '130', '105', '130', '105', '130', '105', '130', '105', '130']
          },
          //柱体
          {
            name: '进港量',
            type: 'bar',
            barWidth: FontChart(18),
            barGap: '10%',
            itemStyle: {
              normal: {
                borderRadius: [5, 5, 5, 5],
                color: function (params) {
                  return new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 84, 255, 0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(0, 84, 255, 0.9)'
                  }], false)
                }
              }
            },
            data: ['50', '75', '105', '130', '105', '130', '105', '130', '105', '130', '105', '130']
          },
          //柱顶圆片
          {
            name: '进港量',
            type: 'pictorialBar',
            symbolSize: [FontChart(18), FontChart(8)],//调整截面形状
            symbolOffset: [FontChart(-10), FontChart(-5)],
            barGap: '10%',
            z: 12,
            tooltip: {
              show: false
            },
            symbolPosition: 'end',
            itemStyle: {
              normal: {
                borderRadius: [5, 5, 5, 5],
                color: function (params) {
                  return new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 84, 255, 1)'
                  }, {
                    offset: 1,
                    color: 'rgba(0, 84, 255, 1)'
                  }], false)
                }
              }
            },
            data: ['50', '75', '105', '130', '105', '130', '105', '130', '105', '130', '105', '130']
          },

          {//柱底圆片
            name: '出港量',
            type: 'pictorialBar',
            symbolSize: [FontChart(18), FontChart(8)],//调整截面形状
            symbolOffset: [FontChart(10), FontChart(0)],
            barGap: '10%',
            tooltip: {
              show: false
            },
            z: 12,
            itemStyle: {
              normal: {
                borderRadius: [5, 5, 5, 5],
                color: function (params) {
                  return new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 174, 255, 1)'
                  }, {
                    offset: 1,
                    color: 'rgba(0, 174, 255, 1)'
                  }], false)
                }
              }
            },
            data: ['50', '75', '105', '130', '105', '130', '105', '130', '105', '130', '105', '130']
          },
          //柱体
          {
            name: '出港量',
            type: 'bar',
            barWidth: FontChart(18),
            barGap: '10%',
            itemStyle: {
              normal: {
                borderRadius: [5, 5, 5, 5],
                color: function (params) {
                  return new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 174, 255, 0.3)'
                  }, {
                    offset: 1,
                    color: 'rgba(0, 174, 255, 0.9)'
                  }], false)
                }
              }
            },
            data: ['50', '75', '105', '130', '105', '130', '105', '130', '105', '130', '105', '130']
          },
          //柱顶圆片
          {
            name: '出港量',
            type: 'pictorialBar',
            symbolSize: [FontChart(18), FontChart(8)],//调整截面形状
            symbolOffset: [FontChart(10), FontChart(-4)],
            z: 12,
            tooltip: {
              show: false
            },
            symbolPosition: 'end',
            itemStyle: {
              normal: {
                borderRadius: [5, 5, 5, 5],
                color: function (params) {
                  return new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 174, 255, 1)'
                  }, {
                    offset: 1,
                    color: 'rgba(0, 174, 255, 1)'
                  }], false)
                }
              }
            },
            data: ['50', '75', '105', '130', '105', '130', '105', '130', '105', '130', '105', '130']
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
  height: calc(100% - 110px);
}
</style>
