<template>
  <div class="header">
    <router-link to="/map">地图</router-link>
    <router-link to="/line">折线图</router-link>
    <router-link to="/zhu">柱状图</router-link>
    <router-link to="/">饼状图</router-link>
    <router-link to="/leida">雷达图</router-link>
  </div>
</template>

<script>

import moment from "moment";
import {mapGetters} from 'vuex';

export default {
  name: "headers",
  components: {},
  computed: mapGetters(['bankname', 'bankid']),
  props: {
    id: {
      type: String,
      default() {
        return '';
      }
    },
    url: {
      type: String,
      default() {
        return '';
      }
    },
  },
  data() {
    return {
      options: [],
      week: moment().format('E'),
      value: '1',
      time: moment().format("HH:mm:ss"),
      date: moment().format("YYYY/MM/DD")
    }
  },
  filters: {
    getweek(e) {
      var week = ['一', '二', '三', '四', '五', '六', '日']
      return week[e - 1]
    },
  },
  watch: {},
  mounted() {
    var that = this;
    setInterval(function () {
      that.time = moment().format("HH:mm:ss");
      that.date = moment().format("YYYY/MM/DD");
    }, 1000);
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.header {
  height: 98px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  position: fixed;
  z-index: 10;
  top: 0;

  a {
    color: #fff;
    padding: 10px 20px;
    background: #004881;
    text-decoration: none;
  }

  a:hover, a.router-link-exact-active {
    background: #007DFF;
  }
}
</style>
