<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

import {FontChart} from "../../../utils/utils";
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
    return {}
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      var indicator = [
        {name: '增值税额', max: 3183},
        {name: '盈利率', max: 3183},
        {name: '企业所得税利润', max: 3183},
        {name: '企业所得税营收', max: 3183},
        {name: '合同额', max: 3183},
      ]
      var dataValue = [800, 1583, 318, 1000, 1400]
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
          radius: '75%',
          center: ['50%', '50%'],
          startAngle: 90,
          triggerEvent: true,
          name: {
            textStyle: {
              rich: {
                a: {
                  color: '#fff',
                  fontSize: FontChart(14),
                  padding: [0, 0],
                },
                b: {
                  color: '#7BDEFF',
                  fontSize: FontChart(14),
                  padding: [0, 0, 0, 10],
                }
              },
            },
            formatter: (value) => {
              let i = contains(indicator, value); // 处理对应要显示的样式
              return '{a|' + value + '}' + '{b|' + dataValue[i] + '}'
            },
          },
          nameGap: '1',
          indicator: indicator,
          splitArea: {
            areaStyle: {
              color: ['rgba(0,0,0,0)', 'rgba(22, 80, 113, 1.00)', 'rgba(0,0,0,0)', 'rgba(22, 80, 113, 1.00)', 'rgba(0,0,0,0)'],
              shadowColor: 'rgba(9,107,166, 0)',
              shadowBlur: 0,
              shadowOffsetX: 10,
              shadowOffsetY: 10
            }
          },
          axisLine: {lineStyle: {color: 'rgba(9,107,166, 0)'}},
          splitLine: {
            lineStyle: {
              width: 1,
              color: ['rgba(61, 145, 188, 1.00)', 'rgba(61, 145, 188, 1.00)',
                'rgba(61, 145, 188, 1.00)', 'rgba(61, 145, 188, 1.00)', 'rgba(61, 145, 188, 1.00)']
            }
          }
        },
        series: [{
          name: '企业经营情况',
          type: 'radar',
          areaStyle: {color: 'rgba(246, 220, 148, 0.8)'},
          symbol: 'circle',
          symbolSize: 0,
          itemStyle: {color: 'rgba(246, 220, 148, 1.00)', borderColor: 'rgba(246, 220, 148, 0.8)', borderWidth: 20},
          lineStyle: {color: 'rgba(246, 220, 148, 1.00)', width: 2},
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
