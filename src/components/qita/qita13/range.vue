/**
* @Author: 858834013@qq.com
* @Name: range
* @Date: 2022-06-08
* @Desc: 滑动验证
*/
<template>
  <div class="jc-component__range">
    <div class="jc-range" :class="rangeStatus ? 'success' : ''">
      <i
        @mousedown="rangeMove"
        :class="rangeStatus ? successIcon : startIcon"
      ></i>
      {{ rangeStatus ? successText : startText }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'range',
  components: {},
  props: {
    id: {
      type: String,
      default () {
        return ''
      }
    }
  },
  data () {
    return {
      rangeStatus: false,
      //成功图标
      successIcon: 'el-icon-success',
      //成功文字
      successText: '验证成功',
      //开始的图标
      startIcon: 'el-icon-d-arrow-right',
      //开始的文字
      startText: '请拖住滑块，拖动到最右边',
      //或者用值来进行监听
      status: false,
    }
  },
  watch: {},
  mounted () {
  },
  methods: {
    errorFun () {
      this.$emit('getdata', false)
    },
    successFun () {
      this.$emit('getdata', true)
    },
    rangeMove (e) {
      let ele = e.target
      let startX = e.clientX
      let eleWidth = ele.offsetWidth
      let parentWidth = ele.parentElement.offsetWidth
      let MaxX = parentWidth - eleWidth
      if (this.rangeStatus) {
        //不运行
        return false
      }
      document.onmousemove = (e) => {
        let endX = e.clientX
        this.disX = endX - startX
        if (this.disX <= 0) {
          this.disX = 0
        }
        if (this.disX >= MaxX - eleWidth) {
          //减去滑块的宽度,体验效果更好
          this.disX = MaxX
        }
        ele.style.transition = '.1s all'
        ele.style.transform = 'translateX(' + this.disX + 'px)'
        e.preventDefault()
      }
      document.onmouseup = () => {
        if (this.disX !== MaxX) {
          ele.style.transition = '.5s all'
          ele.style.transform = 'translateX(0)'
          //执行成功的函数
          this.errorFun && this.errorFun()
        } else {
          this.rangeStatus = true
          if (this.status) {
            this.$parent[this.status] = true
          }
          //执行成功的函数
          this.successFun && this.successFun()
        }
        document.onmousemove = null
        document.onmouseup = null
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@mixin jc-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.jc-component__range {
  .jc-range {
    background-color: #e9e9e9;
    position: relative;
    transition: 1s all;
    user-select: none;
    color: #585858;
    font-weight: bold;
    @include jc-flex;
    height: 50px; /*no*/
    &.success {
      background-color: #3bc923;
      color: #fff;

      i {
        color: #3bc923;
      }
    }

    i {
      position: absolute;
      left: 0;
      width: 50px; /*no*/
      height: 50px;
      color: #3fcd26;
      background-color: #fff;
      border: 1px solid #d8d8d8;
      cursor: pointer;
      font-size: 24px;
      font-weight: bold;
      box-sizing: border-box;
      top: 0;
      @include jc-flex;
    }
  }
}
</style>
