<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>
import jiaxing from './map.json'

export default {
  name: 'echarts1',
  components: {},
  props: {
    id: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      status: '',
      xdata: [],
      ydata: []
    }
  },
  watch: {},
  mounted() {
    let myChart = this.$echarts.init(this.$refs.echarts)
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      var key2 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAzCAYAAAAZ+mH/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFFQjg5RTg2M0U5ODExRUM5QTc2RDkwMTEyMTVGQUI5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFFQjg5RTg3M0U5ODExRUM5QTc2RDkwMTEyMTVGQUI5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUVCODlFODQzRTk4MTFFQzlBNzZEOTAxMTIxNUZBQjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUVCODlFODUzRTk4MTFFQzlBNzZEOTAxMTIxNUZBQjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6MWSKqAAAHLElEQVR42sRZ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'
      var myChart = this.$echarts.init(this.$refs.echarts)
      this.$echarts.registerMap('js', jiaxing)
      myChart.hideLoading()
      var mapdata = [
        {
          name: '嘉善县',
          value: 100
        }, {
          name: '南湖区',
          value: 10
        }, {
          name: '平湖市',
          value: 20
        }, {
          name: '桐乡市',
          value: 100
        }, {
          name: '海盐县',
          value: 100
        }, {
          name: '海宁市',
          value: 20
        }, {
          name: '通化市',
          value: 61
        }, {
          name: '秀洲区',
          value: 61
        }
      ]
      let cs3 = [
        {
          name: '阳光大酒店',
          value: [120.727156, 30.757991],
          type: 'car'
        },
        {
          name: '佳源绿洲酒店',
          value: [120.780258, 30.742913],
          type: 'car'
        },
        {
          name: '龙之梦酒店',
          value: [120.73893, 30.741021],
          type: 'car'
        },
        {
          name: '佳源四季酒店',
          value: [120.708703, 30.759984],
          type: 'car'
        },
        {
          name: '清池温泉酒店',
          value: [120.597085, 30.716519],
          type: 'car'
        },
        {
          name: '晶晖酒店',
          value: [120.759586, 30.719606],
          type: 'car'
        },
        {
          name: '振石大酒店',
          value: [120.585205, 30.628049],
          type: 'car'
        },
      ]
      var option = {
        visualMap: {
          show: false,
          max: 100,
          pieces: [
            {
              max: 15,
              min: 0,
              label: '安全',
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 1,
                colorStops: [{
                  offset: 0,
                  color: '#A0EDFF' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#A0EDFF' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            },
            {
              max: 90,
              min: 20,
              label: '安全',
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 1,
                colorStops: [{
                  offset: 0,
                  color: '#00DFFF' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#00DFFF' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            },
            {
              min: 100,
              label: '危险',
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 1,
                colorStops: [{
                  offset: 0,
                  color: '#00BCFF' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#00BCFF' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            },
          ]
        },
        tooltip: {
          trigger: 'item',
          showDelay: 0,
          transitionDuration: 0.2,
          borderWidth: 0,
          padding: [5, 10, 5, 10],
          show: true,
          formatter: function (params) {
            return params.name
          }
        },
        geo: [
          {
            map: 'js',
            roam: false, //是否允许缩放
            zoom: 1.3, //默认显示级别
            scaleLimit: {
              min: 0,
              max: 3
            }, //缩放级别
            itemStyle: {
              normal: {
                areaColor: '#00BCFF',
                shadowColor: '#00BCFF',
                shadowBlur: 1,
                shadowOffsetX: 0,
                shadowOffsetY: 5,
              }
            },
          }],
        series: [
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            z: 5,
            data: [],
            symbolSize: 14,
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  return '{fline|地点：' + params.data.city + '}\n{tline|' + (params.data.info || '发生xx集件') + '}'
                },
                position: 'top',
                backgroundColor: '#00BCFF',
                padding: [0, 0],
                borderRadius: 3,
                lineHeight: 32,
                color: '#00BCFF',
                rich: {
                  fline: {
                    padding: [0, 10, 10, 10],
                    color: '#00BCFF'
                  },
                  tline: {
                    padding: [10, 10, 0, 10],
                    color: '#00BCFF'
                  }
                }
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              color: '#00BCFF',
            }
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            z: 5,
            data: [],
            symbolSize: 14,
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  return '{fline|地点：' + params.data.city + '}\n{tline|' + (params.data.info || '发生xx集件') + '}'
                },
                position: 'top',
                backgroundColor: '#00BCFF',
                padding: [0, 0],
                borderRadius: 3,
                lineHeight: 32,
                color: '#00BCFF',
                rich: {
                  fline: {
                    padding: [0, 10, 10, 10],
                    color: '#ffffff'
                  },
                  tline: {
                    padding: [10, 10, 0, 10],
                    color: '#ffffff'
                  }
                }
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              color: 'rgba(13, 38, 77, 1)',
            }
          },
          {
            type: 'map',
            mapType: 'js',
            geoIndex: -1,
            zoom: 1.3, //默认显示级别
            label: {
              show: true,
              color: 'rgba(13, 38, 77, 1)',
              emphasis: {
                color: 'white',
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(13, 38, 77, 1)',
                borderWidth: 1
              },
              emphasis: {
                areaColor: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 1,
                  colorStops: [{
                    offset: 0,
                    color: '#00BCFF' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#00BCFF' // 100% 处的颜色
                  }],
                  globalCoord: false // 缺省为 false
                },
                borderWidth: 0,
                color: 'green'
              }
            },
            data: mapdata
          },
          {
            name: 'cs3',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: cs3,
            symbol: key2,
            symbolSize: [33, 51],
          },
        ]
      }
      myChart.resize()
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts1 {
  position: relative;
  width: 100%;
  height: calc(100% - 80px);
  z-index: 1;
}
</style>
