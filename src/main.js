import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueApexCharts from "vue3-apexcharts";

// Tailwind import
import './assets/css/tailwind.css'

const app = createApp(App)
app.use(VueApexCharts)
app.use(router)
app.use(VueAxios, axios)
.mount('#app')
