/**
* @Author: 858834013@qq.com
* @Name: enumeratedValues
* @Date: 2022-03-22
* @Desc: 回车增加到标签内,标签管理
*/
<template>
  <div>
    <el-input class="w100" @keyup.enter.native="submitForm()" placeholder="请输入枚举值，回车添加枚举值" v-model="name"></el-input>
    <div class="enumeratedValuesList">
      <el-tag @close="handleClose(item)" closable class="mr20 mb20" v-for="(item,index) in list" :key="index">
        {{
          item
        }}
      </el-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: 'enumeratedValues',
  components: {},
  props: {
    enumerationValue: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      list: [],
      name: ''
    }
  },
  watch: {
    enumerationValue() {
      console.log('值呢')
      console.log(this.enumerationValue)
      this.getList()
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      console.log('获取数据')
      console.log(this.enumerationValue)
      if (this.enumerationValue) {
        this.list = this.enumerationValue.split(',')
      }
    },
    submitForm() {
      if (this.name) {
        this.list.push(this.name)
        this.name = ''
        this.getEnumeratedValues()
      }
    },
    handleClose(tag) {
      this.list.splice(this.list.indexOf(tag), 1)
      this.getEnumeratedValues()
    },
    getEnumeratedValues() {
      var str = this.list.join(',')
      this.$emit('getdata', str)
    }
  }
}
</script>

<style lang="scss" scoped>
.enumeratedValuesList {
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
}
</style>
