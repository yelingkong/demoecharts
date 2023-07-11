<template>
  <div class="echarts1" ref="echarts">
  </div>
</template>

<script>
import * as echarts from "echarts"
import img from '../assets/echartsbg.png'
import {FontChart} from "@/utils/utils.js";

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
        return [
          {
            name: '焚烧',
            value: 40
          },
          {
            name: '填埋',
            value: 30
          },
          {
            name: '资源化',
            value: 30
          },
          {
            name: '水泥窑协同',
            value: 30
          },
          {
            name: '水泥窑协同1',
            value: 30
          },
          {
            name: '水泥窑协同2',
            value: 30
          },
          {
            name: '水泥窑协同3',
            value: 30
          },
          {
            name: '水泥窑协同4',
            value: 30
          },
          {
            name: '水泥窑协同5',
            value: 30
          }];
      }
    },
    color: {
      type: Array,
      default() {
        return [
          {
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
          }, {
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
          },
        ];
      }
    },
  },
  watch: {
    list() {
      this.drawLine()
    },
  },
  computed: {
    colorList: function () {
      var list = this.color
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
  methods: {
    drawEcharts() {
      var that = this
      let myChart = echarts.init(this.$refs.echarts)
      var colors = this.colorList
      var data = that.list
      var option = {
        color: colors,
        legend: {
          height: '80%',
          show: true,
          type: "scroll",
          orient: 'vertical',
          right: '10%',
          top: 'center',
          bottom: 20,
          pageButtonItemGap: 10,
          pageButtonGap: 10,
          pageIconColor: '#44e6fd',
          pageIconInactiveColor: '#fbffff',
          pageTextStyle: {
            color: '#35ffff'
          },
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          itemWidth: 15,
          itemHeight: 10,
          itemGap: 16
        },
        series: [
          {
            name: '服务呈现',
            type: 'pie',
            radius: ['55%', '65%'],
            center: ['29%', '50%'],
            label: {
              position: 'center',
              normal: {
                show: false,
                fontSize: 14,
                position: 'center'
              },
            },
            emphasis: {
              label: {
                show: false,
                formatter: function (value, index) {
                  console.log(value)
                  return '{label|' + value.value + '}\n'
                    + '{value|' + value.name + '}'
                },
                rich: {
                  label: {
                    padding: 0,
                    align: 'center',
                    verticalAlign: 'middle',
                    fontSize: FontChart(26),
                    color: '#0FFFFF',
                  },
                  value: {
                    align: 'center',
                    color: '#9AABD1',
                    padding: [0, 0, 10, 0],
                    fontSize: FontChart(16)
                  },
                },
              }
            },
            data: data
          },
        ],
        graphic: [
          {
            type: 'image', // 图形元素类型
            id: 'logo', // 更新或删除图形元素时指定更新哪个图形元素，如果不需要用可以忽略。
            z: 0, // 层叠
            bounding: 'all', // 决定此图形元素在定位时，对自身的包围盒计算方式
            left: '1%',
            // left: 'center',
            top: 'center',
            style: {
              image: img,// 该图片为https开头或base64在线链接图片
              width: FontChart(250),
              height: FontChart(250)
            }
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
        dataIndex: 0,//默认选中第0个
      });
      console.log(myChart)
      myChart.on('mouseover', function (e) {
        if (index) {
          index = null
          myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: 0,
          });
        }
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.echarts1 {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
