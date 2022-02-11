import { App } 		from 'vue'
import { Options } 	from './types'
import axios 		from './models/axios'

export default {
	install: (app: App, options: Options) => {
		if (options && options.disabled === true) return

		app.config.globalProperties.$axios = axios
	}
}