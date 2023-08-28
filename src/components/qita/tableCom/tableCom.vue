/**
* @Author: 858834013@qq.com
* @Name: tableCom
* @Date: 2022-08-21
* @Desc:
*/
<template>
  <div class="tableCom">
    <table>
      <thead>
      <tr>
        <th v-for="(item,index) in tHeader" :key="index"><span>{{ item }}</span></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item,index) in list" :key="index">
        <td v-for="(itemK,indexK) in keyVal" :key="indexK"><span v-html="item[itemK]"></span></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: "tableCom",
  components: {},
  props: {
    tHeader: {
      type: Array,
      default() {
        return []
      }
    },
    keyVal: {
      type: Array,
      default() {
        return []
      }
    },
    // 数据内容
    list: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {}
  },
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.tableCom {
  width: 100%;

  table tr td, table tr th {
    border: 1px solid #f5f5f5;
  }

  td, th {
    border-right: 0;

    span {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
      padding-left: 30px;
      line-height: 30px;
    }
  }

  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid rgba(153, 153, 153, 0.16);

    thead {
      background: #f8f8f8;
      font-size: 14px;
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-weight: bold;
      color: #666666;
      height: 48px;
    }

    tbody {
      tr {
        height: 48px;
      }

      tr:nth-child(2n) {
        background: #f8f8f8;
      }
    }
  }
}
</style>
