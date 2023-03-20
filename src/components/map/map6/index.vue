<template>
  <div class="homebody2xcenters">
    <div class="homebody2xcenter">
      <div class="homebody2xcenterbottom">
        <div class="jilinx" v-if="popshow" :style="{left:left+150+'px',top:top-350+'px'}">
          <h3>{{ address }}</h3>
          <div class="qzs">
            <div class="qzs2">
              <span>确诊数</span>
              <p class="numxqz">2,123</p>
            </div>
            <div class="qzs2">
              <span>疑似人数</span>
              <p class="numxqz2">2,245</p>
            </div>
          </div>
          <div class="qzsx">
            <div class="qzslist">
              <div class="qzsitem">小区</div>
              <div class="qzsitem">确诊</div>
              <div class="qzsitem">治愈</div>
            </div>
            <div class="qzslist2">
              <div class="qzsitem">保利小区</div>
              <div class="qzsitem">16</div>
              <div class="qzsitem">2</div>
            </div>
            <div class="qzslist2">
              <div class="qzsitem">保利小区</div>
              <div class="qzsitem">16</div>
              <div class="qzsitem">2</div>
            </div>
          </div>
        </div>
        <div class="linex" v-if="popshow" :style="{left:left+100+'px',top:top-90+'px'}"></div>
        <div class="guangquan" v-if="popshow" :style="{left:left+92+'px',top:top-70+'px'}">
          <div class="lingxing"></div>
          <div class="guangquan1"></div>
        </div>
        <div class="echartmap1">
          <div class="echartmap2" id="echartmap" ref="echartmap">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jilin from './map.json'
import $ from 'jquery'
import sanjiao from './images/icon_sanjiao.png'

