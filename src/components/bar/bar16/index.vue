<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>

import {FontChart} from "@/utils/utils";
import $ from 'jquery'

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
      let myChart = this.$echarts.init(this.$refs.echarts1)
      let echartData = {
        inner: [{
          value: 700,
          unit: '个',
          name: '确诊'
        },
          {
            value: 679,
            unit: '个',
            name: '疑似'
          }
        ],
        outer: [{
          value: 310,
          unit: '个',
          name: '方式1'
        },
          {
            value: 234,
            unit: '个',
            name: '方式2'
          },
          {
            value: 335,
            unit: '个',
            name: '方式3'
          },
          {
            value: 548,
            unit: '个',
            name: '方式4'
          },
          {
            value: 351,
            unit: '个',
            name: '方式5'
          }
        ]
      }
      var option = {
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: [0, '45%'],
          itemStyle: {
            normal: {
              color: function (params) {
                var colorList = [
                  {
                    c1: 'rgba(152, 11, 28, 1.00)',
                    c2: 'rgba(137, 14, 27, 1.00)',
                    c3: 'rgba(152, 11, 28, 1.00)',
                  },
                  {
                    c1: 'rgba(30, 93, 92, 0)',
                    c2: 'rgba(24, 42, 48, 0)',
                    c3: 'rgba(30, 93, 92, 0)',
                  }]
                console.log(params)
                return new that.$echarts.graphic.LinearGradient(1, 0, 0, 0, [{ //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                  offset: 0,
                  color: colorList[params.dataIndex].c1
                }, {
                  offset: 1,
                  color: colorList[params.dataIndex].c2
                }])

              }
            }
          },
          label: {
            normal: {
              position: 'inner'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: echartData.inner
        },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['55%', '75%'],
            data: echartData.outer,
            labelLine: {
              normal: {
                length: 10,
                length2: 70,
                lineStyle: {
                  color: 'rgba(64, 110, 121, 1)'
                },
              }
            },
            label: {
              normal: {
                formatter: params => {
                  return (
                    '{name|' + params.name + '}'
                  );
                },
                padding: [0, 0, 0, 0],
                rich: {
                  color: '#333',
                  name: {
                    fontSize: 12,
                    padding: [0, 0, 0, 0],
                    color: 'rgba(179, 221, 222, 1)'
                  }
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 0,

                color: function (params) {
                  var color = ["rgba(199, 130, 55, 1)", "rgba(24, 145, 107, 1)", "rgba(36, 122, 143, 1)",
                    "rgba(35, 178, 213, 1)", "rgba(24, 185, 179, 1.00)"];
                  return color[params.dataIndex]
                }
              }
            },
          }
        ]
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
  height: calc(100% - 10px);
}
</style>
