<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>
import map from './map.json'

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
      mapdatalist: [
        {
          name: '线路故障',
          data: [
            {//线路故障
              name: '线路故障',
              id: 1,
              value: [116.543174, 38.353691, 250]
            },
            {//线路故障
              name: '线路故障',
              id: 2,
              value: [117.168683, 38.502034, 250]
            }
          ]
        },
        {
          name: '用户报修',
          data: [
            {//线路故障
              name: '用户报修',
              id: 3,
              value: [117.196279, 37.945074, 250]
            },
            {//线路故障
              name: '用户报修',
              id: 4,
              value: [116.837531, 38.061538, 250]
            }
          ]
        }, {
          name: '重载',
          data: [
            {//线路故障
              name: '重载',
              id: 5,
              value: [117.099693, 38.295717, 250]
            },
            {//线路故障
              name: '重载',
              id: 6,
              value: [116.448888, 38.203225, 250]
            }
          ]
        }, {
          name: '过载',
          data: [
            {//线路故障
              name: '过载',
              id: 7,
              value: [116.214323, 38.623014, 250]
            },
            {//线路故障
              name: '过载',
              id: 8,
              value: [116.133835, 38.673512, 250]
            }
          ]
        }, {
          name: '低电压',
          data: [
            {//线路故障
              name: '低电压',
              id: 9,
              value: [116.320107, 37.970567, 250]
            },
            {//线路故障
              name: '低电压',
              id: 10,
              value: [117.090494, 38.489383, 250]
            }
          ]
        }, {
          name: '停上电',
          data: [
            {//线路故障
              name: '停上电',
              id: 11,
              value: [116.752444, 38.927258, 250]
            },
            {//线路故障
              name: '停上电',
              id: 12,
              value: [117.371053, 38.056083, 250]
            }
          ]
        }, {
          name: '电采暖用户',
          data: [
            {//线路故障
              name: '电采暖用户',
              id: 13,
              value: [116.812235, 38.738384, 250]
            },
            {//线路故障
              name: '电采暖用户',
              id: 14,
              value: [117.52743, 38.574286, 250]
            }
          ]
        },
      ],
      time: null
    }
  },
  watch: {},
  mounted() {
    this.drawechartmap()
  },
  methods: {
    getclear() {
      clearInterval(this.time);
    },
    drawechartmap() {
      var that = this
      window.addEventListener('resize', this.drawechartmap)
      var myChart = this.$echarts.init(this.$refs.echarts)
      var geoCoordMap = {};
      var mapdatalist = that.mapdatalist
      myChart.off('click')
      var nameMap = '沧州市';
      this.$echarts.registerMap(nameMap, map)
      var colors = [
        '#CF4212',
        '#4398F1',
        '#DF9800',
        '#FE9999',
        '#3EFF66',
        '#3399FF',
        '#66FFFF'
      ]
      window.dataList = [
        {
          name: '任丘市',
          value: 396,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [
            {
              order: 1,
              zhudian: '驻点一',
              name: '张三',
              fanwei: 5
            }, {
              order: 1,
              zhudian: '驻点二',
              name: '李四',
              fanwei: 5
            },]
        },
        {
          name: '青县', value: 66,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [{
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          }, {
            order: 1,
            zhudian: '驻点二',
            name: '李四',
            fanwei: 5
          },]
        },
        {
          name: '河间市', value: 222,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [{
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          }, {
            order: 1,
            zhudian: '驻点二',
            name: '李四',
            fanwei: 5
          },]
        },
        {
          name: '肃宁县', value: 688,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [{
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          }, {
            order: 1,
            zhudian: '驻点二',
            name: '李四',
            fanwei: 5
          },]
        },
        {
          name: '黄骅市', value: 75,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [{
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          }, {
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          },]
        },
        {
          name: '新华', value: 121,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [{
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          }, {
            order: 1,
            zhudian: '驻点二',
            name: '李四',
            fanwei: 5
          },]
        },
        {
          name: '献县', value: 91,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [{
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          }, {
            order: 1,
            zhudian: '驻点二',
            name: '李四',
            fanwei: 5
          },]
        },
        {
          name: '沧县', value: 91,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [{
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          }, {
            order: 1,
            zhudian: '驻点二',
            name: '李四',
            fanwei: 5
          },]
        },
        {
          name: '泊头市', value: 479,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [{
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          }, {
            order: 1,
            zhudian: '驻点二',
            name: '李四',
            fanwei: 5
          },]
        },
        {
          name: '孟村回族自治县', value: 34,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [{
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          }, {
            order: 1,
            zhudian: '驻点二',
            name: '李四',
            fanwei: 5
          },]
        },
        {
          name: '海兴县', value: 631,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [{
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          }, {
            order: 1,
            zhudian: '驻点二',
            name: '李四',
            fanwei: 5
          },]
        },
        {
          name: '运河', value: 631,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [{
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          }, {
            order: 1,
            zhudian: '驻点二',
            name: '李四',
            fanwei: 5
          },]
        },
        {
          name: '南皮县', value: 1203,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [{
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          }, {
            order: 1,
            zhudian: '驻点二',
            name: '李四',
            fanwei: 5
          },]
        },
        {
          name: '盐山县',
          value: 988,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [{
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          }, {
            order: 1,
            zhudian: '驻点二',
            name: '李四',
            fanwei: 5
          },]
        },
        {
          name: '吴桥县', value: 693,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [{
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          }, {
            order: 1,
            zhudian: '驻点二',
            name: '李四',
            fanwei: 5
          },]
        },
        {
          name: '东光县', value: 693,
          value1: 10,
          value2: 10,
          value3: 10,
          value4: 10,
          value5: 10,
          value6: 10,
          value7: 10,
          value8: 10,
          value9: 10,
          list: [{
            order: 1,
            zhudian: '驻点一',
            name: '张三',
            fanwei: 5
          }, {
            order: 1,
            zhudian: '驻点二',
            name: '李四',
            fanwei: 5
          },]
        },
      ];
      /*获取地图数据*/
      myChart.showLoading();
      var mapFeatures = this.$echarts.getMap(nameMap).geoJson.features;
      myChart.hideLoading();
      mapFeatures.forEach(function (v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.center;
      });
      var serverdata = [
        { // 地图块的相关信息
          type: 'map',
          map: nameMap,
          zoom: 1.2,
          label: {
            show: true,
            normal: {
              show: true,
              textStyle: {
                fontSize: 12,
                fontWeight: 400,
                color: 'rgb(0,0,0) '
              }
            }
          },
          data: window.dataList
        }
      ]
      mapdatalist.forEach((type, index) => {
        console.log(type)
        console.log(index)
        var datamap = {
          type: 'scatter',
          tooltip: {
            show: false
          },
          name: type.name,
          coordinateSystem: 'geo',
          symbol: 'pin',
          symbolSize: [40, 40],
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#000',
                fontSize: 10,
                fontWeight: 600
              },
              formatter(value) {
                return value.data.value[2]
              }
            }
          },
          hoverAnimation: true,
          itemStyle: {
            normal: {
              color: colors[index]
            }
          },
          zlevel: 6,
          data: type.data
        }
        serverdata.push(datamap)
      });
      var optionMap = {
        tooltip: {
          trigger: 'item',
          show: true,
          // position: ['100%', '0%'],
          enterable: true,
          textStyle: {
            fontSize: 14,
            color: '#000'
          },
          backgroundColor: 'rgba(255,255,255,0.8)',
          formatter: function (params, ticket, callback) {
            console.log(params)
            var list = params.data.list
            var data = ''
            list.forEach((type, index) => {
              var data2 = '<tr>\n' +
                '<td>' + (index + 1) + '</td>\n' +
                '<td>' + type.zhudian + '</td>\n' +
                '<td>' + type.name + '</td>\n' +
                '<td>' + type.fanwei + '</td>\n' +
                '</tr>\n'
              data = data + data2
            });
            return '<p style="font-weight: bold;text-align: center">' + params.data.name + '</p>' +
              '<br />煤改电用户数:' + '<span style="color: rgba(1, 99, 190, 1);">' + params.data.value1 + '户 </span>' +
              '台区数量:' + '<span style="color: rgba(255, 79, 71, 1);">' + params.data.value2 + '台 </span>' +
              '线路数量:' + '<span style="color: rgba(1, 99, 190, 1);">' + params.data.value3 + '条 </span>' +
              '<br />电采暖用户:' + '<span style="color: rgba(1, 99, 190, 1);">' + params.data.value4 + '户 </span>' +
              '电采暖台区数量:' + '<span style="color: rgba(1, 99, 190, 1);">' + params.data.value5 + '台 </span>' +
              '<br />电采暖线路数量:' + '<span style="color: rgba(1, 99, 190, 1);">' + params.data.value6 + '条 </span>' +
              '网格:' + '<span style="color: rgba(1, 99, 190, 1);">' + params.data.value7 + '个 </span>' +
              '供电所:' + '<span style="color: rgba(1, 99, 190, 1);">' + params.data.value8 + '个 </span>' +
              '<br />应急发电机:' + '<span style="color: rgba(1, 99, 190, 1);">' + params.data.value9 + '台 </span>' + '<table style="width: 300px" class="newpoptable">\n' +
              '                        <tr>\n' +
              '                            <td>序号</td>\n' +
              '                            <td>驻点名称</td>\n' +
              '                            <td>责任人</td>\n' +
              '                            <td>范围</td>\n' +
              '                        </tr>\n' + data +
              '                    </table>'
          }
        },
        // legend: {
        //     orient: 'vertical',
        //     y: 'bottom',
        //     x: '85%',
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
        visualMap: [{
          min: 0,
          max: 1000,
          show: true,
          //   text: ['High', 'Low'],
          realtime: true,
          calculable: true,
          seriesIndex: [0],
          inRange: {
            color: ['#0677F0', '#2D8EF5', '#4198F3', '#499BF1', '#529AE6', '#69A6E5'].reverse()
          }
        }],
        geo: {
          map: nameMap,
          show: false,
          roam: true,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          }
        },
        series: serverdata
      };
      myChart.clear()
      myChart.resize()
      myChart.setOption(optionMap, true);
      myChart.on('click', function (params) {
        console.log(params)
        if (params.seriesType) {
          // showwin()
          that.mapdatalist.forEach((type, index) => {
            type.data.forEach((type1, index2) => {
              if (params.data.id == type1.id) {
                type.data.splice(index2, 1)
              }
            });
          });
        }
        that.drawechartmap()
      });
      that.getclear()
      that.time = window.setInterval(() => {
        if (name) {
          myChart.dispatchAction({
            type: 'highlight', // 高亮指定的数据图形。通过seriesName或者seriesIndex指定系列。如果要再指定某个数据可以再指定dataIndex或者name。
            seriesIndex: 0,
            name: name
          })
          myChart.dispatchAction({
            type: 'highlight', // 高亮指定的数据图形。通过seriesName或者seriesIndex指定系列。如果要再指定某个数据可以再指定dataIndex或者name。
            seriesIndex: 0,
            name: '青县'
          })
          name = ""
        } else {
          myChart.dispatchAction({
            type: 'downplay', // 取消高亮指定的数据图形
            seriesIndex: 0
          })
          name = '黄骅市'
        }
      }, 1000)
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
