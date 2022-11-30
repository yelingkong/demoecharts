<template>
  <div class="echarts1" ref="echarts">
  </div>
</template>
<script>
export default {
  name: 'echarts1',
  components: {},
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      default() {
        return ''
      }
    },
  },
  computed: {
    numlist: function () {
      var list = []
      this.data.forEach((type2) => {
        if (type2.name == this.title) {
          list.push(type2)
        }
      })
      console.log(list)
      return list
    },
    num: function () {
      var list = []
      this.data.forEach((type2) => {
        if (type2.name == this.title) {
          list.push(type2.num)
        }
      })
      console.log(list)
      return list
    },
  },
  data() {
    return {
      status: '',
      active: false,
      list: ['2020', '2021', '2022']
    }
  },
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    getactive() {
      this.$nextTick(() => {
        this.drawLine()
      })
    },
    drawLine() {
      var that = this
      // 基于准备好的dom，初始化echarts实例
      window.addEventListener('resize', this.drawLine)
      const myChart = this.$echarts.init(this.$refs.echarts)
      var getname = this.list
      var getvalue = [4, 2, 3]
      var option = {
        grid: {
          top: '50px',
          bottom: '0px',
          left: '0px',
          right: '0px',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(52, 249, 230, 0.2)'
              }, {
                offset: 1,
                color: 'rgba(52, 249, 230, 0.2)'
              }], false)
            }
          }
        },
        xAxis: [{
          data: getname,
          axisLabel: {
            margin: 10,
            color: 'rgba(181, 219, 255, 1)',
            textStyle: {
              fontSize: 16
            }
          },
          axisLine: {
            lineStyle: {
              color: '#3c5064',
              width: 1
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(39, 76, 129, 0.26)',
              width: 1
            }
          },
          axisTick: {
            show: false
          }
        }],
        yAxis: [
          {
            type: 'value',
            min: 0,
            name: '吨',
            nameTextStyle: {
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 16,
              padding: [0, 0, 0, -20]
            },
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: 'rgba(181, 219, 255, 1)',
                fontSize: 16,
              }
            },
            axisLine: {
              lineStyle: {
                color: '#3c5064'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(39, 76, 129, 0.26)',
                width: 1
              }
            }
          }],
        series: [
          {
            name: '个数',
            type: 'pictorialBar',
            barCategoryGap: '-50%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            label: {
              show: false,
              position: 'top',
              distance: 15,
              color: '#1890FF',
              fontWeight: 'bolder',
              fontSize: 14,
            },
            itemStyle: {
              normal: {
                color: new that.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(26, 243, 253, 1)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(26, 243, 253, 0)'
                    }
                  ],
                  false
                ),
              },
              emphasis: {
                opacity: 1,
              },
            },
            data: getvalue,
            z: 10,
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
  height: calc(100% - 20PX);
}
</style>
