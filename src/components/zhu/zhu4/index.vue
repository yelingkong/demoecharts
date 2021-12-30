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
      active: false
    }
  },
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this;
      // 基于准备好的dom，初始化echarts实例
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts)
      var option = {
        grid: {
          left: '5%',
          right: '30',
          top: '15%',
          bottom: '30',
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          formatter: function (params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              i === 2 ? relVal += '<br/>' + params[i].marker + params[i].seriesName + params[i].value + "%" : relVal += '<br/>' + params[i].marker + params[i].seriesName + params[i].value;
            }
            return relVal;
          }
        },

        "dataZoom": [
          {
            "show": true,
            "height": 12,
            "xAxisIndex": [
              0
            ],
            bottom: '20',
            "start": 10,
            "end": 90,
            handleStyle: {
              color: "#d3dee5",

            },
            textStyle: {
              color: "#fff"
            },
            borderColor: "#90979c"
          }],
        legend: {
          show: true,
          right: 'center',
          top: '0',
          textStyle: {
            color: 'rgba(255, 255, 255, 1)'
          },
        },
        xAxis: {
          data: ['沙河', '平乡', '宁晋', '巨鹿', '广宗', '内丘', '新河', '南宫', '内丘', '魏县'],
          axisLine: {
            lineStyle: {
              color: '#3d5269'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#fff',
            fontSize: 12,
          }
        },
        yAxis: [
          {
            name: '单位(个)',
            nameTextStyle: {
              color: '#fff',
              padding: [0, 0, 0, -20],
              fontSize: 12
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#3F4471'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#fff',
              fontSize: 12
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#2d3d53'
              }
            },
            yAxisIndex: 0
          },
          {
            // name: '单位(个)',
            // nameTextStyle: {
            //     color: '#fff',
            //     padding: [0, 0, 0, -20],
            //     fontSize: 12
            // },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#3F4471'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#fff',
              fontSize: 12,
              formatter: '{value}%',
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#2d3d53'
              }
            },
            yAxisIndex: 1
          },
        ],
        series: [
          {
            name: '煤改电用户总量电量',
            type: 'bar',
            barWidth: 17,
            zlevel: 2,
            itemStyle: {
              normal: {
                color: function (params) {
                  var list = [
                    '#EC4848',
                    '#EC4848',
                    '#EC4848',
                    '#EC4848',
                    '#EC4848',
                    '#EC4848',
                    '#EC4848',
                    '#EC4848',
                    '#EC4848',
                    '#EC4848',
                  ]
                  return new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: list[params.dataIndex]
                  }, {
                    offset: 1,
                    color: list[params.dataIndex]
                  }], false)
                }
              }
            },
            label: {
              normal: {
                show: true,
                fontSize: 14,
                fontWeight: "bold",
                color: "#ffffff",
                position: "top",
              },

            },
            data: [50, 111, 54, 154, 54, 57, 50, 41, 71, 71]
          },
          {
            name: '煤改电用户总量电量',
            type: 'bar',
            barWidth: 17,
            zlevel: 2,
            itemStyle: {
              normal: {
                color: function (params) {
                  var list = [
                    '#E19701',
                    '#E19701',
                    '#E19701',
                    '#E19701',
                    '#E19701',
                    '#E19701',
                    '#E19701',
                    '#E19701',
                    '#E19701',
                    '#E19701',
                  ]
                  return new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: list[params.dataIndex]
                  }, {
                    offset: 1,
                    color: list[params.dataIndex]
                  }], false)
                }
              }
            },
            label: {
              normal: {
                show: true,
                fontSize: 14,
                fontWeight: "bold",
                color: "#ffffff",
                position: "top",
              }
            },
            data: [50, 111, 54, 154, 54, 57, 50, 41, 71, 71]
          },
          {
            name: '增量占比用户',
            type: 'line',
            smooth: false, //是否平滑
            showAllSymbol: true,
            symbol: 'circle',
            yAxisIndex: 1,
            symbolSize: 3,
            lineStyle: {
              normal: {
                color: 'rgba(227, 249, 113, 1)',
              },
            },
            zlevel: 10,
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: 'rgba(227, 249, 113, 1)',
              },
              formatter: '{@score}%'
            },
            itemStyle: {
              color: 'rgba(227, 249, 113, 1)',
              borderColor: '#fff',
              borderWidth: 1,
            },
            data: [50, 10, 50, 70, 54, 57, 50, 41, 71, 71]
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
