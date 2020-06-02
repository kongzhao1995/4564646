import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const dangerAlarm = () => import('../view/danger/dangerAlarm.vue')
const firerAlarm = () => import('../view/fire/fireAlarm.vue')
const feedback = () => import('../view/fire/fire-feedback.vue')
const user = () => import('../view/user/userManagement.vue')
const system = () => import('../view/system/firstpage.vue')
// console.log(dangerAlarm)
const router =  new Router({
  routes: [
    {path: '/', redirect: '/system'},
    {path: '/dangerAlarm', component: dangerAlarm},
    {path: '/firerAlarm', component: firerAlarm},
    {path: '/feedback', component: feedback},
    {path: '/user', component: user},
    {path: '/system', component: system}
  ]
})
export default router