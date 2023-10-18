<template>
  <span class="pro">{{ proportion }}%</span>
</template>

<script>
export default {
  name: "proportion",
  data() {
    return {}
  },
  computed: {
    proportion: function () {
      var total = 0
      this.list.forEach((type) => {
        total += type.value
      });
      return ((this.value / total) * 100).toFixed(1)
    }
  },
  components: {},
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.pro {
  font-size: 16px;
  font-family: DIN-Bold;
  font-weight: bold;
}
</style>
