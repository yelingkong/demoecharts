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
      var that = this;
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(that.$refs.echarts)
      var option = {
        color: ['rgba(0, 204, 255, 1)',
          'rgba(39, 120, 255, 1)',
          'rgba(72, 176, 255, 1)',
          'rgba(91, 207, 255, 1)',
          'rgba(108, 227, 255, 1)',
          'rgba(119, 240, 240, 1)',
          'rgba(129, 163, 243, 1)',
          'rgba(243, 170, 104, 1)',
          'rgba(245, 232, 140, 1)',
          'rgba(162, 143, 218, 1)',
          'rgba(162, 238, 250, 1)',
          'rgba(38, 116, 255, 1)',
          'rgba(73, 177, 255, 1)',
        ],
        grid: {
          left: '15',
          right: '10',
          top: '20%',
          bottom: '20px',
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'axis',
        },
        xAxis: {
          data: ['1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月',
          ],
          name: '月',
          nameTextStyle: {
            color: 'rgba(112, 135, 154, 1)',
            padding: [28, 0, 0, -30],
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(208, 215, 221, 1)',
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#ffffff',
            fontSize: 12,
          }
        },
        yAxis: [
          {
            splitNumber: 3,
            name: '数量(笔)',
            nameTextStyle: {
              color: 'rgba(112, 135, 154, 1)',
              padding: [0, 0, 0, -40],
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#3d5269',
                type: 'dashed'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: 'rgba(112, 135, 154, 1)',
              fontSize: 12
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(221, 221, 221, 1)',
                type: 'dashed'

              }
            },
            yAxisIndex: 0
          }],
        series: [
          {
            name: '',
            type: 'bar',
            barWidth: 22,
            zlevel: 2,
            itemStyle: {
              normal: {
                borderRadius: [5, 5, 5, 5],
                color: function (params) {
                  return new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(77, 169, 255, 1)'
                  }, {
                    offset: 1,
                    color: 'rgba(0, 99, 190, 1)'
                  }], false)
                }
              }
            },
            label: {
              normal: {
                show: false,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#ffffff',
                position: 'top',
              }
            },
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(255, 255, 255, 1)',
            },
            data: [100, 111, 100, 154, 100, 111, 100, 154, 154, 100, 111, 100]
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
  height: calc(100% - 50px);
}
</style>
