import axios from '@/plugins/w/axios/models/axios'
import './refreshExpired'

export default {
	namespaced: true,
	state: {
		status: '',
		_token: localStorage.getItem('wzo_vue_user_token') || '',
		user: JSON.parse(localStorage.getItem('wzo_vue_user_user') || '{}'),
	},
	mutations: {
		auth_request(state: any) {
			state.status = 'loading'
		},
		auth_success(state: any, data: any) {
			state.status = 'success'
			if (data.token) {
				state._token = data.token
				localStorage.setItem('wzo_vue_user_token', data.token)
			}

			if (data.user) {
				state.user = data.user
				localStorage.setItem('wzo_vue_user_user', JSON.stringify(data.user))
			}
		},
		auth_error(state: any) {
			state.status = 'error'
			state._token = ''
			localStorage.removeItem('wzo_vue_user_token')
			localStorage.removeItem('wzo_vue_user_user')
		},
		logout(state: any) {
			state.status = ''
			state._token = ''
			state.user = null
			localStorage.removeItem('wzo_vue_user_token')
			localStorage.removeItem('wzo_vue_user_user')
		}
	},
	actions: {
		login({commit}: {commit: any}, credentials: any) {
			return new Promise((resolve, reject) => {
				commit('auth_request')

				axios.post_data('v1/auth/login', credentials)
					.then((response: any) => {
						const token = response.token
						const user = response.user

						commit('auth_success', {
							token: token,
							user: user
						})

						resolve(response)
					}).catch(error => {
						commit('auth_error')
						reject(error)
					})
			})
		},
		signup({commit }: {commit: any}, credentials: any) {
			return new Promise((resolve, reject) => {
				commit('auth_request')

				axios.post_data('v1/auth/signup', credentials)
					.then((response: any) => {
						const token = response.token
						const user = response.user

						commit('auth_success', {
							token: token,
							user: user
						})

						resolve(response)
					}).catch(error => {
						commit('auth_error')
						reject(error)
					})
			})
		},
		logout({commit}: {commit: any}) {
			return new Promise((resolve) => {
				axios.post_auth_data('v1/auth/invalidate')
					.finally(() => {
						commit('logout')
						resolve(null)
					})
			})
		},
		forgotPassword({commit}: {commit: any}, credentials: any) {
			return new Promise((resolve, reject) => {
				axios.post_auth_data('v1/auth/forgot', credentials)
					.then(response => resolve(response))
					.catch(error => reject(error))
			})
		},
		resetPassword({commit}: {commit: any}, credentials: any) {
			return new Promise((resolve, reject) => {
				axios.post_auth_data('v1/auth/reset', credentials)
					.then(response => resolve(response))
					.catch(error => reject(error))
			})
		},
		async refreshToken({commit}: {commit: any}) {
			try {
				const response: any = await axios.post_auth_data('v1/auth/refresh')

				const token = response.token
				const user = response.user

				commit('auth_success', {
					token: token,
					user: user
				})

				return token
			} catch (error) {
				commit('auth_error')
				console.error(error)
			}
		},
		async userInfo({commit}: {commit: any}) {
			return new Promise((resolve, reject) => {
				axios.get_auth_data('v1/auth/info')
					.then((response: any) => {
						const user = response.user

						commit('auth_success', {
							user: user
						})

						resolve(user)
					}).catch(error => {
						reject(error)
					})
			})
		},
		updateUserInfo({commit}: {commit: any}, data: any) {
			return new Promise((resolve, reject) => {
				axios.post_auth_data('v1/auth/info', data)
					.then((response: any) => {
						const user = response.user

						commit('auth_success', {
							user: user
						})

						resolve(user)
					}).catch(error => {
						reject(error)
					})
			})
		},
	},
	getters: {
		isLoggedIn: (state: any) =>  {
			return !!state._token
		},
		authStatus: (state: any) => {
			return state.status
		},
		user: (state: any) => {
			return state.user
		},
		token: (state: any) => {
			return state._token
            
		}
	}
}