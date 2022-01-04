<template>
  <div class="echarts12">
    <div class="echarts1" ref="echarts">
    </div>
  </div>
</template>

<script>
import map from './map.json'
export default {
  name: 'echarts1',
  components: { },
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
      status: '',
    }
  },
  watch: {},
  mounted () {
    this.drawechartmap()
  },
  methods: {
    drawechartmap () {
      var that = this
      var geoCoordMap = {
        '上海': [119.1803, 31.2891],
        '福建': [119.4543, 25.9222],
        '重庆': [108.384366, 30.439702],
        '北京': [116.4551, 40.2539],
        '辽宁': [123.1238, 42.1216],
        '河北': [114.4995, 38.1006],
        '天津': [117.4219, 39.4189],
        '山西': [112.3352, 37.9413],
        '陕西': [109.1162, 34.2004],
        '甘肃': [103.5901, 36.3043],
        '宁夏': [106.3586, 38.1775],
        '青海': [101.4038, 36.8207],
        '新疆': [87.9236, 43.5883],
        '西藏': [91.11, 29.97],
        '四川': [103.9526, 30.7617],
        '吉林': [125.8154, 44.2584],
        '山东': [117.1582, 36.8701],
        '河南': [113.4668, 34.6234],
        '江苏': [118.8062, 31.9208],
        '安徽': [117.29, 32.0581],
        '湖北': [114.3896, 30.6628],
        '浙江': [119.5313, 29.8773],
        '内蒙古': [110.3467, 41.4899],
        '江西': [116.0046, 28.6633],
        '湖南': [113.0823, 28.2568],
        '贵州': [106.6992, 26.7682],
        '云南': [102.9199, 25.4663],
        '广东': [113.12244, 23.009505],
        '广西': [108.479, 23.1152],
        '海南': [110.3893, 19.8516],
        '黑龙江': [127.9688, 45.368],
        '台湾': [121.4648, 25.5630]
      }
      var labelData = [
        {name: '盐田港', value: 1, coords: [[114.237, 22.5571], [108.730871, 26.590591]]},
        {
          name: '大铲湾港',
          value: 1,
          coords: [[113.863247421228, 22.5312412021239], [112.599478, 17.057501]]
        },
        {
          name: '深圳小漠港',
          value: 1,
          coords: [[115.043340287618, 22.7710296767815], [121.829747, 20.071286]]
        },
        {
          name: '惠州荃湾港',
          value: 1,
          coords: [[114.567119501524, 22.6945041397154], [119.474893, 16.699333]]
        },
      ]
      var mapDate = []
      window.addEventListener('resize', this.drawechartmap)
      var myChart = this.$echarts.init(this.$refs.echarts)
      this.$echarts.registerMap('china', map)
      var data = [
        {
          name: '北京',
          value: 2
        }, {
          name: '天津',
          value: 5
        }, {
          name: '上海',
          value: 1
        }, {
          name: '重庆',
          value: 0
        }, {
          name: '河北',
          value: 0
        }, {
          name: '河南',
          value: 0
        }, {
          name: '云南',
          value: 0
        }, {
          name: '辽宁',
          value: 0
        }, {
          name: '黑龙江',
          value: 0
        }, {
          name: '湖南',
          value: 0
        }, {
          name: '安徽',
          value: 0
        }, {
          name: '山东',
          value: 0
        }, {
          name: '新疆',
          value: 0
        }, {
          name: '江苏',
          value: 0
        }, {
          name: '浙江',
          value: 0
        }, {
          name: '江西',
          value: 0
        }, {
          name: '湖北',
          value: 0
        }, {
          name: '广西',
          value: 0
        }, {
          name: '甘肃',
          value: 0
        }, {
          name: '山西',
          value: 0
        }, {
          name: '内蒙古',
          value: 0
        }, {
          name: '陕西',
          value: 0
        }, {
          name: '吉林',
          value: 5
        }, {
          name: '福建',
          value: 5
        }, {
          name: '贵州',
          value: 15
        }, {
          name: '广东',
          value: 15
        }, {
          name: '青海',
          value: 0
        }, {
          name: '西藏',
          value: 0
        }, {
          name: '四川',
          value: 0
        }, {
          name: '宁夏',
          value: 0
        }, {
          name: '海南',
          value: 0
        }]
      const tooltipFormatter = function (params) {
        console.log(params)
        return `<div style="width: 100px;height: 46px;position: relative">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAmCAYAAAAxxTAbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDRjgyRDBCRkZBNTExRUI5REVGQkJCQkQ3NEExRkNGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDRjgyRDBDRkZBNTExRUI5REVGQkJCQkQ3NEExRkNGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNGODJEMDlGRkE1MTFFQjlERUZCQkJCRDc0QTFGQ0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNGODJEMEFGRkE1MTFFQjlERUZCQkJCRDc0QTFGQ0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz77Rw6pAAAGA0lEQVR42rxX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"
         style="width:24px;position: absolute;left: -30px;top: -50px" alt="">
        <div style="width: 100px;height: 46px;top: -50px;position: absolute;
         background: #0080EE;box-shadow:#0759AA 0 0 10px 2px;border-radius: 10px;">
        <div style="font-size: 12px; padding-left:5px;font-family: PingFang;font-weight: 500;color: #FFFFFF;">累计车位数:</div>
          <div style="font-size: 16px; padding-left:5px;font-family: DIN;font-weight: bold;color: #FFFFFF;">${params.data.value}</div>
      </div>
    </div>`
      }
      var option = {
        //地图显示：移动鼠标，显示数据
        tooltip: {
          trigger: 'item',
          show: false,
          showDelay: 0,
          transitionDuration: 0.2,
          borderWidth: 0,
          backgroundColor: 'rgba(255,255,255,0)',
          padding: 0,
          formatter: tooltipFormatter
        },
        //图例
        visualMap: {
          min: 19000,
          max: 70000,
          right: 10,
          bottom: 40,
          showLabel: !0,
          textStyle: {
            color: 'rgba(167, 194, 240, 1)'
          },
          pieces: [{
            gt: 10,
            lt: 20,
            label: '投放运营',
            color: 'rgba(255, 187, 5, 1)'
          }, {
            gt: 0,
            lt: 10,
            label: '战略部署',
            color: 'rgba(0, 228, 102, 1)'
          }, {
            gt: 0,
            lt: 0,
            label: '',
            color: '#00338F'
          }],
          show: !0
        },
        toolbox: {
          show: false,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: {
              readOnly: false
            },
            restore: {},
            saveAsImage: {}
          }
        },
        geo: {
          map: 'china',
          zoom: 1,
          label: {
            normal: {
              show: false,
              color: '#000000'
            },
            emphasis: {
              show: false,
              color: '#292929'
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#00338F'
            },
          }
        },
        series: [
          {
            type: 'map',
            mapType: 'china',
            map: 'china',
            itemStyle: {
              normal: {
                areaColor: '#00338F',
                borderColor: '#0094D6',
                borderWidth: 0.5,
                label: {
                  show: false,
                }
              },
              emphasis: {
                areaColor: '#FFBB07',
                borderColor: '#0094D6',
                areaStyle: '#FFBB07',
                label: {
                  show: false,
                }
              }
            },
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            data: data
          },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            // symbol: 'pin',
            symbol: function (value, params) {
              return 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAmCAYAAAAxxTAbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJDRjgyRDBCRkZBNTExRUI5REVGQkJCQkQ3NEExRkNGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJDRjgyRDBDRkZBNTExRUI5REVGQkJCQkQ3NEExRkNGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkNGODJEMDlGRkE1MTFFQjlERUZCQkJCRDc0QTFGQ0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkNGODJEMEFGRkE1MTFFQjlERUZCQkJCRDc0QTFGQ0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz77Rw6pAAAGA0lEQVR42rxX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'
            },
            symbolSize: [24, 35],
            symbolOffset: [-0, -0],
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: 'pink' // 标志颜色
              }
            },
            zlevel: 6,
            data: []
          },
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  var name = params.name
                  var value = params.data.datas
                  var text = `{fline|累计车位数：}\n{tline|${params.data.number}}`
                  return text
                },
                color: '#fff',
                rich: {
                  fline: {
                    padding: [0, 10, 5, 15],
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 400,
                  },
                  tline: {
                    padding: [5, 15],
                    color: '#fff',
                    fontSize: 16,
                    fontFamily: 'DIN',
                    fontWeight: 'bold'
                  },
                },
              },
              emphasis: {
                show: true,
              },
            },
            itemStyle: {
              color: '#00FFF6',
            },
            symbol: function (value, params) {
              return 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAABACAYAAADPhIOhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFENjQ5ODhCMDA5MjExRUM5RUQ3RkU4NUFFRjZFOUZCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFENjQ5ODhDMDA5MjExRUM5RUQ3RkU4NUFFRjZFOUZCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUQ2NDk4ODkwMDkyMTFFQzlFRDdGRTg1QUVGNkU5RkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUQ2NDk4OEEwMDkyMTFFQzlFRDdGRTg1QUVGNkU5RkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mHuUCAAADhUlEQVR42uydTW7bMBCFhxJje9m0mxwg61yi9/KiRU+TM3TXE3TZKxRpu0tsi2TtRJRHoyHtNrFEG+8BhGhKRgB+fsMfx0Nzcx8oI0N5HboPvU7hf+/bA7DMkW3Q6eGGA0BDDiyHFuuVaDOAOwlUXnbybf/HNsPh2gzUStQrpR0OPr1DIzjPrhyqZ891cG0GKi+1qPPnpMOh14PlroyvHYPK66TBlY41AmAsVryuhIsB9TRwvYAZS8PqpMAdhGIJ1bblqi2WtQPueFAbBnST6W+fC8UVg7eDOWMlAk7Bhd4GrAZ105Za6W8evrtQzGe/EuwO5nxbFu2VA7YiNAPs24J1wqXrttSsr6W7q/Y9RjpWc+viz+/wcfVEyxDoA/p9OhlDD/MFfXp3bb4mZso+NXniY2wEO189BkAtwcpbBqtHWtK1+SYmU4PhMDUr7rk2OA+o5cTpLYtqlhhzB2Al1LrnWu/Ro2VpxsbbWoOrOTYCth1cgC1NcmVico7VNile1rEAW5qsWG4OtngtDfd6h9uJAFuaaoVTz6C5b3c6sAZgSwarfgmT+j62H5IdwBamKjW2psAaZbw15B26srC9igSrrGOHcgB7jrOrI8AiFF8oWDgWYCGAhQAWOgVYA7BwLHROYJsGPQXHQgALTR2KAfZCHYsxFssdCKEYQiiG4FgIyx2ABdgLDcUYY7HcgRCKIYCFABYCWIAF2AsFi38YP3ewPK3MPncffrtTmkKCVdax/E3PmUiwji1OMUNM0KCmHEvUTzHjEIqLkxNwSXOsvOFJ5vDDD59LBsuTZXYsreJU7tbmuQBsaWraIkNyx9JmxtZ9Dj+ALU0b2qfjU8daqziVZ/x6yeEHsKVpzeA6FppDzrGeZHJGYx7IOWRnK0F1/YuBbTSoGlie9Dimc6tnd7ef199/LKlx79Gz08nY+ufV3e2XbXUlXCtnyGRu7kNMTBFTzPDE03NCWtspNh9yaW13UJ/a64r2ORUb9r5e9tOYEjXe5JlIQm/MRSLqMcCmElGvWZGh2GvrWCM+LdonaENIHT8G2EOp4zdsyeOUjYqgjbGpP+QIhz1MCTd12IM6xkqwJODKtOQ4nmU8qETHHc/ic7NiedKST4DFgUrjgJVXLU28bM/uPGlwKzaxwhFo00HWjkAjDaoEK+HGuiMcWliSgw+1qWAHD2TaAHc8qP98/68AAwB14eoLyYFs1wAAAABJRU5ErkJggg=='
            },
            symbolSize: [118, 64],
            symbolOffset: [70, 5],
            z: 999,
            data: [],
          },
          {
            type: 'lines',
            data: labelData,
            symbolSize: 5,
            symbol: 'circle',
            color: 'red',
            label: {
              show: true,
              padding: [15, 15],
              color: '#fff',
              areaColor: 'red',
              borderRadius: 6,
              formatter: '{b}'
            },
            lineStyle: {
              type: 'solid',
              opacity: 1,
              color: '#52E5EF'
            }
          }
        ]
      }
      myChart.resize()
      myChart.setOption(option)
      myChart.on('click', function (params) {
        var valarr = geoCoordMap[params.name]
        console.log(valarr)
        console.log(option.series[1])
        option.series[1].data = [{
          name: params.name,
          value: valarr,
          number: 1354,
        }]
        option.series[2].data = [{
          name: params.name,
          value: valarr,
          number: 1354,
        }]
        myChart.setOption(option, false)
      })
      myChart.on('dblclick', function (params) {
        console.log('双击')
        console.log(params)
        that.$refs.pops.getshow()
        myChart.setOption(option, false)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts1 {
  position: relative;
  width: 100%;
  height: calc(100% - 0px);
}

.echarts12 {
  position: relative;
  width: 100%;
  height: calc(100% - 0px);
}
</style>
