import Vue from 'vue'
import Router from 'vue-router'
import First from '@/views/Homepage'
import Article from '@/views/Article'
import Container from '@/container/Container'
import Css from '@/views/Css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First',
      redirect: '/first',
      component: Container,
      children: [
        {
          path: 'first',
          name: '首页',
          component: First,
          meta: {
            title: '首页',
            icon: 'el-icon-date'
          }
        },
        {
          path: 'javascript',
          name: 'js学习',
          component: Article,
          meta: {
            title: 'js',
            icon: 'el-icon-edit-outline'
          }
        },
        {
          path: 'css',
          name: 'css学习',
          component: Css,
          meta: {
            title: 'CSS',
            icon: 'el-icon-orange'
          }
        }
      ]
    }
  ]
})
