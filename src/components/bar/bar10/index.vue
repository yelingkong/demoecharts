<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>
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
      var option = {
        legend: {
          height: '100%',
          show: true,
          orient: 'vertical',
          right: '10%',
          bottom: 'center',
          align: 'left',
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          data: [{
            name: '58检查',
            value: 10
          }, {
            name: '产品点检',
            value: 20
          }, {
            name: '安全检查',
            value: 30
          }, {
            name: '行为观察',
            value: 30
          }, {
            name: '巡检',
            value: 30
          }],
          itemWidth: 15,
          itemHeight: 10,
          itemGap: 30
        },
        series: [
          {
            type: 'pie',
            center: ['35%', '50%'],
            radius: ['35%', '60%'],
            color: ['rgba(0, 172, 146, 1)',
              'rgba(243, 113, 63, 1)',
              'rgba(2, 118, 232, 1)',
              'rgba(213, 161, 35, 1)',
              'rgba(160, 206, 58, 1)'],
            labelLine: {
              normal: {
                length: 20
              }
            },
            label: {
              normal: {
                formatter: '{b|{b}} \n {per|({d}%)} ',
                borderColor: 'transparent',
                borderRadius: 4,
                rich: {
                  b: {
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: 16
                  },
                  per: {
                    color: 'rgba(169, 177, 192, 1)',
                    fontSize: 16,
                    padding: [5, 0, 5, -5]
                  }
                },
                textStyle: {
                  color: '#fff',
                  fontSize: 14
                }
              }
            },
            data: [{
              name: '58检查',
              value: 10
            }, {
              name: '产品点检',
              value: 20
            }, {
              name: '安全检查',
              value: 30
            }, {
              name: '行为观察',
              value: 30
            }, {
              name: '巡检',
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
  height: calc(100% - 10px);
}
</style>
