<template>
  <div class="echarts1" ref="echarts">
  </div>
</template>

<script>
import * as echarts from "echarts"

export default {
  name: 'echarts1',
  components: {},
  data() {
    return {
      hourlyData: [],
      thresholds: {
        veryLow: -8,
        low: -4,
        high: 13,
        veryHigh: 15
      }
    }
  },
  mounted() {
    this.generateData();
  },
  methods: {
    generateData() {
      const now = new Date();
      this.hourlyData = Array.from({length: 12}, (_, i) => {
        const time = new Date(now.getTime() - (11 - i) * 60 * 60 * 1000);
        return [
          time.getHours().toString().padStart(2, '0'),
          Math.round((Math.random() * 30 - 10) * 10) / 10 // 生成-10到20之间的随机数，保留一位小数
        ];
      });
      this.drawEcharts();
    },
    drawEcharts() {
      if (this.hourlyData.length === 0) {
        console.error('No data available');
        return;
      }

      let myChart = echarts.init(this.$refs.echarts)
      window.addEventListener('resize', function () {
        myChart.resize()
      })
      var option = {
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            var data = params[0].data;
            return data[0] + '时: ' + data[1] + ' °C';
          }
        },
        grid: {
          top: '10',
          left: '10',
          right: '30',
          bottom: '10',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: this.hourlyData.map(item => item[0]),
          axisLine: {
            show: true,
            lineStyle: {
              color: '#0a4573'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 12
            },
          },
          boundaryGap: true
        }],
        yAxis: [{
          type: 'value',
          min: -10,
          max: 20,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: 'rgba(157, 173, 178, 1)'
            }
          },
          axisLabel: {
            textStyle: {
              color: 'rgba(245, 247, 250, 1)',
              fontSize: 12
            },
            formatter: '{value}'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0b4170',
              type: 'dashed'
            }
          }
        }],
        visualMap: {
          show: false,
          pieces: [
            {min: this.thresholds.veryHigh, color: '#ff4500'},
            {min: this.thresholds.high, max: this.thresholds.veryHigh, color: '#ffa500'},
            {min: this.thresholds.low, max: this.thresholds.high, color: '#06b657'},
            {min: this.thresholds.veryLow, max: this.thresholds.low, color: '#ffa500'},
            {max: this.thresholds.veryLow, color: '#ff4500'},
          ]
        },
        series: [
          {
            name: '温度历史数据',
            type: 'line',
            data: this.hourlyData,
            smooth: true,
            symbolSize: 0,
            lineStyle: {
              width: 2
            },
            areaStyle: {
              opacity: 0.3
            },
            label: {
              show: false,
              position: 'top',
              color: 'rgba(255, 255, 255, 1)',
              formatter: function (params) {
                return params.value[1];
              }
            },
            markLine: {
              silent: true,
              symbol: 'none',
              label: {
                show: true,
                position: 'end',
                formatter: '{c}',
                color: '#fff'
              },
              lineStyle: {
                type: 'solid',
                width: 1
              },
              data: [
                {yAxis: this.thresholds.veryLow, lineStyle: {color: '#ff4500'}},
                {yAxis: this.thresholds.low, lineStyle: {color: '#ffa500'}},
                {yAxis: this.thresholds.high, lineStyle: {color: '#ffa500'}},
                {yAxis: this.thresholds.veryHigh, lineStyle: {color: '#ff4500'}}
              ]
            }
          }
        ]
      };

      myChart.clear()
      myChart.resize()
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts1 {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
