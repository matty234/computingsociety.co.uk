import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/homepage/Homepage'
import About from '@/components/aboutpage/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
