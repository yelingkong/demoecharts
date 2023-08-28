<template>
  <div class="echarts1">
    <div class="echarts1" ref="echarts">

    </div>
  </div>
</template>

<script>
import jiaxing from './map.json'
import caiyaoimg from './assets/mapicon.png'
import {FontChart} from "@/utils/utils";

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
          name: '衢州市',
          value: 100,
          values: [118.868609,28.97504],
          img: caiyaoimg
        }, {
          name: '舟山市',
          value: 10,
          values: [122.231092,29.98941],
          img: caiyaoimg
        }, {

          name: '嘉兴市',
          value: 20,
          values: [120.758087,30.760905],
          img: caiyaoimg
        }, {
          name: '宁波市',
          value: 100,
          values: [121.630557,29.863062],
          img: caiyaoimg
        }, {
          name: '台州市',
          value: 100,
          values: [121.411047,28.655093],
          img: caiyaoimg
        }, {
          name: '温州市',
          value: 20,
          values: [120.707341,28.002107],
          img: caiyaoimg
        }, {
          name: '丽水市',
          value: 61,
          values: [119.819475,28.315669],
          img: caiyaoimg
        }, {
          name: '金华市',
          value: 61,
          values: [119.660053,29.078074],
          img: caiyaoimg
        }, {
          name: '杭州市',
          value: 61,
          values: [119.575916,29.937614],
          img: caiyaoimg
        }, {
          name: '湖州市',
          value: 61,
          values: [120.09883,30.890535],
          img: caiyaoimg
        }, {
          name: '绍兴市',
          value: 61,
          values: [120.565589,29.916016],
          img: caiyaoimg
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
              offset: [0, FontChart(57)],
              formatter: function (params) {
                var text = `{fline|${params.name}}`
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
              position: 'top',
              offset: [0, FontChart(62)],
              formatter: function (params) {
                var text = `{fline|${params.name}}`
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
          },
          itemStyle: {
            color: '#0e349a',
            opacity: 1,
          },
          symbol: function (value, params) {
            return 'image://' + type.img
          },
          symbolSize: [FontChart(60), FontChart(55)],
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
                  color: '#0f44b3' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#0f44b3' // 100% 处的颜色
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
                  color: '#0f44b3' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#0f44b3' // 100% 处的颜色
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
                  color: '#0f44b3' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#0f44b3' // 100% 处的颜色
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
                areaColor: '#0e349a',
                shadowColor: '#0a399b',
                shadowBlur: 1,
                shadowOffsetX: 0,
                shadowOffsetY: 10,
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
                show: false,
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
              show: false,
              color: 'rgba(13, 38, 77, 1)',
              emphasis: {
                color: 'white',
                show: false
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#2768d3',
                borderWidth: 2
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
