<template>
  <div class="echarts1">
    <div class="echarts1" ref="echarts">

    </div>
  </div>
</template>

<script>
import jiaxing from './map.json'
import caiyaoimg from './assets/caiyaoimg1.png'
import caiyaoimg2 from './assets/caiyaoimg2.png'
import caiyaoimg3 from './assets/caiyaoimg3.png'
import caiyaoimg4 from './assets/caiyaoimg4.png'
import caiyaoimg5 from './assets/caiyaoimg5.png'
import caiyaoimg6 from './assets/caiyaoimg6.png'
import caiyaoimg7 from './assets/caiyaoimg7.png'
import jiayao from './jiayao.json'
import {FontChart} from "../../../utils/utils";

export default {
  name: 'echarts1',
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
      list: jiayao,
      vlist: []
    }
  },
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    getpop(item) {
      var that = this
      that.vlist = []
      var data = []
      that.list.forEach((type) => {
        if (type.name == item) {
          data = type.vlist
        }
      })
      that.$nextTick(() => {
        that.vlist = data
        that.$nextTick(() => {
          that.$refs.popvideo.getshow()
        })
      })
    },
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      var myChart = this.$echarts.init(this.$refs.echarts)
      this.$echarts.registerMap('js', jiaxing)
      var mapdata = [
        {
          name: '嘉善县',
          value: 100,
          values: [120.934811, 30.93365],
          img: caiyaoimg
        }, {
          name: '南湖区',
          value: 10,
          values: [120.844811, 30.73365],
          img: caiyaoimg2
        }, {
          name: '平湖市',
          value: 20,
          values: [121.100397, 30.693793],
          img: caiyaoimg3
        }, {
          name: '桐乡市',
          value: 100,
          values: [120.561771, 30.631339],
          img: caiyaoimg4
        }, {
          name: '海盐县',
          value: 100,
          values: [120.958628, 30.450215],
          img: caiyaoimg5
        }, {
          name: '海宁市',
          value: 20,
          values: [120.673341, 30.415825],
          img: caiyaoimg6
        }, {
          name: '通化市',
          value: 61,
          values: [125.504084, 41.630371],
          img: caiyaoimg7
        }, {
          name: '秀洲区',
          value: 61,
          values: [120.648536, 30.801696],
          img: caiyaoimg7
        }
      ]
      var data2 = []
      mapdata.forEach((type) => {
        var datas = {
          type: 'scatter',
          coordinateSystem: 'geo',
          label: {
            normal: {
              show: true,
              position: 'top',
              offset: [0, FontChart(26)],
              formatter: function (params) {
                var name = params.name
                var value = params.data.datas
                var text = `{fline|嘉兴三宝}`
                return text
              },
              color: '#fff',
              rich: {
                fline: {
                  padding: [0, 0],
                  color: '#fff',
                  fontSize: FontChart(14),
                  fontWeight: 400,
                },
              },
            },
            emphasis: {
              show: true,
            },
          },
          itemStyle: {
            color: '#00FFF6',
            opacity: 1,
          },
          symbol: function (value, params) {
            return 'image://' + type.img
          },
          symbolSize: [FontChart(100), FontChart(110)],
          symbolOffset: [-0, -0],
          z: 999,
          data: [{
            name: type.name,
            value: type.values,
            number: 1354,
          }],
        }
        data2.push(datas)
      })
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
          ...data2
        ]
      }
      myChart.resize()
      myChart.on('click', function (params) {
        that.getpop(params.name)
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
  height: calc(100% - 0px);
  z-index: 1;
}
</style>
