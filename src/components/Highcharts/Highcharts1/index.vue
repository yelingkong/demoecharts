<template>
  <div class="echarts1" :id="className" ref="echarts1">

  </div>
</template>

<script>

import Highcharts from "highcharts";
import highcharts3d from 'highcharts/highcharts-3d'

highcharts3d(Highcharts)
export default {
  name: 'echarts1',
  components: {},
  data() {
    return {
      className: ''
    }
  },
  mounted() {
    this.className = 'container' + this.randomString(10)
    this.$nextTick(() => {
      this.drawLine()
    })
  },
  methods: {
    randomString(e) {
      e = e || 32;
      var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        a = t.length,
        n = "";
      for (var i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
      return n
    },
    drawLine() {
      var chart = Highcharts.chart(this.className, {
        title: {
          text: ''
        },
        chart: {
          type: 'pie',
          backgroundColor: 'rgba(0,0,0,0)',
          options3d: {
            enabled: true,
            alpha: 60,
            beta: 0
          }
        },
        colors: ['#1648c4', '#c6cee3'],
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },
        credits: {
          enabled: false
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: false,
            cursor: 'pointer',
            depth: 10,
            width: 5,
            lineWidth: 1,

            dataLabels: {
              padding: 0,
              show: false,
              enabled: false,
              style: {
                color: 'rgba(146, 178, 215, 1)'
              }
            },
          }
        },
        series: [{
          type: 'pie',
          name: '故障类型',

          data: [
            ['机电故障', 45],
            ['电气故障', 8],
            ['物料原因', 8],
          ]
        }]
      });
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
