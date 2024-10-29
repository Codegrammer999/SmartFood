import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: { guest: true }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/register.vue'),
      meta: { guest: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/login.vue'),
      meta: { guest: true }
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/views/Menu.vue')
    },
    {
      path: '/menu/:id',
      name: 'menuDetails',
      component: () => import('@/views/MenuDetails.vue')
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('@/views/About.vue'),
      meta: { guest: true }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/Service.vue'),
      meta: { guest: true }
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
      path: '/edit-account-details',
      name: 'settings',
      component: () => import('@/views/Settings.vue'),
      meta: { auth: true }
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('@/views/Order.vue'),
      meta: { auth: true }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('@/views/Checkout.vue'),
      meta: { auth: true }
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  if (authStore.isFetchingUser) {
    await authStore.getUser()
  }

  if (to.meta.auth && !authStore.user) {
    next({ name: 'login'})
  }else if(to.meta.guest && authStore.user){
    next({ name: 'dashboard'})
  }else {
    next()
  }
})

export default router
