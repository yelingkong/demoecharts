/**
* @Author: 858834013@qq.com
* @Name: index
* @Date: 2022-04-12
* @Desc:
*/
<template>
  <div>
    <div @click="getactive(index)" class="videoslitem" :class="{active:active==index}"
         v-for="(item,index) in list" :key="index">
      <div class="itemimg">
        <icons :type="item.contentType" :is-active="active==index"></icons>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  components: {},
  props: {},
  data() {
    return {
      list: [{
        contentType: 0
      }, {
        contentType: 1
      }, {
        contentType: 2
      }, {
        contentType: 3
      }, {
        contentType: 4
      }],
      active: 0,
    }
  },
  watch: {},
  mounted() {
  },
  methods: {
    getactive(e) {
      this.active = e
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
