<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>

import { FontChart } from '@/utils/utils'
import $ from 'jquery'
import * as echarts from "echarts"
export default {
  name: 'echarts1',
  components: {},
  data () {
    return {}
  },
  mounted () {
    this.drawLine()
  },
  computed: {
    colorList: function () {
      var list = [{
        start: 'rgba(225, 183, 67, 1.00)',
        end: 'rgba(169, 157, 118, 1.00)'
      }, {
        start: 'rgba(55, 137, 238, 1.00)',
        end: 'rgba(114, 140, 173, 1.00)'
      }, {
        start: 'rgba(59, 233, 113, 1.00)',
        end: 'rgba(114, 170, 136, 1.00)'
      }, {
        start: 'rgba(57, 236, 233, 1.00)',
        end: 'rgba(117, 167, 168, 1.00)'
      }, {
        start: 'rgba(57, 236, 233, 1.00)',
        end: 'rgba(117, 167, 168, 1.00)'
      }]
      var colorList = []
      list.forEach((type) => {
        var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
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
      return colorList
    }
  },
  methods: {
    drawLine () {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts1)
      var colors = this.colorList
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
                color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
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
