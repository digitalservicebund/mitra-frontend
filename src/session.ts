import { defineStore } from "pinia"
import { Answer } from "./domain/Answer"
import Contract from "./domain/Contract"
import { Step } from "./domain/Step"

type Cache = [Contract, Step<Answer>?]
type EntryPoint = "creator" | "einkauf"

export const useSession = defineStore("session", {
  state: () => ({
    cache: [new Contract("", [])] as Cache,
    entryPoint: "",
  }),
  actions: {
    rememberContract(contract: Contract, lastEditedStep?: Step<Answer>) {
      this.cache = [contract, lastEditedStep || contract.path[0]]
    },
    rememberEntryPoint(entryPoint: EntryPoint) {
      this.entryPoint = entryPoint
    },
  },
  getters: {
    contract(state) {
      return state.cache[0]
    },
    lastEditedStep(state) {
      return state.cache[1]
    },
  },
})
