<template>
  <canvas class="rain"></canvas>
</template>

<script>



export default {
  name: 'liuxingyu',
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
    function rainBg() {
      var c = document.querySelector(".rain");
      console.log(c)
      var ctx = c.getContext("2d");//获取canvas上下文
      var w = c.width = document.querySelector('.rain').clientWidth;
      var h = c.height = document.querySelector('.rain').clientHeight;

      //设置canvas宽、高

      function random(min, max) {
        return Math.random() * (max - min) + min;
      }

      function RainDrop() {
      }

      //雨滴对象 这是绘制雨滴动画的关键
      RainDrop.prototype = {
        init: function () {
          this.x = random(0, w);//雨滴的位置x
          this.y = h;//雨滴的位置y
          this.color = 'hsl(180, 100%, 50%)';//雨滴颜色 长方形的填充色
          this.vy = random(4, 5);//雨滴下落速度
          this.hit = 0;//下落的最大值
          this.size = 2;//长方形宽度
        },
        draw: function () {
          if (this.y > this.hit) {
            var linearGradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.size * 30)
            // 设置起始颜色
            linearGradient.addColorStop(0, '#14789c')
            // 设置终止颜色
            linearGradient.addColorStop(1, '#09254d')
            // 设置填充样式
            ctx.fillStyle = linearGradient
            ctx.fillRect(this.x, this.y, this.size, this.size * 50);//绘制长方形，通过多次叠加长方形，形成雨滴下落效果
          }
          this.update();//更新位置
        },
        update: function () {
          if (this.y > this.hit) {
            this.y -= this.vy;//未达到底部，增加雨滴y坐标
          } else {
            this.init();
          }
        }
      };

      function resize() {
        w = c.width = window.innerWidth;
        h = c.height = window.innerHeight;
      }

      //初始化一个雨滴

      var rs = []
      for (var i = 0; i < 10; i++) {
        setTimeout(function () {
          var r = new RainDrop();
          r.init();
          rs.push(r);
        }, i * 300)
      }

      function anim() {
        ctx.clearRect(0, 0, w, h);//填充背景色，注意不要用clearRect，否则会清空前面的雨滴，导致不能产生叠加的效果
        for (var i = 0; i < rs.length; i++) {
          rs[i].draw();//绘制雨滴
        }
        requestAnimationFrame(anim);//控制动画帧
      }

      window.addEventListener("resize", resize);
      //启动动画
      anim()

    }
    rainBg()

  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.rain {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
