<template>
  <div class="echarts1" ref="echarts">
  </div>
</template>

<script>

import {FontChart} from '@/utils/utils'
import _ from 'lodash'
import * as echarts from "echarts"
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
    return {}
  },
  watch: {},
  mounted() {
    var that = this
    _.delay(function (text) {
      that.drawLine()
    }, 1000, 'later')
  },
  methods: {
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      let myChart = echarts.init(that.$refs.echarts)

      var option = {
        "color": ["#1890FF", "#2F54EB", "#52C41A", "#FA8C15", "#FA541D"],
        "tooltip": {"trigger": "axis", "axisPointer": {"type": "shadow"}},
        "legend": {
          "icon": "circle", textStyle: {
            color: 'rgba(146, 178, 215, 1)'
          },
        },
        "grid": {"left": "3%", "right": "0", "bottom": "3%", "containLabel": true},
        "xAxis": {"type": "value", "show": false},
        "yAxis": {
          "type": "category",
          "data": ["风行公司(104957897kg)", "福顺有限公司(104901063kg)"],
          "axisLabel": {
            "inside": true,
            "verticalAlign": "top",
            "padding": [-50, 0, 0, 0],
            "fontSize": 14,
            "color": "#fff",
            "fontWeight": 500
          },
          "axisLine": {"show": false},
          "axisTick": {"show": false}
        },
        "series": [{
          "name": "石子02",
          "type": "bar",
          "stack": "total",
          "label": {"show": false},
          "emphasis": {"focus": "series"},
          "barWidth": 40,
          "data": [20969022, 21001445],
          "selected": true
        }, {
          "name": "大理石",
          "type": "bar",
          "stack": "total",
          "label": {"show": false},
          "emphasis": {"focus": "series"},
          "barWidth": 40,
          "data": [20981802, 20986925],
          "selected": true
        }, {
          "name": "合成板材",
          "type": "bar",
          "stack": "total",
          "label": {"show": false},
          "emphasis": {"focus": "series"},
          "barWidth": 40,
          "data": [20947378, 21056961],
          "selected": true
        }, {
          "name": "原木板",
          "type": "bar",
          "stack": "total",
          "label": {"show": false},
          "emphasis": {"focus": "series"},
          "barWidth": 40,
          "data": [21022138, 20899010],
          "selected": true
        }, {
          "name": "地砖（白）",
          "type": "bar",
          "stack": "total",
          "label": {"show": false},
          "emphasis": {"focus": "series"},
          "barWidth": 40,
          "data": [21037557, 20956722],
          "selected": true
        }]
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
  height: calc(100% - 110px);
}
</style>
