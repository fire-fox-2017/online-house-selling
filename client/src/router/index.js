import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import AddHouse from '@/components/AddHouse'
import EditHouse from '@/components/EditHouse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/add-house/',
      name: 'AddHouse',
      component: AddHouse
    },
    {
      path: '/edit-house/:houseId',
      name: 'EditHouse',
      component: EditHouse
    }
  ]
})
