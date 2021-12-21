import { defineStore } from "pinia"
import Contract from "./domain/Contract"
import { Answer, Step } from "./domain/Step"

export const useSession = defineStore("session", {
  state: () => ({
    cache: new Map<Contract, Step<Answer>>(),
  }),
  actions: {
    rememberCurrentStep(contract: Contract, step: Step<Answer>) {
      this.cache.set(contract, step)
    },
  },
})
