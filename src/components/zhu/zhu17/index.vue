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
      // 基于准备好的dom，初始化echarts实例
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts)
      const CubeLeft = this.$echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0
        },
        buildPath: function (ctx, shape) {
          const xAxisPoint = shape.xAxisPoint
          const c0 = [shape.x, shape.y]
          const c1 = [shape.x - 4.5, shape.y - 4.5]
          const c2 = [xAxisPoint[0] - 4.5, xAxisPoint[1] - 4.5]
          const c3 = [xAxisPoint[0], xAxisPoint[1]]
          ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
        }
      })
      const CubeRight = this.$echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0
        },
        buildPath: function (ctx, shape) {
          const xAxisPoint = shape.xAxisPoint
          const c1 = [shape.x, shape.y]
          const c2 = [xAxisPoint[0], xAxisPoint[1]]
          const c3 = [xAxisPoint[0] + 9, xAxisPoint[1] - 4.5]
          const c4 = [shape.x + 9, shape.y - 4.5]
          ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
        }
      })
      const CubeTop = this.$echarts.graphic.extendShape({
        shape: {
          x: 0,
          y: 0
        },
        buildPath: function (ctx, shape) {
          const c1 = [shape.x, shape.y]
          const c2 = [shape.x + 9, shape.y - 4.5]
          const c3 = [shape.x + 4.5, shape.y - 9]
          const c4 = [shape.x - 4.5, shape.y - 4.5]
          ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
        }
      })
      this.$echarts.graphic.registerShape('CubeLeft', CubeLeft)
      this.$echarts.graphic.registerShape('CubeRight', CubeRight)
      this.$echarts.graphic.registerShape('CubeTop', CubeTop)
      const VALUE = [2012, 1230, 3790, 2349, 1654, 1230, 3790]
      var option = {
        grid: {
          left: 20,
          right: 20,
          bottom: '5%',
          top: 20,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['住宅', '写字楼', '学校', '医院', '政府', '商超', '其他'],
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(0, 164, 255, 0.2)',
              fontSize: '12px'
            }
          },
          offset: 0,
          axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
              color: '#7DFFFD'
            }
          },
          axisLabel: {
            fontSize: 12,
            color: 'rgba(152, 191, 251, 1)'
          },
          splitLine: {
            show: false,
            lineStyle: {color: 'red'}
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false,
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(0, 164, 255, 0.2)',
              fontSize: '12px'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 13,
            color: 'rgba(152, 191, 251, 1)'
          },
        },
        series: [{
          type: 'custom',
          renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)])
            return {
              type: 'group',
              children: [{
                type: 'CubeLeft',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#3B80E2'
                  },
                    {
                      offset: 1,
                      color: '#49BEE5'
                    }
                  ])
                }
              }, {
                type: 'CubeRight',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#3B80E2'
                  },
                    {
                      offset: 1,
                      color: '#49BEE5'
                    }
                  ])
                }
              }, {
                type: 'CubeTop',
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0])
                },
                style: {
                  fill: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#3B80E2'
                  },
                    {
                      offset: 1,
                      color: '#49BEE5'
                    }
                  ])
                }
              }]
            }
          },
          data: VALUE
        }, {
          type: 'bar',
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: (e) => {
                switch (e.name) {
                  case '10kV线路':
                    return VALUE[0]
                  case '公用配变':
                    return VALUE[1]
                  case '35kV主变':
                    return VALUE[2]
                  case '水':
                }
              },
              fontSize: 12,
              color: 'rgba(0, 164, 255, 1)',
              offset: [4, -5]
            }
          },
          itemStyle: {
            color: 'transparent'
          },
          data: VALUE
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
