<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

export default {
  name: 'echarts1',
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
      status: '',
      active: false,
      list: ['1月', '2月', '3月', '4月', '5月']
    }
  },
  watch: {},
  mounted () {
    this.drawLine()

  },
  methods: {
    getactive () {
      this.active = !this.active
      if (this.active) {
        this.list = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      } else {
        this.list = ['1月', '2月', '3月', '4月', '5月']
      }
      this.$nextTick(() => {
        this.drawLine()
      })
    },
    drawLine () {
      var that=this;

      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts)
      const className = ['进口项下海外代付', '信用证项下打包货款', '出口商票融资'];
      const colorList = ['#27E9A0', '#F9E115', '#007EFF'];
      var data1 = [
        [
          [1, 1, 1, '进口项下海外代付1'],
          [1, 12, 12, '进口项下海外代付2'],
          [2, 8, 8, '进口项下海外代付5'],
          [3, 7, 7, '进口项下海外代付5'],
          [4, 8, 8, '进口项下海外代付5'],
          [5, 4, 4, '进口项下海外代付5'],
          [6, 1, 1, '进口项下海外代付5'],
          [7, 10, 10, '进口项下海外代付5'],
          [8, 11, 11, '进口项下海外代付5'],
          [9, 12, 12, '进口项下海外代付5'],
          [10, 11, 11, '进口项下海外代付5'],
          [11, 10, 10, '进口项下海外代付5'],
        ],
        [[1, 10, 10, '信用证项下打包货款1'],
          [2, 10, 10, '信用证项下打包货款2'],
          [3, 5, 5, '信用证项下打包货款3'],
          [4, 10, 10, '信用证项下打包货款4']],
        [
          [1, 10, 10, '出口商票融资1'],
          [2, 5, 5, '出口商票融资2'],
          [3, 3, 3, '出口商票融资3'],
        ],

      ];
      const series = [
        {
          name: '',
          data: [
            [1.5, 11, 10, '进口项下海外代付'],
          ],
          type: 'scatter',
          symbolSize: 50,
          tooltip: {
            show: false
          },
          label: {
            show: true,
            formatter: '进口项下\n海外代付',
            color: '#fff',
            fontSize: 10,
          },
          itemStyle: {
            normal: {
              shadowBlur: 0,
              shadowOffsetY: 0,
              color: new that.$echarts.graphic.RadialGradient(0.5, 0.2, 0.5, [
                {
                  offset: 0,
                  color: '#fff',
                },
                {
                  offset: 1,
                  color: '#FAE643',
                },
              ]),
            },
          },
        },
        {
          name: '',
          tooltip: {
            show: false
          },
          data: [
            [11, 2, 10, '出口商票融资'],
          ],
          type: 'scatter',
          symbolSize: 60,
          label: {
            show: true,
            formatter: '出口商\n票融资',
            color: '#fff',
            fontSize: 10,
          },
          itemStyle: {
            normal: {
              shadowBlur: 0,
              shadowOffsetY: 0,
              color: new that.$echarts.graphic.RadialGradient(0.5, 0.2, 0.5, [
                {
                  offset: 0,
                  color: '#fff',
                },
                {
                  offset: 1,
                  color: '#4BEDB3',
                },
              ]),
            },
          },
        }
      ];
      className.forEach((item, index) => {
        series.push({
          name: item,
          data: data1[index],
          type: 'scatter',
          symbolSize: 30,
          itemStyle: {
            normal: {
              shadowBlur: 0,
              shadowOffsetY: 0,
              color: new that.$echarts.graphic.RadialGradient(0.5, 0.2, 0.5, [
                {
                  offset: 0,
                  color: '#fff',
                },
                {
                  offset: 1,
                  color: colorList[index],
                },
              ]),
            },
          },
        });
      });
      var option = {
        grid: {
          left: '70',
          right: '70',
          top: '15%',
          bottom: '10%',
        },
        legend: {
          show: true,
          top: 0,
          itemGap: 30, // 垂直间距
          y: 'top', // 延Y轴居中
          data: className,
        },
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'none',
          },
          formatter: function (params) {
            let str = '<div style="text-align: left;">' + params.data[3] + '</div>';
            str += '<div>办理次数：<span style="color: #1971C4">' + params.data[2] + '</span>次</div>';
            str += '<div>授信金额：<span style="color: #FF5E56">' + params.data[1] + '</span>万元</div></div>';
            return str;
          },
        },
        xAxis: {
          show: true,
          name: '时间:月',
          nameTextStyle: {
            color: '#fff',
            padding: [60, 0, 0, -42],
          },
          splitLine: {
            show: false,
            lineStyle: {
              type: 'dashed',
            },
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#dfe4ee',
              width: 0,
            },
          },
          axisLabel: {
            color: '#fff',
            formatter: '{value}月',
          },
        },
        yAxis: {
          show: true,
          name: '交易金额（万元）',
          nameTextStyle: {
            color: '#fff',
            padding: [0, 0, 0, -20],
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
            },
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#dfe4ee',
              width: 1,
            },
          },
          axisLabel: {
            color: '#fff',
            formatter: '{value}',
          },
          scale: true,
        },
        series: series,
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
  height: calc(100% - 50PX);
}
</style>
