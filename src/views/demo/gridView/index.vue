<template>
  <div class="homebody">
    <div class="homebodys">
      <sidebar :openeds="['4']" active="/demo/gridView"></sidebar>
      <div class="pageBody">
        <div class="pageBody1">
          <div class="pageBody2">
            <gridView></gridView>
          </div>
          <div class="pageBody2">
            <gridView></gridView>
          </div>
        </div>
        <div class="pageBody1">
          <gridView></gridView>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gridView from "./components/gridView/index.vue";
import sidebar from "@/components/sidebar/sidebar";

export default {
  name: "index",
  components: {
    gridView,
    sidebar
  }
}
</script>

<style lang="scss" scoped>
.homebody {
  width: 100%;
  position: relative;
  height: 100%;
  background: #000;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
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

.pageBody {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  align-content: flex-start;

  .pageBody1 {
    margin: 20px;
    position: relative;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;

    .pageBody2 {
      margin: 20px;
      position: relative;
      width: calc(100% - 40px);
      height: calc(100% - 40px);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
      flex: 1;
    }

    .pageBody2:nth-child(2) {
      flex: 1.5;
    }
  }
}
</style>
