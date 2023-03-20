<template>
  <div class="echarts1s">
    <div class="echarts1" ref="echarts">

    </div>
    <div class="title">
      <div class="num">
        {{ num }}
      </div>
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts"

export default {
  name: 'echarts1',
  components: {},
  data() {
    return {
      title: '',
      num: '',
      dataIndex: 0
    }
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  watch: {
    list() {
      this.drawLine()
    },
  },
  computed: {
    colorList: function () {
      var list = [{
        start: 'rgba(30, 191, 244, 1)',
        end: 'rgba(57, 255, 234, 1)'
      }, {
        start: 'rgba(30, 85, 244, 1)',
        end: 'rgba(30, 85, 244, 1)'
      }, {
        start: 'rgba(249, 102, 122, 1)',
        end: 'rgba(249, 102, 122, 1)'
      }, {
        start: 'rgba(247, 175, 32, 1)',
        end: 'rgba(254, 120, 53, 1)'
      }]
      var colorList = []
      list.forEach((type) => {
        var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: type.start
        },
          {
            offset: 1,
            color: type.end
          }
        ])
        colorList.push(color)
      });
      return colorList
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts)
      var colors = this.colorList
      var data = that.list
      if (that.list.length > 0) {
        that.title = data[that.dataIndex].name
        that.num = data[that.dataIndex].value
      }
      var option = {
        color: colors,
        series: [
          {
            name: '服务呈现',
            type: 'pie',
            radius: ['55%', '65%'],
            center: ['50%', '50%'],
            // roseType: 'radius',
            label: {
              normal: {
                show: false,
                fontSize: 14,
                position: ['50%', '50%'],
                color: '#333',
                align: 'center',
                formatter: [
                  '{a|}',
                  '{b|}'
                ].join('\n'),
                rich: {
                  a: {
                    color: '#999',
                    fontWeight: 400,
                    padding: 5,
                    align: 'center'
                  },
                  b: {
                    fontSize: '16',
                    padding: 5,
                    align: 'center',
                    color: '#9AABD1'
                  }
                }
              },
              emphasis: {
                show: false,
                fontSize: 14,
                color: '#333',
                position: ['50%', '50%'],
                formatter: [
                  '{a|{d}%}',
                  '{b|{b}}'
                ].join('\n'),
                rich: {
                  a: {
                    color: 'rgba(27, 195, 225, 1)',
                    fontWeight: 'bold',
                    padding: 5,
                    align: 'center',
                    fontSize: '24',
                  },
                  b: {
                    fontSize: '16',
                    padding: 5,
                    align: 'center',
                    color: '#9AABD1'
                  }
                }
              },
            },
            labelLine: {
              show: false,
              length: 0,
              length2: 0
            },
            data: data
          }
        ]
      }
      myChart.clear()
      myChart.resize()
      myChart.setOption(option)
      let index = 1;//默认选中第二个
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: 0,//默认选中第二个
      });
      myChart.on('mouseover', function (e) {
        if (e.dataIndex != that.dataIndex) {
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: that.dataIndex,
          });
          that.$nextTick(() => {
            that.dataIndex = e.dataIndex;
            myChart.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: that.dataIndex,
            });
            that.title = e.name
            that.num = e.value
            console.log(e)
          })
        }
      });
      myChart.on('mouseout', function (e) {
        that.dataIndex = e.dataIndex;
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: e.dataIndex,
        });
        console.log(e)
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.echarts1 {
  position: absolute;
  width: 196px;
  height: 196px;
  background: url("./echartsbg.png") center center no-repeat;
  background-size: 100% 100%;
  top: 0;
  z-index: 1;
}

.echarts1s {
  width: 196px;
  height: 196px;
  position: relative;
  //margin: 0 auto;
  margin-left: 20px;
}

.title {
  position: absolute;
  width: 196px;
  height: 196px;
  top: 0;
  z-index: 2;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: flex-start;

  .num {
    font-size: 16px;
    font-family: DIN;
    font-weight: bold;
    color: #0FFFFF;
  }

  p {
    font-size: 13px;
    font-family: PingFang;
    font-weight: bold;
    color: #9AABD1;
  }
}
</style>
