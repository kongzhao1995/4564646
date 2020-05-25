import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const dangerAlarm = () => import('../view/danger/dangerAlarm.vue')
const firerAlarm = () => import('../view/fire/fireAlarm.vue')
const user = () => import('../view/user/userManagement.vue')
const system = () => import('../view/system/firstpage.vue')
// console.log(dangerAlarm)

export default new Router({
  routes: [
    {path: '/', redirect: '/dangerAlarm'},
    {path: '/dangerAlarm', component: dangerAlarm},
    {path: '/firerAlarm', component: firerAlarm},
    {path: '/user', component: user},
    {path: '/system', component: system}
  ]
})
