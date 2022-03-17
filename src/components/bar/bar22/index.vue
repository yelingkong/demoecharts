<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>

import { FontChart } from '@/utils/utils'
import $ from 'jquery'

export default {
  name: 'echarts1',
  components: {},
  data () {
    return {}
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts1)
      var legends = ['志愿者团队1', '志愿者团队2', '志愿者团队3', '志愿者团队4', '志愿者团队5']
      var whei = $(window).width()
      var colors1 = new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: 'rgba(103, 224, 130, 1)' // 0% 处的颜色
      },
        {
          offset: 1,
          color: 'rgba(103, 224, 130, 1)' // 100% 处的颜色
        }
      ])
      var colors2 = new this.$echarts.graphic.LinearGradient(0, 1, 1, 0, [{
        offset: 0,
        color: 'rgba(115, 230, 191, 1)' // 0% 处的颜色
      },
        {
          offset: 1,
          color: 'rgba(0, 153, 113, 1)' // 100% 处的颜色
        }
      ])
      var colors3 = new this.$echarts.graphic.LinearGradient(0, 1, 1, 0, [{
        offset: 0,
        color: 'rgba(93, 145, 250, 1)' // 0% 处的颜色
      },
        {
          offset: 1,
          color: 'rgba(122, 92, 250, 1)' // 100% 处的颜色
        }
      ])
      var colors4 = new this.$echarts.graphic.LinearGradient(0, 1, 1, 0, [{
        offset: 0,
        color: 'rgba(75, 122, 250, 1)' // 0% 处的颜色
      },
        {
          offset: 1,
          color: 'rgba(49, 197, 222, 1)' // 100% 处的颜色
        }
      ])
      var colors5 = new this.$echarts.graphic.LinearGradient(0, 1, 1, 0, [{
        offset: 0,
        color: 'rgba(48, 209, 173, 1)' // 0% 处的颜色
      },
        {
          offset: 1,
          color: 'rgba(19, 161, 230, 1)' // 100% 处的颜色
        }
      ])
      var colors = [colors1, colors2, colors3, colors4, colors5]
      var data =
        [
          {
            name: '志愿者团队1',
            value: 40
          },
          {
            name: '志愿者团队2',
            value: 30
          },
          {
            name: '志愿者团队3',
            value: 45
          },
          {
            name: '志愿者团队4',
            value: 47
          },
          {
            name: '志愿者团队5',
            value: 38
          }
        ]
      var option = {
        color: colors,
        legend: {
          show: false,
          orient: 'horizontal',
          bottom: FontChart(30),
          right: 'center',
          itemGap: FontChart(20),
          itemWidth: FontChart(20),
          itemHeight: FontChart(14),
          width: '100%',
          textStyle: {
            color: '#fff',
            fontSize: FontChart(14)
          },
          data: legends
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} {b} : {c} ({d}%)'
        },
        series: [
          {
            name: '隐患评估',
            type: 'pie',
            radius: ['32%', '65%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            label: {
              show: true,
              normal: {
                position: 'outside',
                fontSize: FontChart(14),
                color: '#92B2D7',
                formatter: (params) => {
                  return params.name + ' : ' + params.value
                }
              }
            },
            labelLine: {
              length: 1,
              length2: FontChart(20)
            },
            data: data
          },
          {
            type: 'pie',
            name: '饼状背景',
            radius: ['0%', '20%'],
            center: ['50%', '50%'],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                  offset: 0,
                  color: '#0F2F4B'
                }, {
                  offset: 1,
                  color: '#0F2F4B'
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
</style>
