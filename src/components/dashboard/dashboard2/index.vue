<template>
  <div class="echarts1">
    <div class="echarts1" ref="echarts1">

    </div>
  </div>
</template>

<script>

export default {
  name: 'echarts1',
  components: {},
  props: {},
  data() {
    return {
      number: 50,
      title: '标题',
    }
  },
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts1)
      var dataArr = 44;
      var colorSet = {
        color: '#42506E'
      };
      var option = {
        series: [
          // 最外层灰色环
          {
            name: "最外部进度条",
            type: "gauge",
            radius: '96%',
            splitNumber: 100,
            z: 10000,
            axisLine: {
              lineStyle: {
                color: [
                  [1, 'rgba(140, 172, 196, 1)']
                ],
                width: 12
              }
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,

            },
            splitLine: {
              show: false,
            },
            itemStyle: {
              show: false,
            },
            detail: {
              show: false
            },
            title: { //标题
              show: false,
            },
            data: [],
            pointer: {
              show: false,
            },
            animationDuration: 4000,
          },
          // 倒数第二层刻度
          {
            name: "最外部进度条",
            type: "gauge",
            radius: '88%',
            splitNumber: 100,
            z: 10,
            axisLine: {
              lineStyle: {
                color: [
                  [0.3, 'rgba(104, 131, 160, 0.5)'],
                  [0.75, 'rgba(104, 131, 160, 0.5)'],
                  [1, "rgba(246, 69, 71, 0.8)"]
                ],
                width: 15
              }
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,

            },
            splitLine: {
              show: false,
            },
            itemStyle: {
              show: false,
            },
            detail: {
              show: false
            },
            title: { //标题
              show: false,
            },
            data: [],
            pointer: {
              show: false,
            },
            animationDuration: 4000,
          },
          {
            name: "最外部进度条",
            type: "gauge",
            radius: '96%',
            splitNumber: 100,
            z: 100,
            axisLine: {
              lineStyle: {
                color: [
                  [0.3, 'rgba(140, 172, 196, 1)'],
                  [0.7, 'rgba(140, 172, 196, 1)'],
                  [1, "red"]
                ],
                width: 12
              }
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,

            },
            splitLine: {
              show: false,
            },
            itemStyle: {
              show: false,
            },
            detail: {
              show: false
            },
            title: { //标题
              show: false,
            },
            data: [],
            pointer: {
              show: false,
            },
            animationDuration: 4000,
          },
          {
            name: '外部刻度',
            type: 'gauge',
            //  center: ['20%', '50%'],
            radius: '87%',
            min: 0, //最小刻度
            max: 8, //最大刻度
            splitNumber: 8, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
              show: false,
              lineStyle: {
                width: 1,
                color: [
                  [1, 'rgba(0,0,0,0)']
                ]
              }
            }, //仪表盘轴线
            axisLabel: {
              show: true,
              color: 'rgba(255,255,255,1)',
              distance: 1,
              textStyle: {
                fontSize: 16
              }
            }, //刻度标签。
            axisTick: {
              show: true,
              splitNumber: 10,
              lineStyle: {
                color: '#444F69', //用颜色渐变函数不起作用
                width: 1,
              },
              length: 8
            }, //刻度样式
            splitLine: {
              show: true,
              length: 15,
              lineStyle: {
                color: '#3C4D7C', //用颜色渐变函数不起作用
              }
            }, //分隔线样式
            detail: {
              show: false
            },
            pointer: {
              show: true
            }
          },
          // 倒数第三层 蓝色进度
          {
            name: "外部进度条",
            type: "gauge",
            radius: '77%',
            splitNumber: 10,
            progress: {
              show: true,
              width: 4,
              itemStyle: {
                color: '#007BFF',
              },
            },
            axisLine: {
              lineStyle: {
                color: [
                  [dataArr / 100, '#192540'],
                  [1, "#192540"]
                ],
                width: 4
              }
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            itemStyle: {
              show: false,
            },
            data: [{
              value: dataArr,
              show: false,
              color: 'rgba(0,0,0,0)',
              detail: {
                show: false
              }
            }],
            pointer: {
              show: false,
              length: '75%',
              radius: '20%',
              width: 10, //指针粗细
            },
            animationDuration: 4000,
          },
          {
            name: "内部进度条",
            type: "gauge",
            radius: '54%',
            z: 4,
            splitNumber: 10,
            axisLine: {
              lineStyle: {
                color: [
                  [dataArr / 100, new this.$echarts.graphic.LinearGradient(
                    0, 1, 0, 0, [{
                      offset: 0,
                      color: 'rgba(0, 123, 255, 0.1)',
                    }, {
                      offset: 0.5,
                      color: 'rgba(0, 123, 255, 0.4)',
                    },
                      {
                        offset: 1,
                        color: 'rgba(0, 123, 255, 0.5)',
                      }
                    ]
                  )],
                  [
                    1, 'rgba(28,128,245,.0)'
                  ]
                ],
                width: 170
              }
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,

            },
            splitLine: {
              show: false,
            },
            itemStyle: {
              show: false,
            },
            detail: {
              show: false,

              formatter: function (value) {
                if (value !== 0) {
                  var num = Math.round(value);
                  return parseInt(num).toFixed(0) + "";
                } else {
                  return 0;
                }
              },
              offsetCenter: [0, 50],
              textStyle: {
                padding: [0, 0, 0, 0],
                fontSize: 30,
                fontWeight: '700',
                color: colorSet.color
              }
            },
            title: { //标题
              show: false,
              offsetCenter: [0, 46], // x, y，单位px
              textStyle: {
                color: "rgba(46, 143, 255, 1)",
                fontSize: 30, //表盘上的标题文字大小
                fontWeight: 700,
                fontFamily: 'PingFangSC'
              }
            },
            data: [{
              name: dataArr,
              value: dataArr,
              show: false,
              center: ['50%', '50%'],
              itemStyle: {
                color: 'rgba(255, 255, 255, 1)',
              }
            }],
            itemStyle: {
              normal: {
                color: 'rgba(255, 255, 255, 1)'
              }
            },
            pointer: {
              show: true,
              length: '80%',
              radius: '20%',
              width: 3, //指针粗细
              z: 1000,
            },
            animationDuration: 4000,
          },
          // 内圆
          {
            "name": '内圆',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": '4%',
            "z": 4,
            "labelLine": {
              "normal": {
                "show": false
              }
            },
            "data": [{
              "value": 0,
            }, {
              "value": 10,

              itemStyle: {
                normal: {
                  color: "#0E1327"
                },
                emphasis: {
                  color: "#0E1327"
                }
              }
            }]
          },
          // 内部仪表盘
          {
            name: '外部刻度',
            type: 'gauge',
            //  center: ['20%', '50%'],
            radius: '60%',
            min: 0, //最小刻度
            max: 300, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
              show: false,
              lineStyle: {
                width: 1,
                color: [
                  [1, 'rgba(0,0,0,0)']
                ]
              }
            }, //仪表盘轴线
            axisLabel: {
              show: true,
              color: 'rgba(255,255,255,1)',
              distance: 10
            }, //刻度标签。
            axisTick: {
              show: true,
              splitNumber: 10,
              lineStyle: {
                color: '#444F69', //用颜色渐变函数不起作用
                width: 1,
              },
              length: 8
            }, //刻度样式
            splitLine: {
              show: true,
              length: 15,
              lineStyle: {
                color: '#3C4D7C', //用颜色渐变函数不起作用
              }
            }, //分隔线样式
            detail: {
              show: false
            },
            pointer: {
              show: true
            }
          },
          // 中心圆
          {
            type: 'pie',
            tooltip: {
              show: false
            },
            z: 2000,
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['0%', '25%'],
            center: ['50%', '50%'],
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{
              value: 120,
              itemStyle: {
                normal: {
                  color: "rgba(16, 25, 45, 0.85)",
                },
              }
            }]
          },
          {
            type: 'pie',
            tooltip: {
              show: false
            },
            z: 200,
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['0%', '15%'],
            center: ['50%', '50%'],
            label: {
              normal: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{
              value: 120,
              itemStyle: {
                normal: {
                  color: "#162038",
                },
              }
            }]
          },
// 内部最小圆圈
          {
            "name": '小圆形',
            "type": 'pie',
            "hoverAnimation": false,
            "legendHoverLink": false,
            "radius": ['0%', '0%'],
            "z": 5,
            "labelLine": {
              "normal": {
                "show": false
              }
            },
            "data": [{
              "value": 0,
            }, {
              "value": 10,
              itemStyle: {
                normal: {
                  color: "rgba(255, 255, 255, 1)",
                },
              }
            }]
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}
</style>
