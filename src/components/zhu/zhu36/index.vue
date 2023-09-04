<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>
import dayjs from "dayjs";
import * as echarts from "echarts"
export default {
  name: 'echarts1',
  components: {},
  data() {
    return {
      list: []
    }
  },
  watch: {
    list() {
      this.drawLine()
    },
  },
  computed: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts)
      var spliceStr = function (value, len) {
        if (value.length <= len) {
          return value
        }
        var newValue = "";
        var k = 0;
        for (var i = Math.ceil(value.length / len); i > 0; i--) {
          newValue += value.substr(k, len) + (i == 1 ? '' : '\n');
          k += len;
        }
        return newValue;
      }
      var baseDate = `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}`
      // echart配置
      var option = {
        color: "#0A8BFF",
        title: [
          {
            text: '部门名称',
            left: 28,
            textStyle: {
              color: 'rgba(5, 252, 204, 1)',
              fontSize: 11,
            }
          }, {
            text: '时间',
            right: 0,
            bottom: 18,
            textStyle: {
              color: 'rgba(5, 252, 204, 1)',
              fontSize: 11,
            }
          },
        ],
        tooltip: {
          enterable: true,
          //alwaysShowContent:true,
          hideDelay: 100,
          borderRadius: 5,//边框圆角
          padding: [5, 0, 5, 0],    // [5, 10, 15, 20] 内边距
          // position: function (point, params, dom, rect, size) {
          //   $(dom).html('<div style="font-size:14px;color:rgba(0,0,0,0.65)" class="tip"><h1 style="font-size:14px;color:rgba(0,0,0,0.85);height:25px;display:flex;align-items: center;padding:0 0 5px 8px;margin:0;border-bottom:1px solid rgba(0,0,0,0.06);font-weight:bold">' +
          //       params.name.split(',')[0] + '</h1> <p style="margin:0;padding:0 8px 0 8px;height:25px;display:flex;align-items: center;">时段:' +
          //       params.value[1].split(' ')[1] + '~' + params.value[2].split(' ')[1] +
          //       ' </p><p style="margin:0;padding:0 8px 0 8px;height:25px;display:flex;align-items: center;">总工时:' + params.name.split(',')[1] +
          //       ' </p></div>')
          // },
        },
        legend: {
          y: 'top',
          x: 'right',
          itemWidth: 10,
          itemHeight: 4,
          textStyle: {
            color: 'rgba(149, 201, 255, 1)',
            fontSize: 12
          }
        },
        grid: {
          containLabel: true,
          left: 10,
          bottom: 20,
          top: 25,
          right: 40,
        },
        xAxis: {
          type: 'time',
          axisLabel: {
            color: 'rgba(149, 201, 255, 1)',
            fontSize: 12,
            interval: 0,
            lineHeight: 15,
            formatter: function (value, index) {
              return dayjs(value).format("HH:mm")
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(9, 41, 117, 1.00)',
              width: 1,
            },
            show: true,
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#335971',
              "type": "dashed"
            },
          },
        },
        yAxis: {
          data: ['发展规划与质量保障办公室', '图书馆', '开放教育学院', '信息中心', '学生工作处', '教务处', '人事处'],
          axisLabel: {
            color: 'rgba(149, 201, 255, 1)',
            fontSize: 10,
            interval: 0,
            lineHeight: 12,
            formatter: function (value) {
              return spliceStr(value, 6)
            },
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(9, 41, 117, 1.00)',
              width: 1,
            },
            show: false,
          },
          axisTick: {
            lineStyle: {
              color: '#668092',
              width: 0,
            },
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(6, 36, 106, 1.00)',
              "type": "dashed"
            },
          },
        },
        series: [
          {
            name: "API",
            color: 'rgba(95, 213, 236, 1)',
            type: 'custom',
            renderItem: function (params, api) {//开发者自定义的图形元素渲染逻辑，是通过书写 renderItem 函数实现的
              var categoryIndex = api.value(0);//这里使用 api.value(0) 取出当前 dataItem 中第一个维度的数值。
              var start = api.coord([api.value(1), categoryIndex]); // 这里使用 api.coord(...) 将数值在当前坐标系中转换成为屏幕上的点的像素值。
              var end = api.coord([api.value(2), categoryIndex]);
              // var height = api.size([0, 1])[1];
              var height = 4;
              return {
                type: 'rect',// 表示这个图形元素是矩形。还可以是 'circle', 'sector', 'polygon' 等等。
                shape: echarts.graphic.clipRectByRect({ // 矩形的位置和大小。
                  x: start[0],
                  y: start[1] - 5 - height / 2,
                  width: end[0] - start[0],
                  height: height
                }, { // 当前坐标系的包围盒。
                  x: params.coordSys.x,
                  y: params.coordSys.y,
                  width: params.coordSys.width,
                  height: params.coordSys.height
                }),
                style: api.style()
              };
            },
            encode: {
              x: [0, 1], // data 中『维度1』和『维度2』对应到 X 轴
              y: 0// data 中『维度0』对应到 Y 轴
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  console.log(params)
                  if (params.data !== null && params.data['value'] && params.data['value'][3] == 'in') {
                    return 'rgba(95, 213, 236, 1)';
                  } else {
                    return 'red';
                  }
                }
              }
            },
            data: [ // 维度0 维度1 维度2
              {
                value: [0, `${baseDate} 1:28`, `${baseDate} 5:28`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
              {
                value: [1, `${baseDate} 7:28`, `${baseDate} 15:28`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
              {
                value: [2, `${baseDate} 2:18`, `${baseDate} 4:28`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
              {
                value: [3, `${baseDate} 6:15`, `${baseDate} 17:58`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
              {
                value: [4, `${baseDate} 19:18`, `${baseDate} 20:28`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
              {
                value: [5, `${baseDate} 21:15`, `${baseDate} 23:38`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
              {
                value: [6, `${baseDate} 19:18`, `${baseDate} 20:28`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
              {
                value: [7, `${baseDate} 21:15`, `${baseDate} 23:38`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
            ]
          },
          {
            name: "ETL",
            color: '#ee8930',
            type: 'custom',
            renderItem: function (params, api) {//开发者自定义的图形元素渲染逻辑，是通过书写 renderItem 函数实现的
              var categoryIndex = api.value(0);//这里使用 api.value(0) 取出当前 dataItem 中第一个维度的数值。
              var start = api.coord([api.value(1), categoryIndex]); // 这里使用 api.coord(...) 将数值在当前坐标系中转换成为屏幕上的点的像素值。
              var end = api.coord([api.value(2), categoryIndex]);
              // var height = api.size([0, 1])[1];
              var height = 4;
              return {
                type: 'rect',// 表示这个图形元素是矩形。还可以是 'circle', 'sector', 'polygon' 等等。
                shape: echarts.graphic.clipRectByRect({ // 矩形的位置和大小。
                  x: start[0],
                  y: start[1] + 3 - height / 2,
                  width: end[0] - start[0],
                  height: height
                }, { // 当前坐标系的包围盒。
                  x: params.coordSys.x,
                  y: params.coordSys.y,
                  width: params.coordSys.width,
                  height: params.coordSys.height
                }),
                style: api.style()
              };
            },
            encode: {
              x: [0, 1], // data 中『维度1』和『维度2』对应到 X 轴
              y: 0// data 中『维度0』对应到 Y 轴
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  console.log(params)
                  if (params.data !== null && params.data['value'] && params.data['value'][3] == 'in') {
                    return 'rgba(238, 137, 47, 1)';
                  } else {
                    return 'red';
                  }
                }
              }
            },
            data: [ // 维度0 维度1 维度2
              {
                value: [0, `${baseDate} 1:28`, `${baseDate} 5:28`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
              {
                value: [1, `${baseDate} 7:28`, `${baseDate} 15:28`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
              {
                value: [2, `${baseDate} 2:18`, `${baseDate} 4:28`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
              {
                value: [3, `${baseDate} 6:15`, `${baseDate} 17:58`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
              {
                value: [4, `${baseDate} 17:00`, `${baseDate} 20:28`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
              {
                value: [5, `${baseDate} 21:15`, `${baseDate} 23:38`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
              {
                value: [6, `${baseDate} 19:18`, `${baseDate} 20:28`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
              {
                value: [7, `${baseDate} 21:15`, `${baseDate} 23:38`, 'in']//0,1,2代表y轴的索引，后两位代表x轴数据开始和结束
              },
            ]
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
  height: 100%;
}
</style>
