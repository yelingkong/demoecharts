/**
* @Author: 858834013@qq.com
* @Name: index
* @Date: 2022-03-25
* @Desc:
*/
<template>
  <div class="other">
    <div class="otherItem">
      <enumeratedValues :enumerationValue="enumerationValue"
                        @getdata="getEnumeratedValues"></enumeratedValues>
    </div>
  </div>
</template>

<script>
import enumeratedValues from '@/components/other/enumeratedValues'

export default {
  name: "index",
  components: {enumeratedValues},
  props: {
    id: {
      type: String,
      default() {
        return '';
      }
    }
  },
  data() {
    return {
      enumerationValue: '你好,哈哈'
    }
  },
  watch: {},
  mounted() {
  },
  methods: {
    getEnumeratedValues(e) {
      this.enumerationValue = e
    }
  }
}
</script>

<style lang="scss" scoped>
.otherItem {
  width: 100%;
  height: 200px;
}

.other {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
}
</style>
