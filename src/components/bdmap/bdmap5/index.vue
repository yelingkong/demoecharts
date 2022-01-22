<template>
  <div class="bodymap2" id="echartmap5"></div>
</template>

<script>
import $ from 'jquery'
import car from './images/car.png'
import car2 from './images/car2.png'
import icon_chuxing from './images/icon_chuxing.png'
import Vue from 'vue'

export default {
  data() {
    return {
      infoWindow: null,
      active: false,
      center: {
        lng: 0,
        lat: 0
      },
      zoom: 3,
      map: null,
      mapactive: 0,
      markers: [],
      list: [
        [125.350472, 43.927952, "贵A123322", 1],
        [125.385472, 43.887952, "贵A123322", 0],
        [125.337472, 43.857952, "贵A123323", 1]
      ]
    }
  },
  components: {},
  created() {

  },

  mounted() {
    this.getmap()
  },
  methods: {
    getguiji() {
      var that = this;
      var title = '测试内容';
      that.map.clearMap();
      $.get("https://restapi.amap.com/v3/direction/driving?origin=125.317472,43.827952&destination=125.317472,43.897952&extensions=all&output=JSON&key=be862a6b566f949c5f44328c875e9c3d", function (data, status) {
        //设置数据
        let steps = data.route.paths[0].steps;
        var path = [];
        var path2 = [];
        for (var i = 0; i < steps.length; i++) {
          path.push(steps[i].polyline.split(";"))
        }
        for (var i = 0; i < path.length; i++) {
          for (var s = 0; s < path[i].length; s++) {
            path2.push(path[i][s])
          }
        }
        var path3 = []
        for (var i = 0; i < path2.length; i++) {
          var datai = path2[i].split(",");
          path3.push(datai)
        }
        var marker = new AMap.Marker({
          map: that.map,
          position: path3[0],
          icon: car2,
          offset: new AMap.Pixel(-25, -20),
          autoRotation: true,
          angle: 0,
        });

        var markerContent = document.createElement("div");
        var markerImg = document.createElement("img");
        markerImg.className = "markerlnglat";
        markerImg.src = car2;
        markerContent.appendChild(markerImg);
        var markerSpan = document.createElement("span");
        markerSpan.className = 'markerx';
        markerSpan.innerHTML = title;
        markerContent.appendChild(markerSpan);
        marker.setPosition(path3[0]);
        marker.setContent(markerContent);
        marker.setMap(that.map);
        that.addStartMarker(path3[0])
        console.log(path3.length)
        console.log(path3[path3.length])
        that.addEndMarker(path3[path3.length - 1])
        // 绘制轨迹
        var polyline = new AMap.Polyline({
          map: that.map,
          path: path3,
          showDir: false,
          strokeColor: "rgba(255, 39, 95, 1)",  //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 2,      //线宽
          // strokeStyle: "solid"  //线样式
        });

        var passedPolyline = new AMap.Polyline({
          map: that.map,
          // path: lineArr,
          strokeColor: "rgba(255, 39, 95, 1)",  //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 2,      //线宽
          // strokeStyle: "solid"  //线样式
        });

        marker.on('moving', function (e) {
          var markerContent = document.createElement("div");
          var markerImg = document.createElement("img");
          markerImg.className = "markerlnglat";
          markerImg.src = car2;
          markerContent.appendChild(markerImg);
          var markerSpan = document.createElement("span");
          // markerSpan.className = 'markerx';
          // markerSpan.innerHTML = that.list1x[that.mapactive];
          markerContent.appendChild(markerSpan);
          marker.setContent(markerContent);
          passedPolyline.setPath(e.passedPath);
        });

        that.map.setFitView();

        function startAnimation() {
          marker.moveAlong(path3, 10000);
        }

        function pauseAnimation() {
          marker.pauseMove();
        }

        function resumeAnimation() {
          marker.resumeMove();
        }

        function stopAnimation() {
          marker.stopMove();
        }

        startAnimation();
      });
    },
    getmap() {
      var that = this;
      that.map = new AMap.Map('echartmap5', {
        resizeEnable: true,
        zoom: 17,
        scrollWheel: true,
        viewMode: '2D',
        pitch: 50,
        rotation: 0,
        maxZoom: 30,
        minZoom: 0,
        mapStyle: 'amap://styles/darkblue',
        features: ['bg', 'road', 'building'],
        center: [125.317472, 43.827952]
      });
      var marker = new AMap.Marker({
        map: this.map,
        position: [125.317472, 43.827952],
      });
      var markerContent = document.createElement("div");
      marker.setContent(markerContent);
      that.getguiji()
      var listdata = that.list
      listdata.forEach((type) => {
        that.addMarker(type[0], type[1], type[2], type[3])
      });
    },
    markerClick(e) {
      var that = this;
      console.log(e.target.getExtData())
      console.log(123333)
      let MyComponent = Vue.extend({
        template: `
          <div class="shipinpop">
          <div class="daohang">
            <img :src="icon_chuxing" alt="">
            <p>出行</p>
          </div>
          <div class="cars">
            <img :src="car" alt="">
            <p>贵A123321</p>
          </div>
          <div class="carinfo">
            <p>张三：遥控器</p>
            <p>李四：枪 <span></span> 王五：枪</p>
            <p>马六：枪 <span></span> 赵七：枪</p>
          </div>
          </div>`,
        data: function () {
          return {
            loading: true,
            icon_chuxing: icon_chuxing,
            car: car,
          }
        },
        mounted() {
        },
        methods: {}
      });
      let component = new MyComponent().$mount();
      let infoWindow = new AMap.InfoWindow({
        anchor: 'top-left',
        offset: new AMap.Pixel(-20, -35),
        content: component.$el,
      });
      infoWindow.open(that.map, [e.lnglat.lng, e.lnglat.lat]);
      that.infoWindow = infoWindow;
    },
    addMarker(x, y, obj, type) {
      let marker = null;
      var type1 = '<div class="overlay"/>'
      var type2 = `<div class="overlay2">
<div class="info">${obj}</div>
</div>`
      marker = new AMap.Marker({
        title: '运钞车',
        position: [x, y],
        content: type == 0 ? type1 : type2,
        offset: new AMap.Pixel(-13, -30)
      });
      marker.on('click', this.markerClick);
      marker.setMap(this.map);
      this.markers.push(marker);
    },
    addStartMarker(positon) {
      let marker = null;
      marker = new AMap.Marker({
        title: '开始',
        position: positon,
        content: '<div class="startoverlay"/>',
        offset: new AMap.Pixel(-13, -30)
      });
      marker.setMap(this.map);
      this.markers.push(marker);
    },
    addEndMarker(positon) {
      let marker = null;
      marker = new AMap.Marker({
        title: '结束',
        position: positon,
        content: '<div class="endoverlay"/>',
        offset: new AMap.Pixel(-13, -30)
      });
      marker.setMap(this.map);
      this.markers.push(marker);
    },
  },
  filters: {},
  watch: {}
}
</script>

