import { defineStore } from "pinia"
import Contract from "../domain/Contract"
import { Answer, Step } from "../domain/Step"

const state: {
  lastWorkedOnContract?: Contract
  lastWorkedOnStep?: Step<Answer>
} = {}

export const useStore = defineStore("session", {
  state: () => state,
})
