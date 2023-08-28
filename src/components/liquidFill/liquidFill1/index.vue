<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

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
      datas: [],
      active: 0,
    }
  },
  watch: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this;
      window.addEventListener("resize", this.drawLine);
      let myChart = this.$echarts.init(this.$refs.echarts);
      var option = {
        title: {
          text: "34%",
          textStyle: {
            fontSize: 20,
            fontWeight: "normal",
            color: "#fff",
          },
          x: "center",
          y: "center",
        },
        graphic: [
          {
            type: "group",
            left: "center",
            top: "80%",
            children: [
              {
                type: "text",
                style: {
                  fill: "rgba(187, 209, 238, 1)",
                  text: "巡查完成率",
                  fontSize: 13,
                },
              },
            ],
          },
        ],
        series: [
          {
            type: "liquidFill",
            waveAnimation: 1,
            data: [0.35, 0.3],
            color: ["rgba(0, 204, 255, 1)", "rgba(0, 204, 255, 0.8)"],
            amplitude: 10,
            radius: "80%",
            backgroundStyle: {
              color: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.55,
                colorStops: [
                  {
                    offset: 0.5,
                    color: "#041B49", // 0% 处的颜色
                  },
                  {
                    offset: 0.75,
                    color: "#041B49", // 100% 处的颜色
                  },
                  {
                    offset: 0.95,
                    color: "#041B49", // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
            outline: {
              show: false,
            },
            label: {
              normal: {
                formatter: "",
              },
            },
          },
        ],
      };
      myChart.clear();
      myChart.resize();
      myChart.setOption(option);
    },
  }
}
</script>

<style lang="scss" scoped>
.echarts1 {
  position: relative;
  width: 100%;
  height: calc(100% - 0px);
}
</style>
