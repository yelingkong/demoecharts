<template>
  <div class="home">
    <div class="main">
      <div class="mainr">
        <div class="page">
          <div class="pageRelease">
            <div class="pageReleaseItem">
              <div class="title">作品封面：</div>
              <div class="pageReleaseRight">
                <upload ref="upload" :list='listcover' @getdata="getcover" :maxCount="1">
                </upload>
              </div>
            </div>
            <div class="pageReleaseItem">
              <div class="title">作品标题：</div>
              <div class="pageReleaseRight zuopinTitle w500">
                <el-input v-model="data.title"/>
              </div>
            </div>
            <div class="pageReleaseItem">
              <div class="title">添加话题：</div>
              <div class="pageReleaseRight">
                <labelList ref="labelList" :enumerationValue="data.labelIds"
                           @getdata="getEnumeratedValues"></labelList>
              </div>
            </div>
            <div class="pageReleaseItem">
              <div class="title">正文描述：</div>
              <div class="pageReleaseRight">
                <div class="desc scrollBar2">
                  <el-input
                    v-model="data.remark"
                    :autosize="{ minRows: 10 }"
                    type="textarea"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div class="pageReleaseItem">
              <div class="title">添加图片：</div>
              <div class="pageReleaseRight">
                <upload2 ref="upload2" :list='listpicture' @getdata="getImg" :limit="10">
                  <img class="uploadimg2" src="../../assets/imgupload.png" alt="">
                </upload2>
              </div>
            </div>
            <div class="release" @click="caseEdit">
              <div class="releaseBut">完成</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import { caseEdit, caseGet } from '@/api/user'
import labelList from '@/components/labelList'
import upload2 from '@/views/release/upload2'
import { mapGetters } from 'vuex'
import upload from '@/views/release/upload'

