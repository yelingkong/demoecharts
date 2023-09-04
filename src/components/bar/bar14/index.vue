<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>

import {FontChart} from "@/utils/utils";
import $ from 'jquery'
import * as echarts from "echarts"
export default {
  name: 'echarts1',
  components: {},
  data() {
    return {}
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this;
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts1)
      var labelData = [];
      var labelData1 = [];
      var option = {
        title: [{
          text: '64',
          x: '49%',
          y: '37%',
          textAlign: 'center',
          textStyle: {
            fontSize: FontChart(40),
            fontWeight: '700',
            color: '#0373E5',
            textAlign: 'center',
            fontFamily: 'DigitalDismay',
          },
        }, {
          text: '正常',
          left: '49%',
          top: '52%',
          textAlign: 'center',
          textStyle: {
            fontSize: FontChart(18),
            fontWeight: '400',
            color: '#C7CFDC',
            textAlign: 'center',
            fontFamily: 'DigitalDismay',
          },
        }],
        polar: {
          radius: ['60%', '70%'],
          center: ['50%', '50%'],
        },
        angleAxis: {
          max: 100,
          show: false,
          startAngle: 0,
        },
        radiusAxis: {
          type: 'category',
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,

          },
          axisTick: {
            show: false
          },
        },
        series: [
          {
            name: '',
            type: 'bar',
            roundCap: true,
            radius: ['55%', '100%'],
            barWidth: FontChart(100),
            showBackground: true,
            backgroundStyle: {
              color: '#142D5D',
            },
            data: [64],
            coordinateSystem: 'polar',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  offset: 0,
                  color: 'rgba(1, 90, 207, 1)'
                }, {
                  offset: 1,
                  color: 'rgba(2, 129, 242, 1)'
                }]),
              }
            }
          },
          {
            hoverAnimation: false,
            type: 'pie',
            z: 2,
            data: labelData,
            radius: ['55%', '100%'],
            zlevel: -2,
            itemStyle: {
              normal: {
                borderColor: '#1f1e26',
                borderWidth: 20,
              }
            },
            label: {
              normal: {
                position: 'inside',
                show: false,
              }
            },
          },
          {
            hoverAnimation: false,
            type: 'pie',
            z: 1,
            data: labelData1,
            radius: ['50%', '70%'],
            zlevel: -2,
            itemStyle: {
              normal: {
                borderColor: '#1f1e26',
                borderWidth: 20,
              }
            },
            label: {
              normal: {
                position: 'inside',
                show: false,
              }
            },
          },
          {
            type: 'pie',
            radius: ['48%', '55%'],
            center: ['50%', '50%'],
            data: [{
              hoverOffset: 1,
              value: 100,
              name: '',
              itemStyle: {
                color: '#F16439',
              },
              label: {
                show: false
              },
              labelLine: {
                normal: {
                  smooth: true,
                  lineStyle: {
                    width: 0
                  }
                }
              },
              hoverAnimation: false,
            },
              {
                label: {
                  show: false
                },
                labelLine: {
                  normal: {
                    smooth: true,
                    lineStyle: {
                      width: 0
                    }
                  }
                },
                value: 100 - 64,
                hoverAnimation: false,
                itemStyle: {
                  color: '#3c3a48',
                },
              }
            ]
          },
          {
            type: 'pie',
            name: '饼状背景',
            radius: ['0%', '43%'],
            center: ['50%', '50%'],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                  offset: 0,
                  color: '#07275B'
                }, {
                  offset: 1,
                  color: '#06326E'
                }]),
              }
            },
            tooltip: {
              show: false,
            },
            label: {
              show: false
            },
            data: [50]
          },
        ]
      };
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
  height: calc(100% - 10px);
}
</style>
