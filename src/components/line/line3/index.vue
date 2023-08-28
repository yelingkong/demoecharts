<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

export default {
  name: 'echarts1',
  components: {},
  props: {
    id: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      status: ''
    }
  },
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts)
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
          trigger: 'axis'
        },
        legend: {
          show: true,
          right: '0',
          top: '0',
          icon: 'stack',
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: '#1bb4f6'
          },
          data: ['汇总救治', '解救', '就医', '探视人数', '新收']
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              color: 'rgba(150, 175, 220, 1)',
              fontSize: 13
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#397cbc'
              }
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#1E4588'
              }
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月']
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 1000,
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: 'rgba(150, 175, 220, 1)'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#1E4588'
              }
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#1E4588'
              }
            }
          }
        ],
        series: [
          {
            name: '汇总救治',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: '#0092f6',
                lineStyle: {
                  color: '#02CBFF',
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(0, 204, 255, 0.8)'
                  }, {
                    offset: 1,
                    color: 'rgba(0, 204, 255, 0.1)'
                  }]),
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: 'red'
                }
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330]
          },
          {
            name: '解救',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,

            itemStyle: {
              normal: {
                color: 'rgba(57, 253, 192, 1)',
                lineStyle: {
                  color: 'rgba(57, 253, 192, 1)',
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(57, 253, 192, 0.8)'
                  }, {
                    offset: 1,
                    color: 'rgba(57, 253, 192, 0.1)'
                  }]),
                }
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410]
          },
          {
            name: '就医',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: 'rgba(160, 57, 247, 1)',
                lineStyle: {
                  color: 'rgba(160, 57, 247, 1)',
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(160, 57, 247, 0.8)'
                  }, {
                    offset: 1,
                    color: 'rgba(160, 57, 247, 0.1)'
                  }]),
                }
              }
            },
            data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190]
          },
          {
            name: '探视人数',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: 'rgba(253, 168, 57, 1)',
                lineStyle: {
                  color: 'rgba(253, 168, 57, 1)',
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(253, 168, 57, 0.8)'
                  }, {
                    offset: 1,
                    color: 'rgba(253, 168, 57, 0.1)'
                  }]),
                }
              }
            },
            data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190]
          },
          {
            name: '新收',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: 'rgba(45, 89, 255, 1)',
                lineStyle: {
                  color: 'rgba(45, 89, 255, 1)',
                  width: 1
                },
                areaStyle: {
                  //color: '#94C9EC'
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: 'rgba(45, 89, 255, 0.8)'
                  }, {
                    offset: 1,
                    color: 'rgba(45, 89, 255, 0.1)'
                  }]),
                }
              }
            },
            data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190]
          }
        ]
      }
      myChart.clear()
      myChart.resize()
      myChart.setOption(option)
      myChart.on('click', function (params) {
        console.log(params)
        console.log(123)
      })
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
