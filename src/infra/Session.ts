import { defineStore } from "pinia"
import Contract from "../domain/Contract"
import { Answer, Step } from "../domain/Step"

class Session {
  constructor(
    public readonly currentSteps = new Map<Contract, Step<Answer>>()
  ) {}

  addContracts(...contracts: Contract[]) {
    contracts.forEach((contract) => {
      if (!this.currentSteps.get(contract)) {
        this.currentSteps.set(contract, contract.getAllSteps()[0])
      }
    })
  }

  getCurrentStep(contract: Contract): Step<Answer> | undefined {
    return this.currentSteps.get(contract)
  }

  setCurrentStep(contract: Contract, step: Step<Answer>): void {
    this.currentSteps.set(contract, step)
  }
}

export const useStore = defineStore("session", {
  state: () => new Session(),
})
