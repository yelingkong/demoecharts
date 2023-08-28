/**
* @Author: 858834013@qq.com
* @Name: tab自动切换
* @Date: 2022-06-14
* @Desc: tab自动切换
*/
<template>
  <div class="ywsjgl">
    <p>tab自动切换滑动点击切换</p>
    <tab :list="tablist" :active.sync="active"></tab>
  </div>
</template>

<script>
import tab from "./components/tab";

export default {
  name: "ywsjgl",
  components: {tab},
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
      status: '',
      active: 0,
      tablist: [{
        name: '本年',
        id: 0,
      }, {
        name: '近3年',
        id: 1,
      }, {
        name: '近5年',
        id: 2
      }, {
        name: '近5年',
        id: 3
      }, {
        name: '近5年',
        id: 4
      }, {
        name: '近5年',
        id: 5
      }, {
        name: '近5年',
        id: 6
      }, {
        name: '近5年',
        id: 7
      }, {
        name: '近5年',
        id: 8
      }, {
        name: '近5年',
        id: 9
      }, {
        name: '近5年',
        id: 10
      },]
    }
  },
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.ywsjgl {
  width: calc(100% - 50px);
  padding-top: 30px;
  padding-left: 20px;

  p {
    color: #fff;
    font-size: 16px;
  }

  .ywsjglTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
  }
}
</style>
