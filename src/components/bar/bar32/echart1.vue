<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>

import { FontChart } from '@/utils/utils'

export default {
  name: 'echarts1',
  components: {},
  data () {
    return {
      time: null,
      progressNew: 0
    }
  },
  props: {
    title: {
      type: String,
      default () {
        return ''
      }
    },
    num: {
      type: String,
      default () {
        return 0
      }
    },
    unit: {
      type: String,
      default () {
        return ''
      }
    },
    progress: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  watch: {
    title () {
      this.drawLine()
    },
    num () {
      this.drawLine()
    },
    unit () {
      this.drawLine()
    },
    progress () {
      this.drawLine()
    },
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      var that = this
      window.addEventListener('resize', this.drawLine)
      const myChart = this.$echarts.init(this.$refs.echarts1)
      var color = new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: 'rgba(26, 80, 255, 1)' // 0% 处的颜色
      }, {
        offset: 1,
        color: 'rgba(105, 179, 255, 1)' // 100% 处的颜色
      }
      ])
      var colorSet = [
        [0, color],
        [1, '#262895']
      ]
      var rich = {
        bule: {
          fontSize: FontChart(26),
          fontFamily: 'Bebas',
          color: '#01ACFF',
          fontWeight: '400',
          padding: [0, FontChart(0), 0, 0]
        },
        bule2: {
          fontSize: FontChart(17),
          color: 'rgba(1, 172, 255, 1)',
          fontWeight: '400',
          padding: [0, FontChart(0), 0, 0]
        }
      }
      var option = {
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        title: {
          show: true,
          text: this.title,
          left: 'center',
          bottom: 'bottom',
          fontSize: FontChart(17),
          textStyle: {
            color: '#00CAFF',
            fontStyle: 'normal',
            fontWeight: '500',
            fontFamily: '微软雅黑'
          }
        },
        series: [
          {
            type: 'gauge',
            radius: '100%',
            startAngle: '210',
            endAngle: '-30',
            detail: {
              formatter: function (value) {
                return '{bule|' + that.num + '},{bule2|' + that.unit + '}'
              },
              rich: rich,
              offsetCenter: ['0%', '0%']
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: colorSet,
                width: FontChart(12),
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: 1
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          }
        ]
      }
      myChart.clear()
      myChart.resize()
      myChart.setOption(option)
      var data2 = [
        [0, color],
        [1, '#262895']
      ]
      this.time = setInterval(() => {
        console.log(this.progressNew)
        data2 = [
          [this.progressNew / 100, color],
          [1, '#262895']
        ]
        if (this.progressNew >= that.progress) {
          clearInterval(this.time)
        } else {
          this.progressNew += 1
          option.series[0].axisLine.lineStyle.color = data2
          myChart.setOption(option)
        }
      }, 20)
    }
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
