<template>
  <countTo :startVal='startVal' :endVal='num' :duration='3000'></countTo>
</template>

<script>
import countTo from 'vue-count-to';

export default {
  name: "countTos",
  components: {countTo},
  props: {
    num: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  data() {
    return {
      startVal: 0,
    }
  },
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
