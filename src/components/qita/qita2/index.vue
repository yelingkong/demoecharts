<template>
  <div class="nongji">
    <div class="list scroll">
      <div class="listitem" v-for="(item,index) in list" :key="index">
        <div class="listitemtop">
          <div class="listitemtopl">
            <div class="info">
              <img v-if="index==0" src="./assets/icon_jinpai.png" alt="">
              <img v-else-if="index==1" src="./assets/icon_yinpai.png" alt="">
              <img v-else-if="index==2" src="./assets/icon_tongpai.png" alt="">
              <span v-else>{{ index + 1 }}</span>
            </div>
            <div class="info2">{{ item.orgName }}</div>
          </div>
          <div class="listitemtopr">
            <span>{{ item.finishedArea ? item.finishedArea : 0 }}/{{ item.planArea }}</span>
          </div>
        </div>
        <div class="listitembottom">
          <el-progress :text-inside="true" :stroke-width="10" :percentage="item.percent*100"></el-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {demoechartspaihang} from "@/api/api/user";

export default {
  name: "nongji",
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
      list: []
    }
  },
  watch: {},
  mounted() {
    this.getdata()
  },
  methods: {
    getdata() {
      var that = this
      demoechartspaihang().then(function (res) {
        that.list = res.data
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.nongji {
  width: 100%;
  height: 100%;
  position: relative;

  .nongjititle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;

    img {
      width: 18px;
      margin-left: 20px;
      margin-right: 10px;
    }

    p {
      color: #19A9E6;
      font-weight: bold;
      font-size: 16px;
      font-family: "微软雅黑";
    }

  }
}

.list {
  position: relative;
  width: calc(100% - 70px);
  padding-right: 30px;
  margin-left: 30px;
  height: calc(100% - 70px);
  overflow: scroll;

  .listitem {
    width: 100%;

    .listitemtop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;

      .listitemtopl {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
      }

      .listitemtopr {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;

        span {
          font-size: 18px;
          font-family: DIN;
          font-weight: bold;
          color: #00EAF7;
        }

        p {
          color: rgba(155, 222, 240, 1);
          font-size: 12px;
        }
      }
    }

    .listitembottom {
      width: calc(100% - 30px);
      margin-left: 30px;
      height: 20px;
    }
  }

  ::v-deep {
    .el-progress-bar__outer {
      background: rgba(18, 87, 123, 0.5);
    }

    .el-progress-bar__inner {
      background: linear-gradient(90deg, #00A6FF, #1AF3FF);
      box-shadow: 2px 3px 3px 0px rgba(0, 0, 0, 0.3);
    }

    .el-progress-bar__innerText {
      display: none;
    }
  }
}

.info {
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  font-size: 18px;
  font-family: Candara;
  font-weight: normal;
  color: #00C0FF;
}

.info2 {
  font-size: 14px;
  font-family: PingFang;
  font-weight: 400;
  color: #00C0FF;
}
</style>
