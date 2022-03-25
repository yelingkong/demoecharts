/**
* @Author: 858834013@qq.com
* @Name: typeName
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
  name: 'type',
  components: {},
  props: {
    type: {
      type: String | Number,
      default() {
        return 0
      }
    }
  },
  computed: {
    typeName: function() {
      var name = ''
      this.list.forEach((type) => {
        if (type.id == this.type) {
          name = type.title
        }
      })
      return name
    }
  },
  data() {
    return {
      list: [{
        id: 10,
        title: '待审核'
      }, {
        id: 11,
        title: '已受理'
      }, {
        id: 12,
        title: '己退回'
      }, {
        id: 13,
        title: '已撤销'
      }, {
        id: 20,
        title: '已办理'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
