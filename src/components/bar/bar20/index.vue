/**
* @Author: 858834013@qq.com
* @Name: index
* @Date: 2022-03-13
* @Desc:
*/
<template>
  <div class="parameter">
    <div class="list">
      <Echarts :number="item.number" :number2="item.number2" :color="item.color" :color2="item.color2"
               :title="item.title" class="listEcharts"
               v-for="(item,index) in list" :key="index"></Echarts>
    </div>
  </div>
</template>

<script>
import Echarts from './Echarts'

export default {
  name: 'parameter',
  components: {
    Echarts,
  },
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
      list: [{
        title: '党组织总数',
        number: 4,
        number2: 126,
        color: '#04D7D3',
        color2: '#06697B',
      }, {
        title: '工会组织总数',
        number: 4,
        number2: 126,
        color: '#CFA510',
        color2: '#CF8B2F',
      }, {
        title: '共青团组织',
        number: 4,
        number2: 126,
        color: '#FCFB06',
        color2: '#FEEF00',
      }, {
        title: '志愿服务队',
        number: 4,
        number2: 126,
        color: '#2DD774',
        color2: '#26BE68',
      }]
    }
  },
  mounted () {
    new this.$wow.WOW().init()
  },
  watch: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.parameter {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;
}

.list {
  position: relative;
  width: 100%;
  height: calc(100% - 0px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;

  .listEcharts {
    width: 50%;
    height: 50%;
    position: relative;
  }
}
</style>
