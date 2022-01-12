<template>
  <div class="renyuanlist">
    <div class="line"></div>
    <div class="ltitle">
      选择人员
      <img @click="gohide" src="./assets/icon_shrinkage.png" alt="">
    </div>
    <div class="search">
      <input class="inputColor" v-model="message" type="text" @keyup.enter="onQuickQuery">
      <div class="searchbut">
        <img class="link" src="./assets/icon_search.png" alt="" @click="onQuickQuery">
      </div>
    </div>
    <div class="listinfo scroll">
      <div class="listinfoitem">
        <span>李某(工牌)</span>
        <div class="listinfoitemright">
          <img src="./assets/icon_address2.png" alt="">
          <img src="./assets/icon_lujing.png" alt="">
        </div>
      </div>
      <div class="listinfoitem" v-for="(item,index) in 20" :key="index">
        <span>李某(工牌)</span>
        <div class="listinfoitemright">
          <img src="./assets/icon_tel.png" alt="">
          <img src="./assets/icon_address.png" alt="">
          <img src="./assets/icon_lujing.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "renyuan2",
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
      message: ''
    }
  },
  watch: {},
  mounted() {
  },
  methods: {
    onQuickQuery() {
    },
    gohide() {
      this.$emit('gethide', true)
    }
  }
}
</script>

<style lang="scss" scoped>
.renyuanlist {
  position: absolute;
  top: -0px;
  left: 0px;
  height: 500px;
}

.inputColor {
  color: #AADDFF;
}

.renyuanlist {
  width: 273px;
  margin-bottom: 10px;
  position: relative;
  background: url("./assets/leftbg.png") no-repeat;
  background-size: 100% 100%;
  box-shadow: 0px 3px 36px 0px rgba(0, 0, 0, 0.56);

  .line {
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #04A6F0, #FFFFFF);
  }

  .search {
    width: calc(100% - 40px);
    margin-top: 0px;
    height: 38px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    margin-left: 20px;
    //box-shadow: 0px 2px 10px 5px #085582;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;

    input {
      width: 100%;
      position: relative;
      height: 32px;
      font-size: 18px;
      background: none;
      border: none !important;
      outline: none;
    }

    .searchbut {
      width: 37px;
      height: 38px;
      background: #EEA854;
      border-radius: 0px 6px 6px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      flex-wrap: nowrap;
      flex-direction: row;

      img {
        width: 19px;
      }
    }
  }

  .ltitle {
    margin-left: 20px;
    margin-top: 30px;
    font-size: 16px;
    font-family: PingFang;
    font-weight: bold;
    color: #AADDFF;
    margin-bottom: 10px;

    img {
      width: 0.15625rem;
      margin-right: 0rem;
      cursor: pointer;
    }
  }
}

.ltitle {
  margin-left: 20px;
  margin-top: 30px;
  font-size: 16px;
  font-family: PingFang;
  font-weight: bold;
  color: #AADDFF;
  margin-bottom: 20px;
  width: calc(100% - 35px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}

.listinfo {
  margin-top: 30px;
  overflow: scroll;
  height: 350px;
}

.listinfoitem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  height: 50px;

  span {
    font-size: 14px;
    font-family: PingFang;
    font-weight: bold;
    color: #FFFFFF;
    margin-left: 20px;
  }

  .listinfoitemright {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;
    margin-right: 20px;
    flex-direction: row;

    img {
      width: 26px;
      margin-left: 5px;
    }
  }
}
</style>
