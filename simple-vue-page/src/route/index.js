
import vueRouter from 'vue-router'

const Home = r => require.ensure([], () => r(require('page/home.vue')))

export default new vueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		}
	]
})