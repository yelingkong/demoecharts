<template>
  <div class="homebody">
    <sidebar :openeds="['4']" active="/three/grass"></sidebar>
    <div class="homemain">
      <model></model>
    </div>
  </div>
</template>

<script>
import model from './components/model.vue'
import sidebar from "@/components/sidebar/sidebar";
export default {
  data() {
    return {}
  },
  components: {
    model,
    sidebar
  },
  watch: {},
  methods: {},
  filters: {}
}
</script>
<style lang="scss" scoped>
.homebody {
  width: 100%;
  height: 100%;
  position: fixed;
  //background: #0f1633;
}
.homemain {
  width: calc(100% - 40px);
  margin: 10px auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 100px;
}
</style>
