import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/components/StartPage'
import ClientForm from '@/components/ClientForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/client',
      name: 'ClientForm',
      component: ClientForm
    }
  ]
})
