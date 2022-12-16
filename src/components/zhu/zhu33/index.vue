<template>
  <div class="echartsBody">
    <div class="echarts1" ref="echarts1">

    </div>
  </div>
</template>

<script>

export default {
  name: 'echarts1',
  components: {},
  data() {
    return {}
  },
  props: {
    color: {
      type: String,
      default() {
        return '';
      }
    },
    color2: {
      type: String,
      default() {
        return '';
      }
    },
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this;
      window.addEventListener('resize', this.drawLine)
      let myChart = that.$echarts.init(this.$refs.echarts1)
      var data = [];
      var dataCount = 40;
      var startTime = +new Date();
      var categories = ['设备A1'];
      var types = [
        {name: '运行', color: '#75d874'},
        {name: '故障', color: '#bd6d6c'},
        {name: '等待', color: '#e0bc78'},
        {name: '备用', color: '#7b9ce1'},
      ];

//产生模拟数据
      that.$echarts.util.each(categories, function (category, index) {
        var baseTime = startTime;
        for (var i = 0; i < dataCount; i++) {
          var typeItem = types[Math.round(Math.random() * (types.length - 1))];
          var duration = Math.round(Math.random() * 1000000);
          data.push({
            name: typeItem.name,
            value: [
              index,
              baseTime,
              baseTime += duration,
              duration
            ],
            itemStyle: {
              normal: {
                color: typeItem.color
              }
            }
          });
          baseTime += Math.round(Math.random() * 2000);
        }
      });

//设定图形效果
      function renderItem(params, api) {
        var categoryIndex = api.value(0);
        var start = api.coord([api.value(1), categoryIndex]);
        var end = api.coord([api.value(2), categoryIndex]);
        var height = api.size([0, 1])[1] * 0.2;

        var rectShape = that.$echarts.graphic.clipRectByRect({
          x: start[0],
          y: start[1] - height / 2,
          width: end[0] - start[0],
          height: height
        }, {
          x: params.coordSys.x,
          y: params.coordSys.y,
          width: params.coordSys.width,
          height: params.coordSys.height
        });

        return rectShape && {
          type: 'rect',
          shape: rectShape,
          style: api.style()
        };

      }

      var option = {
        //鼠标提示
        tooltip: {
          formatter: function (params) {
            return params.marker + params.name + ': ' + params.value[3] + ' ms';
          }
        },
        //缩放
        dataZoom: [{
          type: 'slider',
          show: false,
          filterMode: 'weakFilter',
          showDataShadow: false,
          top: 0,
          height: 10,
          borderColor: 'transparent',
          backgroundColor: '#e2e2e2',
          handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', //jshint ignore:line
          handleSize: 20,
          handleStyle: {
            shadowBlur: 6,
            shadowOffsetX: 1,
            shadowOffsetY: 2,
            shadowColor: '#aaa'
          },
          labelFormatter: '',
          start: 0,
          end: 70,
        }, {
          type: 'inside',
          filterMode: 'weakFilter'

        }],
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: 40
        },
        xAxis: {
          min: startTime,
          scale: true,
          axisLabel: {
            show: true,
            margin: -5,
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "rgba(136, 159, 204, .2)"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#889fcc"
            }
          },
        },
        yAxis: {
          data: categories,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#889fcc"
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "rgba(136, 159, 204, .2)"
            }
          },
        },
        series: [{
          name: '运行',
          type: 'custom',
          renderItem: renderItem,
          itemStyle: {
            opacity: 0.8,
            color: "#75d874"
          },
          encode: {
            x: [1, 2],
            y: 0
          },
          data: data
        },
          {
            name: '故障',
            type: 'custom',
            renderItem: renderItem,
            itemStyle: {
              opacity: 0.8,
              normal: {
                color: "#bd6d6c",
                borderWidth: 2
              }
            },
            encode: {
              x: [1, 2],
              y: 0
            },
            data: data
          },
          {
            name: '等待',
            type: 'custom',
            renderItem: renderItem,
            itemStyle: {
              opacity: 0.8,
              normal: {
                color: "#e0bc78",
                borderWidth: 2
              }
            },
            encode: {
              x: [1, 2],
              y: 0
            },
            data: data
          },
          {
            name: '备用',
            type: 'custom',
            renderItem: renderItem,
            itemStyle: {
              opacity: 0.8,
              normal: {
                color: "#7b9ce1",
                borderWidth: 2
              }
            },
            encode: {
              x: [1, 2],
              y: 0
            },
            data: data
          }
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
.echartsBody {
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: -15px;

  .echarts1 {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
}

</style>
