import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'





import { faArrowAltCircleLeft, faArrowAltCircleRight, faCircle,faMedal } from '@fortawesome/free-solid-svg-icons'




library.add(faCircle, faMedal ,faArrowAltCircleLeft, faArrowAltCircleRight)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
