# Required third-party plugins
`$ npm i axios`

# Required internal plugins
- w/auth

# Import in `main.ts`  after importing `w/auth`
```javascript
import axios from '@/plugins/w/axios'

const app = createApp(App)
    .use(auth)
	.use(axios)
```
# Usage
1. Crete ``.env`` file in `app/` directory
2. Crete variable `VUE_APP_WAXIOS_URL=(defaultBaseUrl)`
3. Use as dafault axios with custom functions (this plugin will add global **this.$axios** variable)