<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>
import data from './map.json'

export default {
  name: 'echarts1',
  components: {},
  props: {
    id: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      status: ''
    }
  },
  watch: {},
  mounted () {
    this.drawechartmap()
  },
  methods: {
    drawechartmap () {
      var that = this
      window.addEventListener('resize', this.drawechartmap)
      var key1 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU3RDczMDQ2RjlBMTExRUI5QzJCOUY0OEExNjk4MEFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU3RDczMDQ3RjlBMTExRUI5QzJCOUY0OEExNjk4MEFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTdENzMwNDRGOUExMTFFQjlDMkI5RjQ4QTE2OTgwQUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTdENzMwNDVGOUExMTFFQjlDMkI5RjQ4QTE2OTgwQUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6mUNDZAAABHUlEQVR42mL8//8/Azpg/IAhpATEmkD8FYjPA/FHZMn/AhjqGZgY8AMDID4CxHeBeAsQ7wfil0A8FYh58GnEZ7ANEB8G4l9A3AjE16Hi7ECcBcQH8RnOiCMouIHUbSC+BMSeIN9CDbkGxLJISmcBcTopQRELxJJAvA1qKAh8gfoAGSQBsRgpQeECpa2QxFiB2ARNHQsQ22EzgAWHweJQOhwaxsegbDUsakVJMfgNWrDE4onk96QExX4G4sA/ID5EisGLgPgVEQYvA+JnpBgMynsx0PDFBUBJr4CcDLIbiO2B+CKa+F8gXgLNQG9JzSDoIBWaGUBAH5pxKCorYOAZWjARBMQaTDIYNXjUYOJLN3RwH1qRvgbiF8RoAAgwAFy2QGGdAteaAAAAAElFTkSuQmCC'
      var key2 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQxQ0ZFNTBERjlBMzExRUI5QzJCOUY0OEExNjk4MEFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQxQ0ZFNTBFRjlBMzExRUI5QzJCOUY0OEExNjk4MEFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDFDRkU1MEJGOUEzMTFFQjlDMkI5RjQ4QTE2OTgwQUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDFDRkU1MENGOUEzMTFFQjlDMkI5RjQ4QTE2OTgwQUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5q9UBPAAABDklEQVR42mJcYPmdgQTACMT/iVXMRIQaCyDeCMSfgPgfED8A4l4gFqHU8DwgPgrEKkD8ESomD8RFQHwRiHXINdwbiCcAcQ4QawOxIhAvRpKXAuKtQMxHjuHtQPwViGdC+X+AuAtNjRwQZ5JquAIQ6wIxBxDzIImLY1HrR6rhalCaBYiXQIPFBogn41GLAVhwiH9BYvtCMQMRaoly+WUg/kVkcj5LquGfgXgZkYbPIie1VALxEwIGg5LmLnIMfwHEztDMgg5AOXUaEKdQkkNvAbEREPsD8Uuo2GFoMs0mFC/ElC0gV24C4ldQ/hUgvkatgotsMGr4qOG0MfwDGk0QsJBgeDgQawHxcWI1AAQYAAZsLx0wTNxDAAAAAElFTkSuQmCC'
      var key3 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQxQ0ZFNTA5RjlBMzExRUI5QzJCOUY0OEExNjk4MEFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQxQ0ZFNTBBRjlBMzExRUI5QzJCOUY0OEExNjk4MEFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDFDRkU1MDdGOUEzMTFFQjlDMkI5RjQ4QTE2OTgwQUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDFDRkU1MDhGOUEzMTFFQjlDMkI5RjQ4QTE2OTgwQUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6edlJ3AAABHElEQVR42mL8//8/Azr4t9KKAQdgBGIMDUzhx7AqZmIgDCyAeCMQfwLZC8QPgLgXiEUIaSRkeB4QHwViFSD+CBWTB+IiIL4IxDrkGu4NxBOAOAeItYFYEYgXI8lLAfFWIOYjx/B2IP4KxDOh/D9A3IWmRg6IM0k1XAGIdYGYA4h5kMTFsaj1I9VwNSjNAsRLoMFiA8ST8ajFACw4xL8gsX2hmIEItUS5/DIQ/2IgDpwl1fDPQLyMSMNnkZNaKoH4CQGDQUlzFzmGvwBiZ2hmwSghgHgaEKdQkkNvAbEREPsD8Uuo2GFoMs0mFC/ElC0gV24C4ldQ/hUgvkZMZDAx0BCMGj5qOG0M/4BGEwQsJBgeDsRaQHycWA0AAQYAcpYzSpVeHgkAAAAASUVORK5CYII='
      var myChart = this.$echarts.init(this.$refs.echarts)
      var center = {
        '白城市': [122.68664, 45.397315],
        '松原市': [124.827743, 45.138656],
        '长春市': [125.341817, 43.812171],
        '四平市': [124.366544, 43.166735],
        '吉林市': [126.558221, 43.836284],
        '辽源市': [125.15531, 42.887925],
        '通化市': [125.948047, 41.72714],
        '白山市': [126.476484, 41.926106],
        '延边朝鲜族自治州': [129.478809, 42.907925],
      }
      var mapdata = [
        {
          name: '白城市',
          value: 10
        }, {
          name: '松原市',
          value: 10
        }, {
          name: '长春市',
          value: 10
        }, {
          name: '四平市',
          value: 10
        }, {
          name: '吉林市',
          value: 100
        }, {
          name: '辽源市',
          value: 10
        }, {
          name: '通化市',
          value: 61
        }, {
          name: '白山市',
          value: 61
        }, {
          name: '延边朝鲜族自治州',
          value: 61
        },
      ]
      let
        bcs = [{
          name: '白城市',
          value: [122.733435, 45.570352],
          type: 'car'
        },] // 检查
      let sys = [{
        name: '松原市',
        value: [123.927743, 44.758656],
        type: 'car'
      },]
      let ccs = [{
        name: '长春市',
        value: [125.341817, 44.512171],
        type: 'car'
      },]
      let sps = [{
        name: '四平市',
        value: [123.966544, 43.466735],
        type: 'car'
      },]
      let jls = [{
        name: '吉林市',
        value: [126.558221, 43.536284],
        type: 'car'
      },]
      let lys = [{
        name: '辽源市',
        value: [125.15531, 42.787925],
        type: 'car'
      },]
      let ths = [{
        name: '通化市',
        value: [125.648047, 41.92714],
        type: 'car'
      },]
      let bss = [{
        name: '白山市',
        value: [126.976484, 42.026106],
        type: 'car'
      },]
      let yb = [{
        name: '延边',
        value: [127.978809, 43.107925],
        type: 'car'
      },]
      let cs = [{
        name: '女子戒毒所',
        value: [124.978809, 44.107925],
        type: 'car'
      },]
      let cs2 = [{
        name: '女子戒毒所2',
        value: [124.778809, 45.107925],
        type: 'car'
      },]
      let cs3 = [{
        name: '女子戒毒所3',
        value: [124.178809, 44.187925],
        type: 'car'
      },]
      this.$echarts.registerMap('js', data)
      var option = {
        visualMap: {
          show: false,
          max: 100,
          pieces: [
            {
              max: 50,
              min: 0,
              label: '安全',
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 1,
                colorStops: [{
                  offset: 0,
                  color: '#094269' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#013159' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              }
            },
            {
              min: 60,
              label: '危险',
              color: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 1,
                colorStops: [{
                  offset: 0,
                  color: '#09578D' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#004881' // 100% 处的颜色
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
        geo: [{
          map: 'js',
          roam: false, //是否允许缩放
          zoom: 1.1, //默认显示级别
          scaleLimit: {
            min: 0,
            max: 3
          }, //缩放级别
          itemStyle: {
            normal: {
              areaColor: '#07CCFC',
              shadowColor: '#07CCFC',
              shadowBlur: 1,
              shadowOffsetX: 0,
              shadowOffsetY: 5,
            }
          },
          // tooltip: {
          //     show: false
          // },
          // tooltip: {  // 指示器
          //   trigger: 'item'
          // },
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
                backgroundColor: '#004881',
                padding: [0, 0],
                borderRadius: 3,
                lineHeight: 32,
                color: '#f7fafb',
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
              color: '#013159',
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
                backgroundColor: 'rgba(233,63,66,.9)',
                padding: [0, 0],
                borderRadius: 3,
                lineHeight: 32,
                color: '#ffffff',
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
              color: '#e93f42',
            }
          },
          //地图
          {
            type: 'map',
            mapType: 'js',
            geoIndex: -1,
            zoom: 1.1, //默认显示级别
            label: {
              show: true,
              color: '#ffffff',
              emphasis: {
                color: 'white',
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#2980b9',
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
                    color: '#09578D' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#004881' // 100% 处的颜色
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
            name: 'bcs',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: bcs,
            symbol: key3,
            symbolSize: 15,
          }, {
            name: 'sys',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: sys,
            symbol: key1,
            symbolSize: 15,
          }, {
            name: 'ccs',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: ccs,
            symbol: key2,
            symbolSize: 15,
          }, {
            name: 'jls',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: jls,
            symbol: key2,
            symbolSize: 15,
          }, {
            name: 'sps',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: sps,
            symbol: key2,
            symbolSize: 15,
          }, {
            name: 'lys',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: lys,
            symbol: key1,
            symbolSize: 15,
          }, {
            name: 'ths',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: ths,
            symbol: key3,
            symbolSize: 15,
          }, {
            name: 'bss',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: bss,
            symbol: key3,
            symbolSize: 15,
          }, {
            name: 'bss',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: yb,
            symbol: key3,
            symbolSize: 15,
          }, {
            name: 'cs',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: cs,
            symbol: key3,
            symbolSize: 15,
          }, {
            name: 'cs2',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: cs2,
            symbol: key1,
            symbolSize: 15,
          }, {
            name: 'cs3',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: cs3,
            symbol: key2,
            symbolSize: 15,
          },
        ]
      }
      myChart.resize()
      myChart.setOption(option)
      myChart.on('click', function (params) {
        if (params.seriesType == 'scatter') {
          // 打开连接
          // that.$router.push({
          //   path: '/inner2',
          //   query: { name: params.data.name }
          // })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts1 {
  position: relative;
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 0px;
}
</style>
