<template>
  <div class="echarts">
    <div class="echarts1" ref="echarts1">
    </div>
    <div class="img">
      <img src="./icon_ta.png" alt="">
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
        tooltip: {
          trigger: 'item',
          formatter: '{a} {b} : {c} ({d}%)'
        },
        series: [
          {
            name: '配电网规模',
            type: 'pie',
            radius: ['55%', '65%'],
            center: ['50%', '50%'],
            label: {
              show: true,
              normal: {
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
          {
            type: 'pie',
            name: '饼状背景',
            radius: ['0%', '40%'],
            center: ['50%', '50%'],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.RadialGradient(.5, .5, 0.5, [{
                  offset: 0,
                  color: '#ffffff'
                },
                  {
                    offset: 0.5,
                    color: '#ffffff'
                  }, {
                    offset: 0.9,
                    color: '#eff4f7'
                  },
                  {
                    offset: 1,
                    color: '#f0f5f7'
                  }
                ], false),
              }
            },
            tooltip: {
              show: false,
            },
            data: [50]
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
  height: calc(100% - 40px);
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
