/**
* @Author: 858834013@qq.com
* @Name: index
* @Date: 2022-05-31
* @Desc:
*/
<template>
  <div class="range">
    <range class="w200" @getdata="getStatus"></range>
  </div>
</template>

<script>
import range from "./range";

export default {
  name: "index",
  components: {range},
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
  methods: {
    getStatus(e) {
      this.status = e
    }
  }
}
</script>

<style lang="scss" scoped>
.w200 {
  width: 300px;
  margin: 0px auto;
}

.range {
  padding-top: 100px;
}
</style>
