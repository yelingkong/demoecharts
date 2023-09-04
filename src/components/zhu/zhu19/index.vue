<template>
  <div ref="myChart1" class="myChart1">

  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: "zhuzhuangtu",
  components: {},
  props: {
    id: {
      type: String,
      default() {
        return '';
      }
    }
  },
  data() {
    return {
      status: ''
    }
  },
  watch: {},
  mounted() {
    this.lines()
  },
  methods: {
    lines() {
      var that = this;
      window.addEventListener('resize', this.lines)
      let myChart = echarts.init(this.$refs.myChart1);
      var option = {
        "textStyle": {
          "show": false,
          "color": "#c0c3cd",
          "fontSize": 14
        },
        grid: {
          left: '20',
          right: '20',
          bottom: '20',
          top: '10',
          containLabel: true
        },
        "xAxis": {
          "nameTextStyle": {
            "color": "#c0c3cd",
            "padding": [0, 0, -10, 0],
            "fontSize": 14
          },
          "axisLabel": {
            "color": "rgba(157, 173, 178, 1)",
            "fontSize": 12,
            "interval": 0,
            show: true
          },
          "axisTick": {
            show: false,
            "lineStyle": {
              "color": "#384267",
              "width": 1
            },
          },
          "splitLine": {
            "show": false
          },

          "axisLine": {
            "show": false,
            "lineStyle": {
              "color": "rgba(25, 58, 63, 1)",
            },
          },
          "data": ["船营区", "龙潭区", "昌邑区", "丰满区", "永吉县", "磐石市", "桦甸市"],
          "type": "category"
        },
        "yAxis": {
          "axisLabel": {
            show: true,
            "color": "rgba(157, 173, 178, 1)",
            "fontSize": 14
          },
          "axisLine": {
            "lineStyle": {
              "color": "rgba(25, 58, 63, 1)",
            },
            show: true,
          },
          "axisTick": {
            "lineStyle": {
              "color": "red",
              "width": 1
            },
            "show": false
          },
          "splitLine": {
            "show": true,
            "lineStyle": {
              "color": "rgba(25, 58, 63, 1)",
            }
          },
        },

        "series": [
          {
            "data": [10, 5, 5, 7, 5, 7, 5],
            "type": "bar",
            "barMaxWidth": "auto",
            "barWidth": 15,
            "itemStyle": {
              "color": {
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "type": "linear",
                "colorStops": [{
                  "offset": 0,
                  "color": "rgba(7, 255, 182, 1)"
                }, {
                  "offset": 1,
                  "color": "rgba(22, 147, 114, 1)"
                }]
              }
            },
            "label": {
              "show": false,
              "position": "top",
              "distance": 10,
              "color": "#fff"
            }
          },
          {
            "data": [10, 5, 5, 7, 5, 7, 5],
            "type": "pictorialBar",
            "barMaxWidth": "10",
            "symbolPosition": "end",
            "symbol": "Rectangle",
            "symbolOffset": [0, "-50%"],
            "symbolSize": [15, -3],
            "zlevel": 2,
            itemStyle: {
              normal: {
                borderWidth: 0,
                color: 'rgba(30, 72, 73, 1.00)',
              }
            },
          },
          {
            "data": [10, 5, 5, 7, 5, 7, 5],
            "type": "pictorialBar",
            "barMaxWidth": "10",
            "symbolPosition": "end",
            "symbol": "Rectangle",
            "symbolOffset": [0, "-50%"],
            "symbolSize": [15, 4],
            "zlevel": 3,
            itemStyle: {
              normal: {
                borderWidth: 0,
                color: 'rgba(90, 224, 188, 1)',
              }
            },
          }
        ],
        "tooltip": {
          "show": true,
          formatter: '数据:{c0}'
        }
      }
      myChart.clear();
      myChart.resize();
      myChart.setOption(option);
    },
  }
}
</script>

<style lang="scss" scoped>
.myChart1 {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
