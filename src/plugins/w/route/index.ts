import loginGuardIsLoggedIn from '@/plugins/w/auth/loginGuardIfMetaSet'

export default(title: string, path: string, component, requiresAuth: boolean = false) => {
	return {
		path,
		name: title,
		meta: { title, requiresAuth: requiresAuth },
		component: component,
		beforeEnter: loginGuardIsLoggedIn
	}
}