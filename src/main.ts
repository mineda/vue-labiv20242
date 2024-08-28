import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'

axios.defaults.baseURL = 'https://8080-mineda-springbootlab420-0au4mp3yyrw.ws-us115.gitpod.io/'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
