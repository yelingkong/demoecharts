/**
* @Author: 858834013@qq.com
* @Name: list
* @Date: 2022-03-13
* @Desc:
*/
<template>
  <div class="list">
    <vue-seamless-scroll
        :data="list"
        :class-option="defaultOption"
        class="paiming"
    >
      <div class="lists" v-for="(item,index) in list" :key="index">
        <div class="item1">
          <div class="dian"></div>
          {{ item.title }}
        </div>
        <div class="item1">{{ item.time }}</div>
        <div class="item1">
          <type :type="item.type"></type>
        </div>
      </div>
    </vue-seamless-scroll>
  </div>
</template>

<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
import type from './type'

export default {
  name: 'list',
  components: {
    vueSeamlessScroll,
    type
  },
  computed: {
    defaultOption () {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      }
    }
  },
  props: {
    id: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      list: [{
        title: '请专业师傅尽快帮助我公司维修供水管路',
        time: '2021-08-25 11:40',
        type: 0
      }, {
        title: '请专业师傅尽快帮助我公司维修供水管路',
        time: '2021-08-25 11:40',
        type: 0
      }, {
        title: '请专业师傅尽快帮助我公司维修供水管路',
        time: '2021-08-25 11:40',
        type: 0
      }, {
        title: '请专业师傅尽快帮助我公司维修供水管路',
        time: '2021-08-25 11:40',
        type: 1
      }, {
        title: '请专业师傅尽快帮助我公司维修供水管路',
        time: '2021-08-25 11:40',
        type: 0
      }, {
        title: '请专业师傅尽快帮助我公司维修供水管路',
        time: '2021-08-25 11:40',
        type: 1
      }]
    }
  },
  watch: {},
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

.list {
  position: relative;
  width: calc(100% - 60px);
  margin: auto;
  height: calc(60% - 90px);
}

.lists {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  height: 42px;
  background: rgba(12, 39, 61, 0);

  .item1 {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    text-indent: 10px;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    flex: 2.5;

    span {
      font-size: 14px;
      font-family: MicrosoftYaHei;
      font-weight: bold;
      color: #FFD83C;
    }
  }

  .item1:nth-child(3) {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
  }

  .item1:nth-child(2) {
    white-space: nowrap;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: #7A97B7;
  }
}

.lists:nth-child(2n+1) {
  background: rgba(12, 39, 61, 1);
}

.paiming {
  width: 100%;
  position: relative;
  height: 100%;
  overflow: hidden;
}

.dian {
  width: 6px;
  height: 6px;
  background: #F6F7FB;
  margin-left: 16px;
  margin-right: 8px;
  border-radius: 50%;
}
</style>
