<template>
  <div class="echarts1" ref="echarts">
  </div>
</template>
<script>
import * as echarts from "echarts"
export default {
  name: 'echarts1',
  components: {},
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      status: '',
      active: false,
      list: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      data: [10, 20, 15, 10, 20, 15, 10, 20, 15, 10, 20, 15, 10, 20, 15]
    }
  },
  computed: {
    numlist: function () {
      var list = []
      this.data.forEach((type2) => {
        if (type2.name == this.title) {
          list.push(type2)
        }
      })
      console.log(list)
      return list
    },
    num: function () {
      var list = []
      this.data.forEach((type2) => {
        if (type2.name == this.title) {
          list.push(type2.num)
        }
      })
      console.log(list)
      return list
    }
  },
  watch: {
    numlist() {
      this.drawLine()
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    getactive() {
      this.$nextTick(() => {
        this.drawLine()
      })
    },
    drawLine() {
      var that = this
      // 基于准备好的dom，初始化echarts实例
      window.addEventListener('resize', this.drawLine)
      const myChart = echarts.init(this.$refs.echarts)
      var lineColor = 'rgba(57, 66, 68, 1.00)'
      var labelColor = '#fff'
      var fontSize = '14'
      var lineWidth = 1
      var option = {
        grid: {
          left: '0%',
          right: '0%',
          top: '15%',
          bottom: '0%',
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          textStyle: {
            fontSize: fontSize
          }
        },
        xAxis: [
          {
            type: 'category',
            name: '',
            nameTextStyle: {
              fontSize: fontSize,
              color: labelColor,
              lineHeight: 90
            },
            axisLabel: {
              color: labelColor,
              fontSize: fontSize,
              margin: 30
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: lineColor,
                width: 1
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#195384'
              }
            },
            data: this.list
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            nameTextStyle: {
              fontSize: fontSize,
              color: labelColor
            },
            nameGap: 10,
            axisLabel: {
              show: true,
              formatter: '{value}',
              margin: 10,
              textStyle: {
                color: labelColor,
                fontSize: fontSize
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: lineColor,
                width: 1
              }
            },
            splitArea: {
              show: false,
              areaStyle: {
                color: ['rgba(128,160,176,.1)', 'rgba(250,250,250,0)']
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: lineColor
              }
            }
          }
        ],
        series: [
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [20, 10],
            symbolOffset: [0, -5],
            symbolPosition: 'end',
            z: 12,
            tooltip: {
              show: false
            },
            label: {
              normal: {
                show: false,
                position: 'top',
                fontSize: fontSize,
                color: '#fff'
              }
            },
            color: 'rgba(91, 252, 244, 1)',
            data: this.data
          },
          {
            name: '',
            type: 'pictorialBar',
            tooltip: {
              show: false
            },
            symbolSize: [40, 22],
            symbolOffset: [0, 18],
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: 'rgba(91, 252, 244, 1)',
                borderType: 'solid',
                borderWidth: 1
              }
            },
            data: this.data
          },
          {
            name: '',
            type: 'pictorialBar',
            tooltip: {
              show: false
            },
            symbolSize: [30, 15],
            symbolOffset: [0, 12],
            z: 10,
            itemStyle: {
              normal: {
                color: 'transparent',
                borderColor: 'rgba(91, 252, 244, 1)',
                borderType: 'solid',
                borderWidth: 1
              }
            },
            data: this.data
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [20, 10],
            tooltip: {
              show: false
            },
            symbolOffset: [0, 5],
            z: 12,
            color: 'rgba(91, 252, 244, 1)',
            data: this.data
          },
          {
            type: 'bar',
            barWidth: '20',
            barGap: '10%',
            barCateGoryGap: '10%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(52, 249, 230, 0.2)'
                }, {
                  offset: 1,
                  color: 'rgba(52, 249, 230, 0.6)'
                }], false)
              }
            },
            data: this.data
          }
        ]
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
  height: calc(100% - 20PX);
}
</style>
