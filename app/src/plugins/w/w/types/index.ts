import { Options as AxiosOptions } 	from '@/plugins/w/axios/types'
import { Options as MoxiosOptions } from '@/plugins/w/moxios/types'
import { Options as EventsOptions } from '@/plugins/w/events/types'
import { Options as AuthOptions } 	from '@/plugins/w/auth/types'
import { Options as IonicOptions } 	from '@/plugins/w/ionic/types'

export interface Options {
	axios?: AxiosOptions,
	moxios?: MoxiosOptions,
	events?: EventsOptions,
	auth?: AuthOptions,
	ionic?: IonicOptions
}