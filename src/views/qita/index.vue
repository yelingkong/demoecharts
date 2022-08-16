<template>
  <div class="homebody">
    <div class="homebodys">
      <sidebar :openeds="['3']" active="/qita"></sidebar>
      <div class="homemain">
        <div class="items" v-for="(app,index) in comps" :key="index">
          <item :title="app" :link="'/qita/'+app">
            <component :is="dynamicCom[index]"></component>
          </item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headers from "../../components/header";
import item from "../../components/item";
import sidebar from "@/components/sidebar/sidebar";

export default {
  data() {
    return {
      comps: [],
      dynamicCom: []
    }
  },
  components: {
    headers,
    item,
    sidebar
  },
  created() {
    const files = require.context('../../components/qita', true, /index.vue$/).keys();
    console.log(files)
    files.forEach((type) => {
      this.comps.push(type.match(/.\/(\S*)\/index.vue/)[1])
    });
    console.log(this.comps)
    this.comps.forEach(app => {
      this.dynamicCom.push(require(`../../components/qita/${app}/index.vue`).default)
    })
  },
  watch: {},
  mounted() {
    new this.$wow.WOW().init()
  },
  methods: {},
  filters: {}
}
</script>

<style lang="scss" scoped>
.homebody {
  width: 100%;
  position: relative;
  height: 100%;
  overflow-y: scroll;
  background: #09254C;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

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
}

.homemainctop {
  width: 100%;
}

.itembody {
  position: relative;
  width: 100%;
  height: 100%;
}

.items {
  width: 33.33%;
  height: 400px;
}

.bars {
  width: 100%;
  height: 400px;
}
</style>
