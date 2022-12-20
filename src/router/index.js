import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/layoutView'),
    children: [
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my/myView')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/cart/cartView')
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/homeView')
      }
    ]
  },
  {
    path: '/details',
    component: () => import('@/views/details/detailsView')
  }
]

const router = new VueRouter({
  routes
})

export default router
