import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import * as filters from './filters'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../src/utils/flexiblle'
import './assets/css/animate.min.css'
import './element-variables.scss'
import store from './store'
import echartsfg from 'echartsfg'
import echarts from 'echarts'
import wow from 'wowjs'
import 'echarts-liquidfill'
import HighchartsVue from 'highcharts-vue'
import BaiduMap from 'vue-baidu-map'
import '@/lib/createjs'
import '@/lib/TweenMax'
Vue.use(HighchartsVue)
// import Highcharts from 'highcharts/highstock';
// import HighchartsMore from 'highcharts/highcharts-more';
// import HighchartsDrilldown from 'highcharts/modules/drilldown';
// import Highcharts3D from 'highcharts/highcharts-3d';

Vue.use(BaiduMap, {
  ak: 'hDQVARRkGAa7y20mcG1oZ5cgVanyvnwQ'
})
// HighchartsMore(Highcharts)
// HighchartsDrilldown(Highcharts);
// Highcharts3D(Highcharts);
Vue.prototype.$echarts = echarts
Vue.prototype.$echartsfg = echartsfg
Vue.prototype.$wow = wow
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
