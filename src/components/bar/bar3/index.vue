<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: 'echarts1',
  components: {},
  data() {
    return {
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine () {
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts1)
      let value = 55.33
      let int = value.toFixed(2).split('.')[0]
      var option = {
        title: {
          text: '{a|' + int + '%}',
          x: 'center',
          y: 'center',
          textStyle: {
            rich: {
              a: {
                fontSize: 14,
                color: 'rgba(0, 156, 255, 1)'
              }
            }
          }
        },
        series: [
          {
            type: 'gauge',
            radius: '90%',
            clockwise: true,
            startAngle: '90',
            endAngle: '-269.9999',
            splitNumber: 25,
            detail: {
              offsetCenter: [0, -10],
              formatter: ' '
            },
            pointer: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: [
                  [0, 'rgba(0, 156, 255, 1)'],
                  [52 / 100, 'rgba(0, 156, 255, 1)'],
                  [1, '#011A54']
                ],
                width: 15
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              length: 30,
              lineStyle: {
                color: '#051F54',
                width: 2
              }
            },
            axisLabel: {
              show: false
            }
          },
          {
            type: 'pie',
            name: '内层细圆环',
            radius: ['96%', '97%'],
            hoverAnimation: false,
            clockWise: false,
            itemStyle: {
              normal: {
                color: 'rgba(31, 69, 96, 1)'
              }
            },
            label: {
              show: false
            },
            data: [100]
          },
          {
            type: 'pie',
            name: '内层细圆环',
            radius: ['0%', '65%'],
            hoverAnimation: true,
            clockWise: true,
            itemStyle: {
              normal: {
                color: '#011A54'
              }
            },
            label: {
              show: false
            },
            data: [100]
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
  height: calc(100% - 10px);
}
</style>
