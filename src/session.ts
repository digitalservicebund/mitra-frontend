import { defineStore } from "pinia"
import Contract from "./domain/Contract"
import { Answer, Step } from "./domain/Step"

export const useSession = defineStore("session", {
  state: () => ({
    cache: new Map<Contract, Step<Answer>>(),
  }),
  actions: {
    updateCurrentStep(contract: Contract, step: Step<Answer>) {
      this.cache.set(contract, step)
    },
    updateContract(contract: Contract) {
      this.cache.set(contract, contract.getAllSteps()[0])
    },
  },
  getters: {
    // Map remembers the original insertion order of the keys, thus
    // the latest one from the session has to be the last...
    lastEditedContract(state) {
      if (state.cache.size === 0) {
        return new Contract("", [])
      }
      return Array.from(state.cache.keys()).pop() || new Contract("", [])
    },
  },
})
