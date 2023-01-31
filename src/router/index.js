import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  base: '/',
  routes: [
    {
      path: '/aos',
      name: 'aos',
      component: resolve => require(['@/views/aos/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    }, {
      path: '/bar',
      name: 'home',
      component: resolve => require(['@/views/bar/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/views/bar/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/pie',
      name: 'pie',
      component: resolve => require(['@/views/bar/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/bar/:id',
      name: 'home',
      component: resolve => require(['@/views/bar/page'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/zhu',
      name: 'home',
      component: resolve => require(['@/views/zhu/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/zhu/:id',
      name: 'home',
      component: resolve => require(['@/views/zhu/page'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    }, {
      path: '/Highcharts',
      name: 'home',
      component: resolve => require(['@/views/Highcharts/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/Highcharts/:id',
      name: 'home',
      component: resolve => require(['@/views/Highcharts/page'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/line',
      name: 'line',
      component: resolve => require(['@/views/line/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/line/:id',
      name: 'line',
      component: resolve => require(['@/views/line/page'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/map',
      name: 'map',
      component: resolve => require(['@/views/map/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/map/:id',
      name: 'map',
      component: resolve => require(['@/views/map/page'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/leida',
      name: 'leida',
      component: resolve => require(['@/views/leida/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/leida/:id',
      name: 'leida',
      component: resolve => require(['@/views/leida/page'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/qipao',
      name: 'qipao',
      component: resolve => require(['@/views/qipao/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/qipao/:id',
      name: 'qipao',
      component: resolve => require(['@/views/qipao/page'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: resolve => require(['@/views/dashboard/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/dashboard/:id',
      name: 'dashboard',
      component: resolve => require(['@/views/dashboard/page'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/funnel',
      name: 'funnel',
      component: resolve => require(['@/views/funnel/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/funnel/:id',
      name: 'funnel',
      component: resolve => require(['@/views/funnel/page'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/liquidFill',
      name: 'liquidFill',
      component: resolve => require(['@/views/liquidFill/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/liquidFill/:id',
      name: 'liquidFill',
      component: resolve => require(['@/views/liquidFill/page'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/qita',
      name: 'qita',
      component: resolve => require(['@/views/qita/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/qita/:id',
      name: 'qita',
      component: resolve => require(['@/views/qita/page'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/bdmap',
      name: 'bdmap',
      component: resolve => require(['@/views/bdmap/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/bdmap/:id',
      name: 'bdmap',
      component: resolve => require(['@/views/bdmap/page'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/other/enumeratedValues',
      name: 'other',
      component: resolve => require(['@/views/other/enumeratedValues'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/other/vcopy',
      name: 'other',
      component: resolve => require(['@/views/other/vcopy'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/lottieweb',
      name: 'lottieweb',
      component: resolve => require(['@/views/lottieweb/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/lottieweb/:id',
      name: 'lottieweb',
      component: resolve => require(['@/views/lottieweb/page'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/widget',
      name: 'widget',
      component: resolve => require(['@/views/widget/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/widget/:id',
      name: 'widget',
      component: resolve => require(['@/views/widget/page'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/three/tree',
      name: 'tree',
      component: resolve => require(['@/views/three/tree/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/three/grass',
      name: 'grass',
      component: resolve => require(['@/views/three/grass/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/three/waves',
      name: '波浪',
      component: resolve => require(['@/views/three/waves/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/demo/gridView',
      name: '.9背景九宫格',
      component: resolve => require(['@/views/demo/gridView/index'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
  ]
})
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   if (to.meta.requiresAuth) {
//     if (!localStorage.getItem('token')) {
//       next('/login')
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
