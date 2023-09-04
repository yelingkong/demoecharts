<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

import {FontChart} from "@/utils/utils";
import * as echarts from "echarts"
export default {
  name: 'echarts1',
  components: {},
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      var indicator = [
        {name: '案防', max: 500},
        {name: '运营', max: 500},
        {name: '安防', max: 500},
        {name: '营销', max: 500},
      ]
      var dataValue = [30, 400, 300, 400]
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts)

      function contains(arr, obj) {
        var i = arr.length;
        while (i--) {
          if (arr[i].name === obj) {
            return i;
          }
        }
        return false;
      }

      var option = {
        radar: {
          radius: '55%',
          center: ['50%', '50%'],
          startAngle: 0,
          triggerEvent: true,
          name: {
            textStyle: {
              rich: {
                a: {
                  color: 'rgba(190, 198, 218, 1)',
                  fontSize: FontChart(16),
                  padding: [0, 0],
                  lineHeight: FontChart(20),
                },
                b: {
                  color: 'rgba(255, 255, 255, 1)',
                  fontSize: FontChart(20),
                  padding: [0, 0],
                  lineHeight: FontChart(20),
                }
              },
            },
            formatter: (value) => {
              let i = contains(indicator, value); // 处理对应要显示的样式
              return '{a|' + value + '}\n' + '{b|' + dataValue[i] + '}'
            },
          },
          nameGap: '1',
          indicator: indicator,
          splitArea: {
            areaStyle: {
              color: ['#020D2C', '#000510', '#020D2C', '#000510',].reverse(),
              shadowColor: 'rgba(9,107,166, 0)',
              shadowBlur: 0,
              shadowOffsetX: 10,
              shadowOffsetY: 10
            }
          },
          axisLine: {lineStyle: {color: 'rgba(9,107,166, 0.2)'}},
          splitLine: {
            lineStyle: {
              width: 1,
              color: ['#096ba6', '#096ba6', 'rgba(9,107,166, 0.3)', 'rgba(9,107,166, 0.7)'].reverse()
            }
          }
        },
        series: [{
          name: '本年度发现问题',
          type: 'radar',
          areaStyle: {color: 'rgba(0, 255, 252, 0.3)'},
          symbol: 'circle',
          symbolSize: 0,
          itemStyle: {color: 'rgba(252,226,78,0.8)', borderColor: 'rgba(252,226,78,0.2)', borderWidth: 20},
          lineStyle: {color: 'rgba(0, 255, 252, 1)', width: 2},
          label: {show: false},
          data: [dataValue]
        }
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
  height: calc(100% - 10px);
}
</style>
