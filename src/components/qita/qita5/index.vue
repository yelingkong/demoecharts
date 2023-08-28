<!--
@Time : 2021/1/3 7:08 下午
@Author : yekong
@File : danyaoku2.vue
@Software : PhpStorm
-->
<template>
  <div class="wuxiantanchuang">
    <span style="margin-right: 10px" @click="danyaokushow">无人机</span>
    <div v-for="(item,index) in list" :key="index">
      <wurenjilixian
        @gettopandleft="gettopandleft($event,index)"
        @getindex="getindex(index)" :data="item"
        :index="index"></wurenjilixian>
    </div>
  </div>
</template>

<script>
import wurenjilixian from "./wurenjilixian";

export default {
  name: "danyaoku2",
  components: {
    wurenjilixian
  },
  data: function () {
    return {
      list: []
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
    danyaokushow(e) {
      console.log(e)
      let data = {
        id: 'wurenjilixian' + e,
        x: e.clientX + 20 + this.list.length * 5,
        y: e.clientY + 20 + this.list.length * 5,
        show: true
      }
      this.list.push(data)
      console.log(this.list);
    },
    gettopandleft(data, index) {
      console.log(data);
      this.list[index].y = data.top
      this.list[index].x = data.left
      console.log(this.list)
    },
    getindex(e) {
      this.list[e].show = false
      // this.list.splice(e, 1)
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss" scoped>
.wuxiantanchuang {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  height: 100%;
  position: relative;

  span {
    color: red;
    cursor: pointer;
  }
}
</style>
