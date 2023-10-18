<template>
  <div class="itemBodys">
    <echarts1 :list="list"></echarts1>
  </div>
</template>

<script>

import echarts1 from "./echarts1/index.vue";

export default {
  name: "title",
  data() {
    return {
      list: [
        {
          name: '光照传感器',
          value: 80,
          color1: 'rgba(0, 168, 255, 1)',
          color2: 'rgba(0, 168, 255, 1)',
          checked: true
        },
        {
          name: 'C02浓度传感器',
          value: 100,
          color1: 'rgba(0, 238, 255, 1)',
          color2: 'rgba(0, 238, 255, 1)',
          checked: true
        },
        {
          name: '土壤水分传感器',
          value: 70,
          color1: 'rgba(255, 219, 113, 1)',
          color2: 'rgba(255, 219, 113, 1)',
          checked: true
        },
        {
          name: '土壤温度传感器',
          value: 70,
          color1: 'rgba(255, 158, 116, 1)',
          color2: 'rgba(255, 158, 116, 1)',
          checked: true
        },
        {
          name: '基质称传感器',
          value: 70,
          color1: 'rgba(116, 123, 255, 1)',
          color2: 'rgba(116, 123, 255, 1)',
          checked: true
        },
        {
          name: '放风控制柜',
          value: 70,
          color1: 'rgba(26, 118, 255, 1)',
          color2: 'rgba(26, 118, 255, 1)',
          checked: true
        }]
    }
  },
  components: {echarts1},
}
</script>

<style lang="scss" scoped>
.itemBodys {
  position: relative;
  width: calc(100% - 40px);
  margin: 0 auto;
  height: calc(100% - 10px);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: flex-start;

  .info1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    height: 30px;

    span {
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: #FFFFFF;
      margin: 0;
      padding: 0;
    }
  }

  .info2 {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: flex-start;


    .info2s {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      margin-bottom: 10px;
      width: 100%;
      flex-direction: row;
      align-content: flex-start;

      span {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: nowrap;
        width: 110px;
        flex-direction: row;
        align-content: flex-start;
        font-size: 14px;
        font-family: MicrosoftYaHei;
        font-weight: 400;
        color: #CAD3ED;
      }

      .info2sR {
        width: calc(100% - 127px);
        margin-left: 7px;
      }
    }
  }
}
</style>
