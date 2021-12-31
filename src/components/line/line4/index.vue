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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        legend: {
          itemWidth: 10,
          itemHeight: 10,
          itemGap: 13,
          show: false,
          right: 20,
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
          }
        },
        grid: {
          left: '30',
          top: '50',
          right: '40',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '预收预付监测',
              '跨境汇款灰名单客户监测',
              '国际结算跟单业务监测',
              '债项到期提醒',
            ],
            axisLine: {
              show: true,
              lineStyle: {
                color: '#A2B1BD',
                width: 1,
                type: 'solid'
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: 'dashed',
                color: '#A2B1BD',
              }
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: true,
              interval: 0,
              rotate: 0,
              textStyle: {
                color: '#A2B1BD',
                fontSize: 12
              }
            },
          }],
        yAxis: [{
          type: 'value',
          name: '件数',
          nameTextStyle: {
            fontSize: 12,
            color: '#fff',
            padding: [0, 0, 0, -30]
          },
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#fff',
            }
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#A2B1BD',
              width: 1,
              type: 'solid'
            },
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#063374',
            }
          }
        }],
        series: [
          {
            name: '业务监测',
            type: 'line',
            barWidth: 10,
            smooth: false,
            yAxisIndex: 0,
            barGap: '-100%',
            itemStyle: {
              normal: {
                color: 'rgba(0, 99, 190, 1)',
                barBorderRadius: [3, 3, 0, 0],
              },
            },
            lineStyle: {
              normal: {
                width: 3,
                color: 'rgba(0, 99, 190, 1)',
              }
            },
            label: {
              normal: {
                show: false,
                fontSize: 14,
                color: '#fff',
                position: 'top',
              },
            },
            data: [40, 60, 40, 50],
            areaStyle: { //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0, 99, 190, 0.4)'
                },
                  {
                    offset: 1,
                    color: 'rgba(0, 99, 190, 0)'
                  }
                ], false),
              }
            },
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
  height: calc(100% - 50px);
}
</style>
