/**
* @Author: 858834013@qq.com
* @Name: echarts
* @Date: 2022-12-02
* @Desc:
*/
<template>
  <div class="echartsBody">
    <echart1 color4="rgba(53, 253, 246, 0.3)"
              color3="rgba(53, 253, 246, 0.8)"
              color1="rgba(53, 253, 246, 0.5)"
              color2="rgba(53, 253, 246, 1.00)"
              percent="50"
              title="名称"></echart1>
  </div>
</template>

<script>
import echart1 from './echarts'
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
