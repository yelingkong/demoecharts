<template>
  <div class="bodymap" id="echartmap"></div>
</template>

<script>
import $ from 'jquery'
import yiqing from './images/yiqing.png'

export default {
  data() {
    return {
      type1: 1,
      type2: 0,
      active: false,
      guzhangshow: true,
      gaojingshow: true,
      shexiangtoushow: true,
      center: {
        lng: 0,
        lat: 0
      },
      list1x: ['测试标题1', '测试标题2', '经过了这里', '经过了哪里', '测试标题1', '测试标题2', '经过了这里', '经过了哪里', '测试标题1', '测试标题2', '经过了这里', '经过了哪里',],
      tablist: ['数据总览', '数据查询', '疾控管理'],
      zoom: 3,
      a: 0,
      map: null,
      mapactive: 0
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
      that.mapactive = 0;
      setInterval(() => {
        that.mapactive = that.mapactive + 1
      }, 1000)
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
          icon: yiqing,
          offset: new AMap.Pixel(-25, -50),
          autoRotation: false,
          angle: 0,
        });

        var markerContent = document.createElement("div");
        var markerImg = document.createElement("img");
        markerImg.className = "markerlnglat";
        markerImg.src = yiqing;
        markerContent.appendChild(markerImg);
        var markerSpan = document.createElement("span");
        markerSpan.className = 'markerx';
        markerSpan.innerHTML = title;
        markerContent.appendChild(markerSpan);
        marker.setPosition(path3[0]);
        marker.setContent(markerContent);
        marker.setMap(that.map);

        // 绘制轨迹
        var polyline = new AMap.Polyline({
          map: that.map,
          path: path3,
          showDir: true,
          strokeColor: "#28F",  //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 6,      //线宽
          // strokeStyle: "solid"  //线样式
        });

        var passedPolyline = new AMap.Polyline({
          map: that.map,
          // path: lineArr,
          strokeColor: "#AF5",  //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 6,      //线宽
          // strokeStyle: "solid"  //线样式
        });

        marker.on('moving', function (e) {
          var markerContent = document.createElement("div");
          var markerImg = document.createElement("img");
          markerImg.className = "markerlnglat";
          markerImg.src = yiqing;
          markerContent.appendChild(markerImg);
          var markerSpan = document.createElement("span");
          markerSpan.className = 'markerx';
          markerSpan.innerHTML = that.list1x[that.mapactive];
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
      $.get("https://restapi.amap.com/v3/direction/driving?origin=125.317472,43.827952&destination=125.317472,43.757952&extensions=all&output=JSON&key=be862a6b566f949c5f44328c875e9c3d", function (data, status) {
        //设置数据
        let steps = data.route.paths[0].steps;
        console.log(steps)
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
          icon: yiqing,
          offset: new AMap.Pixel(-25, -50),
          autoRotation: false,
          angle: 0,
        });

        // 绘制轨迹
        var polyline = new AMap.Polyline({
          map: that.map,
          path: path3,
          showDir: true,
          strokeColor: "#28F",  //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 6,      //线宽
          // strokeStyle: "solid"  //线样式
        });

        var passedPolyline = new AMap.Polyline({
          map: that.map,
          // path: lineArr,
          strokeColor: "#AF5",  //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 6,      //线宽
          // strokeStyle: "solid"  //线样式
        });

        marker.on('moving', function (e) {
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
      $.get("https://restapi.amap.com/v3/direction/driving?origin=125.317472,43.827952&destination=125.417472,43.827952&extensions=all&output=JSON&key=be862a6b566f949c5f44328c875e9c3d", function (data, status) {
        //设置数据
        let steps = data.route.paths[0].steps;
        console.log(steps)
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
          icon: yiqing,
          offset: new AMap.Pixel(-25, -50),
          autoRotation: false,
          angle: 0,
        });

        // 绘制轨迹
        var polyline = new AMap.Polyline({
          map: that.map,
          path: path3,
          showDir: true,
          strokeColor: "#28F",  //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 6,      //线宽
          // strokeStyle: "solid"  //线样式
        });

        var passedPolyline = new AMap.Polyline({
          map: that.map,
          // path: lineArr,
          strokeColor: "#AF5",  //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 6,      //线宽
          // strokeStyle: "solid"  //线样式
        });

        marker.on('moving', function (e) {
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
      $.get("https://restapi.amap.com/v3/direction/driving?origin=125.317472,43.827952&destination=125.217472,43.827952&extensions=all&output=JSON&key=be862a6b566f949c5f44328c875e9c3d", function (data, status) {
        //设置数据
        let steps = data.route.paths[0].steps;
        console.log(steps)
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
          icon: yiqing,
          offset: new AMap.Pixel(-25, -50),
          autoRotation: false,
          angle: 0,
        });

        // 绘制轨迹
        var polyline = new AMap.Polyline({
          map: that.map,
          path: path3,
          showDir: true,
          strokeColor: "#28F",  //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 6,      //线宽
          // strokeStyle: "solid"  //线样式
        });

        var passedPolyline = new AMap.Polyline({
          map: that.map,
          // path: lineArr,
          strokeColor: "#AF5",  //线颜色
          // strokeOpacity: 1,     //线透明度
          strokeWeight: 6,      //线宽
          // strokeStyle: "solid"  //线样式
        });

        marker.on('moving', function (e) {
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
      that.map = new AMap.Map('echartmap', {
        resizeEnable: true,
        zoom: 17,
        scrollWheel: true,
        viewMode: '3D',
        pitch: 50,
        rotation: 0,
        maxZoom: 30,
        minZoom: 0,
        mapStyle: 'amap://styles/blue',
        features: ['bg', 'road', 'building'],
        center: [125.317472, 43.827952]
      });
      var marker = new AMap.Marker({
        map: this.map,
        position: [125.317472, 43.827952],
      });
      var markerContent = document.createElement("div");
      markerContent.className = 'pulsex';
      var markerSpan = document.createElement("span");
      markerSpan.className = 'marker';
      markerSpan.innerHTML = '';
      markerContent.appendChild(markerSpan);
      marker.setContent(markerContent);
      that.getguiji()
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

.bodymap {
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
  background: url("./images/leida.png") no-repeat;
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
</style>
