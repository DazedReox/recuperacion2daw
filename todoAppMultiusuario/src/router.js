import { createRouter, createWebHistory } from 'vue-router'
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { store } from './store'

import Landing from './pages/Landing.vue'
import Login from './pages/Login.vue'
import Registro from './pages/Registro.vue'
import Recordatorios from './pages/Recordatorios.vue'
import Admin from './pages/Admin.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/login', component: Login },
  { path: '/registro', component: Registro },
  { path: '/recordatorios', component: Recordatorios, meta: { requiresAuth: true }},
  { path: '/admin', component: Admin, meta: { requiresAuth: true, adminOnly: true }}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// espera a firebase 
let authChecked = false

router.beforeEach((to, from, next) => {
  if (!authChecked) {
    onAuthStateChanged(auth, (user) => {
      store.setUser(user)
      authChecked = true
      next(to.fullPath)
    })
    return
  }

  if (to.meta.requiresAuth && !store.user) {
    next('/login')
    return
  }

  if (to.meta.adminOnly && !store.isAdmin) {
    next('/recordatorios')
    return
  }

  next()
})

export default router
