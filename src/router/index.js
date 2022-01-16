import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/Home/index.vue')
const Catagory = () => import('views/Catagory/index.vue')
const cart = () => import('views/Cart/index.vue')
const Profile = () => import('views/Profile/index.vue')

const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/catagory',
      component: Catagory
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})

export default router
