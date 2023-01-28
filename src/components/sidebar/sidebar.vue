/**
* @Author: 858834013@qq.com
* @Name: sidebar
* @Date: 2022-08-11
* @Desc:
*/
<template>
  <div class="sidebar scroll">
    <el-menu
      :default-active="active"
      :default-openeds="openeds"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#4fa6e7"
      text-color="#fff"
      :router="true"
      active-text-color="#ffd04b">
      <el-submenu :index="item.url" v-for="(item,index) in list" :key="index">
        <template slot="title">
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item v-for="(item2,index2) in item.children" :key="index2" :index="item2.url">{{ item2.title }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  components: {},
  props: {
    openeds: {
      type: Array,
      default() {
        return [0];
      }
    },
    active: {
      type: String,
      default() {
        return ''
      }
    },
  },
  data() {
    return {
      list: [
        {
          title: 'echarts',
          url: '0',
          children: [
            {
              title: '折线图',
              url: '/line'
            },
            {
              title: '柱状图',
              url: '/zhu'
            },
            {
              title: '饼状图',
              url: '/pie'
            },
            {
              title: '雷达图',
              url: '/leida'
            },
            {
              title: '气泡',
              url: '/qipao'
            },
            {
              title: '仪表盘',
              url: '/dashboard'
            },
            {
              title: '漏斗图',
              url: '/funnel'
            },
            {
              title: '水球图',
              url: '/liquidFill'
            },
            {
              title: 'Highcharts',
              url: '/Highcharts'
            },
            {
              title: '地图',
              url: '/map'
            },
          ]
        },
        {
          title: '地图',
          url: '1',
          children: [
            {
              title: '百度地图',
              url: '/bdmap'
            },
          ]
        },
        {
          title: '动画',
          url: '2',
          children: [
            {
              title: 'lottieWeb',
              url: '/lottieweb'
            },
          ]
        },
        {
          title: '常用组件',
          url: '3',
          children: [
            {
              title: 'widget',
              url: '/widget'
            },
            {
              title: '其他',
              url: '/qita'
            },
          ]
        },
        {
          title: 'threejs',
          url: '4',
          children: [
            {
              title: '树林效果',
              url: '/three/tree'
            },
            {
              title: '草地效果',
              url: '/three/grass'
            },
          ]
        },
      ]
    }
  },
  watch: {},
  mounted() {
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 200px;
  height: 100%;
  position: relative;
  overflow-y: scroll;
  background: #4fa6e7;

  ::v-deep {
    .el-submenu__title i {
      color: #fff !important;
    }

    .el-menu {
      border: none;
    }
  }
}
</style>
