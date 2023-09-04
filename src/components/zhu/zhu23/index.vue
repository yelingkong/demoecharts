<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>
import { FontChart } from '@/utils/utils'
import * as echarts from "echarts"
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
      xdata: [],
      ydata: []
    }
  },
  watch: {},
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts)
      var xdata = ['2022', '2021', '2020', '2019', '2018']
      var ydata = [10, 20, 30, 40, 50, 60, 70]
      var option = {
        grid: {
          left: '3%',
          right: '5%',
          bottom: '1%',
          top: '5%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: function (params) {
            return params[0].name + ' : ' + params[0].value
          }
        },
        xAxis: {
          show: true,
          splitLine: {
            show: false,
            textStyle: {
              color: '#333'
            },
            lineStyle: {
              color: '#8c8c8c',
              type: 'dashed',
            }
          },
          axisLine: {
            show: false,
            textStyle: {
              color: '#333'
            },
            lineStyle: {
              color: '#8c8c8c',
              type: 'dashed',
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          type: 'value'
        },
        yAxis: [{
          type: 'category',
          inverse: true,
          boundaryGap: true,
          axisLabel: {
            show: true,
            textStyle: {
              color: 'rgba(179, 216, 221, 1)',
              fontSize: FontChart(14)
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          data: xdata
        }],
        series: [{
          // name: '值',
          type: 'bar',
          zlevel: 1,
          showBackground: true,
          backgroundStyle: {
            color: '#213548',
            borderWidth: 8,
            borderColor: '#213548',
          },
          label: {
            normal: {
              show: true,
              fontSize: FontChart(14),
              fontWeight: "bold",
              color: "rgba(42, 237, 255, 1)",
              position: "right",
            },
          },
          itemStyle: {
            normal: {
              barBorderRadius: [0, 0, 32, 0],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: 'rgba(0, 255, 246, 0)'
              }, {
                offset: 1,
                color: 'rgba(0, 255, 246, 1)'
              }]),
            },
          },
          barWidth: '10',
          data: ydata
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
  height: calc(100% - 40px);
}
</style>
