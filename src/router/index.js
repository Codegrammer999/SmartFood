import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/login.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/views/Menu.vue')
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/Service.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/Cart.vue'),
      meta: { auth: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue'),
      meta: { auth: true }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile.vue'),
      meta: { auth: true }
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('@/views/Order.vue'),
      meta: { auth: true }
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  await authStore.getUser()

  if (to.meta.auth && !authStore.user) {
    next({ name: 'login'})
  }else {
    next()
  }
})

export default router
