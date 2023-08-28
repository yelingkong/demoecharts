<template>
  <div class="jinduBody">
    <jindu num="50" progress="50" name="耗油" color1="rgba(8, 177, 255, 1)" color2="rgba(107, 255, 243, 1)"></jindu>
    <jindu num="50" progress="50" name="食醋" color1="rgba(243, 137, 31, 1)" color2="rgba(240, 205, 35, 1)"></jindu>
    <jindu num="50" progress="50" name="料酒" color1="rgba(41, 255, 131, 1)" color2="rgba(41, 255, 131, 1)"></jindu>
  </div>
</template>

<script>
import jindu from "./jindu";

export default {
  name: "jinduIndex",
  components: {jindu},
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
