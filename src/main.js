import { createApp } from 'vue'
import App from './App.vue'
import router from './router'




import './assets/fonts/sf-pro-display-fonts/fonts.scss'
import './assets/sass/parts/_reset.scss'
import './assets/sass/parts/hamburgers.css'
import './assets/sass/style.scss'

createApp(App).use(router).mount('#app')

