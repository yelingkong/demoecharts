<template>
  <div>
    <p class="desc">数字滚动</p>
    <div class="numcard">
      <div class="numbinner" v-for="(item, index) in nums" :key="index">
        <div v-if="item" class="numcardInner">
          <num :num="item"></num>
        </div>
        <div v-else-if="item==0" class="numcardInner">
          <num :num="item"></num>
        </div>
        <span v-else>,</span>
      </div>
    </div>
  </div>
</template>

<script>
import num from "./components/numcard";
import {formatNum} from "@/utils/utils";

export default {
  name: "numcard",
  components: {num},
  props: {
    num: {
      type: String | Number,
      default() {
        return '5123';
      }
    },
  },
  computed: {
    nums: function () {
      var sNumber = formatNum(this.num).toString()
      var data = []
      for (var i = 0, len = sNumber.length; i < len; i += 1) {
        data.push(+sNumber.charAt(i))
      }
      return data
    }
  },
  watch: {},
  mounted() {

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.numcard {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  font-size: 36px;
  font-family: DIN;
  font-weight: bold;
  color: #FFFFFF;

  span {
    font-size: 30px;
    font-family: DIN;
    font-weight: bold;
  }
}

.numbinner {
  margin-right: 3px;
  margin-left: 3px;
  margin-top: 10px;
}

.numbinner:first-child {
  margin-left: 0;
}


</style>
