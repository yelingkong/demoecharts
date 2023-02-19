<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>
import map from './map.json'
// 图标资源
var icon1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAA/CAYAAAB5GjFNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFMTQzQTcyNUQ4NDExRUM4MzU2RkREMjQzOTk2NDA2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFMTQzQTczNUQ4NDExRUM4MzU2RkREMjQzOTk2NDA2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkUxNDNBNzA1RDg0MTFFQzgzNTZGREQyNDM5OTY0MDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkUxNDNBNzE1RDg0MTFFQzgzNTZGREQyNDM5OTY0MDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz786TyPAAAHS0lEQVR42uya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'
var icon2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAA/CAYAAAB5GjFNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFMTQzQTc2NUQ4NDExRUM4MzU2RkREMjQzOTk2NDA2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFMTQzQTc3NUQ4NDExRUM4MzU2RkREMjQzOTk2NDA2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkUxNDNBNzQ1RDg0MTFFQzgzNTZGREQyNDM5OTY0MDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkUxNDNBNzU1RDg0MTFFQzgzNTZGREQyNDM5OTY0MDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4QFVtXAAAHNklEQVR42uyaS2xUVRjHz51nh0IpFAsIhSggBhGC+MC3EY2oqBujRkkwbt2ZuNNoTFy4VRdGXbly4dIoviJoVFCJoqkFBYs8CrTU2ham87zX7zC/z/k6wSr1NhmTuck/M3Mf5/zP9z7fncAdi1xMRyBIAD1CQcTnfz5SMRJNC+YIZvO9KsgLzggm4iAcJ9l2wWLBxeAPwXHBgKDUTGS96mcJLhJsEzwgOCh4GcmOCMpxTBLX4Re+UHC/oENwlWADJpGISyJxHBFjeXXvwUb7MYMU15uGbIiazwo+QO2fCn4WVEBTSbYgGBeMCZKCIqTzzUbWQagASZX0RFyRIG6ykUkCkTkXW9aJk6yOFzTANSvZGT1aZFtkW2RbZFtkW2RbZP93ZKOWZGeQbDRTUp4psmHchfdM7RQ8qiBW0okZkmoFsk29rYkgWTaSdXFtbxIzQLQC2UqDKTStg5Xj6hXYYzqNOVVpEuiO1rc6fXMuA1l/Ledq3cU5rt6Yq07XnlMXSFIJ+ue04aZOlTCocF4XkzLf1VxKxkyqcZFVkhkI2km95BYI5rpau9NjEdJcJtjoau2kU67Wrx129fZS2tU7NyUWGE6XbGAGbeN7CLklhpRKJg20jVR29SazNphTnD/tah3GE9yTdbW2U7Ehivwrsqq6DAggeYWgG0K/IzHfjMtz/wJIjUDmgGDU1RrKGey6k/uWu1rX0d/Tb8ymYCLJlGS15ZPGWbSjfS3S9BPvEwxxLWMkmmZCK1mVeJZxx1lkH8QvFVyDEL4VHMUZ867e4Ivq5Ca/rVECOQb3drcJAr1IK8uABcxjKZNeglQ7+T2Emr2dHkZ6h5F6Fjsdh/QaQQ9z7HOTO5IaOSaRVdW3Q3S14CZXawjvNddUAzcLbkOl45DKM84aFjbIwlX1nuD3gvdZTBZSZ9DcLUh3F5qxhCeRVdX7zxUQ2Q3ZNq75ydYJHhXMY+IvBEeMyv35uwU/AnXAeah8E+Tfg7RmvbNI+Q4WsotrZyAcKdkEEvAr9S8x7kIdfRDN8qA//ziSfhu15kwC6EKCXuqHBPuR+qgh5LVzp+BBwU+u9kYnz/hFrm/FJL7huXPd86R76vlGqW7GCb7GfjVk3Sd4UvAaRMfQSMgEi7A7b6+rTLjLQKRgpHwAIluJxbvNtTx2vZEQd1YTScp4f8hEfuLPDEl/rEX1rwo+4ZlRnlsEueuA/z0fm9MQ9hXe3o9tJwh7LwheEjwieN3E9t8EKwXrcVK/4FLKOFaaGwYYMM1N/vrD2OfHkD/FeW8ylwkeE9yONO3RxZgbsNF3UPUpUyO8Idjuam939pt4e4jFd6LppObyJCdzOEvSRIhlkNrJ+RFUk0Pt9wrugWiZ5/fjXMfQTgfS28xYSTQTYQLeoW519ZfVEefyzBFasoGJrSMmOZQxjXGkofGvyv1LcCY9BiHpHXAP34fN9RshmyGyFCB2hLpCNRmaKNChhZLNYEkIlvjUmJY9z55KJaAhTY8yyDNOY13bzniN1VrZFEjOlJKh0XJgL2pZlzW1ZhIHmc0KNb0GrPok4UePeWS0Jaivh4pMj17UW8ZPVBDdaK9onForPC2Izj2gO9I8n10YtJrCQR5eT4KYy6B5ss272PVyrl1tipCkIeoX9SHmVELKKRbmU/Vbrv7qVKu1NuYINHRpfBthdT2QUpMIyTQPCb4klCzApk5gmyGBfgO2Z0kOELY+ItEMo6H5PPcE43zeIEm17aOYx19kK9zopXgDsfK0SaE7BFcKnhE8xzPqJCcJ8APE08Vop4qGjrP4kxBNGVPbTox+1hTiCZ5dyfNjKlBNtxnEniQMBUgzaVKxv/40dcMrZDh9PZ/C0TqoyNo4X0Rb4yaKlJGqz4aXC14khkdmx7CKsnQHEca/Ay7Y2iBr8vsWwa+oT/daumPYRkzsJfb2mrIvw2fS1LZFiKYIg5sokryjvSn4xRCtYkZb0NYPtjawVVfK1Ac9FC3+5u9MhssimbUUIrorOIwJDfC7wgLbmXwFRBdDaiea031XiUUtpOo6iH9E+EbJVl22ntUdQg8pdJAysITktY4IiADXY19tJoZqzRuaRDJkEsUE0q+abcxqSsg+7qtOVc86o+4c37txuFlM0s/As0wyyKP+bkJXzphBgdQ8RHrNMn4Jiana12HHe6nIQhZUtHux4Dx/QlMJ50xgXk/BUsKW+xmsDaIpE5cTDd2ZyGSjkqoUE1rBIgfxD03NE8aG3VRkVYUp4zAOqa3GPBwhZRiJqRQqJsnYIilt9m5dSDFNL6EPW9d4P/F3PYRgir/3qaQyBlWcZinO0smkjY240EhZOzgq/TFi+FE+E2aXULIbxAsh27hlT5mdQ2BicDvSajfRJGmcq4h9jiLJsllQaIqf6j91ZIIL+ONko6TShnhjWzMylVujLVdNDWDNJtbGXGRKxTISs3YZmNrYvgCpnKeFP61/fv4pwACGSpy2//I3vwAAAABJRU5ErkJggg=='
var icon3 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAABICAYAAABfsR0VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI0NjM2OEI3NUQ5QjExRUM4MzU2RkREMjQzOTk2NDA2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI0NjM2OEI4NUQ5QjExRUM4MzU2RkREMjQzOTk2NDA2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkUxNDNBNzg1RDg0MTFFQzgzNTZGREQyNDM5OTY0MDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjQ2MzY4QjY1RDlCMTFFQzgzNTZGREQyNDM5OTY0MDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7OOXjXAAAJC0lEQVR42uyb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'
var icon4 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABmCAYAAAB2gueyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMC1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi40IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI0NjM2OEJCNUQ5QjExRUM4MzU2RkREMjQzOTk2NDA2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI0NjM2OEJDNUQ5QjExRUM4MzU2RkREMjQzOTk2NDA2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjQ2MzY4Qjk1RDlCMTFFQzgzNTZGREQyNDM5OTY0MDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjQ2MzY4QkE1RDlCMTFFQzgzNTZGREQyNDM5OTY0MDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4c3giaAAAOWElEQVR42uxd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'
var iconList = [icon1, icon2, icon3, icon4]
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
      var nameMap = '地图数据';
      var geoCoordMap = {};
      var mapData = [];
      // 图标数据
      var iconData = [];
      this.$echarts.registerMap(nameMap, map);
      /*获取地图数据*/
      myChart.showLoading();
      var mapFeatures = this.$echarts.getMap(nameMap).geoJson.features;
      myChart.hideLoading();
      var mapName = ''
      mapFeatures.forEach(function (v, index) {
        // 地区名称
        mapData.push({
          name: v.properties.name,
          value: Math.random() * 100
        });
        mapName = mapName + (mapName ? ',' : '') + v.properties.name
        if (index % 2) {
          var name = v.properties.name;
          geoCoordMap[name] = v.properties.cp;
          var data = {
            "value": v.properties.cp,
            "id": index,
            "name": name,
          }
          iconData.push(data)
        }

      });
