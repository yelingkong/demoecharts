<template>
  <div>
    <div class="desc">一个进度条效果</div>
    <div class="centerpr">
      <div class="centerprs">
        <p :style="{background:item.bg,width:item.percentage+'%'}"
           v-for="(item,index) in list2"
           :key="index">
          <span :class="'label'+index">{{ item.label }}</span>
          <span :class="'percentage'+index">{{ item.percentage }}%</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "jindu",
  components: {},
  props: {
    num: {
      type: Number,
      default() {
        return 0
      }
    },
    numclose: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {
      list: [
        {label: '已处置', value: 10, bg: 'rgba(13, 250, 238, 1)'},
        {label: '未处置', value: 40, bg: 'rgba(1, 125, 255, 1)'},
      ],
    }
  },
  watch: {},
  computed: {
    list2: function () {
      let total = 0
      var list2 = this.list;
      var list = []
      this.list.forEach((type) => {
        total = total + type.value
      });
      list2.forEach((type) => {
        var data = {
          value: type.value,
          percentage: Number((type.value / total) * 100).toFixed(0),
          label: type.label,
          bg: type.bg,
        }
        list.push(data)
      });
      return list
    }
  },
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.centerprs {
  width: calc(100% - 40px);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  position: relative;
}

.centerpr {
  background-size: 100% 100%;
  width: calc(100% - 100px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  padding-top: 30px;

  p {
    color: #fff;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    height: 10px;

  }

  .label0 {
    position: absolute;
    left: -60px;
    font-size: 16px;
    font-family: PingFang;
    font-weight: 500;
    color: #BEC6DA;
  }

  .percentage0 {
    left: 0;
    top: -20px;
    font-size: 20px;
    font-family: DIN;
    font-weight: bold;
    color: #0DFAEE;
    position: absolute;
  }

  .percentage1 {
    right: 0;
    top: -20px;
    font-size: 20px;
    font-family: DIN;
    font-weight: bold;
    color: rgba(1, 125, 255, 1);
    position: absolute;
  }

  .label1 {
    position: absolute;
    right: -60px;
    font-size: 16px;
    font-family: PingFang;
    font-weight: 500;
    color: #BEC6DA;
  }

  p:first-child {
    border-radius: 5px 0 0 5px;
  }

  p:last-child {
    border-radius: 0 5px 5px 0;
  }
}
</style>
