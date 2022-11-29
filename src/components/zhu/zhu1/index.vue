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
      list: ['1月', '2月', '3月', '4月', '5月']
    }
  },
  watch: {},
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
      var getname = this.list
      var getvalue = [4, 2, 3, 6, 5, 4, 2, 3, 6, 5, 4, 2, 3, 6, 5,]
      var getvalue1 = [8, 2, 3, 8, 6, 8, 2, 3, 8, 6, 8, 2, 3, 8, 6]
      var age = [45, 55, 35, 42, 60, 45, 55, 35, 42, 60, 45, 55, 35, 42, 60, 45, 55, 35, 42, 60,]

      function calMax (arr) {
        let max = 0
        arr.forEach((el) => {
          el.forEach((el1) => {
            if (!(el1 === undefined || el1 === '')) {
              if (max < el1) {
                max = el1
              }
            }
          })
        })
        let maxint = Math.ceil(max / 9.5)
        let maxval = maxint * 10
        return maxval
      }

      var sumData = []
      sumData = sumData.concat(getvalue).concat(getvalue1)
      var max = Math.ceil((calMax([sumData])) / 1) * 1
      var option = {
        grid: {
          top: '30px',
          bottom: '30px',
          left: '50px',
          right: '50px',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255, 174, 0, 0.1)'
              }, {
                offset: 1,
                color: 'rgba(255, 174, 0, 0.5)'
              }], false),
            }
          }
        },
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
          data: ['订单实收', '未支付金额', '运营成本', '毛利率'],
        },
        xAxis: [{
          data: getname,
          axisLabel: {
            margin: 10,
            color: 'rgba(130, 153, 191, 1)',
            textStyle: {
              fontSize: 13
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(39, 76, 129, 0.26)',
              width: 1
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(39, 76, 129, 0.26)',
              width: 1,
            }
          },
          axisTick: {
            show: false
          },
        }],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: max, // 计算最大值
            interval: 5, //  平均分为5份
            nameTextStyle: {
              color: 'rgba(0, 156, 255, 1)',
              fontSize: 13,
              padding: [0, 20, -5, 0]
            },
            axisLabel: {
              color: 'rgba(130, 153, 191, 1)',
              textStyle: {
                fontSize: 13
              },
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(39, 76, 129, 0.26)',
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(39, 76, 129, 0.26)',
                width: 1,
              }
            }
          }, {
            type: 'value',
            min: 20,
            max: 70,
            interval: 25,
            axisLabel: {
              formatter: '{value}%',
              color: 'rgba(130, 153, 191, 1)',
              textStyle: {
                fontSize: 13
              },
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(39, 76, 129, 0.26)',
                width: 1,
              }
            }
          }],
        series: [
          {
            name: '订单实收',
            type: 'bar',
            data: getvalue,
            barWidth: '7px',
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0, 246, 150, 1)'
                }, {
                  offset: 1,
                  color: 'rgba(16, 226, 202, 1)'
                }], false),
                barBorderRadius: [4, 4, 0, 0],
              }
            },
          },
          {
            name: '未支付金额',
            type: 'bar',
            data: getvalue1,
            barWidth: '7px',
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0, 204, 255, 1)'
                }, {
                  offset: 1,
                  color: 'rgba(0, 72, 255, 1)'
                }], false),
                barBorderRadius: [4, 4, 0, 0],
              }
            },
          },
          {
            name: '运营成本',
            type: 'bar',
            data: getvalue1,
            barWidth: '7px',
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(255, 183, 28, 1)'
                }, {
                  offset: 1,
                  color: 'rgba(255, 111, 40, 1)'
                }], false),
                barBorderRadius: [4, 4, 0, 0],
              }
            },
          }, {
            name: '毛利率',
            type: 'line',
            yAxisIndex: 1,
            data: age,
            smooth: true,
            symbol: 'circle', //数值点设定为实心点
            symbolSize: 6, // 折线的点的大小
            itemStyle: {
              normal: {
                color: 'rgba(253, 203, 0, 1)', //点的颜色
                lineStyle: {
                  color: 'rgba(253, 203, 0, 1)', //线的颜色
                  width: 1, // 折线图线条粗细设置
                },
              },
            },
          },]
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
  height: calc(100% - 50PX);
}
</style>
