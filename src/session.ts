import { defineStore } from "pinia"
import { Answer, Step } from "./domain/Step"

export const useSession = defineStore("session", {
  state: () => ({
    cache: new Map<string, Step<Answer>>(),
  }),
  actions: {
    rememberCurrentStep({ id }: { id: string }, step: Step<Answer>) {
      this.cache.set(id, step)
    },
  },
})
