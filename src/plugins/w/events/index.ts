import { Options } from './types'
import mitt from 'mitt'

export default {
  install: (app, options: Options) => {
    if (options && options.disabled === true) return

    const eventBus = mitt()
    app.config.globalProperties.eventBus = eventBus
  }
}
