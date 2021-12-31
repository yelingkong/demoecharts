import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  base: '/',
  routes: [
    {
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
