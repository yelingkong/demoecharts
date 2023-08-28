<template>
  <div class="item">
    <itemtitle>
      <router-link v-if="link" :to="link">
        {{ title }}
      </router-link>
      <span v-else>
        {{ title }}
      </span>
    </itemtitle>
    <slot></slot>
  </div>
</template>

<script>
import itemtitle from "@/components/itemtitle";

export default {
  name: "item",
  components: {itemtitle},
  props: {
    title: {
      type: String,
      default() {
        return '';
      }
    },
    link: {
      type: String,
      default() {
        return '';
      }
    },
  },
  computed: {
    total1: function () {
      var list = this.list
      var total = 0
      list.forEach((type) => {
        total = total + Number(type.num)
      });
      return total
    },
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
.item {
  width: 100%;
  position: relative;
  height: 100%;
  background-size: 100% 100%;

  a {
    color: #fff;
    text-decoration: none;
  }
}

.titleimg {
  height: 20px;
  margin-left: 20px;
}

.info {
  margin-left: 20px;
  font-size: 16PX;
  font-family: DIN;
  font-weight: bold;
  color: #FFFFFF;
}
</style>
