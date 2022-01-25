import { defineStore } from "pinia"
import { Answer, Step } from "./domain/Step"

type EntryPoint = "creator" | "einkauf"

export const useSession = defineStore("session", {
  state: () => ({
    cache: new Map<string, Step<Answer>>(),
    entryPoint: "",
  }),
  actions: {
    rememberCurrentStep({ id }: { id: string }, step: Step<Answer>) {
      this.cache.set(id, step)
    },
    rememberEntryPoint(entryPoint: EntryPoint) {
      this.entryPoint = entryPoint
    },
  },
})
