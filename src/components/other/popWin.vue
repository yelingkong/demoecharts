/**
* @Author: 858834013@qq.com
* @Name: popWin
* @Date: 2022-03-20
* @Desc: 弹窗
*/
<template>
  <div class="popWin">
    <div @click="getShow">
      <slot></slot>
    </div>
    <el-dialog
      title=""
      append-to-body
      :visible.sync="show"
      width="40%">

    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'popWin',
  components: {},
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      show: false
    }
  },
  watch: {},
  mounted() {
  },
  methods: {
    getHide() {
      this.show = false
    },
    getShow() {
      this.show = true
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
