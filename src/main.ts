import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import routes from "virtual:generated-pages"
import App from "./App.vue"
import PrimeVue from "primevue/config"
import "./index.css"

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).use(PrimeVue).mount("#app")
