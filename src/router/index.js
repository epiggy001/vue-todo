import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('../containers/AboutContainer.vue'))
        })
      }
    },
    {
      path: '/',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('../containers/TodoContainer.vue'))
        })
      }
    },
    {
      path: '/todo/:id',
      component: resolve => {
        require.ensure([], () => {
          resolve(require('../containers/TodoDetailContainer.vue'))
        })
      },
      props: true
    }
  ]
})
