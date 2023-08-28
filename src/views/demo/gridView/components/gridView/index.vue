/**
* @Author: 858834013@qq.com
* @Name: gridView
* @Date: 2023年01月31日
* @Desc: 仿安卓.9图九宫格效果
*/
<template>
  <div class="gridView">
    <!--  左上角-->
    <div class="gLeftTop"></div>
    <!--  顶部中间-->
    <div class="gTopCenter"></div>
    <!--  右上角-->
    <div class="gRightTop"></div>
    <!--    中间部分-->
    <div class="gCenterMain">
      <!--  左侧中间-->
      <div class="gLeftCenter"></div>
      <!--  右侧中间-->
      <div class="gRightCenter"></div>
      <!--  中间-->
      <div class="gCenter"></div>
    </div>
    <!--  左下角-->
    <div class="gLeftBottom"></div>
    <!--  底部中间-->
    <div class="gBottomCenter"></div>
    <!--  右下角-->
    <div class="gRightBottom"></div>
  </div>
</template>

<script>

export default {
  name: "gridView"
}
</script>

<style lang="scss" scoped>
.gridView {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 80px;
  min-width: 250px;
  bottom: 0;
  right: 0;
  pointer-events: none; //避免div层被点击
  //左上角
  .gLeftTop {
    background: url("./assets/left_top.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    width: 194PX;
    height: 40PX;
  }

  //顶部中间
  .gTopCenter {
    width: calc(100% - 194PX - 24PX);
    left: 194PX;
    position: absolute;
    height: 40PX;
    background: url("./assets/top_center.png") repeat-x;
    background-size: 100% 100%;
  }

  //右上角
  .gRightTop {
    background: url("./assets/right_top.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 0;
    top: 0;
    width: 24PX;
    height: 40PX;
  }

  //左下角
  .gLeftBottom {
    background: url("./assets/left_bottom.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 24PX;
    height: 24PX;
  }

  //底部中间
  .gBottomCenter {
    width: calc(100% - 24PX - 24PX);
    left: 24PX;
    bottom: 0;
    position: absolute;
    height: 24PX;
    background: url("./assets/bottom_center.png") repeat-x;
    background-size: 100% 100%;
  }

  //右下角
  .gRightBottom {
    background: url("./assets/right_bottom.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 24PX;
    height: 24PX;
  }

  //中间部分
  .gCenterMain {
    width: 100%;
    height: calc(100% - 64PX);
    position: absolute;
    top: 40PX;
    bottom: 24PX;
    //左侧中间
    .gLeftCenter {
      left: 0;
      height: 100%;
      position: absolute;
      background: url("./assets/left_center.png");
      background-size: 8PX 100%;
      width: 8PX;
    }

    .gCenter {
      width: calc(100% - 8PX - 8PX);
      left: 8PX;
      bottom: 0;
      position: absolute;
      height: 100%;
      background: url("./assets/center.png");
      background-size: 100% 100%;
    }

    //右侧中间
    .gRightCenter {
      height: 100%;
      position: absolute;
      right: 0;
      background: url("./assets/right_center.png");
      background-size: 100% 100%;
      width: 8PX;
    }
  }
}
</style>
