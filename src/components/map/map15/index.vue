<template>
  <div class="echartsBody">
    <div class="echarts1" ref="echarts">
    </div>
    <div class="list">
      <div class="listItem" v-if="popshow && active==index" v-for="(item,index) in list" :key="index"
           :style="{left:(left+30)+'px',top:(top-90)+'px'}">
        <div class="topLeftbg"></div>
        <div class="bottomRight"></div>
        <p>{{ item.kaifaqu }}</p>
        <span>重点发展产业：</span>
        <div class="desc">{{ item.zhongdianchanye }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import mapData from './map.json'
import caiyaoimg from './assets/positioning.png'
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
      left: 0,
      top: 0,
      status: '',
      popshow: false,
      active: 0,
      xdata: [],
      ydata: [],
      vlist: [],
      list: [
        {
          "id": 1,
          "xianqu": "旺苍县",
          "kaifaqu": "四川旺苍经济开发区（省级）",
          "zhongdianchanye": "建材家居、机械制造、生物资源综合利用",
          "longitude": 106.257,
          "latitude": 32.242
        },
        {
          "id": 2,
          "xianqu": "利州区",
          "kaifaqu": "利州区工业集中发展区",
          "zhongdianchanye": "食品饮料、机械电子、装备制造",
          "longitude": 105.967,
          "latitude": 32.377
        },
        {
          "id": 3,
          "xianqu": "昭化区",
          "kaifaqu": "四川广元昭化经济开发区（省级）",
          "zhongdianchanye": "建材家居、食品饮料、新型材料",
          "longitude": 105.972,
          "latitude": 32.356
        },
        {
          "id": 4,
          "xianqu": "剑阁县",
          "kaifaqu": "四川剑阁经济开发区（省级）",
          "zhongdianchanye": "新材料、生物医药、农产品深加工",
          "longitude": 105.54,
          "latitude": 32.309
        },
        {
          "id": 5,
          "xianqu": "苍溪县",
          "kaifaqu": "四川苍溪经济开发区（省级）",
          "zhongdianchanye": "清洁能源、轻工制造、农产品深加工",
          "longitude": 106.262,
          "latitude": 32.233
        },
        {
          "id": 6,
          "xianqu": "青川县",
          "kaifaqu": "四川青川经济开发区（省级）",
          "zhongdianchanye": "新材料、机械制造、医药康养",
          "longitude": 105.339,
          "latitude": 32.224
        },
        {
          "id": 7,
          "xianqu": "朝天区",
          "kaifaqu": "四川广元朝天经济开发区（省级）",
          "zhongdianchanye": "新型材料、食品饮料、农产品深加工",
          "longitude": 105.896,
          "latitude": 32.648
        },
        {
          "id": 8,
          "xianqu": "经开区",
          "kaifaqu": "广元经济技术开发区（国家级）",
          "zhongdianchanye": "新材料、食品饮料、生物医药、电子机械",
          "longitude": 105.784,
          "latitude": 32.428
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
      var myChart = this.$echarts.init(this.$refs.echarts)
      this.$echarts.registerMap('js', mapData)
      var mapdata = []
      that.list.forEach((type) => {
        var info = {
          name: type.xianqu,
          value: 61,
          values: [type.longitude, type.latitude],
          img: caiyaoimg
        }
        mapdata.push(info)
      });
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
          symbol: function (value, params) {
            return 'image://' + type.img
          },
          symbolSize: [FontChart(26), FontChart(31)],
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
        geo: [
          {
            map: 'js',
            roam: false,
            zoom: 1.2,
            aspectScale: 1.2,
            scaleLimit: {
              min: 0,
              max: 3
            }, //缩放级别
            itemStyle: {
              normal: {
                areaColor: {
                  type: 'linear-gradient',
                  x: 0,
                  y: 1500,
                  x2: 1000,
                  y2: 0,
                  colorStops: [{
                    offset: 0.5,
                    color: '#277aec' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#FF0033' // 100% 处的颜色
                  }],
                  global: true // 缺省为 false
                },
                shadowColor: 'rgba(28, 89, 129, 1.00)',
                shadowBlur: 1,
                shadowOffsetX: 0,
                shadowOffsetY: 10,
              }
            },
          }],
        series: [
          {
            type: 'map',
            mapType: 'js',
            geoIndex: -1,
            zoom: 1.2,
            aspectScale: 1.2,
            label: {
              show: false,
              color: '#aad0ff',
              emphasis: {
                color: 'white',
                show: false
              }
            },
            itemStyle: {
              normal: {
                areaColor: {
                  type: 'linear-gradient',
                  x: 60,
                  y: 50,
                  x2: 20,
                  y2: 200,
                  colorStops: [{
                    offset: 0.1,
                    color: 'rgba(31, 99, 139, 1.00)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(19, 63, 102, 1.00)' // 100% 处的颜色
                  }],
                  global: true // 缺省为 false
                },
                shadowColor: 'rgba(27, 88, 128, 1.00)',
                borderColor: 'rgba(108, 199, 233, 1.00)',
                borderWidth: 1
              },
              emphasis: {
                areaColor: {
                  type: 'linear-gradient',
                  x: 60,
                  y: 50,
                  x2: 20,
                  y2: 200,
                  colorStops: [{
                    offset: 0.1,
                    color: 'rgba(31, 99, 139, 1.00)' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: 'rgba(19, 63, 102, 1.00)' // 100% 处的颜色
                  }],
                  global: true // 缺省为 false
                },
                borderColor: 'rgba(108, 199, 233, 1.00)',
                borderWidth: 1,
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
        if (params.componentSubType == 'scatter') {
          console.log(params)
          console.log(params.seriesIndex)
          that.active = params.seriesIndex - 1
          that.left = params.event.event.offsetX;
          that.top = params.event.event.offsetY;
          that.popshow = false
          that.$nextTick(() => {
            that.popshow = true
          })
        } else {
          that.popshow = false
        }
      });
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts1 {
  position: absolute;
  width: 100%;
  z-index: 0;
  top: -90px;
  height: calc(120% - 0px);
}

.listItem {
  min-width: 226px;
  position: absolute;
  padding: 12px 16px;
  background: rgba(48, 181, 248, 0.2);
  box-shadow: 0px 8px 24px rgba(9, 39, 57, 0.4);
  backdrop-filter: blur(20px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 1px;

  p {
    font-family: 'OPPOSans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    margin-bottom: 4px;
  }

  span {
    font-family: 'OPPOSans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    opacity: 0.6;
  }

  .desc {
    font-family: 'OPPOSans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    margin-top: 5px;
    color: #FFFFFF;
  }

  .topLeftbg {
    width: 39px;
    height: 72px;
    background: url("./assets/topLeft.png");
    background-size: 100% 100%;
    position: absolute;
    left: -10px;
    top: -12px;
  }

  .bottomRight {
    width: 39px;
    height: 72px;
    background: url("./assets/bottomRight.png");
    background-size: 100% 100%;
    position: absolute;
    right: -10px;
    bottom: -12px;
  }
}
</style>
