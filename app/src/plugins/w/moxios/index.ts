import { App } 		from 'vue'
import { Moxios } 	from './models/moxios.js'
import { Options } 	from './types/index.js'

export default {
	install: (app: App, options: Options) => {
		const moxios = new Moxios()

		if (!options || !options.routes || !Object.values(options.routes).length || options.disabled === true) return
		
		moxios.mock(options.routes)
	}
}