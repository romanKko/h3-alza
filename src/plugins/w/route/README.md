# Required internal plugins
- w/auth
# Import in `main.ts`
```javascript
import wRoute from '@wezeo/route'

const app = createApp(App)
	.use(wRoute)
```
# Usage
### use every route in `router.ts` like this 
```javascript 
wRoute(string:name,  	string:path, 	() => import(string:component),  boolen:requiresAuth),
```
