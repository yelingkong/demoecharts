/**
* @Author: 858834013@qq.com
* @Name: exportExcel
* @Date: 2022-08-20
* @Desc: 导出Excel
*/
<template>
  <div @click="export2Excel">
    <slot></slot>
  </div>
</template>

<script>

import {export_json_to_excel} from "./utils/Export2Excel";

export default {
  name: "exportExcel",
  data: function () {
    return {}
  },
  props: {
    // 表头内容
    tHeader: {
      type: Array,
      default() {
        return ['标题', '内容']
      }
    },
    //对应表头的键名
    keyVal: {
      type: Array,
      default() {
        return ['title', 'content']
      }
    },
    // 数据内容
    list: {
      type: Array,
      default() {
        return [{
          title: '',
          content: ''
        }]
      }
    },
    // 文件名称
    fileName: {
      type: String,
      default() {
        return 'excel'
      }
    },
  },
  mounted() {

  },
  methods: {
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    export2Excel() {
      var that = this;
      that.$message({
        message: '正在准备数据中',
        type: 'warning'
      })
      require.ensure([], async () => {
        export_json_to_excel(that.tHeader, that.formatJson(that.keyVal, that.list), that.fileName)
      })
    },
  },
}
</script>
