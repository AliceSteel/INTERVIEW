import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('../views/HomeView.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/AboutView.vue')
	},
	//dynamic routing:__________________________________________________
	{
		path: '/projects',
		name: 'Projects',
		component: () => import('../views/projects/ProjectsPage.vue')
	},
	{
		path: '/projects/:id',
		name: 'ProjectN',
		component: () => import('../views/projects/ProjectN.vue')
	},
	//___________________________________________________________________
	{
		path: '/clients',
		name: 'ClientsPage',
		component: () => import('../views/ClientsPage.vue')
	},
	{
		path: '/contact',
		name: 'ContactPage',
		component: () => import('../views/ContactPage.vue')
	},
	{
		path: '/:catchAll(.*)',
		name: '404Page',
		component: () => import('../views/404Page.vue')
	},
	//redirect:
	{
		path: '/projects/05',
		redirect: '/projects'

	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes ,
	scrollBehavior() {
		return { top: 0 }
	},
	base:'/INTERVIEW/'
})

export default router
