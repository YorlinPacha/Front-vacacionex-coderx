import { createRouter, createWebHistory } from 'vue-router'
import empleadoView from '../views/empleadoView.vue'
import encargadoView from '../views/encargadoView.vue'
import superAdminView from '../views/superAdminView.vue'
import loginVue from '../views/loginVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/loginVue.vue')
    },
    {
      path: '/empleado',
      name: 'empleado',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/empleadoView.vue')
    },
    {
      path: '/encargado',
      name: 'encargado',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/encargadoView.vue')
    },
    {
      path: '/superAdmin',
      name: 'superAdmin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/superAdminView.vue')
    }
    
  ]
})

export default router
