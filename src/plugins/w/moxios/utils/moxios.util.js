export const encodeGetParams = p =>
	Object.entries(p).map(kv => kv.map(encodeURIComponent).join('=')).join('&')

export function strToRegex(s) {
	let re = s
	re = re.replace(/\//g, '\\/')
	re = re.replace(/\./g, '\\.')
	re = re.replace(/\([^)]+\)/g, '[^/]+')
	return re
}