<style lang="scss">
.bm-view {
  width: 100%;
  height: 100%;
  position: relative;
}

.bodymap2 {
  width: 100%;
  height: 100%;
  position: relative;
}

.markerx {
  background: #fff;
  font-size: 14px;
  color: #333;
  position: absolute;
  width: 130px;
  padding: 10px;
  border-radius: 10px;
}

.pulsex {
  -webkit-animation: warn 2.4s ease;
  -moz-animation: warn 2.4s ease;
  animation: warn 2.4s ease;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-size: 100% 100%;
  width: 180px;
  margin-top: -50%;
  margin-left: -50%;
  height: 180px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;

  img {
    width: 0;
    height: 0;
  }

  &::after {
    content: ' ';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    //background: red;
  }
}

.overlay {
  background: url("./images/car2.png");
  width: 51px;
  height: 35px;
  background-size: 100% 100%;
  position: relative;
  color: #fff;
  font-size: 0px;
}

.amap-info-content {
  background: none;
  overflow: hidden;
}

.amap-info-close {
  top: 20px;
  right: 35px !important;
  color: rgba(0, 181, 242, 1);
}

.amap-info-shadowContainer > div {
  top: -20px;
}

.amap-info-sharp {
  display: none;
}

.amap-container:hover {
  background: none !important;
}

.amap-info-outer, .amap-menu-outer {
  box-shadow: none !important;
}

.shipinpop {
  background: url("./images/mappopbg.png") no-repeat;
  width: 508px;
  height: 196px;
  background-size: 100% 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  left: 0px;
  top: -20px;
  position: relative;
  flex-wrap: nowrap;
  flex-direction: row;

  .daohang {
    width: 200px;
    height: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;

    img {
      width: 25px;
      height: 33px;
    }

    p {
      font-size: 18px;
      font-family: PingFang;
      font-weight: 500;
      color: #1CCEF2;
      margin: 0;
      padding: 0;
      margin-top: 10px;
    }
  }

  .cars {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100px;

    img {
      width: 49px;
      height: 36px;
    }

    p {
      font-size: 13px;
      font-family: PingFang;
      font-weight: bold;
      color: #FFFFFF;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      text-indent: 0;
      padding-top: 10px;
    }
  }

  .carinfo {
    margin-left: 30px;

    p {
      font-size: 13px;
      color: rgba(184, 217, 255, 1);
      font-family: PingFang;
      font-weight: 500;
      color: #B8D9FF;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      line-height: 30px;
      text-indent: 0;

      span {
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
}

.startoverlay {
  background: url("./images/startimg.png");
  width: 73px;
  height: 73px;
  background-size: 100% 100%;
  margin-left: -35px;
}

.endoverlay {
  background: url("./images/endimg.png");
  width: 25px;
  height: 31px;
  background-size: 100% 100%;
  margin-left: 0px;
}

.overlay2 {
  background: url("./images/icon_car2.png") no-repeat;
  width: 87px;
  height: 87px;
  background-size: 100% 100%;
  position: relative;

  .info {
    width: 90px;
    height: 30px;
    background: #081C44;
    opacity: 1;
    border: 1px solid #165586;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    font-size: 14px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #FFFFFF;
    position: absolute;
    bottom: -20px;
    left: 0;
  }
}
</style>
