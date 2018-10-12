import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import LeaseList from '@/views/LeaseList'
import Search from '@/views/Search'
import Details from '@/views/Details'

Vue.use(Router)

export default new Router({
  routes:
    [{
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/list/:type',
      name: 'LeaseList',
      component: LeaseList
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }, {
      path: '/details/:type/:id',
      name: 'Details',
      component: Details
    }]
})


