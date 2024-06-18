import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import FormLogin from '../views/FormLogin.vue'
import FormCadastro from '../views/FormCadastro.vue'
import FormHome from '../views/FormHome.vue'
import FormPlanos from '../views/FormPlanos.vue'
import FormInscricao from '../views/FormInscricao.vue'
import FormCadastroExame from '../views/FormCadastroExame.vue'
import FormExame from '../views/FormExame.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: FormHome
  },
  {
    path: '/login',
    name: 'login',
    component: FormLogin
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: FormCadastro
  },
  {
    path: '/planos',
    name: 'planos',
    component: FormPlanos,
  },
  {
    path: '/inscricao',
    name: 'inscricao',
    component: FormInscricao
  },
  {
    path: '/cadastro-exame',
    name: 'cadastroExame',
    component: FormCadastroExame
  },
  {
    path: '/exame',
    name: 'exame',
    component: FormExame
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
