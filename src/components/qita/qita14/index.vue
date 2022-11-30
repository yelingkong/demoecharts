/**
* @Author: 858834013@qq.com
* @Name: index
* @Date: 2022-11-30
* @Desc:
*/
<template>
  <div class="shuitong">
    <div class="shuiwei transition" :style="'height:'+height*1.5+'px'">
      <div class="shuimian">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  components: {},
  props: {
    progress: {
      type: Number,
      default() {
        return 100
      }
    }
  },
  data() {
    return {
      height: 0,
      timer: null
    }
  },
  watch: {
    progress() {
      this.fn()
    }
  },
  mounted() {
    this.fn()
  },
  methods: {
    fn() {
      this.height = 0
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        //具体执行内容
        this.getHeight()
      }, 10);
    },
    getHeight() {
      console.log(this.progress)
      console.log(this.height)
      if (this.height < this.progress) {
        this.height += 1
      } else {
        clearInterval(this.timer);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.shuitong {
  background: url("./assets/shuiguan.png");
  width: 184px;
  height: 273px;
  position: relative;

  .shuiwei {
    width: 180px;
    left: 2px;
    position: absolute;
    height: 100%;
    background: url("./assets/shuiwei.png");
    background-size: 100% 100%;
    max-height: 150px;
    bottom: 50px;
  }

  .shuimian {
    position: absolute;
    top: -10px;
    background: url("./assets/shuimian.png");
    background-size: 100% 100%;
    width: 178px;
    height: 22px;
  }
}
</style>
