/**
* @Author: 858834013@qq.com
* @Name: echarts
* @Date: 2022-10-01
* @Desc:
*/
<template>
  <div class="echartsBody">
    <echart1 title="月平均电用量" num="6,876" unit="Kwh" :progress="40"></echart1>
    <echart1 title="月平均水用量" num="960" unit="吨" :progress="60"></echart1>
  </div>
</template>

<script>
import echart1 from './echart1'

export default {
  name: 'echarts',
  components: {
    echart1
  },
  data() {
    return {}
  },
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.echartsBody {
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  height: calc(100% - 40px);
  margin-top: 40px;
}
</style>
