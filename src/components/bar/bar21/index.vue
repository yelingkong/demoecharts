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
        tooltip: {
          trigger: 'item',
          formatter: function (e) {
            console.log(e)
            return e.data.name + ' ' + e.data.value + ' ' + e.percent + '%'
          }
        },
        legend: {
          height: '80%',
          show: true,
          orient: 'vertical',
          // orient: 'horizontal',
          left: '5%',
          icon: 'circle',
          bottom: 'center',
          align: 'left',
          textStyle: {
            color: '#7692B4',
            fontSize: FontChart(14)
          },
          data: [{
            name: '道路',
            value: 10
          }, {
            name: '仓储',
            value: 20
          }, {
            name: '装卸',
            value: 30
          }, {
            name: '邮政',
            value: 30
          }, {
            name: '商务',
            value: 30
          }, {
            name: '软件',
            value: 30
          }, {
            name: '批发',
            value: 30
          }, {
            name: '农业',
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
            radius: ['60%', '80%'],
            color: ['#179CFB',
              '#33F8E9',
              '#AD26F3',
              '#27E79F',
              '#F9B32E',
              '#2D49E8',
              '#5AE0FF',
              '#9227EF'],
            labelLine: {
              normal: {
                length: FontChart(20)
              }
            },
            label: {
              show: false,
              position: 'inside',
              formatter: '{d}%',
              color: '#fff',
              fontSize: FontChart(16)
            },
            itemStyle: {
              normal: {
                borderColor: '#1F323F',
                borderWidth: 0
              }
            },
            data: [{
              name: '道路',
              value: 10
            }, {
              name: '仓储',
              value: 20
            }, {
              name: '装卸',
              value: 30
            }, {
              name: '邮政',
              value: 30
            }, {
              name: '商务',
              value: 30
            }, {
              name: '软件',
              value: 30
            }, {
              name: '批发',
              value: 30
            }, {
              name: '农业',
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
  height: calc(33.33% - 80px);
}
</style>
