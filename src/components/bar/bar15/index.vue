<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>

import {FontChart} from "@/utils/utils";
import $ from 'jquery'
import * as echarts from "echarts"
export default {
  name: 'echarts1',
  components: {},
  data() {
    return {}
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this;
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts1)
      var legendName = [
        "0.1-2.3 m/s", "2.3-4.5 m/s", "4.5-6.7 m/s", "6.7-8.9 m/s",
        "8.9-11.0 m/s", "11.0-13.2 m/s", "13.2-15.4 m/s", "15.4-17.6 m/s"];
      var option = {
        tooltip: {
          trigger: 'item',
          textStyle: {
            fontSize: 16,
            color: '#fff',
            fontFamily: 'Microsoft YaHei'
          }
        },
        color: ["#0001F7", "#00B8FE", "#00FFFF", "#00FF68", "#BEFE00", "#FFFF00", "#FFA800", "#E10100"],
        angleAxis: {
          zlevel: 2,
          type: 'category',
          data: [
            {value: 'N'},
            {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''},
            {value: ''},//东北
            {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''},
            {value: 'E'},
            {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''},
            {value: ''},//东南
            {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''},
            {value: 'S'},
            {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''},
            {value: ''},//西南
            {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''},
            {value: 'W'},
            {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''},
            {value: ''},//西北
            {value: ''}, {value: ''}, {value: ''}, {value: ''}, {value: ''},
          ],
          boundaryGap: false,//标签和数据点都会在两个刻度之间的带(band)中间
          axisTick: {
            show: false//是否显示坐标轴刻度
          },
          show: true,
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(161, 234, 252, 0)',
            },
          },
          axisLabel: {
            show: true,
            interval: 5,//坐标轴刻度标签的显示间隔，在类目轴中有效
            color: 'rgba(161, 234, 252, 1)',
          },

        },
        radiusAxis: {
          min: 0,
          max: 100,
          axisLabel: {
            show: false,
            formatter: '{value} %',
            margin: -25,
            textStyle: {
              fontSize: FontChart(12),
              color: 'rgba(161, 234, 252, 1)',
              padding: 5,
              width: 30,
              backgroundColor: 'lightgray',
              borderColor: 'black',
              borderWidth: 1,
              fontFamily: 'Microsoft YaHei'
            },
            rich: {}
          },
          zlevel: 3,
          axisTick: {
            show: false//是否显示坐标轴刻度
          },
          axisLine: {
            show: false,//是否显示坐标轴轴线
            lineStyle: {
              color: 'rgba(161, 234, 252, 0)',
            },
          },
        },
        polar: {},
        series: [
          {
            type: 'pie',
            name: '饼状背景',
            radius: ['0%', '100%'],
            center: ['50%', '50%'],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: new echarts.graphic.RadialGradient(.5, .5, 0.5, [{
                  offset: 0,
                  color: '#154468'
                },
                  {
                    offset: 0.5,
                    color: 'rgba(255,255,255,0.1)'
                  }, {
                    offset: 0.8,
                    color: 'rgba(0, 41, 79, 0.3)'
                  },
                  {
                    offset: 1,
                    color: '#238AA9'
                  }
                ], false),
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
          {
            barCategoryGap: 0,
            type: 'bar',
            zlevel: 1,
            data: [17, 2, 18, 4,
              2, 3, 4, 6,
              1, 6, 3, 4,
              2, 3, 4, 6,
              1, 2, 3, 4,
              2, 3, 4, 6,
              1, 3, 3, 4,
              2, 3, 4, 6,
              2, 7, 4, 5,
              1, 2, 3, 1,
              2, 3, 2, 6,
              1, 2, 3, 1,],
            coordinateSystem: 'polar',
            name: legendName[0],
            stack: 'a',
            itemStyle: {
              borderColor: 'black',
              borderWidth: 0,
            }
          },
          {
            barCategoryGap: 0,
            type: 'bar',
            data: [7, 12, 13, 2,
              2, 3, 4, 6,
              1, 2, 3, 2,
              2, 3, 4, 6,
              1, 2, 3, 5,
              2, 3, 4, 6,
              1, 2, 3, 4,
              2, 3, 4, 1,
              2, 3, 4, 1,
              1, 2, 2, 4,
              2, 3, 5, 1,
              1, 2, 3, 1,],
            coordinateSystem: 'polar',
            name: legendName[1],
            stack: 'a',
            itemStyle: {
              borderColor: 'black',
              borderWidth: 0,
            }
          },
          {
            barCategoryGap: 0,
            type: 'bar',

            data: [10, 12, 13, 4,
              2, 13, 14, 26,
              11, 12, 23, 34,
              12, 33, 34, 32,
              11, 22, 23, 24,
              2, 23, 24, 6,
              21, 2, 3, 4,
              2, 3, 4, 6,
              12, 13, 4, 6,
              11, 32, 32, 14,
              12, 33, 24, 41,
              1, 2, 3, 1,],
            coordinateSystem: 'polar',
            name: legendName[2],
            stack: 'a',
            itemStyle: {
              borderWidth: 0,
              borderColor: 'black',
            }
          },
          {
            barCategoryGap: 0,
            type: 'bar',

            data: [10, 2, 13, 2,
              2, 3, 4, 6,
              1, 2, 3, 2,
              2, 3, 4, 6,
              1, 2, 3, 5,
              2, 3, 4, 6,
              1, 2, 3, 4,
              2, 3, 4, 1,
              2, 3, 4, 1,
              1, 2, 2, 4,
              1, 2, 3, 1,
              2, 3, 5, 1,],
            coordinateSystem: 'polar',
            name: legendName[3],
            stack: 'a',
            itemStyle: {
              borderWidth: 0,
              borderColor: 'black',
            }
          },
          {
            barCategoryGap: 0,
            type: 'bar',

            data: [10, 2, 13, 4,
              2, 3, 4, 6,
              1, 2, 3, 4,
              1, 2, 3, 1,
              2, 3, 4, 2,
              1, 2, 3, 4,
              2, 3, 4, 6,
              1, 2, 3, 4,
              2, 3, 4, 6,
              2, 3, 4, 6,
              1, 2, 3, 4,
              2, 3, 4, 1,],
            coordinateSystem: 'polar',
            name: legendName[4],
            stack: 'a',
            itemStyle: {
              borderWidth: 0,
              borderColor: 'black',

            }
          },
          {
            barCategoryGap: 0,
            type: 'bar',

            data: [10, 2, 13, 2,
              2, 3, 4, 6,
              1, 2, 3, 2,
              1, 2, 3, 1,
              2, 3, 4, 6,
              1, 2, 3, 5,
              2, 3, 4, 6,
              1, 2, 3, 4,
              2, 3, 4, 1,
              2, 3, 4, 1,
              1, 2, 2, 4,
              2, 3, 5, 1,],
            coordinateSystem: 'polar',
            name: legendName[5],
            stack: 'a',
            itemStyle: {
              borderWidth: 0,
              borderColor: 'black',

            }
          },
          {
            barCategoryGap: 0,
            type: 'bar',
            data: [10, 2, 13, 4,
              2, 3, 4, 6,
              1, 2, 3, 4,
              2, 3, 4, 2,
              1, 2, 3, 4,
              2, 3, 4, 6,
              1, 2, 3, 4,
              1, 2, 3, 1,
              2, 3, 4, 6,
              2, 3, 4, 6,
              1, 2, 3, 4,
              2, 3, 4, 1,],
            coordinateSystem: 'polar',
            name: legendName[6],
            stack: 'a',
            itemStyle: {
              borderWidth: 0,
              borderColor: 'black',

            }
          },
          {
            barCategoryGap: 0,
            type: 'bar',

            data: [0, 0, 0, 0,
              0, 0, 0, 0,
              0, 0, 0, 0,
              0, 0, 0, 0,
              0, 0, 0, 0,
              1, 2, 3, 1,
              0, 0, 0, 0,
              1, 2, 3, 4,
              2, 3, 4, 1,
              0, 0, 0, 0,
              1, 2, 2, 4,
              2, 3, 2, 1,],
            coordinateSystem: 'polar',
            name: legendName[7],
            stack: 'a',
            itemStyle: {
              borderColor: 'black',
              borderWidth: 0,
            }
          }],
        legend: {
          show: false,
          data: legendName,
          width: 500,//根据宽度调整换行
        }
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
  height: calc(100% - 10px);
}
</style>
