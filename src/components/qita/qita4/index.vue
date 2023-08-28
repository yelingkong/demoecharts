<!--
@Time : 2020/12/31 2:36 下午
@Author : yekong
@File : baozha.vue
@Software : PhpStorm
-->
<template>
  <div class="baozhabody">
    <div @click="showjingbao" class="baozha" :class="{bgs:show1}">
      <div class="baozha1" :class="{bgs:show2}">
        <div class="baozha2" :class="{bgs:show3}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "baozha",
  data: function () {
    return {
      show1: false,
      show2: false,
      show3: false,
    }
  },
  props: {
    top: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  created: function () {

  },
  filters: {},
  methods: {
    showjingbao() {
      this.$refs.jingbao.showpop();
    },
    getbaozha() {
      this.show1 = !this.show1
    },
    getbaozha2() {
      this.show2 = !this.show2

    },
    getbaozha4() {
      setTimeout(() => {
        this.getbaozha4()
      }, 800)
      setTimeout(() => {
        this.getbaozha()
      }, 800)
      setTimeout(() => {
        this.getbaozha2()
      }, 400)
      setTimeout(() => {
        this.getbaozha3()
      }, 100)
    },
    getbaozha3() {
      this.show3 = !this.show3
    },
  },
  mounted() {
    var that = this;
    that.getbaozha4();
  },
}
</script>

<style lang="scss" scoped>
.bgs {
  background: rgba(243, 20, 15, 0.3);
}

.baozha {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;

  .baozha1 {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;

    .baozha2 {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;

      .baozhax {
        border-radius: 50%;
        background: rgba(250, 254, 251, 1.00);
      }
    }
  }
}

.baozhabody {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}
</style>
