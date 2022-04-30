<template>
  <div class="copy">
    <el-button v-copy="copy" type="primary">复制</el-button>
  </div>
</template>

<script>

export default {
  name: "vcopy",
  components: {},
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
      copy: '复制内容'
    }
  },
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.copy {
  padding: 30px;
}
</style>
