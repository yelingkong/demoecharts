<template>
  <div class="app" id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  data() {
    return {}
  },
  components: {},
  created() {

  },

  mounted() {
    new this.$wow.WOW().init()
  },
  methods: {},
  filters: {},
  watch: {}
}
</script>
<style lang="scss">
#app {
  font-family: "微软雅黑";
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}

.el-table .cell,
.el-table th div,
.el-table--border td:first-child .cell,
.el-table--border th:first-child .cell {
  text-align: center !important;
}

/* 分页 */
.paginat {
  padding: 10px;
  float: right;
}

.ml24 {
  margin-left: 24px !important;
}

.banzi {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 200px;
  box-shadow: #2c3e50 0 0 100px 1px;
  background: #fff;
  border-radius: 8px;
  z-index: 999;
}

.quxiao {
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
}

.quxiao span {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  cursor: pointer;
}

.boxs {
  padding: 0 10px;
  overflow-y: scroll;
  height: 180px;
}

.boxs div {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dfdfdf;
  line-height: 25px;
  cursor: pointer;
}

.boxs div span {
  display: block;
  font-size: 14px;
  overflow: hidden;
}

.fenye {
  .el-pagination.is-background .el-pager li {
    border-radius: 50% !important;
    padding: 0 !important;
    height: 30px !important;
    margin-left: 10px;
    margin-right: 10px;
  }

  .el-pagination.is-background .el-pager li.number {
    background: none !important;
    border: 1px solid rgba(131, 131, 131, 1.00);
  }

  .el-pagination.is-background .el-pager li.el-icon-more {
    background: none !important;
  }

  .el-pagination.is-background .el-pager li.number.active {
    background: rgba(77, 167, 255, 1.00) !important;
    border: 1px solid rgba(77, 167, 255, 1.00);
  }
}

.btn-next, .btn-prev {
  background: none !important;
  border-radius: 15px !important;
  width: 100px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  border: 1px solid rgba(102, 102, 102, 1.00) !important;
}

.pt150 {
  padding-top: 150px;
}

.Home {
  position: absolute;
  width: 100%;
  height: 100%;
}

.homebody {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  position: relative;
  background: #17202b;
  overflow: hidden;
  height: calc(100% - 100px);

  .homebodyr {
    width: calc(100% - 400px);
    background: rgba(12, 18, 28, 1.00);
    position: relative;
    height: 100%;
  }
}

.homebody::-webkit-scrollbar {
  width: 4px;
  position: relative;
  height: calc(100% - 55px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/*滚动条滑块*/
.homebody::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  background: #727fa3;
}

/*滚动条轨道*/
.homebody::-webkit-scrollbar-track {

}

/*滚动条轨道*/
.homebody::-webkit-scrollbar-track-piece {
  background-color: rgba(2, 6, 23, 0);
}

.mt40 {
  margin-top: 40px;
}

.scroll {

}

.scroll::-webkit-scrollbar {
  width: 5px;
  height: 100%;
}

/*滚动条滑块*/
.scroll::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  background: #01C0FF;
  border-radius: 2px;
}

/*滚动条轨道*/
.scroll::-webkit-scrollbar-track {

}

/*滚动条轨道*/
.scroll::-webkit-scrollbar-track-piece {
  background-color: rgba(0, 0, 0, 0.3);
}

.el-select-dropdown__item.selected {
  color: #3ac47c !important;
  font-weight: 700;
}

.cur {
  cursor: pointer;
}

.white {
  color: #fff;
}

.mt100 {
  margin-top: 100px !important;
}

.popinfo {
  width: 298px;
  height: 143px;
  background: #0F1521;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -149px;
  margin-top: -72px;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}

.el-dropdown-menu {
  background: #17202b !important;
  border: none !important;
}

.el-dropdown-menu__item {
  color: #fff;
}

.popper__arrow {
  border-top-color: #17202b !important;
  display: none !important;
}

.el-message-box__title {
  color: #fff !important;
}

.el-message-box {
  background: #0c121c !important;
  border: 1px solid #727fa3 !important;
}

.el-dialog, .el-pager li {
  background: #0b0f15 !important;
}

.el-dialog__title {
  color: #fff !important;
}

.el-input__inner {
  background: #212836 !important;
  border: 1px solid #727fa3 !important;

}

.el-input__inner:focus {
  border: 1px solid #727fa3 !important;
}

.el-button--default:hover {
  color: #1bc47c !important;
}

.mb40 {
  margin-bottom: 40px !important;
}

.app {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mr20 {
  margin-right: 20px !important;
}

.ml20 {
  margin-left: 20px !important;
}

.el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
  background-color: #0E3B70 !important;
}

.el-select-dropdown {
  border: 1px solid #106AB5 !important;
  border-radius: 0.02083rem;
  background-color: #15235E !important;
}

.el-select-dropdown__item {
  color: #9DABBD !important;
}

.el-input__inner {
  background: none !important;
  color: #D6D7DF !important;
  outline: none !important;
}

.headerinfo2 {
  border: 1px solid #1077C4;
  outline: none !important;
  margin-top: 10px;

  .el-input__inner {
    height: 30px !important;
    background: rgba(29, 214, 226, 0.1) !important;
    border: 0px solid #1077C4 !important;
  }

  .el-input__prefix, .el-input__suffix {
    height: 30px !important;
  }

  /* 下面设置右侧按钮居中 */
  .el-input__suffix {
    top: 5px !important;
  }

  .el-input__icon {
    line-height: inherit;
  }

  .el-input__suffix-inner {
    display: inline-block;
  }
}

.el-select .el-input__inner:focus {
  outline: none !important;
}

.el-input {
  outline: none !important;
}

.el-input__icon {
  color: #0F75C1 !important;
}

.el-select-dropdown__item.selected {
  color: #9DABBD !important;
}

.w99 {
  width: 120px !important;
}

.anchorBL {
  display: none !important;
}

a {
  text-decoration: none;
}

.items {
  position: relative;
}

.colorwhite {
  color: #fff;
}
</style>
