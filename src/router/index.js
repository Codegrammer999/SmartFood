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
      component: () => import('@/views/auth/register.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('@/views/auth/register.vue')
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('@/views/auth/register.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/auth/register.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/auth/register.vue')
    },
  ]
})

export default router
