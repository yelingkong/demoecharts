/**
* @Author: 858834013@qq.com
* @Name: progress
* @Date: 2022-11-30
* @Desc:
*/
<template>
  <div class="progress">
    <div class="progressInner"
         :style="'background: linear-gradient(90deg, '+color1+' 0%, '+color2+' 99%);width:'+width+'%'">
      <div class="qiu" :style="'background: linear-gradient(90deg, '+color1+' 0%, '+color2+' 99%);'"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "progress",
  components: {},
  props: {
    color1: {
      type: String,
      default() {
        return '#08B1FF';
      }
    },
    progress: {
      type: String,
      default() {
        return '10';
      }
    },
    color2: {
      type: String,
      default() {
        return '#6BFFF3';
      }
    },
  },
  data() {
    return {
      width: 0,
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
      this.width = 0
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        //具体执行内容
        this.getWidth()
      }, 10);
    },
    getWidth() {
      console.log(this.progress)
      console.log(this.width)
      if (this.width < this.progress) {
        this.width += 1
      } else {
        clearInterval(this.timer);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.progress {
  width: 100%;
  height: 6px;
  background: #2E373D;
}

.progressInner {
  width: 170px;
  height: 6px;
  background: linear-gradient(90deg, #08B1FF 0%, #6BFFF3 99%);
  position: relative;
}

.qiu {
  width: 14px;
  height: 14px;
  background: linear-gradient(90deg, #08B1FF 0%, #6BFFF3 99%);
  border-radius: 50%;
  position: absolute;
  right: -7px;
  top: -4px;
}
</style>
