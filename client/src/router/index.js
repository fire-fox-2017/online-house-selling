import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Gmap from '../components/Gmap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/map',
      component: Gmap
    }
  ]
})
