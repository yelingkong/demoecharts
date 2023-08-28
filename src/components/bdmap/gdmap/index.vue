<template>
  <div class="bodymap" id="gdmap1"></div>
</template>

<script>

export default {
  data() {
    return {
      list: [{"name": "219", "device_no": "2980", "lat": "27.617367", "lng": "120.556417", "area_name": "平阳"}],
      zoom: 3,
      map: null,
    }
  },
  components: {},
  created() {

  },

  mounted() {
    this.getmap()
    this.getdata()
  },
  methods: {
    getdata() {
      var that = this;
      that.list.forEach((type) => {
        if (type.lat) {
          var marker = new AMap.Marker({
            map: this.map,
            position: [type.lng, type.lat],
            extData: type,
          })
          marker.on('click', that.markerClick)
        }
      });
    },
    markerClick(e) {
      console.log(e.target.w.extData)
      var that = this;
      var infoWindow = new AMap.InfoWindow({
        anchor: 'middle-left',
        content: `<div class=\"tanchuangMap\">
                 <div class=\"tanchuangMaptop\"></div>
                 <div class=\"tanchuangMaptop1\">
                     <div class=\"tanchuangMaptop1body\">
                         <p><span>设备名称：</span>${e.target.w.extData.name}</p>
                         <p><span>设备id：</span>${e.target.w.extData.device_no}</p>
                         <p><span>区域名称：</span>${e.target.w.extData.area_name}</p></div></div></div>`,
      });
      infoWindow.open(that.map, [e.lnglat.lng, e.lnglat.lat])
    },
    getmap() {
      var that = this;
      that.map = new AMap.Map('gdmap1', {
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
        center: [120.556417, 27.617367]
      });
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
  position: fixed;
}
</style>
<style>
.amap-info-contentContainer .amap-info-outer {
  background: #4760a8 !important;
  border: 1px solid #5d9bd5 !important;
  color: #fff;
}

.amap-info-close {
  right: 10px !important;
}

.amap-info-content {
  padding: 10px;
}

.amap-info-sharp {
  display: none !important;
}
</style>
