<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

import {FontChart} from "@/utils/utils";

export default {
  name: 'echarts1',
  components: {},
  data() {
    return {
      status: '',
      areaList: [],
      outStocks: [],
      stocks: [],
      inStocks: [],
      workDates: [],
      color: [
        'rgba(145, 203, 249, 1)',
        'rgba(66, 165, 245, 1)',
        'rgba(29, 137, 228, 1)',
        'rgba(19, 99, 195, 1)',
        'rgba(6, 77, 158, 1)',
        'rgba(13, 250, 238, 1)',
        'rgba(0, 189, 214, 1)',
        'rgba(1, 130, 144, 1)',
        'rgba(0, 96, 100, 1)',
        'rgba(130, 200, 133, 1)',
        'rgba(76, 176, 81, 1)',
        'rgba(58, 141, 61, 1)',
        'rgba(159, 205, 101, 1)',
        'rgba(125, 179, 70, 1)',
        'rgba(83, 139, 45, 1)',
        'rgba(49, 104, 29, 1)',
        'rgba(212, 226, 89, 1)',
        'rgba(254, 211, 46, 1)',
        'rgba(248, 108, 2, 1)',
        'rgba(186, 104, 200, 1)',
        'rgba(158, 38, 176, 1)',
        'rgba(56, 71, 171, 1)',
      ],
      list: [
        {
          "alarmDescId": "M003",
          "num": 14
        },
        {
          "alarmDescId": "M004",
          "num": 17
        },
        {
          "alarmDescId": "M005",
          "num": 6
        },
        {
          "alarmDescId": "M006",
          "num": 18
        },
        {
          "alarmDescId": "A537",
          "num": 5
        },
        {
          "alarmDescId": "A535",
          "num": 2
        },
        {
          "alarmDescId": "A536",
          "num": 15
        },
        {
          "alarmDescId": "A530",
          "num": 2
        },
        {
          "alarmDescId": "A532",
          "num": 18
        },
        {
          "alarmDescId": "Z016",
          "num": 14
        },
        {
          "alarmDescId": "A538",
          "num": 13
        },
        {
          "alarmDescId": "A537",
          "num": 4
        },
        {
          "alarmDescId": "A012",
          "num": 14
        },
        {
          "alarmDescId": "A007",
          "num": 18
        },
        {
          "alarmDescId": "A055",
          "num": 17
        },
        {
          "alarmDescId": "E001",
          "num": 8
        },
        {
          "alarmDescId": "A531",
          "num": 16
        },
        {
          "alarmDescId": "S500",
          "num": 14
        },
        {
          "alarmDescId": "S501",
          "num": 18
        },
        {
          "alarmDescId": "S502",
          "num": 11
        },
        {
          "alarmDescId": "M001",
          "num": 15
        },
        {
          "alarmDescId": "M007",
          "num": 7
        }
      ]
    }
  },
  // computed: mapGetters(['companyid', 'startDate', 'endDate']),
  watch: {
    list() {
      this.drawLine()
    },
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts)
      const hexToRgba = (hex, opacity) => {
        let rgbaColor = ''
        const reg = /^#[\da-f]{6}$/i
        if (reg.test(hex)) {
          rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt('0x' + hex.slice(3, 5))},${parseInt('0x' + hex.slice(5, 7))},${opacity})`
        }
        return rgbaColor
      }
      var dataList = []
      this.list.forEach((type, index) => {
        var data = {
          value: type.num,
          show: true,
          name: type.alarmDescId,
          itemStyle: {
            normal: {
              color: this.color[index],
              borderWidth: FontChart(2),
              borderColor: hexToRgba('#06264C', 1)
            }
          }
        }
        dataList.push(data)
      });
      var option = {
        // title: {
        //   text: '单位:%',
        //   x: FontChart(20),
        //   y: FontChart(20),
        //   textStyle: {
        //     color: "#fff",
        //     fontSize: FontChart(16)
        //   }
        // },
        legend: {
          orient: 'vertical',
          top: 'center',
          right: '10',
          itemGap: 10,
          itemWidth: 10,
          itemHeight: 10,
          formatter: ["{a|{name}}"].join("\n"),
          width: '10%',
          show: false,
          textStyle: {
            color: 'rgba(190, 198, 218, 1)',
            rich: {
              a: {
                fontSize: 16,
                width: 40
              }
            }
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            roseType: 'area',
            radius: ['20%', '50%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: true,
            minAngle: 10,// 设置每块扇形的最小占比
            hoverAnimation: false,
            silent: true,
            label: {
              show: true,
              position: 'outside',
              formatter: function (res) {
                return res.name + ' ' + res.percent + "%"
              },
              color: '#fff',
              fontSize: 14
            },
            labelLine: {
              show: true,
              // length: FontChart(40),
              // length2: FontChart(10)
            },
            data: dataList
          },
          {
            type: 'pie',
            silent: true,
            center: ['50%', '50%'],
            radius: ['0%', '50%'],
            z: 1,
            itemStyle: {
              normal: {
                color: hexToRgba('#02224d', 1)
              },
              emphasis: {
                label: {
                  show: false
                },
                areaColor: 'rgba(255, 255, 255, .1)',
              }
            },
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [100]
          },
          {
            type: 'pie',
            silent: true,
            center: ['50%', '50%'],
            radius: ['54%', '55%'],
            z: 1,
            itemStyle: {
              normal: {
                color: hexToRgba('#053165', 1)
              },
              emphasis: {
                label: {
                  show: false
                },
                areaColor: 'rgba(255, 255, 255, .1)',
              }
            },
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [100]
          },
          {
            type: 'pie',
            silent: true,
            center: ['50%', '50%'],
            radius: ['14%', '15%'],
            z: 2,
            itemStyle: {
              normal: {
                color: hexToRgba('#053165', 0.2)
              },
              emphasis: {
                label: {
                  show: false
                },
                areaColor: 'rgba(255, 255, 255, .1)',
              }
            },
            label: {
              normal: {
                show: false
              },
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [100]
          },
        ]
      }
      myChart.clear()
      myChart.resize()
      myChart.setOption(option)
    },
  }
}
</script>

<style lang="scss" scoped>
.echarts1 {
  position: relative;
  width: 100%;
  height: calc(100% - 10px);
}
</style>
