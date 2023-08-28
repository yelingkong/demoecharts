<template>
  <div class="echartsInner">
    <div class="echarts1" ref="echarts">
    </div>
    <p>{{ title }}</p>
  </div>
</template>

<script>

export default {
  name: 'echarts1',
  components: {},
  props: {
    color1: {
      type: String,
      default() {
        return ''
      }
    },
    color2: {
      type: String,
      default() {
        return ''
      }
    },
    color3: {
      type: String,
      default() {
        return ''
      }
    },
    color4: {
      type: String,
      default() {
        return ''
      }
    },
    percent: {
      type: String,
      default() {
        return ''
      }
    },
    title: {
      type: String,
      default() {
        return ''
      }
    },
  },
  data() {
    return {}
  },
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      const myChart = this.$echarts.init(this.$refs.echarts)
      var option = {
        title: {
          text: this.percent + '%',
          textStyle: {
            fontSize: 26,
            fontFamily: 'MiSans-Bold',
            fontWeight: 'normal',
            color: '#fff'
          },
          x: 'center',
          y: 'center'
        },
        series: [
          {
            type: 'liquidFill',
            waveAnimation: 1,
            data: [(this.percent / 100) - 0.1, (this.percent / 100) - 0.01],
            color: [this.color2, this.color1],
            amplitude: 10,
            radius: '80%',
            backgroundStyle: {
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.55,
                colorStops: [
                  {
                    offset: 0.5,
                    color: 'rgba(65, 65, 36, 0)' // 0% 处的颜色
                  },
                  {
                    offset: 0.75,
                    color: 'rgba(65, 65, 36, 0)' // 100% 处的颜色
                  },
                  {
                    offset: 0.95,
                    color: 'rgba(65, 65, 36, 0)' // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
            },
            outline: {
              show: false
            },
            label: {
              normal: {
                formatter: ''
              }
            }
          },
          {
            type: 'pie',
            name: '饼状背景渐变背景',
            radius: ['0%', '80%'],
            center: ['50%', '50%'],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
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
                    color: 'rgba(255,255,255,0.4)'
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
            name: '饼状背景渐变背景',
            radius: ['80%', '85%'],
            center: ['50%', '50%'],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: 'rgba(14, 26, 29, 1.00)',
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
            name: '饼状背景渐变背景',
            radius: ['85%', '90%'],
            center: ['50%', '50%'],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: this.color3,
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
            name: '饼状背景渐变背景',
            radius: ['90%', '96%'],
            center: ['50%', '50%'],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: this.color4,
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
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts1 {
  position: relative;
  width: 90%;
  height: calc(75% - 0px);
}

.echartsInner {
  position: relative;
  width: 100%;
  height: calc(100% - 0px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: flex-start;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    font-size: 16px;
    font-family: MiSans-Regular;
    font-weight: 400;
    color: #FFFFFF;
  }
}
</style>
