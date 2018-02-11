import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _f8c166ce = () => import('..\\pages\\writing\\index.vue' /* webpackChunkName: "pages_writing_index" */).then(m => m.default || m)
const _f226c0f6 = () => import('..\\pages\\projects\\index.vue' /* webpackChunkName: "pages_projects_index" */).then(m => m.default || m)
const _628a0264 = () => import('..\\pages\\branding\\index.vue' /* webpackChunkName: "pages_branding_index" */).then(m => m.default || m)
const _4289c008 = () => import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */).then(m => m.default || m)
const _198b31f8 = () => import('..\\pages\\abstracts\\index.vue' /* webpackChunkName: "pages_abstracts_index" */).then(m => m.default || m)
const _eeed443e = () => import('..\\pages\\history\\index.vue' /* webpackChunkName: "pages_history_index" */).then(m => m.default || m)
const _13c2d74a = () => import('..\\pages\\sketchbook\\index.vue' /* webpackChunkName: "pages_sketchbook_index" */).then(m => m.default || m)
const _2c9281a6 = () => import('..\\pages\\projects\\_id.vue' /* webpackChunkName: "pages_projects__id" */).then(m => m.default || m)
const _35888c02 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/writing",
			component: _f8c166ce,
			name: "writing"
		},
		{
			path: "/projects",
			component: _f226c0f6,
			name: "projects"
		},
		{
			path: "/branding",
			component: _628a0264,
			name: "branding"
		},
		{
			path: "/about",
			component: _4289c008,
			name: "about"
		},
		{
			path: "/abstracts",
			component: _198b31f8,
			name: "abstracts"
		},
		{
			path: "/history",
			component: _eeed443e,
			name: "history"
		},
		{
			path: "/sketchbook",
			component: _13c2d74a,
			name: "sketchbook"
		},
		{
			path: "/projects/:id",
			component: _2c9281a6,
			name: "projects-id"
		},
		{
			path: "/",
			component: _35888c02,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
