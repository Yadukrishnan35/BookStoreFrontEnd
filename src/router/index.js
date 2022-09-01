import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import dashboardBarView from '../views/DashboardBarView.vue'
import LoginView from '../views/LoginView'
import SignupOrLogin from '../views/SignupOrLogin.vue'
import ForgetPasswordView from '../views/ForgetPasswordView'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/dashboard',
    name: 'dashboardUI',
    component:dashboardBarView 
  },
  {
    path: '/login',
    name: 'LoginUI',
    component:LoginView 
  },
  {
    path: '/admin',
    name:'RegisterUI',
    component:SignupOrLogin 
  },
  {
    path: '/forget',
    name: 'forgetUI',
    component: ForgetPasswordView 
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
