/**
* @Author: 858834013@qq.com
* @Name: exportExcel
* @Date: 2022-08-20
* @Desc: 导出文档
*/
<template>
  <div>
    <div class="exportExcel" ref="exportExcel">
    </div>
    <div class="newButton">
      <el-button @click="export2Excel" type="primary">导出Excel</el-button>
    </div>
  </div>
</template>

<script>

import {export_json_to_excel} from "./utils/Export2Excel";
export default {
  name: "exportExcel",
  data: function () {
    return {
      list: [{
        id: '123',
        date: '123',
        bianhao: '123',
        rate: '123',
        odo: '123',
        gps: '123',
      }, {
        id: '123',
        date: '123',
        bianhao: '123',
        rate: '123',
        odo: '123',
        gps: '123',
      }, {
        id: '123',
        date: '123',
        bianhao: '123',
        rate: '123',
        odo: '123',
        gps: '123',
      }, {
        id: '123',
        date: '123',
        bianhao: '123',
        rate: '123',
        odo: '123',
        gps: '123',
      }, {
        id: '123',
        date: '123',
        bianhao: '123',
        rate: '123',
        odo: '123',
        gps: '123',
      },]
    }
  },
  mounted() {

  },
  methods: {
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    },
    export2Excel() {
      this.$message({
        message: '正在准备数据中',
        type: 'warning'
      })
      require.ensure([], async () => {
        const tHeader = ['编号',
          '编号1',
          '编号2',
          '编号3',
          '编号4',
          '编号5']
        const filterVal = ['id', 'date', 'bianhao', 'rate', 'odo', 'gps']
        let list = this.list
        const data = this.formatJson(filterVal, list)
        export_json_to_excel(tHeader, data, '标题')
      })
    },
  },
}
</script>

<style lang="less">
.exportExcel {
  background: #0F75C1;
  width: 100%;
  height: 100%;
  min-height: 100px;
}

.newButton {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  padding-top: 200px;
}
</style>
