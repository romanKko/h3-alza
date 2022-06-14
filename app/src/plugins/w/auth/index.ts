import { App } 		from 'vue'
import { Options } 	from './types'
import auth 		from './auth.store'

export default {
	install: (app: App, options: Options) => {
		if (options && options.disabled == true) return

		if (!app.config.globalProperties.$store)
			return console.warn('[w/auth] Could not initialize. App does not have vuex store added.')

		app.config.globalProperties.$store.registerModule('auth', auth)
	}
}