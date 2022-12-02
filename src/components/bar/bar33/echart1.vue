<template>
  <div class="echartsBody">
    <div class="echarts1" ref="echarts1">
    </div>
  </div>

</template>

<script>

export default {
  name: 'echarts1',
  components: {},
  data() {
    return {}
  },
  props: {
    title: {
      type: String,
      default() {
        return '';
      }
    },
    percent: {
      type: String | Number,
      default() {
        return '0';
      }
    },
  },
  mounted() {
    this.drawLine()
  },
  watch: {
    percent() {
      this.drawLine()
    },
    title() {
      this.drawLine()
    },
  },
  methods: {
    drawLine() {
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts1)
      var option = {
        title: [{
          text: '{a|' + this.percent + '%}',
          x: 'center',
          y: '30%',
          textStyle: {
            rich: {
              a: {
                fontSize: 14,
                fontFamily: 'MiSans-Bold',
                color: '#FFFFFF'
              }
            }
          }
        }, {
          text: this.title,
          x: 'center',
          y: '50%',
          textStyle: {
            fontSize: 16,
            fontFamily: 'MiSans',
            color: '#FFFFFF'
          }
        }],
        series: [
          {
            type: 'pie',
            z: 0,
            name: '饼状背景渐变背景',
            radius: ['0%', '100%'],
            center: ['50%', '50%'],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
                  offset: 0,
                  color: 'rgba(36, 220, 247, 0.05)'
                },
                  {
                    offset: 0.5,
                    color: 'rgba(36, 220, 247, 0.2)'
                  }, {
                    offset: 0.8,
                    color: 'rgba(30, 243, 190, 0.3)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(30, 243, 190, 0.4)'
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
            data: [this.percent]
          },
          {
            type: 'pie',
            z: 0,
            name: '饼状背景渐变背景',
            radius: ['97%', '100%'],
            center: ['50%', '50%'],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
                  offset: 0,
                  color: 'rgba(36, 220, 247, 0.1)'
                },
                  {
                    offset: 0.5,
                    color: 'rgba(36, 220, 247, 0.3)'
                  }, {
                    offset: 0.8,
                    color: 'rgba(30, 243, 190, 0.5)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(30, 243, 190, 0.5)'
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
            data: [this.percent]
          },
          {
            type: 'gauge',
            radius: '100%',
            clockwise: true,
            startAngle: '90',
            endAngle: '-269.9999',
            splitNumber: 25,
            z: 1,
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
                  [0, 'rgba(30, 243, 190, 1)'],
                  [this.percent / 100, 'rgba(30, 243, 190, 1)'],
                  [1, 'rgba(36, 220, 247, 0)']
                ],
                width: 10
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              length: 10,
              lineStyle: {
                color: '#13716c',
                width: 2
              }
            },
            axisLabel: {
              show: false
            }
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
  height: calc(100% - 20px);
}

.echartsBody {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: flex-start;
  position: relative;
  width: 100%;
  height: calc(100% - 0px);

  //p {
  //  font-size: 16px;
  //  font-family: MiSans;
  //  font-weight: 400;
  //  color: #FFFFFF;
  //  margin-top: 5px;
  //}
}
</style>
