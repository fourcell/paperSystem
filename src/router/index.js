import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Log from './log'
import Manage from './manage'

const routes = [
    ...Log,
    ...Manage,
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router