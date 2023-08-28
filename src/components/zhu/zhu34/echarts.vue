<template>
  <div class="echartsB">
    <div class="echartsBT">
      <span>{{ title }}</span>
      <p>{{ num }}%</p>
    </div>
    <div class="echarts1" ref="echarts">

    </div>
  </div>

</template>

<script>

export default {
  name: 'echarts1',
  components: {},
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    },
    num: {
      type: Number,
      default() {
        return 0
      }
    },
  },
  watch: {
    title() {
      this.drawLine()
    },
    num() {
      this.drawLine()
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      window.addEventListener('resize', this.drawLine)
      const myChart = this.$echarts.init(this.$refs.echarts)
      var ydata = ['A2'] // y轴
      var dataArr = [1000] // 色块
      var whiteBar = [2889]
      var balckBar = [4895]// 背景色
      var rich = { // 富文本
        white: {
          color: '#2ad1d2',
          fontSize: 16
          // padding: [0, 25]
        }
      }
      var option = {
        grid: {
          left: '0%',
          top: 0,
          bottom: 0
        },
        tooltip: {
          trigger: 'item',
          textStyle: {
            fontSize: 12
          },
          formatter: '{b0}:{c0}'
        },
        xAxis: {
          max: 5000,
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [{
          type: 'category',
          inverse: false,
          data: ydata,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            margin: 10,
            show: false,
            textStyle: {
              color: '#2ad1d2',
              fontSize: 16
            }
          }
        }

        ],
        series: [{ // 内
          type: 'bar',
          barWidth: 40,
          label: {
            normal: {
              show: false,
              position: 'right',
              textStyle: {
                color: '#fff'
              }
            }
          },
          legendHoverLink: false,
          silent: true,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0,
                color: '#15555D' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#1EC2D5' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            } // 底色
          },
          data: dataArr,
          z: 100
        },
          { // 外
            type: 'bar',
            barWidth: 40,
            barGap: '-100%',
            label: {
              normal: {
                show: false,
                position: 'right',
                textStyle: {
                  color: '#fff'
                },
                formatter: function (data) {
                  return '{white|' + whiteBar[data.dataIndex] + '}'
                },
                rich: rich
              }
            },
            legendHoverLink: false,
            silent: true,
            data: balckBar,
            itemStyle: {
              color: 'rgba(45, 46, 48,0.5)'
            },
            z: 98
          },
          { // 分隔
            type: 'pictorialBar',
            animationDuration: 0,
            itemStyle: {
              color: 'rgba(34, 40, 46, 1.00)'
            },
            symbolRepeat: 'fixed',
            symbolMargin: '4',
            symbol: 'rect',
            symbolClip: true,
            symbolSize: [4, 40],
            symbolPosition: 'start',
            symbolOffset: [
              0, 0
            ],
            data: balckBar,
            z: 101
          }
        ]
      }
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
  border: 1px solid #1EC4D7;
  height: 28px;
}

.echartsB {
  position: relative;
  width: 90%;
  margin: auto;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: flex-start;
}

.echartsBT {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  align-content: flex-start;
  height: 50px;

  span {
    font-size: 16px;
    font-family: MiSans;
    font-weight: 400;
    color: #E2EBF1;
  }

  p {
    font-size: 20px;
    font-family: MiSans;
    font-weight: 600;
    color: #00EFFF;
    line-height: 565px;
  }
}

</style>
