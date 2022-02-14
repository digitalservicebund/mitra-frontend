import { defineStore } from "pinia"
import { Answer } from "./domain/Answer"
import Contract from "./domain/Contract"
import Metadata from "./domain/Metadata"
import { Step } from "./domain/Step"
import { ContractDTO, createContract } from "./infra/JSONMapper"

class NullContract extends Contract {
  constructor() {
    super("", [])
  }
}

type Cache = [Contract, string, Metadata?]
type EntryPoint = "creator" | "einkauf"

export const useSession = defineStore("session", {
  state: () => ({
    cache: [new NullContract(), "", { createdAt: new Date(0) }] as Cache,
    entryPoint: "",
  }),
  actions: {
    rememberContract(
      contract: Contract,
      lastEditedStep: Step<Answer> = contract.path[0]
    ) {
      this.cache = [contract, lastEditedStep.id, contract.metadata]
    },
    rememberEntryPoint(entryPoint: EntryPoint) {
      this.entryPoint = entryPoint
    },
    refresh(contract: Contract) {
      this.cache[0] = contract
    },
  },
  getters: {
    contract(): Contract {
      if (Reflect.getPrototypeOf(this.cache[0]) === Contract.prototype) {
        return this.cache[0] as Contract
      }

      // Hydrating from serialized session after reload, we need to rectify the
      // instances we're getting out of sessionStorage (object -> Contract, Metadata)..
      const { createdAt, savedAt } = Object.entries(this.cache[2] || {}).reduce(
        (memo: { [property: string]: Date }, entry) => {
          const [key, value] = entry
          memo[key] = new Date(value)
          return memo
        },
        {}
      )

      return createContract({
        contract: this.cache[0],
        createdAt,
        savedAt,
      } as ContractDTO)
    },
    lastEditedStep(): Step<Answer> {
      return this.contract.path.find(
        (step) => step.id === this.cache[1]
      ) as Step<Answer>
    },
  },
  persist: {
    enabled: true,
  },
})
