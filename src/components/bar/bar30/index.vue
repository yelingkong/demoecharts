<template>
  <div class="echarts">
    <div class="echarts1" ref="echarts1">
    </div>
  </div>
</template>

<script>
export default {
  name: 'echarts1',
  components: {},
  data() {
    return {}
  },
  mounted() {
    this.drawLine()
  },
  computed: {
    colorList: function () {
      var list = ['#f9ac0c', '#4e9ac1', '#2bd1b1']
      var colorList = []
      list.forEach((type) => {
        var color = new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: type.start
        },
          {
            offset: 1,
            color: type.end
          }
        ])
        colorList.push(color)
      });
      return list
    }
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts1)
      var colors = this.colorList
      var data =
        [
          {
            name: '用户专线',
            value: 40
          },
          {
            name: '农用网络',
            value: 30
          },
          {
            name: '域网线路',
            value: 45
          }
        ]
      var option = {
        color: colors,
        title: {
          top: 'center',
          z: 11,
          x: 'center',
          text: '跳闸分析',
          textStyle: {
            fontSize: 14,
            color: 'rgba(51, 51, 51, 1)',
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} {b} : {c} ({d}%)'
        },
        series: [
          {
            name: '一跳闸，一分析',
            type: 'pie',
            radius: ['45%', '80%'],
            center: ['50%', '50%'],
            itemStyle: {
              normal: {
                borderColor: '#fbfcfd',
                borderWidth: 3
              }
            },
            label: {
              show: false,
              normal: {
                show: false,
                position: 'outside',
                fontSize: 14,
                color: '#333',
                formatter: (params) => {
                  return params.name
                }
              }
            },
            labelLine: {
              length: 10,
              length2: 30
            },
            data: data
          },
          { //内圆
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            z: 10,
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0.1)',
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              },
            },
            hoverAnimation: false,
            label: {
              show: false,
            },
            tooltip: {
              show: false
            },
            data: [100],
          },
          { //内圆
            type: 'pie',
            radius: '45%',
            center: ['50%', '50%'],
            z: 10,
            itemStyle: {
              normal: {
                color: '#f8f9fa',
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              },
            },
            hoverAnimation: false,
            label: {
              show: false,
            },
            tooltip: {
              show: false
            },
            data: [100],
          },
          { //内圆
            type: 'pie',
            radius: '35%',
            center: ['50%', '50%'],
            z: 10,
            itemStyle: {
              normal: {
                color: '#ffffff',
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              },
            },
            hoverAnimation: false,
            label: {
              show: false,
            },
            tooltip: {
              show: false
            },
            data: [100],
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
  width: calc(100% - 0px);
  height: calc(100% - 0px);
}

.echarts {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  width: 100%;
  position: relative;
  height: calc(100% - 0px);

  .img {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    width: 100%;
    height: 100%;
  }
}
</style>
