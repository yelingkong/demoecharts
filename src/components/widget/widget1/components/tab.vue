/**
* @Author: 858834013@qq.com
* @Name: tabs
* @Date: 2022-6-14
* @Desc: https://www.wanjunshijie.com/note/vue/3185.html

*/
<template>
  <div class="tabs">
    <div class="tab cur" :class="{active:active==item.id}" @click="getactive(item.id)" v-for="(item,index) in list"
         :key="index"><span>{{ item.name }}</span>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabs",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    active: {
      type: Number,
      default() {
        return 0;
      }
    },
  },
  methods: {
    getactive(e) {
      this.$emit('update:active', e)
    },
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  margin: auto;

  .tab {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
    position: relative;
    height: 50px;
    margin-right: 20px;
    cursor: pointer;

    span {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
    }

    .line {
      background: rgba(54, 107, 229, 0);
      border-radius: 4px;
      position: absolute;
      bottom: 1px;
      width: 100%;
      height: 2px;
    }
  }

  .tab.active {
    span {
      color: #0DF9E6;
    }

    .line {
      background: #0DF9E6;
    }
  }
}
</style>
