<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

import {FontChart} from "@/utils/utils";
import * as echarts from "echarts"
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
      let myChart = echarts.init(that.$refs.echarts)
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
          trigger: 'axis',
        },
        xAxis: {
          data: [
            '3日',
            '4日',
            '5日',
            '6日',
            '7日',
            '8日',
            '9日',
            '10日',
            '11日',
            '12日',
            '13日',
            '14日',
            '15日',
            '16日',
            '17日',
            '18日',
            '19日',
            '20日',
            '21日',
            '22日',
            '23日',
            '24日',
            '25日',
          ],
          axisLine: {
            lineStyle: {
              color: 'rgba(94, 115, 152, 1)',
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: 'rgba(146, 178, 215, 1)',
            fontSize: FontChart(16)
          }
        },
        yAxis: [
          {
            splitNumber: 3,
            nameTextStyle: {
              color: 'rgba(146, 178, 215, 1)',
              fontSize: FontChart(16)
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#3d5269'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: 'rgba(146, 178, 215, 1)',
              fontSize: FontChart(16)
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#3E536C'
              }
            },
            yAxisIndex: 0
          }],
        series: [
          {
            name: '总税务',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            yAxisIndex: 0,
            symbolSize: 0,
            lineStyle: {
              normal: {
                color: '#00FFF6',
              },
            },
            zlevel: 1,
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#00FFF6',
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [{
                    offset: 0,
                    color: 'rgba(0, 255, 246, 0.3)'
                  },
                    {
                      offset: 1,
                      color: 'rgba(0, 255, 246, 0.1)'
                    }
                  ],
                  false
                ),
                shadowColor: 'rgba(0, 255, 246, 0.3)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              color: '#00FFF6',
              borderColor: '#fff',
              borderWidth: 3,
            },
            data: [100, 111, 100, 154, 100, 154, 111, 100, 154, 100, 154, 111, 100, 154, 100, 154, 111, 100, 154, 100, 154, 111, 100, 154, 100, 154]
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
  height: calc(100% - 0px);
}
</style>
