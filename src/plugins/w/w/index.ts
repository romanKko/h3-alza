import { App } 		from 'vue';
import { Options } 	from './types'

import axios	 	from '@/plugins/w/axios'
import moxios	 	from '@/plugins/w/moxios'
import events	 	from '@/plugins/w/events'
import ionic	 	from '@/plugins/w/ionic'
import auth			from '@/plugins/w/auth'

export default {
	install: (app: App, options: Options = {}) => {
		events.install(app, options.events)
		axios.install(app, options.axios)
		moxios.install(app, options.moxios)
		ionic.install(app, options.ionic)
		auth.install(app, options.auth)	
	}
}