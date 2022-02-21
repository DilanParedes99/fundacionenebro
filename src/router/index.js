import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'catchAll',
    component: Home,
    meta: { requiresAuth: false},
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: false},
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { requiresAuth: false},
  },
  {
    path: '/signfacebook',
    name: 'SignFacebook',
    component: () => import (/* webpackChunkName: "about" */ '../views/SignFacebook.vue'),
    meta: { requiresAuth: false},
  },
  {
    path: '/signtwitter',
    name: 'SignTwitter',
    component: () => import (/* webpackChunkName: "about" */ '../views/SignTwitter.vue'),
    meta: { requiresAuth: false},
  },
  {
    path: '/createaccount',
    name: 'CreateAccount',
    component: () => import (/* webpackChunkName: "about" */ '../views/CreateAccount.vue'),
    meta: { requiresAuth: false},
  },
  {
    path: '/login',
    name: 'login',
    component: () => import (/* webpackChunkName: "about" */ '../views/SignEmail.vue'),
    meta: { requiresAuth: false},
  },

  {
    path: '/login/cliente',
    name: 'Principal',
    component: () => import (/* webpackChunkName: "about" */ '../views/principal.vue'),
    meta: { requiresAuth: false},
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: () => import (/* webpackChunkName: "about" */ '../views/Usuario.vue'),
    meta: { requiresAuth: true},
  },
  {
    path: '/medidores',
    name: 'Medidores',
    component: () => import (/* webpackChunkName: "about" */ '../views/Medidores.vue'),
    meta: { requiresAuth: true},
  },
  {
    path: '/agregarmedidor',
    name: 'Agregarmedidor',
    component: () => import (/* webpackChunkName: "about" */ '../views/agregar.vue'),
    meta: { requiresAuth: true},
  },
  {
    path: '/consumo/:id',
    name: 'Consumo',
    component: () => import (/* webpackChunkName: "about" */ '../views/consumo.vue'),
    meta: { requiresAuth: true},
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import (/* webpackChunkName: "about" */ '../views/editar.vue'),
    meta: { requiresAuth: true},
  },
  {
    path: '/configuracion',
    name: 'Configuracion',
    component: () => import (/* webpackChunkName: "about" */ '../views/ajustes.vue'),
    meta: { requiresAuth: true},
  },
  {
    path: '/notificaciones',
    name: 'Notificaciones',
    component: () => import (/* webpackChunkName: "about" */ '../views/notificacion.vue'),
    meta: { requiresAuth: true},
  },
]






const router = new VueRouter({
  mode: 'history',
  base: '/monitorweb/',
  routes
})

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('token');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const pathlogin="/";
  //let url =to.path.toLowerCase();
  if(to.path.toLowerCase() === pathlogin.toLowerCase() && user !== null){
    next('/login/cliente');
  }else if(requiresAuth===true && user === null ){
    next(pathlogin);
  }else if( requiresAuth===false && user === null){
    next()
  }else{
    next();
  }
});

export default router
