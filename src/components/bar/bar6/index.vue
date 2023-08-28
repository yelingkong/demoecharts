<template>
  <div class="echarts1">
    <div class="echarts2" ref="echarts">
    </div>
    <div class="echarts3">
      <div class="echarts3item" v-for="(item,index) in list2" :key="index">
        <span class="l">{{ item.label }}</span>
        <span class="r" :style="{'background':color[index]}">{{ item.percentage }}%</span>
      </div>
    </div>
  </div>
</template>

<script>

import {FontChart} from '@/utils/utils'

export default {
  name: 'echarts1',
  components: {},
  props: {
    active: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      list: [{
        label: '免费',
        value: 20
      }, {
        label: '折扣',
        value: 20
      }, {
        label: '异常',
        value: 20
      }, {
        label: '欠费',
        value: 20
      }, {
        label: '实收',
        value: 50
      }],
      color: ['rgba(151, 50, 236, 1)', 'rgba(63, 108, 252, 1)', 'rgba(229, 175, 47, 1)', 'rgba(44, 214, 147, 1)', 'rgba(13, 206, 242, 1)']
    }
  },
  watch: {
    active() {
      this.drawLine()
    }
  },
  computed: {
    list2: function () {
      let total = 0
      var list2 = this.list;
      var list = []
      this.list.forEach((type) => {
        total = total + type.value
      });
      list2.forEach((type) => {
        var data = {
          value: type.value,
          percentage: Number((type.value / total) * 100).toFixed(2),
          label: type.label
        }
        list.push(data)
      });
      return list
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts)

      function Pie() {
        let dataArr = []
        for (var i = 0; i < 150; i++) {
          if (i % 2 === 0) {
            dataArr.push({
              name: (i + 1).toString(),
              value: 25,
              itemStyle: {
                normal: {
                  color: 'rgba(255,255,255,0.2)',
                  borderWidth: 0,
                  borderColor: 'rgba(0,0,0,0)'
                }
              }
            })
          } else {
            dataArr.push({
              name: (i + 1).toString(),
              value: 10,
              itemStyle: {
                normal: {
                  color: 'rgba(0,0,0,0)',
                  borderWidth: 0,
                  borderColor: 'rgba(0,0,0,0)'
                }
              }
            })
          }
        }
        return dataArr
      }

      var dataList = []
      this.list.forEach((type, index) => {
        var data = {
          value: type.value,
          show: true,
          name: type.label,
          itemStyle: {
            normal: {
              color: this.color[index],
              borderWidth: FontChart(2),
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
            radius: ['40%', '100%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: 'inside',
              formatter: '{d}%',
              color: '#fff',
              fontSize: FontChart(14)
            },
            labelLine: {
              show: false
            },
            data: dataList
          },
          {
            type: 'pie',
            zlevel: 0,
            silent: true,
            center: ['50%', '50%'],
            radius: ['99%', '100%'],
            z: 10,
            itemStyle: {
              normal: {
                areaColor: 'rgba(137, 137, 137, .3)',
                borderColor: '#4053CC',
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
            data: Pie()
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
  height: calc(100% - 0px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}

.echarts2 {
  position: relative;
  width: 50%;
  height: calc(100% - 20px);
}

.echarts3 {
  width: 50%;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;

  .echarts3item {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    margin-bottom: 5px;
    margin-top: 5px;

    span.l {
      width: 86px;
      height: 20px;
      border: 1px solid rgba(43, 72, 132, 1);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      font-size: 13px;
      text-indent: 10px;
      font-family: PingFang;
      font-weight: 500;
      color: #FFFFFF;
    }

    span.r {
      width: 75px;
      height: 20px;
      padding-right: 10px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: bold;
      color: #FFFFFF;
    }
  }
}
</style>
