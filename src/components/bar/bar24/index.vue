<template>
  <div class="echartsB">
    <div class="echarts1s" ref="echarts">

    </div>
    <div class="echartsBr">
      <div class="list">
        <div class="item" v-for="(item,index) in list" :key="index">
          <div class="dian" :style="{'background':color[index]}"></div>
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'echarts1',
  components: {},
  props: {
    id: {
      type: String,
      default() {
        return ''
      }
    },
  },
  data() {
    return {
      list: ['请假', '迟到', '调休', '出差', '补卡', '早退', '正常'],
      color: ['#44ADE9', '#EE6666', '#FC8452', '#04D9F2', '#ECD305', '#3BA272', '#17E59A']
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
      let myChart = this.$echarts.init(this.$refs.echarts)
      var option = {
        color: this.color,
        series: [
          {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['75%', '85%'],
            label: {
              normal: {
                show: true,
                fontSize: 14,
                color: '#333',
                position: 'center',
                formatter: [
                  '{a|}',
                  '{b|}'
                ].join('\n'),
                rich: {
                  a: {
                    color: '#999',
                    fontWeight: 400,
                    padding: 5,
                    align: 'center'
                  },
                  b: {
                    fontSize: '24',
                    padding: 5,
                    align: 'center'
                  }
                }
              },
              emphasis: {
                show: true,
                fontSize: 14,
                color: '#333',
                position: 'center',
                formatter: [
                  '{a|{b}}',
                  '{b|{c}天}'
                ].join('\n'),
                rich: {
                  a: {
                    color: '#808A8F',
                    fontWeight: 400,
                    padding: 5,
                    fontSize: '16',
                    align: 'center'
                  },
                  b: {
                    fontSize: '30',
                    padding: 5,
                    color: '#14B4FF',
                    align: 'center'
                  }
                }
              },
            },
            itemStyle: {
              normal: {
                borderColor: '#1F323F',
                borderWidth: 0
              }
            },
            data: [{
              name: '请假',
              value: 10
            }, {
              name: '迟到',
              value: 20
            }, {
              name: '调休',
              value: 30
            }, {
              name: '出差',
              value: 30
            }, {
              name: '补卡',
              value: 30
            }, {
              name: '早退',
              value: 30
            }, {
              name: '正常',
              value: 30
            }]
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
.echarts1s {
  position: relative;
  width: calc(50% - 0px);
  height: 100%;
  background: url("./ecbg.png") center center no-repeat;
  background-size: 159px 159px;
}

.echartsB {
  position: relative;
  width: calc(100% - 0px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}

.echartsBr {
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

  .list {
    position: relative;
    width: 70%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;

    .item {
      margin-right: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
      margin-bottom: 20px;

      .dian {
        width: 10px;
        height: 10px;
        background: #44ADE9;
        border-radius: 50%;
        margin-right: 9px;
      }

      span {
        font-size: 14px;
        font-family: PingFang;
        font-weight: 500;
        color: #34393C;
      }
    }
  }
}
</style>
