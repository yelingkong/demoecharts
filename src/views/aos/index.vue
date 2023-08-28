<template>
  <div>
    <div class="block" data-aos="flip-left" data-aos-delay="100">
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css'

export default {
  name: "index",
  components: {},
  data() {
    return {
      status: ''
    }
  },
  watch: {},
  mounted() {
    AOS.init()
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

.block {
  width: 400px;
  height: 200px;
  background: #000 !important;
}
</style>
