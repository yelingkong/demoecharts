<template>
  <div>
    <div class="shandian1"></div>
    <div class="shandian2"></div>
  </div>
</template>

<script>
export default {
  name: '闪电',
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
      status: true
    }
  },
  watch: {},
  mounted() {

    function sd1(ele) {
      var width, height
      var step = 0;
      var canvas = document.createElement('canvas')
      var ctx = canvas.getContext('2d')

      var bg = [4, 10, 11]
      document.querySelector(ele).appendChild(canvas)
      setTimeout(() => {
        var timeID = setInterval(() => {
          pt1.x += 10;
          if (pt1.x > width - 10) {
            clearInterval(timeID)
          }
        }, 60);
      }, 1000)

      var pt1
      var pt2

      window.addEventListener('resize', setup)

      setup()

      function setup() {
        canvas.width = width = document.querySelector(ele).clientWidth
        canvas.height = height = document.querySelector(ele).clientHeight

        ctx.beginPath();
        ctx.rect(0, 0, width, height)
        ctx.fillStyle = `rgba(${bg[0]}, ${bg[1]}, ${bg[2]}, ${1})`
        ctx.fill()

        pt1 = {x: -20, y: height / 2}//闪电起点
        pt2 = {x: -20, y: height / 2} //闪电终点
        // draw()
      }

      setInterval(animate, 60)

      // window.requestAnimationFrame(animate);

      function blur(ctx, canvas, amt) {
        ctx.filter = `blur(${amt}px)`
        ctx.drawImage(canvas, 0, 0)
        ctx.filter = 'none'
      }

      function fade(ctx, amt, width, height) {
        ctx.beginPath();
        ctx.rect(0, 0, width, height)
        ctx.fillStyle = `rgba(${bg[0]}, ${bg[1]}, ${bg[2]}, ${amt})`
        ctx.fill()
      }

      function animate() {
        step++

        blur(ctx, canvas, 1)
        draw()
        fade(ctx, 0.1, width, height)

        // window.requestAnimationFrame(function(){animate()})
      }

      function draw() {

        var iterations = [pt1, pt2]
        var newiterations, i, j
        for (i = 0; i < 8; i++) {
          newiterations = [iterations[0]]
          for (j = 1; j < iterations.length; j++) {
            newiterations.push(getRandMidpoint(iterations[j - 1], iterations[j], 200 / (i * i + 1)))
            newiterations.push(iterations[j])
          }
          iterations = newiterations.concat([])
        }
        ctx.beginPath();
        ctx.moveTo(iterations[0].x, iterations[0].y);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#04e4c9';
        // ctx.strokeStyle = `hsla(${Math.sin( step / 30) * 120 + 50},${90}%,${70}%,1)`
        for (i = 1; i < iterations.length; i++) {
          ctx.lineTo(iterations[i].x, iterations[i].y);
        }
        ctx.stroke()
        ctx.closePath()
      }

      function getRandMidpoint(pa, pb, range) {
        var a = Math.atan2(pb.y - pa.y, pb.x - pa.x) + Math.PI / 2
        var half = {y: (pb.y - pa.y) / 2 + pa.y, x: (pb.x - pa.x) / 2 + pa.x}
        var offset = Math.random() * range / 3 - range / 6  //这里控制闪电的抖动幅度
        var ho = {
          x: Math.cos(a) * offset + half.x,
          y: Math.sin(a) * offset + half.y
        }
        return ho
      }
    }

    sd1('.shandian1')

    function sd2(ele) {
      var width, height
      var step = 0;
      var canvas = document.createElement('canvas')
      var ctx = canvas.getContext('2d')

      var bg = [4, 10, 11]
      document.querySelector(ele).appendChild(canvas)
      setTimeout(() => {
        var timeID = setInterval(() => {
          pt1.x -= 10;
          if (pt1.x < 10) {
            clearInterval(timeID)
          }
        }, 60);
      }, 1000)

      var pt1
      var pt2

      window.addEventListener('resize', setup)

      setup()

      function setup() {
        canvas.width = width = document.querySelector(ele).clientWidth
        canvas.height = height = document.querySelector(ele).clientHeight

        ctx.beginPath();
        ctx.rect(0, 0, width, height)
        ctx.fillStyle = `rgba(${bg[0]}, ${bg[1]}, ${bg[2]}, ${1})`
        ctx.fill()

        pt1 = {x: width + 20, y: height / 2}//闪电起点
        pt2 = {x: width + 20, y: height / 2} //闪电终点
        // draw()
      }

      setInterval(animate, 60)

      // window.requestAnimationFrame(animate);

      function blur(ctx, canvas, amt) {
        ctx.filter = `blur(${amt}px)`
        ctx.drawImage(canvas, 0, 0)
        ctx.filter = 'none'
      }

      function fade(ctx, amt, width, height) {
        ctx.beginPath();
        ctx.rect(0, 0, width, height)
        ctx.fillStyle = `rgba(${bg[0]}, ${bg[1]}, ${bg[2]}, ${amt})`
        ctx.fill()
      }

      function animate() {
        step++

        blur(ctx, canvas, 1)
        draw()
        fade(ctx, 0.1, width, height)

        // window.requestAnimationFrame(function(){animate()})
      }

      function draw() {

        var iterations = [pt1, pt2]
        var newiterations, i, j
        for (i = 0; i < 8; i++) {
          newiterations = [iterations[0]]
          for (j = 1; j < iterations.length; j++) {
            newiterations.push(getRandMidpoint(iterations[j - 1], iterations[j], 200 / (i * i + 1)))
            newiterations.push(iterations[j])
          }
          iterations = newiterations.concat([])
        }
        ctx.beginPath();
        ctx.moveTo(iterations[0].x, iterations[0].y);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#04e4c9';
        // ctx.strokeStyle = `hsla(${Math.sin( step / 30) * 120 + 50},${90}%,${70}%,1)`
        for (i = 1; i < iterations.length; i++) {
          ctx.lineTo(iterations[i].x, iterations[i].y);
        }
        ctx.stroke()
        ctx.closePath()
      }

      function getRandMidpoint(pa, pb, range) {
        var a = Math.atan2(pb.y - pa.y, pb.x - pa.x) + Math.PI / 2
        var half = {y: (pb.y - pa.y) / 2 + pa.y, x: (pb.x - pa.x) / 2 + pa.x}
        var offset = Math.random() * range / 3 - range / 6  //这里控制闪电的抖动幅度
        var ho = {
          x: Math.cos(a) * offset + half.x,
          y: Math.sin(a) * offset + half.y
        }
        return ho
      }
    }

    sd2('.shandian2')
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.shandian1 {
  width: 300px;
  height: 300px;
}

.shandian2 {
  width: 300px;
  height: 300px;
}
</style>
