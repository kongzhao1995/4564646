import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const dangerAlarm = () => import('../view/danger/dangerAlarm.vue')
const firerAlarm = () => import('../view/fire/fireAlarm.vue')
const feedback = () => import('../view/fire/fire-feedback.vue')
const user = () => import('../view/user/userManagement.vue')
const system = () => import('../view/system/firstpage.vue')
const login = () => import('../view/login/index.vue')
const home = () => import('../view/home/index.vue')
// console.log(dangerAlarm)
const router =  new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: login},
    {path: '/home', component: home,
      children: [
        {path: '/dangerAlarm', component: dangerAlarm},
        {path: '/firerAlarm', component: firerAlarm},
        {path: '/feedback', component: feedback},
        {path: '/user', component: user},
        {path: '/system', component: system},
      ]
    }
  ]
})
export default router