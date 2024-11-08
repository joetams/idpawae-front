import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../components/Homepage.vue';
import Product from '../components/Product.vue';
import Store from '../components/Store.vue';


const routes = [
	{
		path: '/',
		name: 'Default',
		meta: {
			tabName: 'Home',
			needAuth: false,
		},
		component: Homepage,
	},
	{
		path: '/home',
		name: 'Home',
		meta: {
			tabName: 'Home',
			needAuth: false,
		},
		component: Homepage,
	},
	{
		path: '/store',
		name: 'Store',
		meta: {
			tabName: 'Store',
			needAuth: false,
		},
		component: Store,
	},
	{
		path: '/product',
		name: 'Product',
		meta: {
			tabName: 'Products',
			needAuth: false,
		},
		component: Product,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})

// router.beforeEach((to, from, next) => {
//   const systemStore = useStore();
//   let isLoggedIn = systemStore.user.token;
//   let needAuth = to.meta.needAuth;
//   if (!needAuth && !isLoggedIn) {
//       next();
//   } else if (needAuth && !isLoggedIn) {
//       next({ name: 'Login'});
//   } else if (needAuth && isLoggedIn) {
//       next();
//   } else if (!needAuth && isLoggedIn) {
//       next({ name: 'Dashboard'});
//   }
// })

export default router
