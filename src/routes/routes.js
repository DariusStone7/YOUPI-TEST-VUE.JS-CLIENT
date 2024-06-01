import AppLayout from '@/layouts/appLayout.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Tasks from '@/views/Tasks.vue'

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register,
    },
    {
      path: '/tasks',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'tasks',
          component: Tasks
        },
      ]
    },
    
    
  ]

export default routes;