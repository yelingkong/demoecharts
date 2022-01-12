<!--
@Time : 2020/12/24 10:35 上午
@Author : yekong
@File : set.vue
@Software : PhpStorm
-->

<template>
  <div class="itembody2">
    <div class="itembody2list">
      <ul class="flip secondPlay1">
        <li>
          <a href="#">
            <div class="up">
              <div class="shadow"></div>
              <div class="inn">0</div>
            </div>
            <div class="down">
              <div class="shadow"></div>
              <div class="inn">0</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="up">
              <div class="shadow"></div>
              <div class="inn">1</div>
            </div>
            <div class="down">
              <div class="shadow"></div>
              <div class="inn">1</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="up">
              <div class="shadow"></div>
              <div class="inn">2</div>
            </div>
            <div class="down">
              <div class="shadow"></div>
              <div class="inn">2</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="up">
              <div class="shadow"></div>
              <div class="inn">3</div>
            </div>
            <div class="down">
              <div class="shadow"></div>
              <div class="inn">3</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="up">
              <div class="shadow"></div>
              <div class="inn">4</div>
            </div>
            <div class="down">
              <div class="shadow"></div>
              <div class="inn">4</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="up">
              <div class="shadow"></div>
              <div class="inn">5</div>
            </div>
            <div class="down">
              <div class="shadow"></div>
              <div class="inn">5</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="up">
              <div class="shadow"></div>
              <div class="inn">6</div>
            </div>
            <div class="down">
              <div class="shadow"></div>
              <div class="inn">6</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="up">
              <div class="shadow"></div>
              <div class="inn">7</div>
            </div>
            <div class="down">
              <div class="shadow"></div>
              <div class="inn">7</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="up">
              <div class="shadow"></div>
              <div class="inn">8</div>
            </div>
            <div class="down">
              <div class="shadow"></div>
              <div class="inn">8</div>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="up">
              <div class="shadow"></div>
              <div class="inn">9</div>
            </div>
            <div class="down">
              <div class="shadow"></div>
              <div class="inn">9</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "set",
  data: function () {
    return {
      list: ['二级菜单', '图层选择'],
      show: false,
      active: 1,
      active2: 0
    }
  },
  props: {
    type: {
      type: Number,
      default() {
        return 1;
      }
    }
  },
  created: function () {

  },
  filters: {},
  methods: {
    getshow() {
      this.show = true
    },
    getcative(e) {
      this.active = e;
    },
    getactive2(e) {
      this.active2 = e;
    },
  },
  mounted() {
  },
}

</script>

<style lang="scss" scoped>
/* Skeleton */

.flip {
  position: relative;
  float: left;
  font-weight: bold;
  border-radius: 6px;
  width: 36PX;
  height: 60PX;
  font-size: 42px;
  line-height: 59PX;
  margin-left: 3px;
  margin-right: 3px;
}

.flip li {
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

}

.flip li:first-child {
  z-index: 2;
}

.flip li a {
  display: block;
  height: 100%;
  perspective: 200px;
}

.flip li a div {
  z-index: 1;
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;
}

.flip li a div .shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}

.flip li a div.up {
  transform-origin: 50% 100%;
  top: 0;
}

/*ul.flip li a div.up:after {*/
/*    content: "";*/
/*    position: absolute;*/
/*    top: 44px;*/
/*    left: 0;*/
/*    z-index: 5;*/
/*    width: 100%;*/
/*    height: 3px;*/
/*    background-color: rgba(0, 0, 0, .4);*/
/*}*/

.flip li a div.down {
  transform-origin: 50% 0%;
  bottom: 0;
}

.flip li a div div.inn {
  position: absolute;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 200%;
  color: #fff;
  text-align: center;
  /*background: #5bcda0;*/
  /*box-shadow: 0px 2px 10px 0px rgba(13, 123, 112, 0.3);*/
  background: url("./assets/numcard1.png") no-repeat;
  background-size: 100% 100%;
}

.flip li a div.up div.inn {
  top: 0;

}

.flip li a div.down div.inn {
  bottom: 0;
}

@keyframes asd {
  0% {
    z-index: 2;
  }
  5% {
    z-index: 4;
  }
  100% {
    z-index: 4;
  }
}

body.play ul li.active .down {
  z-index: 2;
  animation: turn .5s .5s linear both;
}

@keyframes turn {
  0% {
    transform: rotateX(90deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}

body.play ul li.before .up {
  z-index: 2;
  animation: turn2 .5s linear both;
}

@keyframes turn2 {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(-90deg);
  }
}

/* SHADOW */

body.play ul li.before .up .shadow {
  animation: show .5s linear both;
}

body.play ul li.active .up .shadow {
  animation: hide .5s .3s linear both;
}

/*DOWN*/

body.play ul li.before .down .shadow {
  animation: show .5s linear both;
}

body.play ul li.active .down .shadow {
  animation: hide .5s .3s linear both;
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.itembody2 {
  width: 100%;
  position: relative;
  height: 100%;
}

.itembody2list {
  width: 100%;
  position: relative;
  height: 100%;
}
</style>