export default {
  name: 'Home',
  components: {
    labelList,
    upload2,
    upload
  },
  data () {
    return {
      worksimg: '',
      enumerationValue: '',
      isEdit: false,
      id: this.$route.query.id,
      listcover: [],
      img: '',
      taglist: [],
      listpicture: [],
      data: {
        excellent: 0,
        img: '',
        isCollection: 0,
        labelIds: '',
        remark: '',
        status: 0,
        title: '',
        days: 1,
        type: 0
      }
    }
  },
  mounted () {
    AOS.init()
    this.caseGet()
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    getEnumeratedValues (e) {
      this.enumerationValue = e
    },
    // 获取封面
    getcover (e) {
      this.img = e
    },
    // 获取图片
    getImg (e) {
      this.worksimg = e
    },
    goRelease () {
      this.$router.push({ path: '/case/add' })
    },
    // 获取
    caseGet () {
      var that = this
      this.isEdit = true
      caseGet({ id: that.id }).then(res => {
        this.isEdit = false
        if (res.code === 200) {
          this.data = res.data
          that.taglist = res.data.list
          var imgs = that.data.img.split(',')
          imgs.forEach((type, index) => {
            if (index === 0) {
              that.listcover.push(type)
              console.log(that.listcover)
              that.img = type
            } else {
              that.listpicture.push(type)
            }
          })
          that.$refs.upload.getImgListByKey(that.listcover)
          that.$refs.upload2.getImgListByKey(that.listpicture)
          var list = []
          if (res.data.list) {
            res.data.list.forEach((type) => {
              list.push({
                value: type.name,
                name: type.id
              })
            })
          }
          this.$refs.labelList.getData(list)
        }
      })
    },
    // 添加
    caseEdit () {
      var that = this
      if (this.isEdit) {
        return
      }
      if (!this.$refs.upload.getKey()) {
        this.$message.error('请上传封面')
        return
      }
      if (!this.data.remark) {
        this.$message.error('请输入描述')
        return
      }
      if (!this.data.title) {
        this.$message.error('请输入任务标题')
        return
      }
      this.data.labelIds = this.$refs.labelList.getEnumeratedValues()
      this.data.img = this.$refs.upload.getKey() + ',' + this.$refs.upload2.getKey()
      this.isEdit = true
      caseEdit(that.data).then(res => {
        this.isEdit = false
        if (res.code === 200) {
          this.$message({
            message: '更新成功',
            type: 'success'
          })
          this.$router.push({ path: '/user' })
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.home {
  background: #F4F4F4;
}

.main {
  background: #F4F4F4;
  width: 1620px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

  .mainl {
    width: 465px;

    .user {
      width: 465px;
      background: #FFFFFF;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      padding-top: 30px;
      padding-bottom: 30px;

      .name {
        font-size: 28px;
        font-family: PingFang SC-Medium, PingFang SC;
        font-weight: 500;
        color: #393737;
        text-align: center;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: flex-start;
      }

      .name2 {
        font-size: 24px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #7D7D7D;
        text-align: center;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: flex-start;

        img {
          width: 16px;
          height: 22px;
        }
      }
    }

    .info {
      margin-top: 50px;
      width: 405px;
      background: #FFFFFF;
      min-height: 100px;
      padding: 30px;

      p {
        text-align: left;
        font-size: 24px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
        margin-bottom: 20px;

        span {
          color: #7D7D7D;
        }
      }

      .time {
        font-size: 24px;
        font-family: Heiti SC-Light, Heiti SC;
        font-weight: 300;
        color: #2663E3;
        padding-top: 30px;
        text-align: center;
        margin-bottom: 0;
      }

    }
  }

  .mainr {
    width: 1105px;
    border-radius: 0px 0px 0px 0px;
    opacity: 1;

    .zp {
      width: 1105px;
      height: 100px;
      background: #FFFFFF;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
      color: #000000;

      .zpl {
        font-size: 24px;
        font-family: PingFang SC-Regular, PingFang SC;
        font-weight: 400;
        color: #7D7D7D;
        margin-left: 38px;

        span {
          color: #7D7D7D;
        }
      }

      .zpr {
        margin-right: 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        align-content: flex-start;

        .zpbut {
          width: 120px;
          height: 50px;
          background: #FFA51D;
          border-radius: 10px 10px 10px 10px;
          opacity: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: nowrap;
          flex-direction: row;
          align-content: flex-start;
          font-size: 24px;
          font-family: PingFang SC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
        }
      }
    }

    .page {
      width: calc(1105px - 60px);
      background: #FFFFFF;
      border-radius: 0px 0px 0px 0px;
      opacity: 1;
      margin-top: 50px;
      padding: 30px;

      .pageMain {
        height: 1320px;
      }
    }
  }
}

.label {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  margin-top: 30px;

  .labels {
    height: 38px;
    border-radius: 19px;
    background: #2663E3;
    opacity: 1;
    line-height: 38px;
    font-size: 21px;
    margin-bottom: 10px;
    font-family: PingFang SC-Light, PingFang SC;
    font-weight: 300;
    margin-left: 7.5px;
    margin-right: 7.5px;
    color: #FFFFFF;
    padding-left: 18px;
    padding-right: 18px;
    border: 1px solid #2663E3;

    p {
      margin: 0;
      padding: 0;
    }
  }

}

.age {
  margin-left: 20px;
  margin-right: 20px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}

.avatar {
  width: 150PX;
  height: 150PX;
  margin: 0 auto;
  position: relative;

  .active {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 36px;
    height: 36px;
  }
}

.pageRelease {
  .pageReleaseItem {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    margin-bottom: 30px;

    .title {
      width: 240px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
      font-size: 24px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      height: 50px;
      line-height: 50px;
      color: #000000;
      text-align: right;
    }
  }
}

.w150 {
  width: 150px;
  height: 150px;
}

.zuopinTitle {
  :deep(.el-input__wrapper) {
    width: 100%;
    height: 50px;
    background: #FFFFFF;
    border-radius: 5px 5px 5px 5px;
    opacity: 1;
    border: 1px solid #ACACAC;
  }

  :deep(.el-input__inner) {
    width: 100%;
    height: 50px;
    background: #FFFFFF;
    border-radius: 5px 5px 5px 5px;
    opacity: 1;
  }
}

.release {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
  margin-top: 150px;

  .releaseBut {
    width: 120px;
    height: 50px;
    background: #245EDC;
    border-radius: 10px 10px 10px 10px;
    opacity: 1;
    font-size: 24px;
    font-family: PingFang SC-Regular, PingFang SC;
    font-weight: 400;
    cursor: pointer;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
  }
}

.desc {
  width: 500px;
  height: 200px;
  background: #FFFFFF;
  border-radius: 5px 5px 5px 5px;
  opacity: 1;
  border: 1px solid #ACACAC;
  overflow-y: scroll;

  :deep(.el-textarea__inner) {
    outline: none;
    border: none;
    resize: none;
    box-shadow: none;
    font-size: 24px;
  }
}

.w500 {
  width: 500px;
}

.zuopinTitle {
  :deep(.el-input__wrapper) {
    //border: none;
    box-shadow: none;
    font-size: 24px;
  }
}

.pageReleaseRight {
  width: 500px;
}

.uploadimg2 {
  width: 100px;
  height: 100px;
}
</style>
