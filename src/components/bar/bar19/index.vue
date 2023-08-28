<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>

import { FontChart } from '@/utils/utils'

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
      var option = {
        legend: {
          height: '60%',
          show: true,
          orient: 'vertical',
          // orient: 'horizontal',
          left: '10%',
          icon: 'circle',
          bottom: 'center',
          align: 'left',
          textStyle: {
            color: '#fff',
            fontSize: FontChart(14)
          },
          data: [{
            name: '仓储租赁',
            value: 10
          }, {
            name: 'null',
            value: 20
          }, {
            name: '快递物流',
            value: 30
          }, {
            name: '商贸市场',
            value: 30
          }, {
            name: '冷链物流',
            value: 30
          }],
          itemWidth: FontChart(15),
          itemHeight: FontChart(10),
          itemGap: FontChart(30)
        },
        series: [
          {
            type: 'pie',
            center: ['70%', '50%'],
            radius: ['70%', '85%'],
            color: ['#00FFF6',
              '#00E4FF',
              '#3AFF7E',
              '#00FFF6',
              '#51EAC4'],
            labelLine: {
              normal: {
                length: FontChart(20)
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#1F323F',
                borderWidth: 3
              }
            },
            label: {
              normal: {
                formatter: '{b|{b}} \n {per|({d}%)} ',
                borderRadius: 4,
                show: false,
                rich: {
                  b: {
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: FontChart(16)
                  },
                  per: {
                    color: 'rgba(169, 177, 192, 1)',
                    fontSize: FontChart(16),
                    padding: [5, 0, 5, -5]
                  }
                },
                textStyle: {
                  color: '#fff',
                  fontSize: FontChart(14)
                }
              }
            },
            data: [{
              name: '仓储租赁',
              value: 10
            }, {
              name: 'null',
              value: 20
            }, {
              name: '快递物流',
              value: 30
            }, {
              name: '商贸市场',
              value: 30
            }, {
              name: '冷链物流',
              value: 30
            }]
          }
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
  height: calc(100% - 110px);
}
</style>
