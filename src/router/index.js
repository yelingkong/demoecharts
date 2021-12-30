import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/views/home'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/bar/bar1',
      name: 'bar',
      component: resolve => require(['@/views/bar/bar1'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/map/map1',
      name: 'bar',
      component: resolve => require(['@/views/map/map1'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/map/map2',
      name: 'bar',
      component: resolve => require(['@/views/map/map2'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/map/map3',
      name: 'bar',
      component: resolve => require(['@/views/map/map3'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/map',
      name: 'bar',
      component: resolve => require(['@/views/map'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/line',
      name: 'line',
      component: resolve => require(['@/views/line'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/line/line1',
      name: 'line',
      component: resolve => require(['@/views/line/line1'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/bar/bar2',
      name: 'line',
      component: resolve => require(['@/views/bar/bar2'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/bar/bar3',
      name: 'line',
      component: resolve => require(['@/views/bar/bar3'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/zhu',
      name: 'zhu',
      component: resolve => require(['@/views/zhu'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/zhu/zhu1',
      name: 'zhu1',
      component: resolve => require(['@/views/zhu/zhu1'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/zhu/zhu2',
      name: 'zhu2',
      component: resolve => require(['@/views/zhu/zhu2'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/zhu/zhu3',
      name: 'zhu3',
      component: resolve => require(['@/views/zhu/zhu3'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    {
      path: '/zhu/zhu4',
      name: 'zhu4',
      component: resolve => require(['@/views/zhu/zhu4'], resolve),
      meta: {
        requiresAuth: true,
        showPage: true
      }
    },
    // {
    //   path: '/map',
    //   name: 'map',
    //   component: resolve => require(['@/views/map'], resolve),
    //   meta: {
    //     requiresAuth: true,
    //     showPage: true
    //   }
    // },
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
