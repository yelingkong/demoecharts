<template>
  <div class="Home">
    <baidu-map :center="center" :scroll-wheel-zoom="true" :zoom="zoom" @ready="handler"
               class="bm-view">
      <my-overlay
        v-for="(item,index) in maplist" :key="index"
        :position="{lng: item.lng, lat: item.lat}"
        :active="item.active"
        :text="item.num"
        @mouseover.native="active = true"
        @mouseleave.native="active = false">
      </my-overlay>
    </baidu-map>
  </div>
</template>

<script>
import MyOverlay from './mapover/myoverlay'

export default {
  data() {
    return {
      type1: 1,
      type2: 0,
      active: false,
      guzhangshow: true,
      gaojingshow: true,
      shexiangtoushow: true,
      mapStyle: {
        styleJson: [
          {
            'featureType': 'all',
            'elementType': 'geometry',
            'stylers': {
              'color': '#53F1F0'
            }
          },
          {
            'featureType': 'building',
            'elementType': 'geometry',
            'stylers': {
              'color': '#53F1F0'
            }
          },
          {
            'featureType': 'highway',
            'elementType': 'all',
            'stylers': {
              'lightness': -42,
              'saturation': -91
            }
          },
          {
            'featureType': 'arterial',
            'elementType': 'geometry',
            'stylers': {
              'lightness': -77,
              'saturation': -94
            }
          },
          {
            'featureType': 'green',
            'elementType': 'geometry',
            'stylers': {
              'color': '#53F1F0'
            }
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': {
              'color': '#53F1F0'
            }
          },
          {
            'featureType': 'subway',
            'elementType': 'geometry.stroke',
            'stylers': {
              'color': '#53F1F0'
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'geometry',
            'stylers': {
              'lightness': -52
            }
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.stroke',
            'stylers': {
              'color': '#53F1F0'
            }
          },
          {
            'featureType': 'all',
            'elementType': 'labels.text.fill',
            'stylers': {
              'color': '#25487C'
            }
          },
          {
            'featureType': 'manmade',
            'elementType': 'geometry',
            'stylers': {
              'color': '#284A7F'
            }
          },
          {
            'featureType': 'road',
            'elementType': 'geometry',
            'stylers': {
              'color': '#27497E',
              'lightness': -62,
              'saturation': 17
            }
          },
          {
            'featureType': 'subway',
            'elementType': 'geometry',
            'stylers': {
              'lightness': -65
            }
          },
          {
            'featureType': 'railway',
            'elementType': 'all',
            'stylers': {
              'lightness': -40
            }
          },
          {
            'featureType': 'background',
            'elementType': 'geometry',
            'stylers': {
              'color': '#142745',
              'weight': '1',
              'lightness': -29
            }
          }
        ]
      },
      maplist: [
        {
          lng: 116.404,
          lat: 39.915,
          num: 10,
          active: false
        }, {
          lng: 116.404,
          lat: 39.515,
          num: 13,
          active: false
        }, {
          lng: 116.604,
          lat: 39.515,
          num: 15,
          active: true
        },],
      center: {
        lng: 0,
        lat: 0
      },
      zoom: 3,
      a: 0,
    }
  },
  components: {
    MyOverlay
  },
  created() {

  },

  mounted() {
    new this.$wow.WOW().init()
  },
  methods: {
    draw({
           el,
           BMap,
           map
         }) {
      const pixel = map.pointToOverlayPixel(new BMap.Point(116.404, 39.915))
      el.style.left = pixel.x - 60 + 'px'
      el.style.top = pixel.y - 20 + 'px'
    },
    handler({
              BMap,
              map
            }) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 10
    },
    gettype1(type) {
      this.type1 = type
    },
  },
  filters: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.bm-view {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
