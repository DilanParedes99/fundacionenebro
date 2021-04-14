import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signfacebook',
    name: 'SignFacebook',
    component: () => import (/* webpackChunkName: "about" */ '../views/SignFacebook.vue')
  },
  {
    path: '/signtwitter',
    name: 'SignTwitter',
    component: () => import (/* webpackChunkName: "about" */ '../views/SignTwitter.vue')
  },
  {
    path: '/createaccount',
    name: 'CreateAccount',
    component: () => import (/* webpackChunkName: "about" */ '../views/CreateAccount.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import (/* webpackChunkName: "about" */ '../views/SignEmail.vue')
  },

  {
    path: '/login/cliente',
    name: 'Principal',
    component: () => import (/* webpackChunkName: "about" */ '../views/principal.vue')
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: () => import (/* webpackChunkName: "about" */ '../views/Usuario.vue')
  },
  {
    path: '/medidores',
    name: 'Medidores',
    component: () => import (/* webpackChunkName: "about" */ '../views/Medidores.vue')
  },
  {
    path: '/agregarmedidor',
    name: 'Agregarmedidor',
    component: () => import (/* webpackChunkName: "about" */ '../views/agregar.vue')
  },
  {
    path: '/consumo',
    name: 'Consumo',
    component: () => import (/* webpackChunkName: "about" */ '../views/consumo.vue')
  },
  {
    path: '/editar',
    name: 'Editar',
    component: () => import (/* webpackChunkName: "about" */ '../views/editar.vue')
  },
  {
    path: '/configuracion',
    name: 'Configuracion',
    component: () => import (/* webpackChunkName: "about" */ '../views/ajustes.vue')
  },
  {
    path: '/notificaciones',
    name: 'Notificaciones',
    component: () => import (/* webpackChunkName: "about" */ '../views/notificacion.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
