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
//????????????????????????push??????
const originalPush = Router.prototype.push
//????????????????????????push??????
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
