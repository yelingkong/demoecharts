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
import echarts from 'echarts'
import wow from 'wowjs'

const context = require.context('@/components', true, /\.vue$/);
const install = (Vue) => {
  context.keys().forEach((key) => {
    const component = context(key).default;
    Vue.component(component.name, component);
  });
};
Vue.prototype.$echarts = echarts
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
