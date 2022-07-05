<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>
import map from './map.json'
import icon_mapimg1 from './icon_mapimg1.png'
import icon_mapimg2 from './icon_mapimg2.png'
import icon_mapimg3 from './icon_mapimg3.png'
import icon_mapimg4 from './icon_mapimg4.png'
import bank from './bank.json'

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
      datas: [],
      active: 0,
      icon_mapimg4,
      icon_mapimg1,
      icon_mapimg2,
      icon_mapimg3,
      bank
    }
  },
  watch: {},
  mounted() {
    this.drawechartmap()
  },
  methods: {
    drawechartmap() {
      var that = this
      window.addEventListener('resize', this.drawechartmap)
      var myChart = this.$echarts.init(this.$refs.echarts)
      myChart.off('click')
      this.$echarts.registerMap('china', map)
      var fData = []
      var geoCoordMap = {
        '上海': [121.484852, 31.23],
        '成都': [104.070733, 30.58944],
        '北京': [116.394127, 39.90871],
        '天津': [117.214128, 39.09872],
        '深圳': [114.070014, 22.550058],
        '苏州': [120.594424, 31.299615],
        '杭州': [120.220972, 30.253082],
        '宁波': [121.63803, 29.859053],
        '南京': [119.053085, 32.097694],
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
      var serverdata = []
      bank.forEach((type, index) => {
        var datamap = null
        if (this.active == index) {
          datamap = {
            type: 'scatter',
            tooltip: {
              show: true,
              formatter: function (params) {
                console.log(params)
                return params.data.name + '分行';
              }
            },
            name: type.name,
            coordinateSystem: 'geo',
            symbol: 'image://' + that.icon_mapimg4,
            // 70,102
            symbolSize: [49, 71],
            symbolOffset: [-11, -15],
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: '#000',
                  fontSize: 10,
                  fontWeight: 600
                },
                formatter(value) {
                  return 100
                }
              }
            },
            hoverAnimation: true,
            zlevel: 6,
            data: [type]
          }
        } else {
          var img = ''
          if (index < 3) {
            img = that.icon_mapimg1
          } else if (index > 3 && index < 6) {
            img = that.icon_mapimg2
          } else {
            img = that.icon_mapimg3
          }
          datamap = {
            type: 'scatter',
            tooltip: {
              show: true,
              formatter: function (params) {
                console.log(params)
                return params.data.name + '分行';
              }
            },
            name: type.name,
            coordinateSystem: 'geo',
            symbol: 'image://' + img,
            symbolSize: [25, 37.8],
            symbolOffset: [-11, -15],
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: '#000',
                  fontSize: 10,
                  fontWeight: 600
                },
                formatter(value) {
                  return 100
                }
              }
            },
            hoverAnimation: true,
            zlevel: 6,
            data: [type]
          }
        }
        serverdata.push(datamap)
      });
      var option = {
        tooltip: {
          trigger: 'item'
        },
        //左侧小导航图标
        visualMap: {
          show: false,
          x: 'left',
          y: 'center',
          splitList: [
            {start: 1, end: 500},
            {start: 500, end: 1000},
            {start: 1000, end: 1500},
            {start: 1500, end: 2000},
            {start: 2000, end: 2500},
            {start: 2500},
          ],
          color: [
            '#ffb43d',
            '#5475f5',
            '#85daef',
            '#9feaa5',
            '#74e2ca',
            '#0074bc'],// e6ac53 '#9fb5ea'
          textStyle: {
            color: '#black'
          }
        },
        geo: {
          map: 'china',
          aspectScale: 0.75,
          layoutCenter: ["50%", "51.5%"],
          layoutSize: '118%',
          roam: false,
          itemStyle: {
            normal: {
              borderColor: 'rgba(147, 235, 248, 1)',
              borderWidth: 0.5,
              color: {
                type: 'linear-gradient',
                x: 0,
                y: 1500,
                x2: 2500,
                y2: 0,
                colorStops: [{
                  offset: 0,
                  color: '#1EB5E2' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#1EB5E2' // 50% 处的颜色
                }],
                global: true // 缺省为 false
              },
              opacity: 0.8,
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          },
          regions: [{
            name: '南海诸岛',
            itemStyle: {
              areaColor: 'rgba(0, 10, 52, 1)',
              borderColor: 'rgba(0, 10, 52, 1)'
            },
            emphasis: {
              areaColor: 'rgba(0, 10, 52, 1)',
              borderColor: 'rgba(0, 10, 52, 1)'
            }
          }],
          z: 2
        },
        series: [
          {
            name: '',
            type: 'map',
            map: 'china',
            zoom: 1,
            label: {
              show: true,
              color: 'rgba(255, 255, 255, 1)',
              fontSize: 14
            },
            tooltip: {
              show: false
            },
            aspectScale: 0.75,
            layoutCenter: ["50%", "50%"],
            layoutSize: '118%',
            roam: false,
            itemStyle: {
              normal: {
                borderColor: '#0091C3',
                borderWidth: 0.8,
                areaColor: {
                  type: 'linear-gradient',
                  x: 0,
                  y: 1200,
                  x2: 1000,
                  y2: 0,
                  colorStops: [{
                    offset: 0,
                    color: '#004881' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#004881' // 50% 处的颜色
                  }],
                  global: true // 缺省为 false
                },
              },
              emphasis: {
                areaColor: '#013159',
                label: {
                  show: true,
                  color: 'rgba(255, 255, 255, 1)',
                  fontSize: 14
                },
              }
            },
            zlevel: 1,
            data: [],
          },
          {
            type: 'lines',
            zlevel: 3,
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
                color: '#F46E36',
                width: 0.5, //尾迹线条宽度
                opacity: 0.5, //尾迹线条透明度
                curveness: 0.3 //尾迹线条曲直度
              }
            },
            data: fData,
          },
          ...serverdata,
        ],
      };
      myChart.resize()
      myChart.setOption(option)
      myChart.on('click', function (params) {
        if (params.seriesType == 'scatter') {
          that.active = params.data.active
          that.drawechartmap()
        }
      });
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
</style>
