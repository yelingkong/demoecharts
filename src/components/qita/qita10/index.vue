/**
* @Author: 858834013@qq.com
* @Name: changeSkin
* @Date: 2022-02-07
* @Desc:
*/
<template>
  <div class="Home">
    <div class="pageMain">
      <div class="listInfo">
        <div v-for="(item,index) in themeList" :key="index" @click="changeSkin(item)">
          <item :themeId="themeId" :item="item">
            {{ item }}
          </item>
        </div>
      </div>
    </div>
    <changeTheme v-if="theme" :theme="theme"></changeTheme>
    <div class="yangshizhanshi">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
    </div>
  </div>
</template>

<script>
import item from './item'
import changeTheme from './changeTheme'

export default {
  name: 'Home',
  data() {
    return {
      // 选中的主题
      themeId: '',
      // 主题数据
      themeList: ['deepBlue', 'Blue', 'purple', 'green'],
      themeName: '',
      list: [{
        name: 'deepBlue',
        theme: '#232959'
      }, {
        name: 'Blue',
        theme: '#0657BB'
      }, {
        name: 'purple',
        theme: '#7128CB'
      }, {
        name: 'green',
        theme: '#15A073'
      }]
    }
  },
  components: {item, changeTheme},
  mounted() {
    if (localStorage.getItem('theme')) {
      this.themeId = localStorage.getItem('theme')
    } else {
      this.themeId = 'deepBlue'
    }
  },
  computed: {
    theme() {
      var name = '#232959'
      this.list.forEach((type) => {
        if (this.themeName == type.name) {
          name = type.theme
        }
      })
      return name
    }
  },
  methods: {
    // 换肤
    changeSkin(mode) {
      this.themeId = mode
      this.themeName = mode
      if (!mode) {
        window.document.documentElement.setAttribute('data-theme', 'blue')
        localStorage.setItem('theme', 'blue')
      } else {
        window.document.documentElement.setAttribute('data-theme', mode)
        localStorage.setItem('theme', mode)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.Home {
  width: 100%;
  height: calc(100% - 0px);
  position: relative;
  padding-top: 50px;

  .listInfo {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
  }
}


</style>

