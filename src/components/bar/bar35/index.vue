<template>
  <div class="itemBodys">
    <echarts :list="list"></echarts>
  </div>
</template>

<script>
import echarts from "./components/echarts.vue";
export default {
  data() {
    return {
      list: [
        {
          name: '焚烧',
          value: 40
        },
        {
          name: '填埋',
          value: 30
        },
        {
          name: '资源化',
          value: 30
        },
        {
          name: '水泥窑协同',
          value: 30
        },
        {
          name: '水泥窑协同1',
          value: 30
        },
        {
          name: '水泥窑协同2',
          value: 30
        },
        {
          name: '水泥窑协同3',
          value: 30
        },
        {
          name: '水泥窑协同4',
          value: 30
        },
        {
          name: '水泥窑协同5',
          value: 30
        },]
    }
  },
  components: {echarts},
  computed: {},
  mounted() {
    var that = this;
  },
  methods: {},
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.itemBodys {
  width: 400px;
  position: relative;
  height: calc(100% - 0px);
}

.echartsBody {
  position: relative;
  width: 100%;
  height: calc(100% - 0px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}
</style>
