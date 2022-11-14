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
      status: '',
      active: false,
      list: ['名称1', '名称2', '名称3', '名称4', '名称5', '名称6', '名称7']
    }
  },
  watch: {},
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
      const myChart = this.$echarts.init(this.$refs.echarts)
      var getname = this.list
      var getvalue = [4, 2, 3, 6, 5, 4, 2, 3, 6, 5, 4, 2, 3, 6, 5]
      var getvalue1 = [8, 2, 3, 8, 6, 8, 2, 3, 8, 6, 8, 2, 3, 8, 6]
      var option = {
        grid: {
          top: '50px',
          bottom: '0px',
          left: '25px',
          right: '20px',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(52, 249, 230, 0.2)'
              }, {
                offset: 1,
                color: 'rgba(52, 249, 230, 0.2)'
              }], false)
            }
          }
        },
        legend: {
          top: 0,
          right: 20,
          itemWidth: 14,
          itemHeight: 14,
          itemGap: 10,
          textStyle: {
            color: '#fff',
            fontSize: '14'
          },
          data: ['计划生产数量', '实际生产数量']
        },
        xAxis: [{
          data: getname,
          axisLabel: {
            margin: 10,
            color: 'rgba(197, 218, 221, 1)',
            interval: 0,
            rotate: -45,
            textStyle: {
              fontSize: 14
            }
          },
          axisLine: {
            lineStyle: {
              color: '#414f5d',
              width: 1
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(39, 76, 129, 0.26)',
              width: 1
            }
          },
          axisTick: {
            show: false
          }
        }],
        yAxis: [
          {
            type: 'value',
            min: 0,
            interval: 5, //  平均分为5份
            name: '单位：盒',
            nameTextStyle: {
              color: 'rgba(197, 218, 221, 1)',
              fontSize: 14,
              padding: [0, 0, 0, 0]
            },
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: 'rgba(179, 216, 221, 1)'
              }
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(39, 76, 129, 0.26)'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(39, 76, 129, 0.26)',
                width: 1
              }
            }
          }],
        series: [
          {
            name: '计划生产数量',
            type: 'bar',
            data: getvalue,
            barWidth: '17px',
            itemStyle: {
              normal: {
                color: new that.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(52, 230, 178, 1)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(52, 230, 178, 0.1)'
                    }
                  ],
                  false
                ),
                barBorderRadius: [0, 0, 0, 0],
                borderColor: '#31dbab',
                borderWidth: 1
              }
            }
          },
          {
            name: '实际生产数量',
            type: 'bar',
            data: getvalue1,
            barWidth: '17px',
            itemStyle: {
              normal: {
                color: new that.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(235, 190, 35, 1)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(235, 190, 35, 0.1)'
                    }
                  ],
                  false
                ),
                barBorderRadius: [0, 0, 0, 0],
                borderColor: '#ebbe22',
                borderWidth: 1
              }
            }
          }]
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
  height: calc(100% - 50PX);
}
</style>
