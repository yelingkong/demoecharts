<template>
  <div class="echarts1" ref="echarts">
  </div>
</template>
<script>
import * as echarts from "echarts"
import dot1 from './assets/icon_dot1.png'
import dot2 from './assets/icon_dot2.png'

export default {
  name: 'echarts1',
  components: {},
  data() {
    return {
      list: []
    }
  },
  watch: {
    list() {
      this.drawEcharts()
    }
  },
  mounted() {
    var that = this;
    let arr = Array.from({length: 12}, (_, i) => ({
      name: i + 1,
      value: Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000,
      value2: Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000
    }));
    that.list = arr
    const viewElem = document.body;
    // 监听窗口变化,重绘echarts
    const resizeObserver = new ResizeObserver(() => {
      setTimeout(() => {
        that.drawEcharts();
      }, 300)
    });
    resizeObserver.observe(viewElem);
  },
  methods: {
    drawEcharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.echarts)
      var option = {
        title: {
          text: '单位：次',
          left: '10',
          top: 'top',
          textStyle: {
            fontSize: 13,
            fontWeight: 400,
            fontFamily: 'Microsoft YaHei',
            color: '#C2D6EB'
          }
        },
        grid: {
          top: '40px',
          bottom: '20px',
          left: '20px',
          right: '20px',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(255, 174, 0, 0.1)'
              }, {
                offset: 1,
                color: 'rgba(255, 174, 0, 0.5)'
              }], false),
            }
          }
        },
        legend: {
          top: 0,
          right: 0,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: 'rgba(157, 185, 233, 1)',
            fontSize: '14'
          },
          data: [
            {name: '名称1', icon: 'image://' + dot1},
            {name: '名称2', icon: 'image://' + dot2},
          ],
        },
        xAxis: [
          {
            data: this.list.map(obj => obj.name),
            axisLabel: {
              margin: 10,
              color: 'rgba(202, 215, 245, 1)',
              textStyle: {
                fontSize: 14
              },
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(134, 146, 185, 0.36)',
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
            max: 5000,
            axisLabel: {
              color: 'rgba(202, 215, 245, 1)',
              textStyle: {
                fontSize: 14
              },
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(134, 146, 185, 1)',
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(39, 76, 129, 0.26)',
                width: 1,
              }
            }
          }],
        series: [
          {
            name: '名称1',
            type: 'line',
            data: this.list.map(obj => obj.value),
            smooth: false,
            symbol: 'image://' + dot1, //数值点设定为实心点
            symbolSize: 11, // 折线的点的大小
            itemStyle: {
              normal: {
                color: 'rgba(0, 174, 255, 1)', //点的颜色
                lineStyle: {
                  color: 'rgba(0, 174, 255, 1)', //线的颜色
                  width: 1, // 折线图线条粗细设置
                },
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(0, 174, 255, 0.5)'
                },
                  {
                    offset: 1,
                    color: 'rgba(0, 240, 203, 0)'
                  }
                ], false),
              }
            },
          },
          {
            name: '名称2',
            type: 'line',
            data: this.list.map(obj => obj.value2),
            smooth: false,
            symbol: 'image://' + dot2, //数值点设定为实心点
            symbolSize: 11, // 折线的点的大小
            itemStyle: {
              normal: {
                color: 'rgba(102, 255, 166, 1)', //点的颜色
                lineStyle: {
                  color: 'rgba(102, 255, 166, 1)', //线的颜色
                  width: 1, // 折线图线条粗细设置
                },
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(102, 255, 166, 0.5)'
                },
                  {
                    offset: 1,
                    color: 'rgba(102, 255, 166,0)'
                  }
                ], false),
              }
            },
          },
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
