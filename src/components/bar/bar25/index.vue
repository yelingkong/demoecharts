<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>

import {FontChart} from '@/utils/utils'
import $ from 'jquery'
import * as echarts from "echarts"
export default {
  name: 'echarts1',
  components: {},
  data() {
    return {}
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts1)
      var legends = ['财政项目', '机电项目', '软件项目', '其他']
      var whei = $(window).width()
      var colors1 = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: 'rgba(225, 183, 67, 1.00)' // 0% 处的颜色
      },
        {
          offset: 1,
          color: 'rgba(169, 157, 118, 1.00)' // 100% 处的颜色
        }
      ])
      var colors2 = new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
        offset: 0,
        color: 'rgba(55, 137, 238, 1.00)' // 0% 处的颜色
      },
        {
          offset: 1,
          color: 'rgba(114, 140, 173, 1.00)' // 100% 处的颜色
        }
      ])
      var colors3 = new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
        offset: 0,
        color: 'rgba(59, 233, 113, 1.00)' // 0% 处的颜色
      },
        {
          offset: 1,
          color: 'rgba(114, 170, 136, 1.00)' // 100% 处的颜色
        }
      ])
      var colors4 = new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
        offset: 0,
        color: 'rgba(57, 236, 233, 1.00)' // 0% 处的颜色
      },
        {
          offset: 1,
          color: 'rgba(117, 167, 168, 1.00)' // 100% 处的颜色
        }
      ])
      var colors = [colors1, colors2, colors3, colors4]
      var data =
        [
          {
            name: '财政项目',
            value: 40
          },
          {
            name: '机电项目',
            value: 30
          },
          {
            name: '软件项目',
            value: 45
          },
          {
            name: '其他',
            value: 47
          }
        ]
      var option = {
        color: colors,
        title: {
          text: '',
          top: 'middle',
          left: 'center',
          textStyle: {
            fontSize: FontChart(33),
            fontWeight: '700',
            color: '#ACC5CB',
            textAlign: 'center',
            fontFamily: 'ZhenyanGB',
          },
        },
        legend: {
          show: false,
          orient: 'horizontal',
          bottom: FontChart(30),
          right: 'center',
          itemGap: FontChart(20),
          itemWidth: FontChart(20),
          itemHeight: FontChart(14),
          width: '100%',
          textStyle: {
            color: '#fff',
            fontSize: FontChart(14)
          },
          data: legends
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} {b} : {c} ({d}%)'
        },
        series: [
          {
            name: '项目类型分析',
            type: 'pie',
            radius: ['50%', '75%'],
            center: ['50%', '50%'],
            itemStyle: {
              normal: {
                borderColor: 'rgba(11, 32, 54, 1.00)',
                borderWidth: 3
              }
            },
            label: {
              show: false,
              normal: {
                show: false,
                position: 'outside',
                fontSize: FontChart(14),
                color: '#92B2D7',
                formatter: (params) => {
                  return params.name + ' : ' + params.value
                }
              }
            },
            labelLine: {
              length: 1,
              length2: FontChart(20)
            },
            data: data
          },
          {
            type: 'pie',
            name: '饼状背景渐变背景',
            radius: ['0%', '100%'],
            center: ['50%', '50%'],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: new echarts.graphic.RadialGradient(.5, .5, 0.5, [{
                  offset: 0,
                  color: 'rgba(255,255,255,0.1)'
                },
                  {
                    offset: 0.5,
                    color: 'rgba(255,255,255,0.1)'
                  }, {
                    offset: 0.8,
                    color: 'rgba(255,255,255,0.1)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(255,255,255,0.5)'
                  }
                ], false),
              }
            },
            tooltip: {
              show: false,
            },
            label: {
              show: false
            },
            data: [50]
          },
          {
            type: 'pie',
            name: '饼状背景',
            radius: ['99%', '100%'],
            center: ['50%', '50%'],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: 'rgba(151, 159, 169, 1.00)'
              }
            },
            tooltip: {
              show: false,
            },
            label: {
              show: false
            },
            data: [50]
          },
          {
            type: 'pie',
            name: '饼状背景',
            radius: ['0%', '50%'],
            center: ['50%', '50%'],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: 'rgba(0, 22, 45, 1.00)',
              }
            },
            tooltip: {
              show: false,
            },
            label: {
              show: false
            },
            data: [50]
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
  height: 100%;
}
</style>
