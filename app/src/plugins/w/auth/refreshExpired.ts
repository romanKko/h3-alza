import axios from 'axios'
import store from '@/store'

let isRefreshing = false
let refreshHook = Promise.resolve(null)

async function _unauthorised(error) {
	if (!error.response || error.response.status != 401) {
		return Promise.reject(error)
	}

	if (!isRefreshing) {
		refreshHook = new Promise((resolve, reject) => {
			store.dispatch('auth/refreshToken')
				.then((token) => resolve(token))
				.catch((error) => reject(error))
				.finally(() => isRefreshing = false)
		})

		isRefreshing = true
	}

	try {
		const token = await refreshHook
		error.config.headers = {
			'Authorization': `bearer ${token}`
		}

		return Promise.resolve(await axios.request(error.config))
	} catch(error) {
		console.log(error)
	}
}

axios.interceptors.response.use(
	(response) => response,
	(err) => _unauthorised(err)
)
