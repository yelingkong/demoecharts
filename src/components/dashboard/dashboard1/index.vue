<template>
  <div class="echarts1">
    <div class="echarts1" ref="echarts1">

    </div>
  </div>
</template>

<script>

export default {
  name: 'echarts1',
  components: {},
  props: {
  },
  data() {
    return {
      number: 50,
      title: '标题',
    }
  },
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts1)
      var option = {
        series: [{
          type: 'gauge',
          startAngle: 180,
          radius: '80%',
          endAngle: 0,
          center: ['50%', '70%'],
          min: 0,
          max: 100,
          splitNumber: 5,
          axisLine: {
            lineStyle: {
              width: 3,
              color: [
                [0.25, '#20dd0c'],
                [0.5, '#ffe535'],
                [0.75, '#f85801'],
                [1, '#ee2e38']
              ]
            }
          },
          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '50%',
            width: 5,
            offsetCenter: [0, '-20%'],
            itemStyle: {
              color: 'auto'
            }
          },
          splitLine: {
            show: false,
            length: 20,
            lineStyle: {
              color: 'auto',
              width: 0
            }
          },
          axisLabel: {
            color: '#fff',
            fontSize: 12,
            distance: -40,
          },
          title: {
            offsetCenter: [0, '30%'],
            fontSize: 12,
            color: '#55bcd5',
          },
          detail: {
            fontSize: 12,
            color: 'auto',
            show: false,
            valueAnimation: true,
            offsetCenter: [0, 0],
            textStyle: {
              padding: [0, 0, 0, 0],
              fontSize: 14,
              fontWeight: '500'
            },
            formatter: function (value) {
              if (value <= 25) {
                return '正常'
              } else if (value <= 50) {
                return '注意'
              } else if (value <= 75) {
                return '异常'
              } else if (value <= 100) {
                return '严重'
              }
            }
          },
          data: [{
            value: this.number,
            fontSize: 10,
            name: this.title
          }]
        }]
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}
</style>
