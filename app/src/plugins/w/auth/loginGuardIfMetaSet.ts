import store from '@/store'

export default async function(to, from, next) {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (!store.getters['auth/isLoggedIn']) {
			return next({ name: 'login' })
		}
	}
    
	return next()
}