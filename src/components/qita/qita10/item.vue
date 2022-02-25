/**
* @Author: 858834013@qq.com
* @Name: item
* @Date: 2022-02-08
* @Desc:
*/
<template>
  <div class="skinItem">
    <div :class="item" class="skinItem_left"></div>
    <div class="skinItem_right">
      <div class="skinItem_right_top"></div>
      <img v-if="themeId==item" class="active" src="./assets/active.png" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'skinItem',
  components: {},
  props: {
    themeId: {
      type: String,
      default() {
        return ''
      }
    },
    item: {
      type: String,
      default() {
        return ''
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
.skinItem {
  width: 80px;
  height: 80px;
  background: #F4F9FD;
  box-shadow: 0px 2px 32px 0px rgba(184, 200, 224, 0.22);
  border-radius: 8px;
  border: 1px solid #D8E0F0;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow: hidden;
  position: relative;

  .skinItem_left {
    width: 40%;
    height: 100%;
    background: #253890;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .skinItem_left.Blue {
    background: #0757BA;
  }

  .skinItem_left.purple {
    background: #7228CC;
  }

  .skinItem_left.green {
    background: #16A172;
  }

  //'deepBlue', 'Blue', 'purple', 'green'

  .skinItem_right_top {
    width: 100%;
    height: 37px;
    background: #FFFFFF;
    position: absolute;
    top: 0;
    left: 0;
  }

  .skinItem_right {
    img {
      width: 30px;
      height: 22px;
      position: absolute;
      right: 10px;
      bottom: 10px;
    }
  }
}
</style>
