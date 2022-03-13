<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>

import { FontChart } from '@/utils/utils'
import $ from 'jquery'

export default {
  name: 'echarts1',
  components: {},
  data () {
    return {}
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts1)
      var dataArr = [{
        value: 135,
        name: '当月业务量'
      }]
      var color = new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: 'rgba(5, 109, 128, 1)' // 0% 处的颜色
      },
        {
          offset: 1,
          color: 'rgba(0, 255, 246, 1)' // 100% 处的颜色
        }
      ])
      var colorSet = [
        [0.58, color],
        [1, '#0E394D']
      ]
      var rich = {
        bule: {
          fontSize: FontChart(42),
          fontFamily: 'DigitalDismay',
          color: 'rgba(0, 255, 246, 1)',
          fontWeight: '700',
          padding: [0, FontChart(0), 0, 0],
        },
        bule2: {
          fontSize: FontChart(16),
          fontFamily: 'DigitalDismay',
          color: 'rgba(0, 255, 246, 1)',
          fontWeight: '700',
          padding: [0, FontChart(0), 10, 0],
        },
      }
      var option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
          {
            type: 'gauge',
            radius: '90%',
            startAngle: '225',
            endAngle: '-45',
            pointer: {
              show: false
            },
            detail: {
              formatter: function (value) {
                var num = Math.round(value)
                return '{bule|' + num + '},{bule2|万}'
              },
              rich: rich,
              'offsetCenter': ['0%', '0%'],
            },
            data: dataArr,
            title: {
              show: false,
              color: '#fff',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontFamily: '微软雅黑',
              fontSize: FontChart(20),
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: colorSet,
                width: FontChart(25),
                // shadowBlur: 15,
                // shadowColor: '#B0C4DE',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: 1
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              length: FontChart(25),
              lineStyle: {
                color: 'rgba(242, 100, 57, 1)',
                width: 2,
                type: 'solid',
              },
            },
            axisLabel: {
              show: false
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
  height: calc(100% - 10px);
}
</style>
