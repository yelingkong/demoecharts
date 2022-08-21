/**
* @Author: 858834013@qq.com
* @Name: tableCom
* @Date: 2022-08-21
* @Desc:
*/
<template>
  <div>
    <div class="desc">表格封装</div>
    <tableCom :t-header="tHeader" :key-val="keyValList" :list="tableList"></tableCom>
  </div>
</template>

<script>
import tableCom from './tableCom'

export default {
  name: "tableDemo",
  components: {tableCom},
  data() {
    return {
      tHeader: ['参数名', '必选', '类型', '说明'],
      keyValList: ['param', 'required', 'type', 'Description'],
      tableList: [
        {
          param: 'appId',
          required: '是',
          type: 'string',
          Description: '应用唯一标识'
        },
        {
          param: 'timestamp',
          required: '是',
          type: 'string',
          Description: '时间戳'
        },
        {
          param: 'sign',
          required: '是',
          type: 'string',
          Description: '签名sign=md5（secret+ti'
        },
        {
          param: 'mobile',
          required: '是',
          type: 'string',
          Description: '手机号'
        },
        {
          param: 'callbackurl',
          required: '是',
          type: 'string',
          Description: '浏览器跳回回调地址，传递给接入方open'
        },
        {
          param: 'authType',
          required: '是',
          type: 'string',
          Description: '授权类型：userlnfo'
        }
      ]
    }
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
