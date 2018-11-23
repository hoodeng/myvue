import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BlogAdd from '@/page/blog/add'
import BlogList from '@/page/blog/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/blog',
      name: 'add',
      auth: true,
      component: BlogAdd
    },
    {
      path: '/blog',
      name: 'list',
      auth: true,
      component: BlogList
    }
  ]
})
