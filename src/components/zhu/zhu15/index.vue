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
      xdata: [],
      ydata: []
    }
  },
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts)
      var option = {
        "grid": {
          "top": '20%',
          "bottom": '20%',
          "right": '2%',
          "left": '10%',
          containLabel: true,
        },
        "tooltip": {},
        "xAxis": {
          "data": ["产值", "主营业收入", "工业增加值"],
          "axisTick": {
            "show": true,
            color: 'rgba(41, 86, 144, 1.00)'
          },
          "axisLine": {
            "show": true,
            lineStyle: {
              color: 'rgba(58, 103, 167, 1)'
            }
          },
          "axisLabel": {
            "show": true,
            color: 'rgba(187, 209, 238, 1)'
          }
        },
        "yAxis": {
          "splitLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          },
          "axisLine": {
            "show": true,
            lineStyle: {
              color: 'rgba(58, 103, 167, 1)'
            }
          },
          "axisLabel": {
            "show": true,
            color: 'rgba(187, 209, 238, 1)'
          }
        },
        "series": [
          {
            "name": "",
            "type": "pictorialBar",
            "symbolSize": [30, 10],
            "symbolOffset": [0, -5],
            "z": 12,
            "data": [{
              "name": "产值",
              "value": "100",
              "trueVal": "98",
              "symbolPosition": "end",
              "itemStyle": {
                "normal": {
                  "color": "rgba(4, 140, 173, 1.00)"  //圆柱顶部颜色

                }
              }
            }, {
              "name": "主营业收入",
              "value": "100",
              "trueVal": "100",
              "symbolPosition": "end",
              "itemStyle": {
                "normal": {
                  "color": "rgba(173, 176, 12, 1.00)" //圆柱顶部颜色
                }
              }
            }, {
              "name": "工业增加值",
              "value": "100",
              "trueVal": "90",
              "symbolPosition": "end",
              "itemStyle": {
                "normal": {
                  "color": "rgba(10, 140, 107, 1.00)" //圆柱顶部颜色
                }
              }
            }]
          },
          {
            "type": "bar",
            "silent": true,
            "barWidth": 30,
            "barGap": "-100%",
            "data": [{
              "name": "产值",
              "value": "100",
              "trueVal": "98",
              "label": {
                "normal": {
                  "show": true,
                  "position": "top",
                  "distance": 0,
                  "textStyle": {
                    "color": "rgba(3, 217, 252, 1)", //柱子对应数值颜色
                    "fontSize": 20
                  }
                }
              },
              "itemStyle": {
                "normal": {
                  "color": {
                    "x": 0,
                    "y": 0,
                    "x2": 0,
                    "y2": 1,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                      "offset": 0,
                      "color": "rgba(3, 215, 252, 1.00)"
                    }, {
                      "offset": 1,
                      "color": "rgba(14, 114, 233, 1.00)" //底部渐变颜色
                    }]
                  }
                }
              }
            }, {
              "name": "主营业收入",
              "value": "100",
              "trueVal": "100",
              "label": {
                "normal": {
                  "show": true,
                  "position": "top",
                  "distance": 0,
                  "textStyle": {
                    "color": "rgba(238, 244, 68, 1.00)", //柱子对应数值颜色
                    "fontSize": 20
                  }
                }
              },
              "itemStyle": {
                "normal": {
                  "color": {
                    "x": 0,
                    "y": 0,
                    "x2": 0,
                    "y2": 1,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                      "offset": 0,
                      "color": "rgba(242, 246, 68, 1.00)"
                    }, {
                      "offset": 1,
                      "color": "rgba(222, 161, 68, 1.00)" //底部渐变颜色
                    }]
                  }
                }
              }
            }, {
              "name": "工业增加值",
              "value": "100",
              "trueVal": "90",
              "label": {
                "normal": {
                  "show": true,
                  "position": "top",
                  "distance": 0,
                  "textStyle": {
                    "color": "rgba(21, 225, 175, 1.00)", //柱子对应数值颜色
                    "fontSize": 20
                  }
                }
              },
              "itemStyle": {
                "normal": {
                  "color": {
                    "x": 0,
                    "y": 0,
                    "x2": 0,
                    "y2": 1,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                      "offset": 0,
                      "color": "rgba(21, 232, 178, 1.00)"
                    }, {
                      "offset": 1,
                      "color": "rgba(6, 148, 146, 1.00)" //底部渐变颜色
                    }]
                  }
                }
              }
            }]
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
  height: 100%;
}
</style>
