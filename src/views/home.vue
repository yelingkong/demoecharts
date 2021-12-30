<template>
  <div class="homebody">
    <headers class="wow fadeInDown"></headers>
    <div class="homemain">
      <div class="items">
        <item title="bar1" link="/bar/bar1">
          <bar1 class="bars"></bar1>
        </item>
      </div>
    </div>
  </div>
</template>

<script>
// 头部
import headers from "../components/header";
import item from "../components/item";
import {annual, daily} from "@/api/api/user";
import {mapGetters} from 'vuex';
import bar1 from "@/components/bar/bar1/bar1";

export default {
  data() {
    return {
      todayData: {
        num: 0,
        num_closed: 0
      },
      typeData: [],
      // //各分行或支行年度预警量
      annualData: [],
      // // 按月度预警量
      monthlyData: [],
      // // 按业务类型数量
      typeData2: [],
      time: null
    }
  },
  components: {
    headers,
    item,
    bar1
  },
  created() {

  },
  watch: {
    bankid() {
      this.getdata()
      this.getdata2()
    },
  },
  computed: mapGetters(['bankname', 'bankid']),
  mounted() {
    new this.$wow.WOW().init()
    this.getdata()
    this.getdata2()
  },
  methods: {
    getdata() {
      var that = this
      clearInterval(that.time)
      daily(that.bankid).then(function (res) {
        console.log(res)
        that.todayData = res.todayData
        that.typeData = res.typeData
        that.time = window.setInterval(() => {
          that.getdata();
        }, 10000)
      })
    },
    getdata2() {
      var that = this
      annual(that.bankid).then(function (res) {
        //各分行或支行年度预警量
        that.annualData = res.annualData
        // 按月度预警量
        that.monthlyData = res.monthlyData
        // 按业务类型数量
        that.typeData2 = res.typeData
      })
    },
  },
  filters: {}
}
</script>

<style lang="scss" scoped>
.homebody {
  width: 100%;
  position: relative;
  height: 100%;
  background: #09254C;
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

.homemainctop {
  width: 100%;
}

.itembody {
  position: relative;
  width: 100%;
  height: 100%;
}

.items {
  width: 30%;
  height: 200px;
}

.bars {
  width: 100%;
  height: 400px;
}
</style>
