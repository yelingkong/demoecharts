<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>
import {FontChart} from '../../../utils/utils'

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
      xdata: [],
      ydata: []
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
      var xdata = ['名称1', '名称2', '名称3', '名称4', '名称5', '名称6', '名称7',]
      var ydata = [10, 20, 30, 40, 50, 60, 70]
      let tdata = [
        {code: '在职', stock: '74', fundPost: '10'},
        {code: '离职', stock: '68', fundPost: '70'},
        {code: '授权', stock: '39', fundPost: '30'},
        {code: '未授权', stock: '26', fundPost: '60'},
        {code: '高效', stock: '50', fundPost: '40'},
        {code: '低效', stock: '80', fundPost: '50'},
      ];

      function contains(arr, dst) {
        var i = arr.length;
        while ((i -= 1)) {
          if (arr[i] == dst) {
            return i;
          }
        }
        return false;
      }

      var attackSourcesColor = [
        new this.$echarts.graphic.LinearGradient(0, 1, 1, 1, [
          {offset: 0, color: 'rgba(205, 56, 69, 1)'},
          {offset: 1, color: 'rgba(253, 101, 107, 1)'},
        ]),
        new this.$echarts.graphic.LinearGradient(0, 1, 1, 1, [
          {offset: 0, color: 'rgba(243, 114, 63, 1)'},
          {offset: 1, color: 'rgba(255, 162, 86, 1)'},
        ]),
        new this.$echarts.graphic.LinearGradient(0, 1, 1, 1, [
          {offset: 0, color: 'rgba(247, 185, 52, 1)'},
          {offset: 1, color: 'rgba(254, 237, 147, 1)'},
        ]),
        new this.$echarts.graphic.LinearGradient(0, 1, 1, 1, [
          {offset: 0, color: 'rgba(1, 95, 212, 1)'},
          {offset: 1, color: 'rgba(26, 142, 250, 1)'},
        ]),
        new this.$echarts.graphic.LinearGradient(0, 1, 1, 1, [
          {offset: 0, color: 'rgba(0, 172, 146, 1)'},
          {offset: 1, color: 'rgba(45, 195, 165, 1)'},
        ]),
        new this.$echarts.graphic.LinearGradient(0, 1, 1, 1, [
          {offset: 0, color: 'rgba(100, 194, 112, 1)'},
          {offset: 1, color: 'rgba(160, 206, 58, 1)'},
        ]),
      ];
      var attackSourcesColor1 = [
        '#EB3B5A',
        '#FA8231',
        '#F7B731',
        '#3860FC',
        '#1089E7',
        '#F57474',
        '#56D0E3',
        '#1089E7',
        '#F57474',
        '#1089E7',
        '#F57474',
        '#F57474',
      ];
      var attaData = [];
      var attaName = [];
      var topName = [];
      tdata.forEach((it, index) => {
        attaData[index] = parseFloat(it.fundPost).toFixed(2);
        attaName[index] = it.stock;
        topName[index] = `${it.code} ${it.stock}`;
      });
      var salvProMax = [100, 100, 100, 100, 100, 100]; //背景按最大值
      function attackSourcesDataFmt(sData) {
        var sss = [];
        sData.forEach(function (item, i) {
          let itemStyle = {
            color: attackSourcesColor[i],
          };
          sss.push({
            value: item,
            itemStyle: itemStyle,
          });
        });
        return sss;
      }
      var option = {
        tooltip: {
          show: false,
          textStyle: {
            fontSize: FontChart(14),
          },
        },
        color: ['#F7B731'],
        legend: {
          show: false,
          pageIconSize: [12, 12],
          itemWidth: 20,
          itemHeight: 10,
          textStyle: {
            //图例文字的样式
            fontSize: FontChart(10),
            color: '#fff',
          },
          selectedMode: false,
          // data: ['个人所得(亿元)'],
        },
        grid: {
          left: '4%',
          right: '4%',
          bottom: '10%',
          top: '10%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
        },
        yAxis: [
          {
            type: 'category',
            inverse: true,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisPointer: {
              label: {
                show: true,
                //margin: 30
              },
            },
            pdaaing: [0, 0, 0, 0],
            postion: 'right',
            data: attaName,
            axisLabel: {
              show: true,
              margin: 15,
              fontSize: FontChart(12),
              align: 'right',
              padding: [2, 0, 0, 0],
              color: '#fff',
              formatter: function (value, index) {
                return tdata[index].code
              },
            },
          },
          {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
              margin: 20,
              textStyle: {
                margin: 0,
                color: '#fff',
                fontSize: FontChart(12),
              },
            },
            data: attackSourcesDataFmt(attaName),
          },
          {
            //名称
            type: 'category',
            offset: -10,
            position: 'left',
            axisLine: {
              show: false,
            },
            inverse: false,
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
              interval: 0,
              color: ['#fff'],
              align: 'left',
              verticalAlign: 'bottom',
              lineHeight: FontChart(32),
              fontSize: FontChart(10),
            },
            data: topName,
          },
        ],
        series: [
          {
            zlevel: 1,
            name: '',
            type: 'bar',
            barWidth: '40%',
            animationDuration: 1500,
            data: attackSourcesDataFmt(attaData),
            align: 'center',
            itemStyle: {
              normal: {
                barBorderRadius: 13,
              },
            },
            label: {
              show: false,
              fontSize: FontChart(12),
              color: '#fff',
              textBorderWidth: 2,
              padding: [2, 0, 0, 0],
            },
          },
          {
            name: '',
            type: 'bar',
            barWidth: '40%',
            barGap: '-100%',
            margin: '100',
            data: salvProMax,
            textStyle: {
              //图例文字的样式
              fontSize: FontChart(12),
              color: '#fff',
            },
            itemStyle: {
              normal: {
                color: 'rgba(0, 0, 0, 0.2)',
                //width:"100%",
                fontSize: FontChart(12),
                //barBorderRadius: 30,
              },
            },
          },
        ],
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
  height: 100%;
}
</style>
