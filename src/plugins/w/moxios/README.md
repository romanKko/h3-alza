# Required internal plugins
- w/axios

# Import in `main.ts`
```javascript
import mocks from '@/plugins/w/mocks'

const app = createApp(App)
    .use(axios)
	.use(mocks, {
	    routes: {
	        'GET comments/project/(id)': true,
	        // Other routes
	    }
	})
```
# Usage
1. Create `mock` folder in `public`
2. Create mocks in `mock` folder. For eaxmple when we want to mock route `comments/project/1` we will create `comments` folder in `mock` folder, then `project` folder and then we will add `(pid).GET.json`. (Final path will be `/public/mock/comments/project/(id).GET.json`).
- NOTE: `(id)` will match any project id
- NOTE: You can change mocks path by adding `VUE_APP_PLATFORM=` variable to .env. Path will change to `/public/mock/${VUE_APP_PLATFORM}/...`
3. After calling `comments/project/1` we will get response from `/public/mock/comments/project/(id).GET.json` file

# Enable / Disable from local storage
- we can enable/disable moxios by typing `localStorage.setItem('isMoxios', 'true')` or  `localStorage.setItem('isMoxios', 'false')`
