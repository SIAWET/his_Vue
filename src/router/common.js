const Page404 = () => import('../views/common/Page404');
const Page500 = () => import('../views/common/Page500');
const Login = () => import('../views/common/Login');
const Register = () => import('../views/common/Register');


export default {
  path: '/',
    redirect: '/login',
  name: 'Pages',
  component: {
  render (c) { return c('router-view') }
},
  children: [
    {
      path: '404',
      name: 'Page404',
      component: Page404
    },
    {
      path: '500',
      name: 'Page500',
      component: Page500
    },
    {
      path: 'login',
      name: 'Login',
      component: Login
    },
    {
      path: 'register',
      name: 'Register',
      component: Register
    }
  ]
}
