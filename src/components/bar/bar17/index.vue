<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>

import {FontChart} from "@/utils/utils";
import img from './hegeicon1.png'
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
      var datas = [
        {
          title: '蔬菜',
          id: 'itembody_ec_list_item1',
          color1: 'rgba(8, 209, 163, 1)',
          color2: '#12d7aa',
          color3: '#e5f8f7',
          value: 40,
          max: 100,
          bg: '#e5f8f7',
        }]
      let max = datas[0].max;
      let value = datas[0].value;
      let rate = Math.round((value * 100) / max);
      var option = {
        title: [
          {
            text: '{b|' + rate + '%}\n{a|' + datas[0].title + '}',
            show: true,
            x: 'center',
            y: 'center',
            textStyle: {
              rich: {
                b: {
                  fontSize: 12,
                  color: datas[0].color1,
                  padding: [0, 0, 5, 0],
                },
                a: {
                  fontSize: 10,
                  color: 'rgba(51, 51, 51, 1)',
                  fontFamily: 'PangMenZhengDao',
                },

              },
            },
          },
        ],
        polar: {
          center: ['50%', '50%'],
          radius: ['75%', '95%'],
        },
        angleAxis: {
          max: max,
          show: false,
        },
        radiusAxis: {
          type: 'category',
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            name: '',
            type: 'bar',
            roundCap: true,
            showBackground: true,
            backgroundStyle: {
              color: datas[0].bg,
            },
            data: [value],
            coordinateSystem: 'polar',
            itemStyle: {
              normal: {
                color: new that.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: datas[0].color2,
                  },
                  {
                    offset: 1,
                    color: datas[0].color3,
                  },
                ]),
              },
            },

          },
          {
            //进度圆环
            name: 'Line 1',
            type: 'pie',
            startAngle: 120,
            clockWise: false,
            radius: ['75%', '85%'],
            itemStyle: {
              normal: {
                label: {
                  show: true
                },
                labelLine: {
                  show: false
                },
              }
            },
            color: 'rgba(0,0,0,0)',
            hoverAnimation: false,
            data: [
              {
                name: "",
                value: value,
                color: 'rgba(0,0,0,0)',
                label: {
                  position: 'inside',
                  padding: FontChart(40),
                  backgroundColor: {
                    image: img,
                    width: 100,
                    height: 100
                  },
                  borderRadius: '50%'
                }
              }]
          }
        ],
      };
      myChart.clear();
      myChart.resize();
      myChart.setOption(
        option
      );
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
