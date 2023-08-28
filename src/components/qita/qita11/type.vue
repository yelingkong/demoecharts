/**
* @Author: 858834013@qq.com
* @Name: type
* @Date: 2022-03-13
* @Desc:
*/
<template>
  <div class="type">
    <div class="type1" v-if="type==0">
      <span>未解决</span>
    </div>
    <div class="type2" v-else>
      <span>已解决</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'type',
  components: {},
  props: {
    type: {
      type: Number,
      default () {
        return 0
      }
    }
  },
  data () {
    return {}
  },
  watch: {},
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.type {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  padding-right: 13px;

  .type1 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;

    img {
      width: 18px;
      margin-right: 5px;
    }

    span {
      font-size: 16px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: #00F1E9;
    }
  }

  .type2 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;

    img {
      width: 18px;
      margin-right: 5px;
    }

    span {
      font-size: 16px;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: #2DD671;
    }
  }
}
</style>
