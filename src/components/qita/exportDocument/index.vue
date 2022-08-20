/**
* @Author: 858834013@qq.com
* @Name: exportDocument
* @Date: 2022-03-06
* @Desc: 导出文档
*/
<template>
  <div>
    <div class="exportDocument" ref="exportDocument">
    </div>
    <div class="newButton">
      <el-button @click="saveWord" type="primary">导出word</el-button>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import {s2ab} from "./utils/utils";
import fileSaver from 'file-saver'
import {MyDoc} from './utils/mydoc'

export default {
  name: "exportDocument",
  data: function () {
    return {
      list: [
        ['标题1', '标题2', '标题3', '标题4'],
        ['内容1', '内容2', '内容3', '内容4'],
      ]
    }
  },
  mounted() {

  },
  methods: {
    saveWord() {
      var that = this;
      let doc = new MyDoc()
      document.body.scrollTop = document.documentElement.scrollTop = 0
      html2canvas(this.$refs.exportDocument, {scrollY: 0}).then(canvas => {
        let dataURL = canvas.toDataURL("image/png");
        doc.addHeader('标题1', '1', {'textAlign': 'center'})
        doc.addHeader('标题2', '2', '')
        doc.addHeader('标题3', '3', '')
        doc.addHeader('标题4', '4', '')
        doc.addHeader('标题5', '5', '')
        doc.addHeader('标题6', '6', '')
        doc.addImage(dataURL, 580, 350)
        doc.addTable(that.list, '')
        let data = doc.generate()
        let blob = new Blob([s2ab(atob(data))], {
          type: 'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,'
        })
        try {
          fileSaver.saveAs(blob, '测试文档.docx')
        } catch (e) {
          console.log(e)
        }
        doc.generate()
      })
    }
  },
}
</script>

<style lang="less">
.exportDocument {

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
