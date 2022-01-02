<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>

import {FontChart} from "@/utils/utils";

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
      var getxb1 = 600; //男生人数
      var getxb2 = 400; //女生人数
      var option = {
        tooltip: {
          show: false,
        },
        series: [
          {
            name: '性别分布',
            type: 'pie',
            radius: ['70%', '120%'],
            startAngle: 180,
            center: ['50%', '60%'],
            roseType: 'radius',
            labelLine: {
              show: false,
            },
            label: {
              normal: {
                show: false,
                position: 'center',
                textStyle: {
                  fontSize: FontChart(12),
                  padding: [-20, 0, 0, 0],
                },
                // formatter: ['{c}'].join('\n'),
                // formatter: ['{c}'] + ' : '['{}'],
                formatter: function (params) {
                  var proportion = '';
                  for (var i = 0; i < option.series[0].data.length - 1; i++) {
                    // console.log(option.series[0].data);
                    if (i === 0) {
                      proportion = proportion + option.series[0].data[i].value.toString();
                    } else {
                      proportion = proportion + ' : ' + option.series[0].data[i].value.toString();
                    }
                  }
                  return proportion;
                },
              },
              position: 'center',
              show: true,
            },
            data: [
              {
                value: getxb1,
                // name: "男生",
                itemStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                        {
                          offset: 0,
                          color: '#195AFF',
                        },
                        {
                          offset: 1,
                          color: '#195AFF',
                        },
                      ],
                      false
                    ),
                  },
                },
              },
              {
                value: getxb2,
                // name: "女生",
                itemStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                        {
                          offset: 0,
                          color: 'rgba(242, 100, 57, 1)',
                        },
                        {
                          offset: 1,
                          color: 'rgba(242, 100, 57, 1)',
                        },
                      ],
                      false
                    ),
                  },
                },
              },
              {
                value: getxb1 + getxb2,
                name: '',
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                itemStyle: {
                  normal: {
                    color: 'transparent',
                    borderWidth: 0,
                    shadowBlur: 0,
                  },
                },
              },
            ],
          },
          {
            type: 'pie',
            radius: ['70%', '140%'],
            startAngle: 180,
            hoverAnimation: false,
            center: ['50%', '60%'],
            roseType: 'radius',
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: getxb1,
                itemStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                        {
                          offset: 0,
                          color: 'rgba(76,141,250,.3)',
                        },
                        {
                          offset: 1,
                          color: 'rgba(92,207,255,.3)',
                        },
                      ],
                      false
                    ),
                  },
                },
              },
              {
                value: getxb2,
                itemStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0,
                      0,
                      0,
                      1,
                      [
                        {
                          offset: 0,
                          color: 'rgba(255,209,139,.3)',
                        },
                        {
                          offset: 1,
                          color: 'rgba(253,173,89,.3)',
                        },
                      ],
                      false
                    ),
                  },
                },
              },
              {
                value: getxb1 + getxb2,
                name: '',
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                itemStyle: {
                  normal: {
                    color: 'transparent',
                    borderWidth: 0,
                    shadowBlur: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent',
                  },
                },
              },
            ],
            z: -1,
          },
        ],
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
