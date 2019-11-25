import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _27b67af8 = () => interopDefault(import('../pages/EN/index.vue' /* webpackChunkName: "pages/EN/index" */))
const _6de16dc2 = () => interopDefault(import('../pages/KR/index.vue' /* webpackChunkName: "pages/KR/index" */))
const _0b62906a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/EN",
      component: _27b67af8,
      name: "EN"
    }, {
      path: "/KR",
      component: _6de16dc2,
      name: "KR"
    }, {
      path: "/",
      component: _0b62906a,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
