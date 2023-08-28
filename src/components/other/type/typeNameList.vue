/**
* @Author: 858834013@qq.com
* @Name: typeNameList
* @Date: 2022-03-21
* @Desc:
*/
<template>
  <div>
    {{ typeName }}
  </div>
</template>

<script>
export default {
  name: 'typeNameList',
  components: {},
  props: {
    type: {
      type: String | Number,
      default() {
        return ''
      }
    }
  },
  computed: {
    typeName: function() {
      var name = []
      var nameStr = ''
      if (this.type) {
        var typelist = this.type.split(',')
        typelist.forEach((type2) => {
          this.list.forEach((type) => {
            if (type2 == type.id) {
              name.push(type.title)
            }
          })
        })
        if (name.length > 0) {
          nameStr = name.join(',')
        }
      }
      return nameStr
    }
  },
  data() {
    return {
      list: [{
        id: 0,
        title: '现场领取'
      }, {
        id: 1,
        title: '发送电子档'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
