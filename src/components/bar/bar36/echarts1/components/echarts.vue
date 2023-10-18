<template>
  <div class="echartsBody">
    <div class="echartsBody1" ref="echarts1"></div>
  </div>
</template>

<script>
import * as echarts from "echarts"

export default {
  name: 'echarts1',
  components: {},
  data() {
    return {}
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    shadowColor: {
      type: String,
      default() {
        return 'rgba(254, 175, 87, 0.5)';
      }
    },
    title: {
      type: String,
      default() {
        return '';
      }
    },
    total: {
      type: String,
      default() {
        return 0;
      }
    },
  },
  mounted() {
    var that = this;
    const viewElem = document.body;
    // 监听窗口变化,重绘echarts
    const resizeObserver = new ResizeObserver(() => {
      setTimeout(() => {
        that.drawEcharts();
      }, 300)
    });
    resizeObserver.observe(viewElem);
  },
  computed: {
    colorList: function () {
      var that = this;
      var colorList = []
      that.list.forEach((type) => {
            if (type.checked) {
              var color = new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                offset: 0,
                color: type.color1
              }, {
                offset: 1,
                color: type.color2
              }])
              colorList.push(color)
            }
          }
      );
      return colorList
    }
  },
  methods: {
    drawEcharts() {
      var that = this
      let myChart = echarts.init(this.$refs.echarts1)
      var colors = this.colorList
      var data = []
      var placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      };
      that.list.forEach((type) => {
        if (type.checked) {
          var datas = {
            ...type,
            itemStyle: {
              normal: {
                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                  offset: 0,
                  color: type.color1
                }, {
                  offset: 1,
                  color: type.color2
                }]),
                shadowColor: that.shadowColor
              }
            }
          }
          data.push(datas)
        }
      });
      var option = {
        color: colors,
        tooltip: {
          trigger: 'item',
          show: false,
        },
        series: [
          {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['50%', '90%'],
            labelLine: {
              normal: {
                length: 20
              }
            },
            label: {
              show: false,
              position: 'center', // to position it at the center
              formatter: function (params) {
                if (params.dataIndex === params.dataIndex) {
                  return '{percentage|' + params.percent.toFixed(0) + '%}\n{name|' + params.name + '}';
                } else {
                  return '';
                }
              },
              rich: {
                name: {
                  color: '#EBFFFF',
                  align: 'center',
                  fontSize: 16,
                  fontFamily: 'PingFang',
                  fontWeight: 'bold'
                },
                percentage: {
                  color: '#EBFFFF',
                  align: 'center',
                  fontSize: 30,
                  fontFamily: 'DIN-bold',
                  fontWeight: 'bold'
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: 20
                }
              },
            },
            data: data
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
.echartsBody {
  position: relative;
  width: 50%;
  height: calc(100% - 0px);

  .echartsBody1 {
    position: relative;
    width: 100%;
    height: calc(100% - 0px);
  }

  .echartsBody2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 0px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: flex-start;
    pointer-events: none;

    .echartsTitle {
      font-size: 30px;
      font-family: DIN;
      font-weight: normal;
      color: #FFFFFF;
      text-shadow: 0 0 10px rgba(120, 168, 238, 1.00);
    }

    .echartsDesc {
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: #9DB9E9;
    }
  }
}
</style>
