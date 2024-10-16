<template>
  <div class="list1Main">
    <div class="topInfo">
      <div class="LeftTab">
        <div class="name">{{ name }}</div>
        <div class="underline"></div>
      </div>
      <div class="legend">
        <div class="legendItem">
          <div class="line" style="background: rgba(237, 161, 55, 1)"></div>
          <span>预警线</span>
        </div>
        <div class="legendItem">
          <div class="line"></div>
          <span>告警线</span>
        </div>
      </div>
    </div>
    <div class="echartsItemMain">
      <echartsItem></echartsItem>
    </div>
  </div>
</template>

<script>
import echartsItem from './echartsItem/index.vue'

export default {
  props: {
    name: {
      type: String,
      default: '温度'
    }
  },
  data() {
    return {}
  },
  components: {echartsItem},
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.list1Main {
  width: calc(100% - 0px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  margin-top: 0px;
  position: relative;
  height: calc(100% - 0px);

  .topInfo {
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;

    .LeftTab {
      position: relative;

      .name {
        font-family: AlibabaPuHuiTi_2_75_SemiBold;
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;
        text-align: center;
      }

      .underline {
        width: 36px;
        height: 1px;
        background: linear-gradient(90deg, #107BFF, #5EEEFF);
        margin-top: 4px;
      }
    }

    .legend {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;

      .legendItem {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: flex-start;

        .line {
          width: 19px;
          height: 1px;
          background: #CB203C;
          margin-left: 21px;
        }

        span {
          font-family: AlibabaPuHuiTi_2_55_Regular;
          font-weight: 400;
          font-size: 13px;
          color: #B8CEE0;
          margin-left: 7px;
        }
      }
    }
  }

  .echartsItemMain {
    position: relative;
    width: 100%;
    height: calc(100% - 50px);
  }
}
</style>
