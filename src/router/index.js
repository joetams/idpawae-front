import { createRouter, createWebHistory } from 'vue-router'


const routes = [
	// {
	// 	path: '/',
	// 	name: 'Default',
	// 	meta: {
	// 		tabName: 'Login',
	// 		needAuth: false,
	// 	},
	// 	component: Login,
	// },
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
