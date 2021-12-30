<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

import {ArrayMax, FontChart} from "@/utils/utils";
import types from '../../data/type.json'

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
      ...types
    }
  },
  computed: {
    total1: function () {
      var list = this.list
      var list2 = this.total1list
      var total = 0
      list2.forEach((type1) => {
        list.forEach((type) => {
          if (type1 == type.alarmDescId) {
            total = total + Number(type.num)
          }
        });
      });
      return total
    },
    total2: function () {
      var list = this.list
      var list2 = this.total2list
      var total = 0
      list2.forEach((type1) => {
        list.forEach((type) => {
          if (type1 == type.alarmDescId) {
            total = total + Number(type.num)
          }
        });
      });
      return total
    },
    total3: function () {
      var list = this.list
      var list2 = this.total3list
      var total = 0
      list2.forEach((type1) => {
        list.forEach((type) => {
          if (type1 == type.alarmDescId) {
            total = total + Number(type.num)
          }
        });
      });
      return total
    },
    total4: function () {
      var list = this.list
      var list2 = this.total4list
      var total = 0
      list2.forEach((type1) => {
        list.forEach((type) => {
          if (type1 == type.alarmDescId) {
            total = total + Number(type.num)
          }
        });
      });
      return total
    },
  },
  watch: {
    total1() {
      this.getdatax()
    },
    total2() {
      this.getdatax()
    },
    total3() {
      this.getdatax()
    },
    total4() {
      this.getdatax()
    },
  },
  mounted() {
    // this.drawLine()
  },
  methods: {
    getdatax() {
      var newlist = [this.total1, this.total2, this.total3, this.total4]
      var max = ArrayMax(newlist)
      this.drawLine(max)
    },
    drawLine(max) {
      var that = this
      var indicator = [
        {name: '案防', max: max},
        {name: '运营', max: max},
        {name: '安防', max: max},
        {name: '营销', max: max},
      ]
      var dataValue = [this.total1, this.total2, this.total3, this.total4]
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts)

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
