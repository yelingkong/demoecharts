<template>
  <div class="homebody">
    <headers class="wow fadeInDown"></headers>
    <div class="homemain">
      <!--      左侧-->
      <div class="homemainl">
        <item class="homemainls" :list="typeData" :titleimg="img1" data-wow-delay="0s">
          <div class="itembody" slot="body">
            <jinrishijian :list="typeData"></jinrishijian>
          </div>
        </item>
        <item class="wow fadeInLeft leixingbody" :titleimg="img2" data-wow-delay="0.4s">
          <div class="itembody" slot="body">
            <leixing :list="typeData"></leixing>
          </div>
        </item>
        <item class="wow fadeInLeft yujingchuzhi" :titleimg="img3" data-wow-delay="0.8s">
          <div class="itembody" slot="body">
            <wanchenglv :num="todayData.num" :numclose="todayData.num_closed"></wanchenglv>
          </div>
        </item>
      </div>
      <!--      右侧-->
      <div class="homemainr">
        <item class="wow fadeInRight" :titleimg="img4" data-wow-delay="0s">
          <div class="itembody" slot="body">
            <qushi :list="monthlyData"></qushi>
          </div>
        </item>
        <item class="wow fadeInRight" :titleimg="img5" data-wow-delay="0.4s">
          <div class="itembody" slot="body">
            <wenti :list="typeData2"></wenti>
          </div>
        </item>
        <item class="wow fadeInRight" :titleimg="img6" data-wow-delay="0.8s">
          <div class="itembody" slot="body">
            <yujingliang :list="annualData"></yujingliang>
          </div>
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
// 标题图片
import img1 from '../assets/icon_title1.png'
import img2 from '../assets/icon_title2.png'
import img3 from '../assets/icon_title3.png'
import img4 from '../assets/icon_title4.png'
import img5 from '../assets/icon_title5.png'
import img6 from '../assets/icon_title6.png'
// 中间
// 左侧
import jinrishijian from "@/components/left/jinrishijian";
import leixing from "@/components/bar/bar1/leixing";
import wanchenglv from "@/components/left/wanchenglv";

// 右侧
import wenti from "@/components/right/wenti";
import qushi from "@/components/right/qushi";
import yujingliang from "@/components/right/yujingliang";
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
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
    wanchenglv,
    yujingliang,
    qushi,
    item,
    wenti,
    jinrishijian,
    leixing
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

  .homemain {
    width: 100%;
    height: calc(100% - 0px);
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    position: absolute;

    .homemainl {
      width: calc(22% - 20px);
      padding-left: 20px;
      position: relative;
      height: calc(100% - 100px);
      padding-top: 100px;
      margin-bottom: 20px;
      display: flex;
      background: rgba(1, 20, 59, 0);
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: column;
    }

    .homemainc {
      width: calc(56% - 20px);
      position: relative;
      height: calc(100% - 100px);
      padding-top: 100px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: nowrap;
      flex-direction: column;
    }

    .homemainr {
      width: calc(22% - 20px);
      padding-left: 20px;
      position: relative;
      height: calc(100% - 100px);
      padding-top: 100px;
      margin-bottom: 20px;
      display: flex;
      background: rgba(1, 20, 59, 0);
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: column;
    }
  }
}

.homemainctop {
  width: 100%;
}

.itemt {
  margin-left: 20px;
  height: 20px;
}

.wcd {
  width: 100%;
  height: 100px;
}

.yujingchuzhi {
  height: 120px;
}

.homemaincbottom {
  width: 100%;
  height: calc(100% - 100px);
  position: relative;
}

.itembody {
  position: relative;
  width: 100%;
  height: 100%;
}

.leixingbody {
  height: calc(100% - 526px);
}

.homemainls {
  height: 336px;
}
</style>
