# Required third-party plugins
`$ npm i vuex@4`
# Required internal plugins
- w/axios
# Import in `main/ts` after importing `store.ts`
```javascript
import auth from '@/plugins/w/auth'

const app = createApp(App)
	.use(store)
	.use(auth)
```