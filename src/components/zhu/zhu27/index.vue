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
      list: ['2018', '2019', '2020', '2021', '2022']
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
      // 基于准备好的dom，初始化echarts实例
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts)
      var xData = [4, 2, 3, 6, 5, 4, 2, 3, 6, 5, 4, 2, 3, 6, 5]
      var xData2 = [8, 2, 3, 8, 6, 8, 2, 3, 8, 6, 8, 2, 3, 8, 6]
      var xData3 = [8, 2, 3, 8, 6, 8, 2, 3, 8, 6, 8, 2, 3, 8, 6]
      var option = {
        grid: {
          top: '50px',
          bottom: '20px',
          left: '20px',
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
              }], false),
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
          data: ['合同金额', '已完成合同金额', '完成比例'],
        },
        xAxis: [{
          data: xData,
          axisLabel: {
            margin: 10,
            color: 'rgba(245, 245, 246, 1.00)',
            textStyle: {
              fontSize: 14
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
            interval: 5, //  平均分为5份
            nameTextStyle: {
              color: 'rgba(0, 156, 255, 1)',
              fontSize: 13,
              padding: [0, 20, -5, 0]
            },
            axisLabel: {
              color: '#FFFEFE',
              textStyle: {
                fontSize: 14
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
          },
          {
            type: 'value',
            min: 0,
            max: 100,
            interval: 25,
            axisLabel: {
              formatter: '{value}%',
              color: '#FFFEFE',
              textStyle: {
                fontSize: 14
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
            name: '合同金额',
            type: 'bar',
            data: xData,
            barWidth: 10,
            itemStyle: {
              normal: {
                color: 'rgba(30, 160, 148, 1.00)',
                barBorderRadius: [0, 0, 0, 0],
                borderColor: 'rgba(50, 240, 221, 1.00)',
                borderWidth: 1
              }
            },
          },
          {
            name: '已完成合同金额',
            type: 'bar',
            data: xData2,
            barWidth: 10,
            itemStyle: {
              normal: {
                color: 'rgba(22, 158, 215, 1.00)',
                barBorderRadius: [0, 0, 0, 0],
                borderColor: 'rgba(48, 240, 255, 1.00)',
                borderWidth: 1
              }
            },
          },
          {
            name: '完成比例',
            type: 'line',
            yAxisIndex: 1,
            data: xData3,
            smooth: true,
            symbol: 'circle', //数值点设定为实心点
            symbolSize: 3, // 折线的点的大小
            itemStyle: {
              normal: {
                color: 'rgba(253, 203, 0, 1)', //点的颜色
                lineStyle: {
                  color: 'rgba(253, 203, 0, 1)', //线的颜色
                  width: 2, // 折线图线条粗细设置
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
