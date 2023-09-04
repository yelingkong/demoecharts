<template>
  <div class="chartss">
    <div class="charts">
      <div class="charts1" ref="echarts" id="charts1">
      </div>
      <div class="charts2">
        <div class="charts2item" v-for="(item,index) in list" :key="index">
          <div class="charts2iteml">
            {{ item.name }}
          </div>
          <div class="charts2itemr" :class="'ibg'+(index+1)">{{ item.value }}%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import * as echarts from "echarts"
export default {
  name: 'pinggu',
  components: {},
  props: {
    id: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      list: [
        {
          name: '支出1',
          value: 20.9
        }, {
          name: '支出2',
          value: 8.4
        }, {
          name: '支出3',
          value: 9.1
        }, {
          name: '支出4',
          value: 20.9
        }, {
          name: '支出5',
          value: 40.6
        }
      ]
    }
  },
  watch: {},
  mounted () {
    this.getheight()
  },
  methods: {
    getheight () {
      window.addEventListener('resize', this.getheight)
      $('.charts1').height($('.charts1').width())
      this.$nextTick(() => {
        this.getechart()
      })
    },
    getechart () {
      let myChart = echarts.init(this.$refs.echarts)
      var colorList = ['#15BBD7', '#0390FE', '#FFA904', '#E64804', '#D30D16']
      var data = this.list
      var rich = {
        name: {
          color: '#FFF',
          fontSize: 14,
          padding: [10, 15, 0, 10],
          fontWeight: '400',
          align: 'left'
        },
        value: {
          color: '#FFF',
          fontSize: 15,
          padding: [10, 10, 0, 15],
          fontWeight: '500',
          align: 'right'
        },
        percent: {
          color: '#FFF',
          align: 'right',
          fontSize: 15,
          fontWeight: '500',
          //padding: [0, 5]
        },
        hr: {
          width: '100%',
          height: 0,
        },
        cir: {
          fontSize: 26,
        }
      }
      var option = {
        tooltip: {
          trigger: 'axis',
        },
        series: [{
          tooltip: {
            show: false,
            trigger: 'item',
            formatter: function (params) {
              return params.name + '：' + params.value + '<br>占比：' + params.percent.toFixed(2) + '%'
            }
          },
          itemStyle: {
            normal: {
              borderColor: '#032C74',
              borderWidth: 3,
              color: function (params) {
                return colorList[params.dataIndex]
              }
            }
          },
          type: 'pie',
          radius: ['68%', '82%'],
          center: ['50%', '50%'],
          label: {
            normal: {
              show: false,
              position: 'inner',
              formatter: params => {
                return (
                  '{percent|' + params.percent.toFixed(0) + '%}'
                )
              },
              rich: rich,
            }
          },
          data: data
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
.charts {
  width: 100%;
  height: calc(100% - 0px);
  position: relative;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}

.charts1 {
  background-size: 88%;
  position: relative;
  height: calc(100% - 20px);
  width: calc(41% - 30px);
  margin-left: 15px;
  margin-right: 15px;
}

.charts2 {
  position: relative;
  height: 100%;
  width: calc(50% - 60px);
  display: flex;
  margin-right: 10px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
}

.charts2 .charts2item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}

.charts2 .charts2item .charts2iteml {
  font-size: 12px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #A7C2F0;
  width: 86px;
  height: 20px;
  border: 1px solid #2B4884;
  text-indent: 10px;
}

.charts2 .charts2item .charts2itemr {
  color: #FFFFFF;
  width: 70px;
  padding-right: 5px;
  height: 20px;
  background: #0CBED3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  font-size: 12px;
  font-family: DIN;
  font-weight: bold;
  color: #FFFFFF;
}

.charts {
  position: relative;
  height: calc(100% - 0px);
  width: 100%;
}

.ibg2 {
  background: #0092FF !important;
}

.ibg3 {
  background: #FFA900 !important;
}

.ibg4 {
  background: #E7470A !important;
}

.ibg5 {
  background: #D30D16 !important;
}

.leiji {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-left: 10%;
  height: 40px;
  margin-top: 10px;

  .leijiinfo {
    background-size: 100% 100%;
    width: 180px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;

    span {
      font-size: 14px;
      font-family: PingFang;
      font-weight: bold;
      color: #A7C2F0;
      margin-left: 15px;
    }

    p {
      font-size: 20px;
      font-family: DIN;
      font-weight: bold;
      color: #FFFFFF;
      margin-left: 19px;
      margin-right: 15px;
    }
  }
}

.chartss {
  position: relative;
  width: 100%;
  height: calc(100% - 90px);
}

.chartss3 {
  height: 40px;
}
</style>
