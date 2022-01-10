<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>
import map from './map.json'

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
      ydata: [],
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
      var myChart = this.$echarts.init(this.$refs.echarts)
      this.$echarts.registerMap('tjbh', map)
      var option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'click',
          showDelay: 0, //浮层显示的延迟
          transitionDuration: 0.1, // 提示框浮层的移动动画过渡时间
          enterable: true,
          formatter: function (params) {
            console.log(params)
            if (params.data) {
              let info = params.data.info || {};
              return info
            } else {
              return
            }
          },
        },
        //地理坐标
        geo: {
          map: 'tjbh',
          type: "map",
          aspectScale: 0.75, //长宽比
          zoom: 1.1,
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#013C62',
              shadowColor: 'rgba(10, 31, 167, 1.00)',
              shadowOffsetX: 10,
              shadowOffsetY: 10,
            },
            emphasis: {
              areaColor: '#2AB8FF',
              borderWidth: 0,
              color: 'green',
              label: {
                show: false
              }
            }
          }
        },
        series: [{
          map: 'tjbh', //使用
          type: 'map',
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {
              textStyle: {
                color: '#fff'
              }
            }
          },

          itemStyle: {
            normal: {
              borderColor: 'rgba(14, 34, 150, 1.00)',
              borderWidth: 1,
              areaColor: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0, color: 'rgba(0, 214, 246, 1.00)' // 0% 处的颜色
                }, {
                  offset: 0.5, color: 'rgba(0, 214, 246, 1.00)' // 100% 处的颜色
                }, {
                  offset: 1, color: 'rgba(3, 138, 252, 1.00)' // 100% 处的颜色
                }]
              )
            },
            emphasis: {
              areaColor: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0, color: 'rgba(141, 59, 238, 1.00)' // 0% 处的颜色
                }, {
                  offset: 0.5, color: 'rgba(117, 84, 240, 1.00)' // 100% 处的颜色
                }, {
                  offset: 1, color: 'rgba(115, 86, 241, 1.00)' // 100% 处的颜色
                }]
              ),
              borderWidth: 0,
              color: 'green'
            }
          },
          zoom: 1.2,
          roam: true,

        },
          //标记 图形 原点 scatter点 effectScatter涟漪特效
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 5,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              emphasis: {
                show: true
              }
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: '#fff'
              }
            },
            zlevel: 1,
          },
        ]
      };
      myChart.resize()
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts1 {
  position: relative;
  width: 100%;
  color: #000;
  height: calc(100% - 80px);
  z-index: 1;
}
</style>
