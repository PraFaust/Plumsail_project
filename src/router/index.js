import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/components/StartPage'
import AutorizationForm from '@/components/AutorizationForm'
import ContactPage from '@/components/ContactPage'
import NotFoundPage from '@/components/NotFoundPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/autorization',
      name: 'AutorizationForm',
      component: AutorizationForm
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    },
    {
      path: '*',
      name: 'NotFoundPage',
      component: NotFoundPage
    }
  ]
})
