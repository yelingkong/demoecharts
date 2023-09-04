<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

import types from '../../../data/type.json'
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
      ...types
    }
  },
  computed: {},
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts)
      var option = {
        tooltip: {
          show: true
        },
        radar: {
          radius: '85%',
          center: ['50%', '55%'],
          // startAngle: 0,
          splitNumber: 5,
          nameGap: 10,// 图和字的间距 默认15 number
          name: {
            textStyle: {
              color: '#fff',
            }
          },
          axisLine: {
            lineStyle: {
              color: '#E6E6E6'
            }
          },
          splitLine: {
            lineStyle: {
              width: 1,
              color: '#E6E6E6'
            }
          },
          splitArea: {
            areaStyle: {
              color: ['#f8f8f8', '#fff',].reverse(),

            }
          },
          indicator: [{
            name: '人员变动',
            max: 100
          }, {
            name: '经营能力',
            max: 100
          }, {
            name: '业务风险',
            max: 100
          }, {
            name: '偿债能力',
            max: 100
          }, {
            name: '盈利能力',
            max: 100
          },
          ]
        },
        series: [{
          name: '综合信用评分',
          type: 'radar',
          symbolSize: 2,
          itemStyle: {
            borderColor: '#0264BD',
            borderWidth: 2,
          },
          areaStyle: {
            normal: {
              width: 1,
              opacity: 0.3,
            },
          },
          data: [{
            itemStyle: {
              normal: {
                color: '#7AADDC',
              },
            },
            value: [20, 33, 80, 50, 30]
          }]
        }]
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
