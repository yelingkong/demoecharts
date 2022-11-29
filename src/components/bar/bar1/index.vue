<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

export default {
  name: 'echarts1',
  components: {},
  data() {
    return {
      color: [
        'rgba(145, 203, 249, 1)',
        'rgba(66, 165, 245, 1)',
        'rgba(29, 137, 228, 1)',
        'rgba(19, 99, 195, 1)',
        'rgba(6, 77, 158, 1)',
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
        }
      ]
    }
  },
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
      var dataList = []
      this.list.forEach((type, index) => {
        var data = {
          value: type.num,
          show: true,
          name: type.alarmDescId,
          itemStyle: {
            normal: {
              color: this.color[index],
              borderWidth: 2,
              borderColor: '#06264C'
            }
          }
        }
        dataList.push(data)
      });
      var option = {
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
                color: "#02224d"
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
                color: '#053165'
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
                color: '#053165'
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
