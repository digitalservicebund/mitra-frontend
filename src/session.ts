import { defineStore } from "pinia"
import { Answer } from "./domain/Answer"
import Contract from "./domain/Contract"
import Metadata from "./domain/Metadata"
import { Step } from "./domain/Step"
import { ContractDTO, createContract } from "./infra/JSONMapper"

class NullAnswer extends Answer {
  constructor() {
    super("")
  }
  clone(): NullAnswer {
    return this
  }
  toString(): string {
    return ""
  }
}
class NullStep extends Step<Answer> {
  static readonly TYPE = "NullStep"

  constructor() {
    super("", new NullAnswer())
  }
  get type(): string {
    return NullStep.TYPE
  }
  clone(): NullStep {
    return this
  }
}
class NullContract extends Contract {
  constructor() {
    super("", [])
  }
}

type Cache = [Contract, Step<Answer>, Metadata?]
type EntryPoint = "creator" | "einkauf"

export const useSession = defineStore("session", {
  state: () => ({
    cache: [
      new NullContract(),
      new NullStep(),
      { createdAt: new Date(0) },
    ] as Cache,
    entryPoint: "",
  }),
  actions: {
    rememberContract(contract: Contract, lastEditedStep?: Step<Answer>) {
      this.cache = [
        contract,
        lastEditedStep || contract.path[0],
        contract.metadata,
      ]
    },
    rememberEntryPoint(entryPoint: EntryPoint) {
      this.entryPoint = entryPoint
    },
  },
  getters: {
    contract(): Contract {
      if (Reflect.getPrototypeOf(this.cache[0]) === Contract.prototype) {
        return this.cache[0] as Contract
      }

      // Hydrating from serialized session after reload, we need to rectify the
      // instances we're getting out of sessionStorage (object -> Contract, Metadata)..
      const { createdAt, savedAt } = JSON.parse(
        JSON.stringify(this.cache[2] || {}),
        (key, value) =>
          ["createdAt", "savedAt"].includes(key) ? new Date(value) : value
      )
      return createContract({
        contract: this.cache[0],
      } as ContractDTO).updateMetadata({
        createdAt,
        savedAt,
      })
    },
    lastEditedStep(): Step<Answer> {
      if (Reflect.getPrototypeOf(this.cache[1]) === Step.prototype) {
        return this.cache[1] as Step<Answer>
      }

      // After hydrating from serialized session after reload, we need to pick
      // the right step from the contract!
      return (
        this.contract.path.find((step) => step.id === this.cache[1].id) ||
        new NullStep()
      )
    },
  },
  persist: {
    enabled: true,
  },
})
