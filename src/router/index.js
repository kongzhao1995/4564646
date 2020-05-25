import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const dangerAlarm = () => import('../view/danger/dangerAlarm.vue')
const firerAlarm = () => import('../view/fire/fireAlarm.vue')
// console.log(dangerAlarm)

export default new Router({
  routes: [
    {path: '/', redirect: '/dangerAlarm'},
    {path: '/dangerAlarm', component: dangerAlarm}
  ]
})
