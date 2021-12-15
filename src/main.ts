import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import { createPinia } from "pinia"
import routes from "virtual:generated-pages"
import App from "./App.vue"
import PrimeVue from "primevue/config"

import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import "./theme.css"
import "./index.css"

const app = createApp(App)
  .use(
    createRouter({
      history: createWebHistory(),
      routes,
    })
  )
  .use(createPinia())
  .use(PrimeVue)

// Register global directive "v-focus" for focusing elements
app.directive("focus", {
  mounted(el) {
    el.focus()
  },
})

app.mount("#app")
