import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import routes from "virtual:generated-pages"
import App from "./App.vue"
import PrimeVue from "primevue/config"

import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import "./theme.css"
import "./index.css"
import PlaybookRepository from "./domain/PlaybookRepository"
import { makeContractStore, makePlaybookRepository } from "./provide"
import Contract from "./domain/Contract"

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App).use(router).use(PrimeVue)

// Register global directive "v-focus" for focusing elements
app.directive("focus", {
  mounted(el) {
    el.focus()
  },
})

const playbookRepository: PlaybookRepository = makePlaybookRepository()
const contract: Contract = Contract.fromPlaybook(playbookRepository.load())
const contracts = makeContractStore()
contracts.save("cloud-contract", contract)

app.mount("#app")
