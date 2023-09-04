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
      var legends = ['志愿者团队1', '志愿者团队2', '志愿者团队3', '志愿者团队4', '志愿者团队5']
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
            name: '项目经理',
            value: 40
          },
          {
            name: '项目副经理',
            value: 30
          },
          {
            name: '项目总工',
            value: 45
          },
          {
            name: '其他',
            value: 47
          }
        ]
      var option = {
        color: colors,
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
            name: '隐患评估',
            type: 'pie',
            radius: ['32%', '65%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            label: {
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
            name: '饼状背景',
            radius: ['0%', '20%'],
            center: ['50%', '50%'],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: 'rgba(40, 217, 255, 1.00)',
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
            radius: ['0%', '10%'],
            center: ['50%', '50%'],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: 'rgba(18, 128, 156, 1.00)',
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
            center: ['50%', '50%'],
            type: 'gauge',
            startAngle: 270,
            endAngle: -89.9999,
            axisTick: {
              show: false,
              length: 5,
            },
            axisLabel: {
              show: false,
            },
            radius: '60%',
            splitNumber: '50',
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(143, 153, 163, 1.00)',
                width: 10,
              },
            },
            splitLine: {
              length: 2,
              lineStyle: {
                width: 10,
                color: 'rgba(143, 153, 163, 1.00)',
              },
            },
            detail: {
              show: false,
            },
          },
          {
            center: ['50%', '50%'],
            type: 'gauge',
            startAngle: 270,
            endAngle: -89.9999,
            axisTick: {
              show: false,
              length: 5,
            },
            axisLabel: {
              show: false,
            },
            radius: '75%',
            splitNumber: '50',
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(143, 153, 163, 1.00)',
                width: 10,
              },
            },
            splitLine: {
              length: 2,
              lineStyle: {
                width: 10,
                color: 'rgba(143, 153, 163, 1.00)',
              },
            },
            detail: {
              show: false,
            },
          },
          {
            center: ['50%', '50%'],
            type: 'gauge',
            startAngle: 270,
            endAngle: -89.9999,
            axisTick: {
              show: false,
              length: 5,
            },
            axisLabel: {
              show: false,
            },
            radius: '90%',
            splitNumber: '50',
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(143, 153, 163, 1.00)',
                width: 10,
              },
            },
            splitLine: {
              length: 2,
              lineStyle: {
                width: 10,
                color: 'rgba(143, 153, 163, 1.00)',
              },
            },
            detail: {
              show: false,
            },
          },
          {
            center: ['50%', '50%'],
            type: 'gauge',
            startAngle: 270,
            endAngle: -89.9999,
            axisTick: {
              show: false,
              length: 5,
            },
            axisLabel: {
              show: false,
            },
            radius: '100%',
            splitNumber: '100',
            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(143, 153, 163, 1.00)',
                width: 10,
              },
            },
            splitLine: {
              length: 2,
              lineStyle: {
                width: 10,
                color: 'rgba(143, 153, 163, 1.00)',
              },
            },
            detail: {
              show: false,
            },
          }
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
