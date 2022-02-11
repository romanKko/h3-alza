import axios from 'axios'
import { encodeGetParams, strToRegex } from '../utils/moxios.util.js'

export class Moxios {
	// _mocks = {}

	constructor() {
		axios.interceptors.request.use(this._redirectRequestToMock.bind(this))
		this._mocks = {}
	}

	mock(append) {
		for (const k in append) {
			let m = append[k]
			if (m === false) continue
			
			m = {}
			
			m.name = k
			m.url = k.split(' ')[1]

			if (!m.reUrl)

				m.reUrl = strToRegex( m.url )

			if (!m.matchMethod)
				m.matchMethod = k.split(' ')[0].toLowerCase()

			this._mocks[k] = m
		}
	}


	_redirectRequestToMock(config) {
		if (localStorage['isMoxios'] == 'false') {
			return config
		}

		const url = config.url.replace(/https?:\/\/[^/?]+/, '')

		let mocked
		for (const k in this._mocks) {
			const m = this._mocks[k]

			if (config.method == m.matchMethod && url.match(m.reUrl)) {
				mocked = m
				break
			}
		}

		if (mocked) {
			if (!mocked.fname)
				process.env.VUE_APP_PLATFORM
					? mocked.fname = `/mock/${process.env.VUE_APP_PLATFORM}/${mocked.url}.${config.method.toUpperCase()}.json`
					: mocked.fname = `/mock/${mocked.url}.${config.method.toUpperCase()}.json`

			const c = {
				method: 'get',
				url: window.location.origin + mocked.fname+'?___MOCK___&'+encodeGetParams(config.data||{}),
			}

			console.log(c)

			config = {...config, ...c}
		}

		return config
	}

}

