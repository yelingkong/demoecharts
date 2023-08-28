/**
* @Author: 858834013@qq.com
* @Name: steps
* @Date: 2022-08-21
* @Desc: 步骤条
*/
<template>
  <div class="steps">
    <div class="stepsLine"></div>
    <div class="stepsItem" :class="{active:active>=index}" v-for="(item,index) in list" :key="index">
      <div class="stepsItemInner">
        <div class="stepNum">{{ index + 1 }}</div>
        <div class="stepTitle">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "steps",
  components: {},
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    },
    active: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
  },
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.steps {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  position: relative;
  background: #fff;

  .stepsItem {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    background: #fff;
    position: relative;
    padding-left: 3%;
    padding-right: 3%;
    flex-shrink: 0;
    z-index: 1;
  }

  .stepsItemInner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;

    .stepNum {
      width: 28px;
      height: 28px;
      background: rgba(#999999, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
      border-radius: 50%;
      font-size: 20px;
      color: #999999;
    }

    .stepTitle {
      margin-left: 16px;
      font-size: 16px;
      color: #999999;
    }
  }

  .stepsItem.active {
    .stepsItemInner {
      .stepNum {
        background: rgba(50, 125, 255, 1);
        color: #FFFFFF;
      }

      .stepTitle {
        color: rgba(51, 51, 51, 1);
      }
    }
  }
}

.stepsLine {
  width: 70%;
  height: 1px;
  background: rgba(#999999, 0.3);
  position: absolute;
}
</style>
