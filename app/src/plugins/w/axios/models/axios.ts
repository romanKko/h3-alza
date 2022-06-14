import axios from 'axios'
import store from '@/store'

axios.defaults.baseURL = process.env.VUE_APP_WAXIOS_URL

export default {
	async get(url: string, config?: any) {    
		return axios.get(url, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async get_auth(url: string, config?: any) {
		config = this._config(config)

		return axios.get(url, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},
    
	async get_data(url: string, config?: any) {    
		return axios.get(url, config)
			.then(response => response.data.data)
			.catch(error => Promise.reject(error.response))
	},

	async get_auth_data(url: string, config?: any) {
		config = this._config(config)

		return axios.get(url, config)
			.then(response => Promise.resolve(response.data.data))
			.catch(error => Promise.reject(error.response))
	},

	async post(url: string, params = null, config?: any) {

		return axios.post(url, params, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async post_auth(url: string, params = null, config?: any) {
		config = this._config(config)

		return axios.post(url, params, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async post_data(url: string, params = null, config?: any) {

		return axios.post(url, params, config)
			.then(response => response.data.data)
			.catch(error => Promise.reject(error.response))
	},

	async post_auth_data(url: string, params = null, config?: any) {
		config = this._config(config)

		return axios.post(url, params, config)
			.then(response => response.data.data)
			.catch(error => Promise.reject(error.response))
	},

	async delete(url: string, config?: any) {
		return axios.delete(url, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async delete_auth(url: string, config?: any) {
		config = this._config(config)

		return axios.delete(url, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async delete_data(url: string, config?: any) {
		return axios.delete(url, config)
			.then(response => response.data.data)
			.catch(error => Promise.reject(error.response))
	},

	async delete_auth_data(url: string, config?: any) {
		config = this._config(config)

		return axios.delete(url, config)
			.then(response => response.data.data)
			.catch(error => Promise.reject(error.response))
	},

	async patch(url: string, params = null, config?: any) {
		return axios.patch(url, params, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async patch_auth(url: string, params = null, config?: any) {
		config = this._config(config)

		return axios.patch(url, params, config)
			.then(response => response.data)
			.catch(error => Promise.reject(error))
	},

	async patch_data(url: string, params = null, config?: any) {
		return axios.patch(url, params, config)
			.then(response => response.data.data)
			.catch(error => Promise.reject(error.response))
	},

	async patch_auth_data(url: string, params = null, config?: any) {
		config = this._config(config)

		return axios.patch(url, params, config)
			.then(response => response.data.data)
			.catch(error => Promise.reject(error.response))
	},

	_config(config: any) {
		if (config) console.error('NOT IMPLEMENTED')

		return {
			headers: {
				Authorization: `Bearer ${store.getters['auth/token']}`
			}
		}
	}
}