export default {
  name: 'echarts1',
  components: {},
  props: {
    id: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data() {
    return {
      status: '',
      xdata: [],
      ydata: [],
      address: '',
      show1: false,
      popshow: false,
      show2: false,
      show4: false,
      show3: false,
      numberlist: [34, 15, 11, 10],
    }
  },
  watch: {
    popshow() {
    },
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    getswitch(myChart) {
      var that = this;
      var seriesModel = myChart.getModel().getSeriesByIndex(0)
      var coordSys = seriesModel.coordinateSystem;
      clearInterval(this.timemap);
      var width = $('.homebody2xcenterbottom').width()
      var height = $('.homebody2xcenterbottom').height()
      let datas = [
        [0.08, 0.28],//白城
        [0.305, 0.43],//松原
        [0.213, 0.361],//松原
        [0.415, 0.51],//吉林
        [0.455, 0.74],//白山
        [0.345, 0.76],//通化
        [0.28, 0.64],//辽源
        [0.21, 0.54],//四平
        [0.66, 0.58],//延边
      ];
      that.timemap = window.setInterval(() => {
        if (that.activex2 < datas.length - 1) {
          that.activex2 = that.activex2 + 1;
        } else {
          that.activex2 = 0;
        }
        that.popshow = false
        that.$nextTick(() => {
          that.popshow = true
        })
        var point = coordSys.dataToPoint(datas[that.activex2]);
        console.log(width * datas[that.activex2][0])
        that.left = width * datas[that.activex2][0];
        that.top = height * datas[that.activex2][1];
        let data = myChart.convertFromPixel('geo', [that.left, that.top])
        console.log(data)

        that.getPositionByLonLats(data[0], data[1])
      }, 4000)
    },
    getPositionByLonLats(lng, lat) {
      var that = this;
      var lnglatXY = [lng, lat];// 地图上所标点的坐标
      AMap.service('AMap.Geocoder', function () {// 回调函数
        var geocoder = new AMap.Geocoder({});
        geocoder.getAddress(lnglatXY, function (status, result) {
          if (status === 'complete' && result.info === 'OK') {
            console.log(result.regeocode);
            var address = result.regeocode.formattedAddress;
            // 获取城市名称
            that.address = address
          } else {
          }
        });
      });
    },
    drawLine() {
      var that = this
      window.addEventListener('resize', this.drawLine)
      var myChart = this.$echarts.init(this.$refs.echartmap)
      this.$echarts.registerMap('js', jilin)
      var center = {
        "白城": [122.68664, 45.397315],
        "松原": [124.827743, 45.138656],
        "长春": [125.341817, 43.812171],
        "四平": [124.366544, 43.166735],
        "吉林": [126.558221, 43.836284],
        "辽源": [125.15531, 42.887925],
        "通化": [125.948047, 41.72714],
        "白山": [126.476484, 41.926106],
        "延边": [129.478809, 42.907925],
      }
      var option = {
        geo: [{
          map: 'js',
          aspectScale: 0.7525,
          roam: false, //是否允许缩放
          zoom: 1.3, //默认显示级别
          itemStyle: {
            normal: {
              areaColor: 'rgba(142, 204, 174, 0)'
            },
            emphasis: {
              areaColor: 'rgba(142, 204, 174, 0)'
            }
          },
        }],
        series: [{
          type: 'map',
          mapType: 'js',
          geoIndex: -1,
          zoom: 1.4, //默认显示级别
          label: {
            normal: {
              show: true,
              formatter(params) {
                return `{name|${params.data.name}}\n{pic|}`;
              },
              position: 'top',
              rich: {
                name: {
                  color: '#fff',
                  align: 'center',
                  fontSize: 10,
                  padding: [1, 4, 1, 4],
                  backgroundColor: 'rgba(75, 152, 150, 1)'
                },
                pic: {
                  color: '#fff',
                  align: 'center',
                  width: 9,
                  height: 6,
                  lineHeight: 22,
                  backgroundColor: {
                    image: sanjiao
                  },
                },
              },
            },
            emphasis: {
              show: false,
            },
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(142, 204, 174, 0)',
              borderWidth: 1,
              areaColor: 'rgba(13, 87, 55, 0)'
            },
            emphasis: {
              areaColor: 'rgba(13, 87, 55, 0)',
              borderWidth: 0,
              color: 'green'
            }
          },
          data: Object.keys(center).map(name => {
            return {
              name: name,
              value: Math.random() * 100
            }
          })
        },
        ]
      };
      // 点击弹窗
      myChart.on('click', function (params) {
        console.log(params.event.offsetX, params.event.offsetY)
        console.log('长春')
        that.left = params.event.event.offsetX;
        that.top = params.event.event.offsetY;
        that.popshow = false
        that.$nextTick(() => {
          that.popshow = true
        })
        let data = myChart.convertFromPixel('geo', [params.event.offsetX, params.event.offsetY])
        console.log(data)
        // 根据坐标获取数据
        that.getPositionByLonLats(data[0], data[1])
      });
      // 自动轮训
      myChart.resize()
      myChart.setOption(option)
      that.getswitch(myChart)
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts1 {
  position: relative;
  width: 100%;
  height: calc(100% - 80px);
  z-index: 1;
}

.homebody2xcenter {
  width: 45%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  bottom: 0;
  height: calc(100% - 20px);
  margin-bottom: 20px;

  .homebody2xcenterbottom {
    position: absolute;
    height: 80%;
    width: 100%;
    bottom: 0;
    background: url("./images/guanghuanx.png") center bottom no-repeat;
    background-size: 678px 230px;
  }

}

.echartmap1 {
  position: relative;
  width: 85%;
  height: 100%;
  background: url("./images/ditubg.png") center center no-repeat;
  background-size: 100%;
  margin: auto;
  transform: rotate(9deg);
  -ms-transform: rotate(9deg); /* IE 9 */
  -moz-transform: rotate(9deg); /* Firefox */
  -webkit-transform: rotate(9deg); /* Safari 和 Chrome */
  -o-transform: rotate(9deg); /* Opera */
}

.echartmap2 {
  position: absolute;
  width: 94%;
  left: 5%;
  height: 100%;
  top: -5%;
  transform: rotate(-9deg);
  -ms-transform: rotate(-9deg); /* IE 9 */
  -moz-transform: rotate(-9deg); /* Firefox */
  -webkit-transform: rotate(-9deg); /* Safari 和 Chrome */
  -o-transform: rotate(-9deg); /* Opera */
}

.marker {
  width: 36px;
  height: 20px;
  background: #4B9896;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  font-size: 10px;
  font-family: PingFang;
  font-weight: bold;
  color: #FFFFFF;
  margin: -45px 0px 0px -15px;
}

.jilinx {
  background: -webkit-gradient(linear, right top, left top, from(#77f0ff), to(#77f0ff)) 0 0 no-repeat, -webkit-gradient(linear, left top, left bottom, from(#77f0ff), to(#77f0ff)) 0 0 no-repeat, -webkit-gradient(linear, right top, left top, from(#77f0ff), to(#77f0ff)) 100% 0 no-repeat, -webkit-gradient(linear, left top, left bottom, from(#77f0ff), to(#77f0ff)) 100% 0 no-repeat, -webkit-gradient(linear, right top, left top, from(#77f0ff), to(#77f0ff)) 0 100% no-repeat, -webkit-gradient(linear, left top, left bottom, from(#77f0ff), to(#77f0ff)) 0 100% no-repeat, -webkit-gradient(linear, right top, left top, from(#77f0ff), to(#77f0ff)) 100% 100% no-repeat, -webkit-gradient(linear, right top, left top, from(#77f0ff), to(#77f0ff)) 100% 100% no-repeat rgba(0, 6, 20, .7);
  background: linear-gradient(
      270deg, #77f0ff, #77f0ff) 0 0 no-repeat, linear-gradient(
      180deg, #77f0ff, #77f0ff) 0 0 no-repeat, linear-gradient(
      270deg, #77f0ff, #77f0ff) 100% 0 no-repeat, linear-gradient(
      180deg, #77f0ff, #77f0ff) 100% 0 no-repeat, linear-gradient(
      270deg, #77f0ff, #77f0ff) 0 100% no-repeat, linear-gradient(
      180deg, #77f0ff, #77f0ff) 0 100% no-repeat, linear-gradient(
      270deg, #77f0ff, #77f0ff) 100% 100% no-repeat, linear-gradient(
      270deg, #77f0ff, #77f0ff) 100% 100% no-repeat rgba(32, 52, 57, 1.00);
  background-size: 2px 18px, 18px 2px, 2px 18px, 18px 2px;
  border: 1px solid #004566;
  -webkit-box-shadow: inset 0 0 30px 0 rgba(40, 94, 93, 1.00);
  box-shadow: inset 0 0 30px 0 rgba(40, 94, 93, 1.00);
  width: 320px;
  height: 238px;
  top: 0px;
  position: absolute;
  z-index: 100000;

  h3 {
    font-size: 20px;
    font-family: PingFang;
    font-weight: bold;
    color: #FFFFFF;
    width: 86%;
    margin: 0 auto;
    text-align: left;
    padding-top: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .qzs {
    width: 86%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    margin: auto;

    .qzs2 {
      width: 50%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;

      span {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
      }

      p {
        font-size: 22px;
        font-family: DIN;
        font-weight: 500;
        color: #C8B638;
        padding: 0;
        margin: 0;
        margin-left: 10px;

        span {
          color: #C8B638;
          font-size: 22px;
        }
      }
    }
  }

  .qzsx {
    width: 86%;
    margin: auto;
    margin-top: 10px;

    .qzslist {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      height: 34px;


      .qzsitem {
        width: 33.33%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #BFDCE4;
      }
    }

    .qzslist2 {
      width: 100%;
      height: 34px;
      background: linear-gradient(90deg, rgba(85, 117, 128, 0.4), rgba(43, 63, 69, 0.4));
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      margin-bottom: 10px;

      .qzsitem {
        width: 33.33%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        flex-direction: row;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #BFDCE4;
      }
    }
  }
}

.guangquan {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  z-index: 100000;
  width: 40px;
  height: 50px;
}

.guangquan1 {
  -webkit-animation: warn 2.4s ease;
  -moz-animation: warn 2.4s ease;
  animation: warn 2.4s ease;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background: url("./images/guangquanmap2.png") no-repeat;
  background-size: 100% 100%;
  width: 40px;
  margin-top: -50%;
  margin-left: -50%;
  height: 27px;
  border-radius: 50%;
}

.lingxing {
  -webkit-animation: warn2 2s ease;
  -moz-animation: warn2 2s ease;
  animation: warn2 2s ease;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background: url("./images/lingxing.png") no-repeat;
  background-size: 100% 100%;
  width: 27px;
  height: 27px;
  position: relative;
  left: -10px;
  margin-bottom: 20px;
}

@keyframes warn2 {
  0% {
    top: -2px;
  }
  50% {
    top: 0px;
  }
  100% {
    top: 2px;
  }
}

.linex {
  width: 70px;
  height: 1px;
  background: rgba(170, 185, 189, 1);
  position: relative;
  z-index: 1000;
  transform: rotate(-50deg);
  -ms-transform: rotate(-50deg); /* IE 9 */
  -moz-transform: rotate(-50deg); /* Firefox */
  -webkit-transform: rotate(-50deg); /* Safari 和 Chrome */
  -o-transform: rotate(-50deg); /* Opera */
}

.homebody2xcenters {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
