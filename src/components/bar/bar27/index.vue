<template>
  <div class="echarts">
    <div class="echarts1" ref="echarts">

    </div>
    <div class="bg">
      <img src="./bg.png" alt="">
    </div>
  </div>

</template>

<script>

import {FontChart} from "@/utils/utils";

export default {
  name: 'echarts1',
  components: {},
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  watch: {
    list() {
      this.drawLine()
    },
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this;
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts)
      var getvalue = [88];
      var option = {
        title: {
          text: getvalue + '%',
          textStyle: {
            color: '#fff',
            fontSize: FontChart(18)
          },
          subtext: '非常满意',
          subtextStyle: {
            color: 'rgba(255, 255, 255, 1)',
            fontSize: FontChart(12)
          },
          itemGap: 3,
          left: 'center',
          top: '32%'
        },
        tooltip: {
          formatter: function (params) {
            return '<span style="color: #fff;">同比增长：' + getvalue + '%</span>';
          }
        },
        angleAxis: {
          max: 100,
          clockwise: true, // 逆时针
          show: false
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
            show: false
          },
        },
        polar: {
          center: ['50%', '50%'],
          radius: '155%' //图形大小
        },
        series: [{
          type: 'bar',
          data: getvalue,
          coordinateSystem: 'polar',
          roundCap: true,
          barWidth: FontChart(10),
          itemStyle: {
            normal: {
              opacity: 1,
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#501af4' // 0% 处的颜色
              },
                {
                  offset: 1,
                  color: '#961ef5' // 100% 处的颜色
                }
              ]),
            }
          },
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
  height: calc(100% - 0px);
}

.echarts {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;

    img {
      width: 100%;
      //max-width: 800px;
    }
  }
}
</style>
