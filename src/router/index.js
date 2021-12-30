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
      path: '/map',
      name: 'bar',
      component: resolve => require(['@/views/map'], resolve),
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
