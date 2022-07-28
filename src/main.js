import { createApp } from 'vue'
import App from './App.vue'
import router from './router'




import './assets/fonts/sf-pro-display-fonts/fonts.scss'
import './assets/scss/parts/_reset.scss'
import './assets/scss/parts/hamburgers.css'
import './assets/scss/style.scss'

createApp(App).use(router).mount('#app')

