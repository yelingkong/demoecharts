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
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      status: '',
      active: false,
      list: ['1月', '2月', '3月', '4月', '5月'],
      isFullscreen: false
    }
  },
  watch: {
    isFullscreen () {
      if (!this.isFullscreen) {
        this.active = false
        if (this.active) {
          this.list = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        } else {
          this.list = ['1月', '2月', '3月', '4月', '5月']
        }
        this.$nextTick(() => {
          this.drawLine()
        })
      }
    },
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    getactive () {
      this.active = !this.active
      if (this.active) {
        this.list = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      } else {
        this.list = ['1月', '2月', '3月', '4月', '5月']
      }
      this.$nextTick(() => {
        this.drawLine()
      })
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts)
      let option = {
        legend: {
          top: 0,
          right: 20,
          left: '50%',
          itemWidth: 14,
          itemHeight: 14,
          itemGap: 10,
          textStyle: {
            color: '#fff',
            fontSize: '11'
          },
          data: ['订单总数', '异常订单', '未支付订单']
        },
        grid: {
          left: '30px',
          right: '30px',
          bottom: '30px',
          containLabel: true
        },
        tooltip: {
          show: 'true',
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        yAxis: {
          type: 'value',
          minInterval: 20,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff',
            }
          },
          axisLabel: {
            inside: false,
            textStyle: {
              color: 'rgba(130, 153, 191, 1)',
              fontWeight: 'normal',
              fontSize: '12',
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(39, 76, 129, 0.26)',
            }
          },
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            show: false
          },
          axisLabel: {
            inside: false,
            textStyle: {
              color: 'rgba(130, 153, 191, 1)',
              fontWeight: 'normal',
              fontSize: '12',
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(39, 76, 129, 0.26)',
            }
          },
          splitLine: {
            show: false
          },
          data: this.list
        }, {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: this.list
        },
          {
            type: 'category',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: this.list
          },
        ],
        series: [{
          name: '订单总数',
          type: 'bar',
          xAxisIndex: 1,
          itemStyle: {
            normal: {
              show: true,
              color: 'rgba(22, 54, 129, 1)',
              barBorderRadius: 0,
              borderWidth: 0,
              borderColor: '#333',
            }
          },
          barWidth: '20%',
          data: [33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33,]
        }, {
          name: '异常订单',
          type: 'bar',
          itemStyle: {
            normal: {
              show: true,
              color: 'rgba(255, 64, 73, 1)',
              barBorderRadius: 0,
              borderWidth: 0,
              borderColor: '#333',
            }
          },
          label: {
            normal: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#fff'
              }
            }
          },
          barWidth: '20%',
          data: [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,]
        },
          {
            name: '未支付订单',
            xAxisIndex: 2,
            type: 'bar',
            itemStyle: {
              normal: {
                show: true,
                color: 'rgba(91, 40, 255, 1)',
                barBorderRadius: 0,
                borderWidth: 0,
                borderColor: '#333',
              }
            },
            label: {
              normal: {
                show: false,
                position: 'top',
                textStyle: {
                  color: '#fff'
                }
              }
            },
            barWidth: '20%',
            data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,]
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
  margin-top: -30px;
}
</style>
