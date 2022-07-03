<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>
import jiaxing from './map.json'
import {openLink} from '@/utils/utils'

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
      ydata: [],
      list: [{
        title: '南湖区',
        link: 'https://www.wanjunshijie.com/'
      }, {
        title: '秀洲区',
        link: 'https://www.wanjunshijie.com/'
      }, {
        title: '嘉善县',
        link: 'https://www.wanjunshijie.com/'
      }, {
        title: '平湖市',
        link: 'https://www.wanjunshijie.com/'
      }, {
        title: '海盐县',
        link: 'https://www.wanjunshijie.com/'
      }, {
        title: '海宁市',
        link: 'https://www.wanjunshijie.com/'
      }, {
        title: '桐乡市',
        link: 'https://www.wanjunshijie.com/'
      }
      ]
    }
  },
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      var key1 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU3RDczMDQ2RjlBMTExRUI5QzJCOUY0OEExNjk4MEFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU3RDczMDQ3RjlBMTExRUI5QzJCOUY0OEExNjk4MEFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTdENzMwNDRGOUExMTFFQjlDMkI5RjQ4QTE2OTgwQUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTdENzMwNDVGOUExMTFFQjlDMkI5RjQ4QTE2OTgwQUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6mUNDZAAABHUlEQVR42mL8//8/Azpg/IAhpATEmkD8FYjPA/FHZMn/AhjqGZgY8AMDID4CxHeBeAsQ7wfil0A8FYh58GnEZ7ANEB8G4l9A3AjE16Hi7ECcBcQH8RnOiCMouIHUbSC+BMSeIN9CDbkGxLJISmcBcTopQRELxJJAvA1qKAh8gfoAGSQBsRgpQeECpa2QxFiB2ARNHQsQ22EzgAWHweJQOhwaxsegbDUsakVJMfgNWrDE4onk96QExX4G4sA/ID5EisGLgPgVEQYvA+JnpBgMynsx0PDFBUBJr4CcDLIbiO2B+CKa+F8gXgLNQG9JzSDoIBWaGUBAH5pxKCorYOAZWjARBMQaTDIYNXjUYOJLN3RwH1qRvgbiF8RoAAgwAFy2QGGdAteaAAAAAElFTkSuQmCC'
      var key2 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQxQ0ZFNTBERjlBMzExRUI5QzJCOUY0OEExNjk4MEFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQxQ0ZFNTBFRjlBMzExRUI5QzJCOUY0OEExNjk4MEFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDFDRkU1MEJGOUEzMTFFQjlDMkI5RjQ4QTE2OTgwQUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDFDRkU1MENGOUEzMTFFQjlDMkI5RjQ4QTE2OTgwQUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5q9UBPAAABDklEQVR42mJcYPmdgQTACMT/iVXMRIQaCyDeCMSfgPgfED8A4l4gFqHU8DwgPgrEKkD8ESomD8RFQHwRiHXINdwbiCcAcQ4QawOxIhAvRpKXAuKtQMxHjuHtQPwViGdC+X+AuAtNjRwQZ5JquAIQ6wIxBxDzIImLY1HrR6rhalCaBYiXQIPFBogn41GLAVhwiH9BYvtCMQMRaoly+WUg/kVkcj5LquGfgXgZkYbPIie1VALxEwIGg5LmLnIMfwHEztDMgg5AOXUaEKdQkkNvAbEREPsD8Uuo2GFoMs0mFC/ElC0gV24C4ldQ/hUgvkatgotsMGr4qOG0MfwDGk0QsJBgeDgQawHxcWI1AAQYAAZsLx0wTNxDAAAAAElFTkSuQmCC'
      var key3 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQxQ0ZFNTA5RjlBMzExRUI5QzJCOUY0OEExNjk4MEFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQxQ0ZFNTBBRjlBMzExRUI5QzJCOUY0OEExNjk4MEFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDFDRkU1MDdGOUEzMTFFQjlDMkI5RjQ4QTE2OTgwQUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDFDRkU1MDhGOUEzMTFFQjlDMkI5RjQ4QTE2OTgwQUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6edlJ3AAABHElEQVR42mL8//8/Azr4t9KKAQdgBGIMDUzhx7AqZmIgDCyAeCMQfwLZC8QPgLgXiEUIaSRkeB4QHwViFSD+CBWTB+IiIL4IxDrkGu4NxBOAOAeItYFYEYgXI8lLAfFWIOYjx/B2IP4KxDOh/D9A3IWmRg6IM0k1XAGIdYGYA4h5kMTFsaj1I9VwNSjNAsRLoMFiA8ST8ajFACw4xL8gsX2hmIEItUS5/DIQ/2IgDpwl1fDPQLyMSMNnkZNaKoH4CQGDQUlzFzmGvwBiZ2hmwSghgHgaEKdQkkNvAbEREPsD8Uuo2GFoMs0mFC/ElC0gV24C4ldQ/hUgvkZMZDAx0BCMGj5qOG0M/4BGEwQsJBgeDsRaQHycWA0AAQYAcpYzSpVeHgkAAAAASUVORK5CYII='
      var key4 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAXCAYAAAA/ZK6/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU3RDczMDQyRjlBMTExRUI5QzJCOUY0OEExNjk4MEFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU3RDczMDQzRjlBMTExRUI5QzJCOUY0OEExNjk4MEFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTdENzMwNDBGOUExMTFFQjlDMkI5RjQ4QTE2OTgwQUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTdENzMwNDFGOUExMTFFQjlDMkI5RjQ4QTE2OTgwQUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5KrLcBAAAA+0lEQVR42mLUjfzPgAMwAjGGJBMa3wKINwLxJyD+B8QPgLgXiEWwacgD4qNArALEH6Fi8kBcBMQXgVgHWYM3EE8A4hwg1gZiRSBejGSYFBBvBWI+RqgfLkEV8UOdwgA18TKakytANigAsS4QcwAxD5KkOJaA8ANpUINyWIB4CdRJNkA8GYsGNZCiL0gCvlCMC3xhgrrzFwNx4CxIw2cgXkakhlmwYK0E4icEFIOCeRdMwwsgdoZGEDoABfM0IE5Bj+lbQGwExP5A/BIqdhga5NkwfzJhMW0TEL+C8q8A8TV8iY8gGNVAiYYPaDQcsODQEA7EWkB8HF0CIMAAY3AvqwwdZ8wAAAAASUVORK5CYII='
      var myChart = this.$echarts.init(this.$refs.echarts)
      this.$echarts.registerMap('js', jiaxing)

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
      let cs3 = [{
        name: 'cs',
        value: [124.178809, 44.187925],
        type: 'car'
      },]
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
            zoom: 1.1, //默认显示级别
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
            zoom: 1.1, //默认显示级别
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
            symbolSize: 15,
          },
        ]
      }
      myChart.resize()
      myChart.on('click', function (params) {
        console.log(params.name)
        that.list.forEach((type) => {
          if (params.name == type.title) {
            openLink(type.link, '_target')
          }
        })
      })
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
