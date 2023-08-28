<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

import {FontChart} from "@/utils/utils";
import dian from './dian.png'

export default {
  name: 'echarts1',
  components: {},
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  watch: {
    list() {
      this.drawLine()
    },
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts)
      var xdata = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
      var ydata = [20, 20, 40, 50, 20, 10, 50, 20, 20, 40, 50, 20, 10, 50, 20, 20, 40, 50, 20, 10, 50, 10, 50,]
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
            lineStyle: {
              color: '#017bec',
              type: 'dashed'
            }
          },
          backgroundColor: 'rgba(255,255,255,0)',
          formatter: function (params, ticket, callback) {
            console.log(params)
            return `<div class="tooltipBody">
                    <div class="h16"></div>
                    <span class="tooltipTitle">${params[0].axisValue}</span>
                      <div class="tooltipInfo">
                       <span class="tooltipDian"></span>
                        <span class="tooltipInfo2">${params[0].seriesName}:${params[0].value}</span>
                      </div>
                    </div>`
          }
        },
        legend: {
          show: true,
          right: FontChart(18),
          top: '10',
          itemWidth: FontChart(28),
          textStyle: {
            color: 'rgba(0, 209, 255, 1)',
            fontSize: FontChart(14)
          }
        },
        grid: {
          top: FontChart(70),
          left: FontChart(20),
          right: FontChart(20),
          bottom: FontChart(20),
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(32, 72, 141, 1)'
            },
          },
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              color: '#76a3e1',
              margin: 0,
              fontSize: FontChart(14),
            },
          },
          axisTick: {
            show: true,
          },
          data: xdata
        }],
        yAxis: [{
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(21, 58, 121, 0.6)',
              type: 'dashed'
            },
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: 'rgba(32, 72, 141, 1)'
            }
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#76a3e1',
              fontSize: FontChart(14),
            }
          },
          axisTick: {
            show: false,
          },
        }],
        series: [{
          name: '小时告警数',
          type: 'line',
          symbol: 'image://' + dian,
          showAllSymbol: false,
          symbolSize: FontChart(12),
          lineStyle: {
            normal: {
              color: '#21b9d7', // 线条颜色
            },
          },
          itemStyle: {
            color: '#21b9d7',
            borderColor: '#21b9d7',
            borderWidth: FontChart(2)
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              color: '#fff',
              align: 'center',
              fontWeight: 500,
              fontSize: FontChart(14)
            }
          },
          tooltip: {
            show: true
          },
          areaStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 234, 255, 0.3)'
              },
                {
                  offset: 1,
                  color: 'rgba(0, 156, 255, 0)'
                }
              ], false),
            }
          },
          data: ydata
        }]
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

.tooltipBg {
  width: 160px;
  height: 74px;
  background: url("./tooltipbg.png") no-repeat;
  background-size: 100% 100%;
}
</style>
<style lang="scss">
.tooltipTitle {
  font-size: 16px;
  font-family: DIN;
  font-weight: bold;
  color: #FFFFFF;
  padding-left: 10px;
}

.tooltipBody {
  width: 160px;
  height: 74px;
  background: url(./tooltipbg.png) no-repeat;
  background-size: 100% 100%;
}

.h16 {
  height: 10px;
}

.tooltipInfo {
  width: 143px;
  height: 26px;
  background: rgba(26, 41, 176, 0.2);
  border-radius: 2px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  margin-left: 10px;
}

.tooltipInfo2 {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: #FFFFFF;
  margin-left: 10px;
}

.tooltipDian {
  width: 8px;
  height: 8px;
  background: #0CF1FF;
  border-radius: 50%;
  margin-left: 8px;
  flex-shrink: 0;
}
</style>
