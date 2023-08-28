<template>
  <div class="maps">
    <div class="zhnj">
    </div>
    <baidu-map
      class="map"
      :scroll-wheel-zoom="true"
      :center="center"
      :zoom="zoom"
      v-if="show"
      @ready="handler"
      @moving="syncCenterAndZoom"
      @moveend="syncCenterAndZoom"
      @zoomend="syncCenterAndZoom">
      <car
        v-for="(item,index) in carlist" :key="index"
        :position="{lng: item.lng, lat: item.lat}"
        :active="item.active"
        :item="item"
        @mouseover.native="active = true"
        @mouseleave.native="active = false">
      </car>
      <gongsi
        v-for="(item,index) in list" :key="index"
        :position="{lng: item.lng, lat: item.lat}"
        :item="item"
        @mouseover.native="active = true"
        @mouseleave.native="active = false">
      </gongsi>
    </baidu-map>
  </div>
</template>

<script>

import car from './mapover/car'
import gongsi from './mapover/gongsi'
import {demoechartsbdmap} from "@/api/api/user";

export default {
  name: "bdmap",
  components: {car, gongsi},
  props: {
    id: {
      type: String,
      default() {
        return '';
      }
    }
  },
  data() {
    return {
      carData: [],
      orgData: [],
      center: {
        lng: 106.404,
        lat: 39.915
      },
      zoom: 10,
      show: false,
      listOrg: [],
      carlist: [],
      index: '',
      list: []
    }
  },
  mounted() {
    this.getdata()
  },
  methods: {
    syncCenterAndZoom(e) {
      const {lng, lat} = e.target.getCenter()
      this.center.lng = lng
      this.center.lat = lat
      this.zoom = e.target.getZoom()
    },
    handler({
              BMap,
              map
            }) {
      let mapStyle = {style: 'midnight'}
      map.setMapStyle(mapStyle)
      map.setMapType(BMAP_HYBRID_MAP);
    },
    getdata() {
      var that = this
      demoechartsbdmap().then(function (res) {
        var data = []
        if (that.companyindex) {
          // data = res.data[that.companyindex]
          res.data.forEach((type, index) => {
            if (that.companyindex == index) {
              data.push(type)
            }
          });
        } else {
          data = res.data
        }
        that.list = []
        console.log(data)
        console.log('listinfo')
        data.forEach((type, index) => {
          type.properties.forEach((type2, index2) => {
            var data = {
              lng: type.coordinates[index2][0],
              lat: type.coordinates[index2][1],
              orgId: type2[0],
              orgName: type2[1],
              imgPath: type2[2],
              describe: type2[3],
              website: type2[4],
              offLine: type.offLine,
              onLine: type.onLine
            }
            that.list.push(data)
          });
        });
        that.center.lng = that.list[0].lng
        that.center.lat = that.list[0].lat
        that.show = true
        console.log(that.list)
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.maps {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
}

.map {
  position: relative;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
}

.zhnj {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: url("assets/bjimg.png") no-repeat;
  background-size: 100% 100%;
}
</style>
