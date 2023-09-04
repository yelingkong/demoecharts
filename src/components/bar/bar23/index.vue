<template>
  <div class="echarts">
    <div class="listItem" v-for="(item,index) in list2" :key="index">
      <span class="name">{{ item.name }}</span>
      <span class="value">{{ item.value }}</span>
      <span class="value">{{ item.percentage }}%</span>
    </div>
    <div class="echarts1" ref="echarts1">
    </div>
  </div>
</template>

<script>

import {FontChart} from "@/utils/utils";
import * as echarts from "echarts"
export default {
  name: 'echarts1',
  components: {},
  data() {
    return {
      list: [{
        name: '建筑领域',
        value: 108
      }, {
        name: '农资危废',
        value: 310
      }, {
        name: '实验室皮物',
        value: 200
      }, {
        name: '有害垃圾',
        value: 110
      }]
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
          percentage: Number((type.value / total) * 100).toFixed(0),
          name: type.name
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
      var that = this;
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts1)
      var option = {
        legend: {
          height: '100%',
          show: false,
          orient: 'vertical',
          right: '10%',
          bottom: 'center',
          align: 'left',
          textStyle: {
            color: '#fff',
            fontSize: FontChart(14)
          },
          data: [{
            name: '58检查',
            value: 10
          }, {
            name: '产品点检',
            value: 20
          }, {
            name: '安全检查',
            value: 30
          }, {
            name: '行为观察',
            value: 30
          }, {
            name: '巡检',
            value: 30
          }],
          itemWidth: FontChart(15),
          itemHeight: FontChart(10),
          itemGap: FontChart(30)
        },
        series: [
          {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['40%', '70%'],
            color: ['#29bf75',
              '#2de0d9',
              '#3584d5',
              '#c79e42'],
            labelLine: {
              normal: {
                length: FontChart(20)
              }
            },
            label: {
              normal: {
                show: false,
                formatter: '{b|{b}} \n {per|({d}%)} ',
                borderColor: 'transparent',
                borderRadius: 4,
                rich: {
                  b: {
                    color: 'rgba(255, 255, 255, 1)',
                    fontSize: FontChart(16)
                  },
                  per: {
                    color: 'rgba(169, 177, 192, 1)',
                    fontSize: FontChart(16),
                    padding: [5, 0, 5, -5]
                  }
                },
                textStyle: {
                  color: '#fff',
                  fontSize: FontChart(14)
                }
              }
            },
            data: this.list
          }
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
  position: absolute;
  width: 100%;
  height: calc(100% - 0px);
  top: 0;
  margin-top: -5px;
}

.echarts {
  position: relative;
  width: 100%;
  height: calc(100% - 20px);
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
}

.listItem {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  box-shadow: 0 0 10px #29bf75;
  width: calc(50% - 20px);
  height: calc(45% - 10px);
  margin: 5px 10px;

  .name {
    color: #fff;
    font-size: 12px;
  }

  .value {
    color: #3896c3;
    font-size: 12px;
  }

  .proportion {
    color: #3896c3;
    font-size: 12px;
  }
}

.listItem:nth-child(2) {
  box-shadow: 0 0 10px #2de0d9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row-reverse;
  align-content: flex-start;
}

.listItem:nth-child(3) {
  box-shadow: 0 0 10px #3584d5;
}

.listItem:nth-child(4) {
  box-shadow: 0 0 10px #c79e42;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row-reverse;
  align-content: flex-start;
}
</style>