// 生成飞线数据
      var fData = []
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

      var serverdata = [
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
        { // 地图块的相关信息
          type: 'map',
          map: nameMap,
          zoom: 1,
          roam: false,
          z: 1,
          aspectScale: 0.75,
          layoutCenter: ["50%", "50%"],
          layoutSize: '100%',
          itemStyle: {
            normal: {
              borderColor: 'rgba(147, 235, 248, 1)',
              borderWidth: 0.5,
              opacity: 1,
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
          label: {
            show: true,
            normal: {
              show: true,
              textStyle: {
                fontSize: 12,
                fontWeight: 400,
                color: '#fff'
              }
            }
          },
          data: mapData
        }
      ]

      // 生成地图图标
      iconData.forEach((type, index) => {
        var datamap = {
          type: 'scatter',
          tooltip: {
            show: true,
            formatter: function (params) {
              return params.data.name + '分行';
            }
          },
          name: type.name,
          coordinateSystem: 'geo',
          symbol: 'image://' + iconList[Math.floor(Math.random() * 4)],
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
        serverdata.push(datamap)
      });
      var optionMap = {
        geo: {
          map: nameMap,
          show: true,
          aspectScale: 0.75,
          layoutCenter: ["50%", "51.5%"],
          layoutSize: '100%',
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
          z: 0,
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: false
            }
          }
        },
        series: serverdata
      };
      myChart.setOption(optionMap);
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
