/**
* @Author: 858834013@qq.com
* @Name: icons
* @Date: 2022-04-11
* @Desc: 根据type状态显示不同的图标 根据isActive判断是否高亮
*/
<template>
  <div class="iconsImg">
    <div v-if="type==0">
      <img v-if="isActive" src="../assets/img/word_active.png" alt="">
      <img v-else src="../assets/img/word.png" alt="">
    </div>
    <div v-if="type==1">
      <img v-if="isActive" src="../assets/img/pdf_active.png" alt="">
      <img v-else src="../assets/img/pdf.png" alt="">
    </div>
    <div v-if="type==2 || type==3">
      <img v-if="isActive" src="../assets/img/video_active.png" alt="">
      <img v-else src="../assets/img/video.png" alt="">
    </div>
    <div v-if="type==4">
      <img v-if="isActive" src="../assets/img/ppt_active.png" alt="">
      <img v-else src="../assets/img/ppt.png" alt="">
    </div>
  </div>
</template>

<script>
// 课程内容类型 ( 0.富文本; 1.pdf, 2.视频文件(MP4); 3.腾讯视频,  4. ppt文件)
export default {
  name: "icons",
  components: {},
  props: {
    type: {
      type: String,
      default() {
        return ''
      }
    },
    isActive: {
      type: String,
      default() {
        return false
      }
    },
  },
  data() {
    return {
    }
  },
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.iconsImg {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

  img {
    width: 34px;
  }
}
</style>
