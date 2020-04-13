import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index.vue'
import Success from '../views/success.vue'
import About from '../views/about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
		redirect:{"path":"/home"}
  },
	{
		path:"/home",
		name: 'Home',
		component: Home,
		redirect:{"path":"/home/index"},
		children:[
			{
			  path: '/home/index',
			  name: 'Index',
			  component: Index
			},
			{
			  path: '/home/success',
			  name: 'Success',
			  component: Success
			},
			{
				path: '/home/about',
				name: 'About',
				component: About
			}
		]
	}
	// {
	// 		path: '/serve',
	// 		name: 'Serve',
	// 		component: Serve
	// }
	
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
