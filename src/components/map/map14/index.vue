<template>
  <div class="echarts1">
    <div class="echarts1" ref="echarts">
    </div>
    <div class="popWin wow fadeInLeft" data-wow-delay="1s">
      <div class="title">南充阆中市</div>
      <div class="popWinBody">
        <div class="popWinBodylist">
          <span></span>
          <p>在招岗位数：153个</p>
        </div>
        <div class="popWinBodylist">
          <span></span>
          <p>在招岗位数：153个</p>
        </div>
      </div>
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
          name: '新疆',
          value: 61,
          values: [87.609329, 43.810062],
          img: caiyaoimg
        }, {
          name: '阆中市',
          value: 61,
          values: [106.010416, 31.573427],
          img: caiyaoimg
        }, {
          name: '西藏',
          value: 61,
          values: [91.127219, 29.64737],
          img: caiyaoimg
        }, {
          name: '福建',
          value: 61,
          values: [119.328317, 26.080901],
          img: caiyaoimg
        }, {
          name: '浙江',
          value: 61,
          values: [120.187708, 30.268056],
          img: caiyaoimg
        }, {
          name: '辽宁',
          value: 61,
          values: [123.452267, 41.820396],
          img: caiyaoimg
        },
      ]
      var data2 = []
      mapdata.forEach((type) => {
        var datas = {
          type: 'scatter',
          coordinateSystem: 'geo',
          label: {
            normal: {
              show: false,
              position: 'top',
              offset: [0, FontChart(32)],
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
              show: false,
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
          symbolSize: [FontChart(32), FontChart(32)],
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
      var fData = []
      var geoCoordMap = {
        '阆中市': [106.010416, 31.573427],
        '新疆': [87.609329, 43.810062],
        '西藏': [91.127219, 29.64737],
        '福建': [119.328317, 26.080901],
        '浙江': [120.187708, 30.268056],
        '辽宁': [123.452267, 41.820396],
      }
      for (var key in geoCoordMap) {
        for (var key1 in geoCoordMap) {
          if (key1 != key) {
            fData.push({
              coords: [
                geoCoordMap[key],
                geoCoordMap[key1],
              ],
              fromName: key,
              toName: key1,
            })
            break
          }
        }
      }
      fData.splice(0, 1)
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
            type: 'lines',
            zlevel: 10000,
            effect: {
              show: true,
              period: 4, //箭头指向速度，值越小速度越快
              trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
              symbol: 'arrow', //箭头图标
              symbolSize: 4, //图标大小
            },
            tooltip: {
              trigger: 'item',
            },
            label: {
              show: false,
              color: '#fff',
              emphasis: {
                color: 'white',
                show: true
              }
            },
            lineStyle: {
              normal: {
                color: '#23c1dc',
                type: 'dashed',
                width: 0.5, //尾迹线条宽度
                opacity: 0.5, //尾迹线条透明度
                curveness: 0.3 //尾迹线条曲直度
              }
            },
            data: fData,
          },
          {
            type: 'map',
            mapType: 'js',
            geoIndex: -1,
            zoom: 1.1, //默认显示级别
            label: {
              show: true,
              color: '#aad0ff',
              emphasis: {
                color: 'white',
                show: true
              }
            },
            itemStyle: {
              normal: {
                areaColor: '#0e349a',
                shadowColor: '#0a399b',
                borderColor: '#2768d3',
                borderWidth: 2
              },
              emphasis: {
                areaColor: '#012397',
                borderWidth: 0,
                color: '#fff'
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
  height: calc(100% - 30px);
  z-index: 1;
}

.popWin {
  background: url("./assets/popbg.png") no-repeat;
  width: 193px;
  height: 144px;
  background-size: 100% 100%;
  position: absolute;
  left: 0;
  bottom: 60px;

  .title {
    font-size: 18px;
    font-family: MicrosoftYaHei;
    font-weight: bold;
    color: #19E1FF;
    padding-left: 16px;
    padding-top: 19px;
  }

  .popWinBody {
    background: url("./assets/popbg2.png") no-repeat;
    width: 161px;
    height: 69px;
    margin-top: 16px;
    margin-left: 16px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: flex-start;

    .popWinBodylist {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;

      span {
        width: 8px;
        height: 8px;
        background: #4EE2FE;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: 10px;
      }

      p {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: #FFFFFF;
      }
    }
  }
}
</style>
