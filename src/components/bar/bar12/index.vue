<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>

import {FontChart} from "@/utils/utils";
import $ from 'jquery'
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
      var whei = $(window).width()
      var dataArr = [{
        value: 135,
        name: '订单响应占比'
      }];
      var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: 'rgba(1, 90, 207, 1)' // 0% 处的颜色
      },
        {
          offset: 0.17,
          color: 'rgba(1, 90, 207, 1)' // 100% 处的颜色
        },
        {
          offset: 0.9,
          color: 'rgba(1, 90, 207, 1)' // 100% 处的颜色
        },
        {
          offset: 1,
          color: 'rgba(1, 90, 207, 1)' // 100% 处的颜色
        }
      ]);
      var colorSet = [
        [0.58, color],
        [1, 'rgba(242, 100, 57, 1)']
      ];
      var rich = {
        bule: {
          fontSize: FontChart(44),
          fontFamily: 'DigitalDismay',
          color: 'rgba(2, 116, 229, 1)',
          fontWeight: '700',
          padding: [0, FontChart(44 / 4), 0, 0],
        }
      }
      var option = {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
          {
            type: 'gauge',
            radius: '70%',
            startAngle: '225',
            endAngle: '-45',
            pointer: {
              show: false
            },
            detail: {
              formatter: function (value) {
                var num = Math.round(value);
                return '{bule|' + num + '}';
              },
              rich: rich,
              "offsetCenter": ['0%', "0%"],
            },
            data: dataArr,
            title: {
              show: false,
              color: '#fff',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontFamily: '微软雅黑',
              fontSize: FontChart(20),
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: colorSet,
                width: FontChart(25),
                // shadowBlur: 15,
                // shadowColor: '#B0C4DE',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: 1
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              length: FontChart(25),
              lineStyle: {
                color: 'rgba(242, 100, 57, 1)',
                width: 2,
                type: 'solid',
              },
            },
            axisLabel: {
              show: false
            },
          },
          {
            name: "白色圈刻度",
            type: "gauge",
            radius: "50%",
            startAngle: 225, //刻度起始
            endAngle: -45, //刻度结束
            z: 4,
            axisTick: {
              show: false
            },
            splitLine: {
              length: 4, //刻度节点线长度
              lineStyle: {
                width: 2,
                color: '#073979'
              } //刻度节点线
            },
            axisLabel: {
              color: 'rgba(255,255,255,0)',
              fontSize: 0,
            }, //刻度节点文字颜色
            pointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                width: 1,
                opacity: 1,
                color: '#073979'
              }
            },
            detail: {
              show: false
            },
            data: [{
              value: 0,
              name: ""
            }]
          },
          { //内圆
            type: 'pie',
            radius: '45%',
            center: ['50%', '50%'],
            z: 1,
            itemStyle: {
              normal: {
                color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
                  offset: 0,
                  color: '#063471'
                },
                  {
                    offset: .5,
                    color: '#062C65'
                  },
                  {
                    offset: 1,
                    color: '#062559'
                  }
                ], false),
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              },
            },
            hoverAnimation: false,
            label: {
              show: false,
            },
            tooltip: {
              show: false
            },
            data: [100],
          },
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
