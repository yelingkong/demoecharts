<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>
import {FontChart} from '../../../utils/utils'

export default {
  name: 'echarts1',
  components: {},
  props: {
    id: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      status: '',
      xdata: [],
      ydata: []
    }
  },
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts)
      var spNum = 5, _max = 100;
      var legendData = ['缺陷1', '缺陷2', '缺陷3', '缺陷4'];
      var y_data = ['周一', '周二', '周三', '周四'];
      var _datamax = [100, 100, 100, 100, 100, 100],
        _data1 = [10, 15, 10, 13, 15, 11],
        _data2 = [19, 5, 40, 33, 15, 51],
        _data3 = [21, 55, 10, 13, 35, 11];
      var _data4 = [21, 55, 10, 13, 35, 11];
      var fomatter_fn = function (v) {
        return (v.value / _max * 100).toFixed(0)
      }
      var _label = {
        normal: {
          show: true,
          position: 'inside',
          formatter: fomatter_fn,
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        }
      };
      var option = {
        legend: {
          data: legendData,
          x: FontChart(50),
          y: FontChart(20),
          textStyle: {
            color: '#ccc'
          }
        },
        grid: {
          containLabel: true,
          left: 20,
          right: 20,
          top: 20,
          bottom: 30,
          containLabel: true,
        },
        tooltip: {
          show: true,
          backgroundColor: '#fff',
          borderColor: '#ddd',
          borderWidth: 1,
          textStyle: {
            color: '#3c3c3c',
            fontSize: FontChart(16)
          },
          formatter: function (p) {
            console.log(p);
            var _arr = p.seriesName.split('/'),
              idx = p.seriesIndex;//1，2，3
            return '名称：' + p.seriesName + '<br>' + '完成：' + p.value + '<br>' + '占比：' + (p.value / _max * 100).toFixed(0) + '%';
          },
          extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)'
        },
        xAxis: {
          splitNumber: spNum,
          interval: _max / spNum,
          max: _max,
          axisLabel: {
            show: false,
            formatter: function (v) {
              var _v = (v / _max * 100).toFixed(0);
              return _v == 0 ? _v : _v + '%';
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#173577',
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#173577',
            }
          }

        },
        yAxis: [{
          data: y_data,
          axisLabel: {
            fontSize: FontChart(16),
            color: '#fff',

          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#173577',
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        }, {
          show: false,
          data: y_data,
          axisLine: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          name: '缺陷1',
          stack: '2',
          label: _label,
          legendHoverLink: false,
          barWidth: '40%',
          itemStyle: {
            normal: {
              color: '#E19700'
            },
            emphasis: {
              color: '#E19700'
            }
          },
          data: _data1
        }, {
          type: 'bar',
          name: '缺陷2',
          stack: '2',
          legendHoverLink: false,
          barWidth: '40%',
          label: _label,
          itemStyle: {
            normal: {
              color: '#91CB75'
            },
            emphasis: {
              color: '#91CB75'
            }
          },
          data: _data2
        }, {
          type: 'bar',
          stack: '2',
          name: '缺陷3',
          legendHoverLink: false,
          barWidth: '40%',
          label: _label,
          itemStyle: {
            normal: {
              color: '#EE6666'
            },
            emphasis: {
              color: '#EE6666'
            }
          },
          data: _data3
        }, {
          type: 'bar',
          stack: '2',
          name: '缺陷4',
          legendHoverLink: false,
          barWidth: '40%',
          label: _label,
          itemStyle: {
            normal: {
              color: '#0092FF'
            },
            emphasis: {
              color: '#0092FF'
            }
          },
          data: _data4
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
  height: 100%;
}
</style>
