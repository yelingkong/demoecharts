<template>
  <div class="echarts1" ref="echarts">

  </div>
</template>

<script>

import {ArrayMax, FontChart} from "@/utils/utils";
import types from '../../../data/type.json'

export default {
  name: 'echarts1',
  components: {},
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      ...types
    }
  },
  computed: {},
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      var that = this;
      window.addEventListener("resize", this.drawLine);
      let myChart = this.$echarts.init(this.$refs.echarts);
      var option = {
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        color: ['#83e0ff', '#45f5ce', '#b158ff'],
        series: [
          {
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 1000,
              edgeLength: 50
            },
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            data: [
              {
                name: '新冠病毒',
                symbolSize: 120,
                draggable: true,
                category: 0,
                itemStyle: {
                  normal: {
                    "borderColor": {
                      "x": 0,
                      "y": 0,
                      "x2": 0,
                      "y2": 1,
                      "type": "linear",
                      "colorStops": [{
                        "offset": 0,
                        "color": "rgba(40, 157, 184, 1)"
                      }, {
                        "offset": 1,
                        "color": "rgba(33, 209, 169, 1)"
                      }]
                    },
                    borderWidth: 25,
                    shadowBlur: 20,
                    shadowColor: 'rgba(7, 74, 66, 1.00)',
                    color: 'rgba(7, 24, 26, 1)',
                  }
                }
              },
              {
                name: '王某',
                symbolSize: 100,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(17, 221, 200, 1.00)',
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(8, 128, 95, 1.00)'
                  }
                },
                category: 1,

              },
              {
                name: '王某2',
                symbolSize: 46,
                category: 1,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
              },
              {
                name: '王某3',
                symbolSize: 46,
                category: 1,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
              },
              {
                name: '王某1',
                symbolSize: 46,
                category: 1,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
              },
              {
                name: '王某4',
                symbolSize: 46,
                draggable: true,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
              },
              {
                name: '刘某',
                symbolSize: 100,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(17, 221, 200, 1.00)',
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(8, 128, 95, 1.00)'
                  }
                },
                category: 1,

              },
              {
                name: '刘某2',
                symbolSize: 46,
                draggable: true,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
              },
              {
                name: '刘某3',
                draggable: true,
                symbolSize: 46,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
              },
              {
                name: '刘某1',
                draggable: true,
                symbolSize: 46,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
              },
              {
                name: '刘某4',
                symbolSize: 46,
                draggable: true,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
              },
              {
                name: '赵某',
                symbolSize: 100,
                category: 2,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(17, 221, 200, 1.00)',
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(8, 128, 95, 1.00)'
                  }
                },

              },
              {
                name: '赵某1',
                symbolSize: 46,
                draggable: true,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
              },
              {
                name: '赵某4',
                draggable: true,
                symbolSize: 46,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
                category: 2,

              },
              {
                name: '赵某2',
                symbolSize: 46,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
                category: 2,

              },
              {
                name: '赵某3',
                symbolSize: 46,
                category: 2,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
              },
              {
                name: '钱某',
                symbolSize: 100,
                category: 2,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(17, 221, 200, 1.00)',
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(8, 128, 95, 1.00)'
                  }
                },

              },
              {
                name: '钱某1',
                symbolSize: 46,
                draggable: true,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
              },
              {
                name: '钱某4',
                symbolSize: 46,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
                category: 2,

              },
              {
                name: '钱某2',
                symbolSize: 46,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
                category: 2,

              },
              {
                name: '钱某3',
                symbolSize: 46,
                draggable: true,
                category: 2,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
              },
              {
                name: '李某',
                symbolSize: 100,
                draggable: true,
                category: 2,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(17, 221, 200, 1.00)',
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(8, 128, 95, 1.00)',
                  }
                },

              },
              {
                name: '李某1',
                symbolSize: 46,
                category: 1,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
              },
              {
                name: '李某4',
                symbolSize: 46,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
                category: 2,

              },
              {
                name: '李某2',
                draggable: true,
                symbolSize: 46,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
                category: 2,

              },
              {
                name: '李某3',
                symbolSize: 46,
                draggable: true,
                category: 2,
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(14, 248, 227, 1.00)',
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: 'rgba(53, 88, 93, 1.00)',
                  }
                },
              }],
            links: [
              {
                source: '新冠病毒',
                target: '刘某'
              }, {
                source: '新冠病毒',
                target: '王某'
              },
              {
                source: '新冠病毒',
                target: '李某',
              },

              {
                source: '新冠病毒',
                target: '赵某',
              }, {
                source: '新冠病毒',
                target: '钱某',
              },
              {
                source: '钱某',
                target: '钱某1',
              },
              {
                source: '钱某',
                target: '钱某2',
              },
              {
                source: '钱某',
                target: '钱某3',
              },
              {
                source: '钱某',
                target: '钱某4',
              },
              {
                source: '赵某',
                target: '赵某1',
              },
              {
                source: '赵某',
                target: '赵某2',
              },
              {
                source: '赵某',
                target: '赵某3',
              },
              {
                source: '赵某',
                target: '赵某4',
              },

              {
                source: '王某',
                target: '王某1',
              },
              {
                source: '王某',
                target: '王某2',
              },
              {
                source: '王某',
                target: '王某3',
              },
              {
                source: '王某',
                target: '王某4',
              },
              {
                source: '刘某',
                target: '刘某1',
              },
              {
                source: '刘某',
                target: '刘某2',
              },
              {
                source: '刘某',
                target: '刘某3',
              },
              {
                source: '刘某',
                target: '刘某4',
              },
              {
                source: '新冠病毒',
                target: '李某',
              },
              {
                source: '李某',
                target: '李某3',
              },
              {
                source: '李某',
                target: '李某1',
              },
              {
                source: '李某',
                target: '李某4',
                value: 'DNA',
              }, {
                source: '李某',
                target: '李某2'

              }
            ],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 3,
                curveness: 0,
                color: {
                  "x": 0,
                  "y": 0,
                  "x2": 0,
                  "y2": 1,
                  "type": "linear",
                  "colorStops": [{
                    "offset": 0,
                    "color": "rgba(0, 185, 191, 1)"
                  }, {
                    "offset": 1,
                    "color": "rgba(31, 204, 135, 1)"
                  }]
                }

              }
            },
            categories: [
              {name: '0'},
              {name: '1'},
              {name: '2'}
            ]
          }
        ]
      }
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
  height: calc(100% - 10px);
}
</style>
