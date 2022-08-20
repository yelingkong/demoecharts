/**
* @Author: 858834013@qq.com
* @Name: exportExcel
* @Date: 2022-08-20
* @Desc: 导出文档
*/
<template>
  <div class="newButton">
    <exportExcel :t-header="header" :key-val="keyVal" :list="list" file-name="导出demo">
      <el-button type="primary">导出Excel</el-button>
    </exportExcel>
  </div>
</template>

<script>
import exportExcel from "./exportExcel";

export default {
  name: "demo",
  components: {
    exportExcel,
  },
  data: function () {
    return {
      header: ['标题', '描述', '内容'],
      keyVal: ['title', 'desc', 'content'],
      list: [{
        title: '这是标题',
        desc: '这是描述',
        content: '这是内容'
      }, {
        title: '标题',
        desc: '描述',
        content: '内容'
      },]
    }
  },
  mounted() {

  },
  methods: {},
}
</script>

<style lang="less">
.newButton {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  padding-top: 200px;
}
</style>
