<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: 'echarts1',
  components: {},
  data() {
    return {
      list: []
    }
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
      let myChart = echarts.init(this.$refs.echarts)
      var dataArr = 400
      var max = 1200
      let center = ["50%", "50%"];
      var option = {
        title: [
          {
            text: '{val|' + dataArr + '}\n{name|' + '人' + '}',
            bottom: '35%',
            left: 'center',
            zlevel: 100,
            textStyle: {
              rich: {
                val: {
                  fontSize: 18,
                  color: '#E5E5E5',
                  fontFamily: 'DIN-Bold',
                  padding: [2, 0],
                },
                name: {
                  fontSize: 12,
                  color: '#fff',
                },
              },
            },
            triggerEvent: true,
          },
          {
            text: '{name|' + '当前消费总数' + '}',
            bottom: '14%',
            left: 'center',
            zlevel: 100,
            textStyle: {
              rich: {
                val: {
                  fontSize: 18,
                  color: '#E5E5E5',
                  fontFamily: 'HYYakuHei',
                  padding: [5, 0]
                },
                name: {
                  fontSize: 12,
                  color: '#fff',
                },
              },
            },
            triggerEvent: true,
          },
        ],
        series: [
          // 最外层刻度
          {
            name: '刻度尺',
            type: 'gauge',
            radius: '100%',
            splitNumber: 6, // 刻度数量
            min: 0, // 最小刻度
            max: 1200,
            // 仪表盘轴线相关配置
            axisLine: {
              lineStyle: {
                color: [
                  [
                    5,
                    {
                      type: 'radial',
                      x: 0.5,
                      y: 0.6,
                      r: 0.6,
                      colorStops: [
                        {
                          offset: 0.85,
                          color: 'rgba(50, 226, 247, 0)', // 0% 处的颜色
                        },
                        {
                          offset: 0.90,
                          color: 'rgba(24, 124, 165, 0.1)', // 100% 处的颜色
                        },
                        {
                          offset: 1,
                          color: 'rgba(24, 124, 165, 1.00)', // 100% 处的颜色
                        },
                      ],
                    },
                  ],
                ],
                width: 300,
              },
            },
            /** 分隔线样式*/
            splitLine: {
              show: true,
              length: 9,
              lineStyle: {
                width: 1,
                color: '#fff', // 用颜色渐变函数不起作用
              },
            },
            /** 刻度线*/
            axisTick: {
              show: true,
              splitNumber: 2,
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)', // 用颜色渐变函数不起作用
                width: 1,
              },
              length: 5,
            },
            /** 刻度标签*/
            axisLabel: {
              distance: 2,
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 12,
              fontFamily: 'DIN-Bold'
            },
            detail: {
              show: false,
            },
            animationDuration: 4000,
          },
          // 中间层
          {
            name: '第二次弧形向外渐变',
            type: 'gauge',
            radius: '55%',
            splitNumber: 0, // 刻度数量
            min: 0, // 最小刻度
            max: 1200,
            // 仪表盘轴线相关配置
            axisLine: {
              lineStyle: {
                color: [
                  [
                    3,
                    {
                      type: 'radial',
                      x: 0.5,
                      y: 0.6,
                      r: 0.6,
                      colorStops: [
                        {
                          offset: 0.84,
                          color: 'rgba(50, 226, 247, 0)', // 0% 处的颜色
                        }, {
                          offset: 0.85,
                          color: 'rgba(29, 129, 172, 1.00)', // 0% 处的颜色
                        },
                        {
                          offset: 0.99,
                          color: 'rgba(24, 124, 165, 0.1)', // 100% 处的颜色
                        },
                        {
                          offset: 1,
                          color: 'rgba(50, 226, 247, 0)', // 100% 处的颜色
                        },
                      ],
                    },
                  ],
                ],
                width: 300,
              },
            },
            /** 分隔线样式*/
            splitLine: {
              show: false,
              length: 9,
              lineStyle: {
                width: 1,
                color: '#fff', // 用颜色渐变函数不起作用
              },
            },
            /** 刻度线*/
            axisTick: {
              show: false,
              splitNumber: 2,
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)', // 用颜色渐变函数不起作用
                width: 1,
              },
              length: 5,
            },
            /** 刻度标签*/
            axisLabel: {
              distance: 2,
              show: false,
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 12,
              fontFamily: 'DIN-Bold'
            },
            detail: {
              show: false,
            },
            animationDuration: 4000,
          },
          // 内圆
          {
            type: 'pie',
            radius: ['0', '38%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            z: 3,
            data: [
              {
                value: 100,
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: 'rgba(11, 46, 123, 1.00)',
                      },
                      {
                        offset: 1,
                        color: 'rgba(6, 97, 191, 1.00)',
                      },
                    ]),
                    opacity: 1,
                  },
                },
                label: {
                  show: false,
                },
              },
            ],
            labelLine: {
              show: false,
            },
          },
          // 遮蔽指针
          {
            type: 'pie',
            radius: ['0', '30%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            zlevel: 8,
            data: [
              {
                value: 100,
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: 'rgba(11, 46, 123, 1.00)',
                      },
                      {
                        offset: 1,
                        color: 'rgba(6, 97, 191, 1.00)',
                      },
                    ]),
                    opacity: 1,
                  },
                },
                label: {
                  show: false,
                },
              },
            ],
            labelLine: {
              show: false,
            },
          },
          // 指针
          {
            name: "指针",
            type: "gauge",
            zlevel: 5,
            radius: "70%",
            startAngle: 225,
            endAngle: -45,
            center: center, //整体的位置设置
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            min: 0,
            max: 1200,
            pointer: {
              show: true,
              width: 3,
              length: "80%",
              offsetCenter: [0, 0],
            },
            itemStyle: {
              normal: {
                color: '#fff'
              }
            },
            detail: {
              show: false,

            },
            data: [dataArr]
          },

          {
            name: '渐变进度',
            type: 'gauge',
            radius: '100%',
            splitNumber: 0,
            startAngle: 225,
            endAngle: -45,
            zlevel: 9,
            axisLine: {
              lineStyle: {
                color: [
                  [
                    dataArr / max,
                    {
                      type: 'linear',
                      x: 0,
                      y: 1,
                      x2: 0,
                      y2: 0,
                      colorStops: [
                        {
                          offset: 0,
                          color: 'rgba(60,207,223,0)', // 0% 处的颜色
                        },
                        {
                          offset: 0.9,
                          color: 'rgba(50, 226, 247, 0.8)', // 100% 处的颜色
                        },
                        {
                          offset: 1,
                          color: 'rgba(50, 226, 247, 1)', // 100% 处的颜色
                        },
                      ],
                    },
                  ],
                ],
                width: 38,
              },
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
            },
            title: {
              // 标题
              show: false,
            },
            data: [],
            pointer: {
              show: false,
            },
            animationDuration: 4000,
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
  width: calc(100% - 20px);
  margin: auto;
  height: calc(100% - 40px);
}
</style>

