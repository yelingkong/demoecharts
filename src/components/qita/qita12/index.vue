/**
* @Author: 858834013@qq.com
* @Name: index
* @Date: 2022-05-31
* @Desc:
*/
<template>
  <div>
    <div class="homemaincTop">
      <div class="homemaincTopItem">
        <p>全省平台数</p>
        <div class="homemaincTopItemList">
          <numcard :num="0"></numcard>
          <numcard :num="9"></numcard>
          <numcard :num="4"></numcard>
        </div>
      </div>
      <div class="homemaincTopItem">
        <p>服务企业数</p>
        <div class="homemaincTopItemList">
          <numcard :num="0"></numcard>
          <numcard :num="7"></numcard>
          <span>,</span>
          <numcard :num="9"></numcard>
          <numcard :num="0"></numcard>
          <numcard :num="5"></numcard>
        </div>
      </div>
      <div class="homemaincTopItem">
        <p>收集数</p>
        <div class="homemaincTopItemList">
          <numcard :num="1"></numcard>
          <numcard :num="1"></numcard>
          <span>,</span>
          <numcard :num="0"></numcard>
          <numcard :num="0"></numcard>
          <numcard :num="0"></numcard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numcard from "./numcard";
export default {
  name: "index",
  components: {numcard},
  props: {
    id: {
      type: String,
      default() {
        return '';
      }
    }
  },
  data() {
    return {
      status: ''
    }
  },
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.homemaincTop {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  width: 100%;

  .homemaincTopItem {
    margin-right: 70px;

    p {
      font-size: 16px;
      font-family: PingFang;
      font-weight: 500;
      color: #FFFFFF;
    }

    .homemaincTopItemList {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
      margin-top: 14px;

      span {
        font-size: 38px;
        font-family: QuartzEF;
        font-weight: 400;
        color: #FFFFFF;
      }
    }
  }
}
</style>
