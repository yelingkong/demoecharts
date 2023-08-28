<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>


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
      var that = this
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      let myChart = this.$echarts.init(this.$refs.echarts1)
      var getname = ['确诊人员', '疑似人员', '阳性检测人员'];
      var getvalue = [300, 200, 100];
      var list = [
        {
          name: '确诊人员',
          value: 300
        }, {
          name: '疑似人员',
          value: 200
        }, {
          name: '阳性检测人员',
          value: 100
        },
      ]
      var data = [];
      for (var i = 0; i < getname.length; i++) {
        data.push({
          name: getname[i],
          value: getvalue[i]
        })
      }
      var colorList = ['rgba(29, 182, 179, 1.00)', 'rgba(46, 161, 135, 1.00)', 'rgba(57, 141, 164, 1.00)'];
      var rich = {
        name: {
          color: "#FFF",
          fontSize: 14,
          padding: [10, 15, 0, 10],
          fontWeight: '400',
          align: 'left'
        },
        value: {
          color: "#FFF",
          fontSize: 15,
          padding: [10, 10, 0, 15],
          fontWeight: '500',
          align: 'right'
        },
        percent: {
          color: "#FFF",
          align: 'right',
          fontSize: 15,
          fontWeight: '500',
          //padding: [0, 5]
        },
        hr: {
          width: '100%',
          height: 0,
        },
        cir: {
          fontSize: 26,
        }
      }
      var option = {
        tooltip: {
          trigger: 'axis',
        },
        title: [
          {
            top: '30%',
            x: '21.5%',
            text: '总共人员',
            textStyle: {
              fontSize: 16,
              color: '#d3d8e0',
            },
          }, {
            top: '50%',
            x: '25%',
            text: '1116',
            textStyle: {
              fontSize: 16,
              color: 'rgba(255, 255, 255, 1)',
            },
          },
        ],
        legend: {
          height: '100%',
          show: true,
          orient: 'vertical',
          right: '10%',
          bottom: 'center',
          align: 'left',
          textStyle: {
            color: '#fff',
            fontSize: 14
          },
          formatter: function (name) {
            var total = 0;
            var value;
            // debugger;
            list.forEach((item) => {
              total += Number(item.value);
              if (item.name == name) {
                value = item.value;
              }
            })
            var p = Math.round(((value / total) * 100)); //求出百分比
            return `${name}  ${p}%`;  //返回出图例所显示的内容是名称+百分比
          },
          itemWidth: 15,
          itemHeight: 15,
          itemGap: 30
        },
        series: [
          {
            tooltip: {
              show: false,
              trigger: 'item',
              formatter: function (params) {
                return params.name + '：' + params.value + '册<br>占比：' + params.percent.toFixed(2) + '%'
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(15, 23, 27, 1.00)',
                borderWidth: 3,
                color: function (params) {
                  return colorList[params.dataIndex]
                }
              }
            },
            type: 'pie',
            radius: ['80%', '92%'],
            center: ["30%", "50%"],
            label: {
              normal: {
                show: false,
                position: 'inner',
                rich: rich,
              }
            },
            data: data
          },
          {
            center: ["30%", "50%"],
            type: 'gauge',
            startAngle: 270,
            endAngle: -89.9999,
            axisTick: {
              show: false,
              length: 2,
            },
            axisLabel: {
              show: false,
            },
            radius: '110%',
            splitNumber: '50',
            axisLine: {
              show: false,
              lineStyle: {
                color: '#3a4f5b',
                width: 1,
              },
            },
            splitLine: {
              length: 1,
              lineStyle: {
                width: 20,
                color: '#3a4f5b',
              },
            },
            detail: {
              show: false,
            },
          },
          {
            center: ["30%", "50%"],
            type: 'gauge',
            startAngle: 270,
            endAngle: -89.9999,
            axisTick: {
              show: false,
              length: 2,
            },
            axisLabel: {
              show: false,
            },
            radius: '80%',
            splitNumber: '50',
            axisLine: {
              show: false,
              lineStyle: {
                color: '#1c8a89',
                width: 1,
              },
            },
            splitLine: {
              length: 1,
              lineStyle: {
                width: 20,
                color: '#1c8a89',
              },
            },
            detail: {
              show: false,
            },
          },
          {
            type: 'pie',
            name: '饼状背景',
            radius: ['0%', '65%'],
            center: ["30%", "50%"],
            startAngle: 110,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.RadialGradient(.5, .5, 0.5, [{
                  offset: 0,
                  color: '#16272c'
                },
                  {
                    offset: 0.5,
                    color: '#182f34'
                  }, {
                    offset: 0.8,
                    color: '#1d3c40'
                  },
                  {
                    offset: 1,
                    color: '#1f4345'
                  }
                ], false),
              }
            },
            tooltip: {
              show: false,
            },
            label: {
              show: false
            },
            data: [50]
          },
        ]
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
  height: 100%;
}
</style>
