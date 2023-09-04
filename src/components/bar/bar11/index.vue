<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>
import * as echarts from "echarts"
export default {
  name: 'echarts1',
  components: {},
  data() {
    return {}
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this;
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(this.$refs.echarts1)
      var legends = ['隐患1', '隐患2', '隐患3', '隐患4'];
      var colors = ['#F47841', '#F4862C', '#D6A227', 'rgba(2, 118, 232, 1)'];
      var data = [
        {
          name: '高风险',
          value: 50
        },
        {
          name: '中风险',
          value: 50
        },
        {
          name: '低风险',
          value: 50
        },
        {
          name: '未评估',
          value: 40
        }
      ];
      var option = {
        color: colors,
        title: [
          {
            top: '38%',
            x: 'center',
            text: '150',
            textStyle: {
              fontSize: 40,
              color: '#F37140',
            },
          }, {
            top: '53%',
            x: 'center',
            text: '已评估',
            textStyle: {
              fontSize: 16,
              color: 'rgba(255, 255, 255, 1)',
            },
          },
        ],
        legend: {
          show: false,
          orient: 'horizontal',
          bottom: 30,
          right: "center",
          itemGap: 20,
          itemWidth: 20,
          itemHeight: 14,
          width: '100%',
          textStyle: {
            color: "#fff",
            fontSize: 14
          },
          data: legends,
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '隐患评估',
            type: 'pie',
            radius: ['32%', '65%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            minShowLabelAngle: 60,
            label: {
              show: true,
              normal: {
                position: 'outside',
                fontSize: 14,
                color: 'auto',
                formatter: (params) => {
                  return params.value + '\n' + params.name;
                }
              }
            },
            labelLine: {
              length: 1,
              length2: 20
            },
            data: data
          },
          {
            stack: 'a',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['32%', '45%'],
            roseType: 'area',
            zlevel: 10,
            hoverAnimation: false,
            tooltip: {
              show: false
            },
            labelLine: {
              show: false,
              length: 1,
              length2: 20
            },
            data: [{
              name: '',
              value: 0,
              itemStyle: {
                normal: {
                  color: "rgba(255,255,255,0.2)"
                }
              }
            }]
          }
        ]
      };
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
