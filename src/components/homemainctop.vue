<template>
  <div class="homemainctops">
    <div class="homemainctopsitem">
      <p>今日机构预警总量</p>
      <span><countTo :num="nums"></countTo></span>
    </div>
    <div class="homemainctopsitem2">
      <p>今日访客量</p>
      <span><countTo :num="num"></countTo></span>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {visitorCount} from "@/api/api/user";
import countTo from "@/components/countTo";

export default {
  name: "homemainctop",
  components: {countTo},
  props: {
    nums: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  data() {
    return {
      num: 0,
      todayNum: 0,
      time: null
    }
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
    ...mapGetters(['bankname', 'bankid'])
  },
  watch: {
    bankname() {
      var that = this;
      this.getdata()
    }
  },
  mounted() {
    this.getdata()
  },
  methods: {
    getdata() {
      var that = this
      clearInterval(that.time)
      visitorCount(that.bankid).then(function (res) {
        that.num = res.num
        that.time = window.setInterval(() => {
          that.getdata();
          console.log(123)
        }, 10000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.homemainctops {
  display: flex;
  justify-content: space-between;
  background: url("../assets/center_top_bg.png") no-repeat;
  background-size: 100% 100%;
  margin: auto;
  align-items: center;
  width: 536px;
  height: 102px;
  flex-wrap: nowrap;
  flex-direction: row;
  position: relative;
  margin-top: -20px;

  .homemainctopsitem {
    width: 40%;
    margin-left: 15%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: column;

    p {
      font-size: 13px;
      font-family: PingFang;
      font-weight: 800;
      color: #FFFFFF;
      margin: 0;
    }

    span {
      font-size: 25px;
      font-family: PingFang;
      font-weight: 800;
      color: #0DFAEE;
    }
  }

  .homemainctopsitem2 {
    width: 30%;
    margin-left: 10%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: column;

    p {
      font-size: 13px;
      font-family: PingFang;
      font-weight: 800;
      color: #FFFFFF;
      margin: 0;
    }

    span {
      font-size: 25px;
      font-family: PingFang;
      font-weight: 800;
      color: #0DFAEE;
    }
  }
}
</style>
