<template>
  <div class="echarts1" ref="echarts">
  </div>
</template>

<script>
import * as echarts from "echarts"
import {FontChart} from "@/utils/utils.js";

export default {
  name: 'echarts1',
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      // 获取当前年份
      const currentYear = new Date().getFullYear();

      // 生成近5年的年份数组,从远到近排序
      const years = Array.from({length: 5}, (_, i) => currentYear - 4 + i).sort((a, b) => a - b);

      // 生成包含年份、开工数和完工数的数组
      const projectsArray = years.map(year => ({
        name: year.toString(),
        value: Math.floor(Math.random() * 100) + 50,  // 开工数
        value2: Math.floor(Math.random() * 80) + 30   // 完工数
      }));

      console.log(projectsArray);
      this.list = projectsArray;
      this.drawEcharts();
    },
    drawEcharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.echarts)
      window.addEventListener('resize', () => {
        myChart.resize()
      })

      var option = {
        grid: {
          top: '30px',
          bottom: '10px',
          left: '20px',
          right: '10px',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(244,243,241,0.1)'
              }, {
                offset: 1,
                color: 'rgba(243,241,239,0.5)'
              }], false),
            }
          }
        },
        legend: {
          top: 0,
          right: 10,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: 'rgba(157, 185, 233, 1)',
            fontSize: '12'
          },
        },
        xAxis: [{
          data: this.list.map(obj => obj.name),
          axisLabel: {
            margin: 10,
            interval: 0,
            color: '#fff',
            textStyle: {
              fontSize: FontChart(14),
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(49, 119, 214, 1)',
              width: 1
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(39, 76, 129, 0.26)',
              width: 1,
            }
          },
          axisTick: {
            show: false
          },
        }],

        yAxis: [
          {
            type: 'value',
            axisLabel: {
              color: '#fff',
              textStyle: {
                fontSize: FontChart(14),
              },
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(49, 119, 214, 1)',
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(39, 76, 129, 0.26)',
                width: 1,
              }
            }
          }],
        series: [
          {
            name: '开工数',
            type: 'bar',
            data: this.list.map(obj => obj.value),
            barWidth: '15',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(41, 241, 250, 1)'
                }, {
                  offset: 1,
                  color: '#1968ae'
                }], false),
              }
            },
          },
          {
            name: '完工数',
            type: 'bar',
            data: this.list.map(obj => obj.value2),
            barWidth: '15',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#bedb3b'
                }, {
                  offset: 1,
                  color: '#8d9336'
                }], false),
              }
            },
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
  height: 100%;
}
</style>