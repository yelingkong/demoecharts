<template>
  <div class="qiu">
    <img class="qiubg" src="../../assets/qiubg.png" alt="">
    <div class="qiu_infobody qiu_infobodyx wow fadeInLeft">
      <div class="qiu_info">
        <img src="../../assets/icon_anfanglei2.png" alt="">
        <div class="inforight">
          <p>案防类</p>
          <span><countTo :num="total1"></countTo></span>
        </div>
      </div>
    </div>
    <div class="qiu_infobody qiu_infobodyc ">
      <div class="qiu_infol  wow fadeInLeft">
        <img src="../../assets/icon_yingxiaolei.png" alt="">
        <div class="inforight">
          <p>营销类</p>
          <span><countTo :num="total4"></countTo></span>
        </div>
      </div>
      <div class="qiu_info  wow fadeInRight">
        <img src="../../assets/icon_yunyinglei.png" alt="">
        <div class="inforight">
          <p>运营类</p>
          <span><countTo :num="total2"></countTo></span>
        </div>
      </div>
    </div>
    <div class="qiu_infobody qiu_infobody2">
      <div class="qiu_infol wow fadeInLeft">
        <img src="../../assets/icon_anfanglei.png" alt="">
        <div class="inforight">
          <p>安防类</p>
          <span><countTo :num="total3"></countTo></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from "@/components/countTo";
import types from '../../data/type.json'

export default {
  name: "jinrishijian",
  components: {countTo},
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      status: '',
      ...types
    }
  },
  computed: {
    total1: function () {
      var list = this.list
      var list2 = this.total1list
      var total = 0
      list2.forEach((type1) => {
        list.forEach((type) => {
          if (type1 == type.alarmDescId) {
            total = total + Number(type.num)
          }
        });
      });
      return total
    },
    total2: function () {
      var list = this.list
      var list2 = this.total2list
      var total = 0
      list2.forEach((type1) => {
        list.forEach((type) => {
          if (type1 == type.alarmDescId) {
            total = total + Number(type.num)
          }
        });
      });
      return total
    },
    total3: function () {
      var list = this.list
      var list2 = this.total3list
      var total = 0
      list2.forEach((type1) => {
        list.forEach((type) => {
          if (type1 == type.alarmDescId) {
            total = total + Number(type.num)
          }
        });
      });
      return total
    },
    total4: function () {
      var list = this.list
      var list2 = this.total4list
      var total = 0
      list2.forEach((type1) => {
        list.forEach((type) => {
          if (type1 == type.alarmDescId) {
            total = total + Number(type.num)
          }
        });
      });
      return total
    },
  },
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.qiubg {
  width: 100%;
  position: absolute;
  top: 25px;
}

.qiu {
  position: relative;
  width: calc(100% - 60px);
  margin-left: 25px;
  height: 100%;
}

.qiu_info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  position: relative;
  width: 106px;

  img {
    width: 106px;
  }

  .inforight {
    position: absolute;
    left: 120px;

    p {
      font-size: 16px;
      font-family: PingFang;
      font-weight: 500;
      color: #BEC6DA;
      margin-bottom: 0px;
      width: 100px;
      margin-top: 0px;
    }

    span {
      font-size: 20px;
      font-family: DIN;
      font-weight: bold;
      color: #FFFFFF;
    }
  }
}

.qiu_infol {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  position: relative;
  width: 106px;

  img {
    width: 106px;
  }

  .inforight {
    position: absolute;
    left: -110px;

    p {
      font-size: 16px;
      font-family: PingFang;
      font-weight: 500;
      color: #BEC6DA;
      margin-bottom: 0px;
      margin-top: 0px;
      text-align: right;
      width: 100px;
    }

    span {
      font-size: 20px;
      font-family: DIN;
      font-weight: bold;
      color: #FFFFFF;
      text-align: right;
      width: 100%;
      width: 100px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
    }
  }
}

.qiu_infobody {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}

.qiu_infobodyc {
  margin-top: -30px;
}

.qiu_infobody2 {
  margin-top: -30px;
}

.qiu_infobodyx {
  padding-top: 30px;
}
</style>
