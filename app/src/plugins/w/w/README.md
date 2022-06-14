# Required third-party plugins
`$ npm i vuex@4 && npm i axios && npm i mitt@2`

# Required internal plugins
- w/auth
- w/axios
- w/events
- w/ionic
- w/moxios
- w/route

# Import in `main.ts` after `store`
```javascript
import w from '@/plugins/w/w'

const app = createApp(App)
	.use(store)
	.use(w)
```