<template>
  <div class="echarts1" ref="echarts1">

  </div>
</template>

<script>


export default {
  name: 'echarts1',
  components: {},
  data() {
    return {}
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this;
      window.addEventListener('resize', this.drawLine)
      let myChart = this.$echarts.init(this.$refs.echarts1)
      var option = {
        "dataset": {
          "source": [
            ["安全生产", "DATA1", "DATA2", "DATA3"],
            ["安全生产", "41.7", "58.3", "33.3"],
            ["损工", "41.7", "58.3", "33.3"],
            ["可记录事故", "40.2", "59.8", "33.3"],
            ["急救", "9.6", "90.4", "33.3"],
            ["险肇", "0", "93.7", "33.3"],
            ["", "", "", "33.3"]
          ]
        },
        "color": [
          "rgba(1, 96, 212,",
          "rgba(25, 165, 140,",
          "rgba(86, 185, 110,",
          "rgba(243, 106, 59,",
          "rgba(243, 106, 59,"
        ],
        "grid": {
          "top": "0",
          "left": "47%",
          "width": "40%",
          "height": "46%",
          "containLabel": true
        },
        "xAxis": {
          "axisLine": {
            "show": false
          }
        },
        "yAxis": [{
          "type": "category",
          "inverse": true,
          "axisLine": {
            "show": false
          },
          "axisTick": {
            "show": false
          },
          "axisLabel": {
            "show": false,
            "interval": 0,
            "inside": true,
            "formatter": function (params) {
              console.log(params)
              var str;
              str = "{w1|" + option.dataset.source[params][0] + "}" + "{w2|" + option.dataset.source[params][1] + "}";
              return str;
            },
            "rich": {
              "w1": {
                "padding": [
                  0,
                  0,
                  0,
                  0
                ],
                "fontSize": 13,
                "color": "rgba(131, 137, 157, 1)"
              },
              "w2": {
                "padding": [
                  0,
                  0,
                  0,
                  0
                ],
                "fontSize": 13,
                "color": "rgba(131, 137, 157, 1)"
              },
            }
          },
          "data": [
            1,
            2,
            3,
            4,
            5
          ]
        }],
        "series": [
          {
            "type": "pie",
            "radius": [
              "88%",
              "100%"
            ],
            "clockwise": false,
            "hoverAnimation": false,
            "labelLine": {
              "show": false
            },
            "itemStyle": {
              "color": function (params) {
                var colorList = [{
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: option.color[0] + "1)"
                  },
                    {
                      offset: 1,
                      color: option.color[0] + "1)"
                    }
                  ],
                  global: false
                },
                  "#051235", "rgba(0,0,0,0)"
                ];
                return colorList[params.dataIndex];
              }
            },
            "label": {
              "show": false
            },
            "encode": {
              "itemName": "NAME",
              "value": 1
            },
            "seriesLayoutBy": "row"
          },
          {
            "type": "pie",
            "radius": [
              "70%",
              "82%"
            ],
            "clockwise": false,
            "hoverAnimation": false,
            "labelLine": {
              "show": false
            },
            "itemStyle": {
              "color": function (params) {
                var colorList = [{
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: option.color[1] + "1)"
                  },
                    {
                      offset: 1,
                      color: option.color[1] + "1)"
                    }
                  ],
                  global: false
                },
                  "#051235", "rgba(0,0,0,0)"
                ];
                return colorList[params.dataIndex];
              }
            },
            "label": {
              "show": false
            },
            "encode": {
              "itemName": "NAME",
              "value": 2
            },
            "seriesLayoutBy": "row"
          },
          {
            "type": "pie",
            "radius": [
              "52%",
              "64%"
            ],
            "clockwise": false,
            "hoverAnimation": false,
            "labelLine": {
              "show": false
            },
            "itemStyle": {
              "color": function (params) {
                var colorList = [{
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: option.color[2] + "1)"
                  },
                    {
                      offset: 1,
                      color: option.color[2] + "1)"
                    }
                  ],
                  global: false
                },
                  "#051235", "rgba(0,0,0,0)"
                ];
                return colorList[params.dataIndex];
              }
            },
            "label": {
              "show": false
            },
            "encode": {
              "itemName": "NAME",
              "value": 3
            },
            "seriesLayoutBy": "row"
          },
          {
            "type": "pie",
            "radius": [
              "34%",
              "46%"
            ],
            "clockwise": false,
            "hoverAnimation": false,
            "labelLine": {
              "show": false
            },
            "itemStyle": {
              "color": function (params) {
                var colorList = [{
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: option.color[3] + "1)"
                  },
                    {
                      offset: 1,
                      color: option.color[3] + "1)"
                    }
                  ],
                  global: false
                },
                  "#051235", "rgba(0,0,0,0)"
                ];
                return colorList[params.dataIndex];
              }
            },
            "label": {
              "show": false
            },
            "encode": {
              "itemName": "NAME",
              "value": 4
            },
            "seriesLayoutBy": "row"
          },
          {
            "type": "pie",
            "radius": [
              "16%",
              "28%"
            ],
            "clockwise": false,
            "hoverAnimation": false,
            "labelLine": {
              "show": false
            },
            "itemStyle": {
              "color": function (params) {
                var colorList = [{
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: option.color[4] + "1)"
                  },
                    {
                      offset: 1,
                      color: option.color[4] + "1)"
                    }
                  ],
                  global: false
                },
                  "#051235", "rgba(0,0,0,0)"
                ];
                return colorList[params.dataIndex];
              }
            },
            "label": {
              "show": false
            },
            "encode": {
              "itemName": "NAME",
              "value": 5
            },
            "seriesLayoutBy": "row"
          }
        ]
      };
      myChart.clear()
      myChart.resize()
      myChart.setOption(option)
    },
  }
}
</script>

<style lang="scss" scoped>
.echarts1 {
  position: relative;
  width: 100%;
  height: calc(100% - 10px);
}
</style>
