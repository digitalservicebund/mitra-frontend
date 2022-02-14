import { defineStore } from "pinia"
import { Answer } from "./domain/Answer"
import Contract from "./domain/Contract"
import Metadata from "./domain/Metadata"
import Playbook from "./domain/Playbook"
import { Step } from "./domain/Step"
import {
  ContractDTO,
  createContract,
  createPlaybook,
  PlaybookDTO,
} from "./infra/JSONMapper"

type Workspace = { contract?: Contract; playbook?: Playbook }
type ContractWorkspace = [Contract, string, Metadata?]
type PlaybookWorkspace = [Playbook, Metadata?]
type EntryPoint = "creator" | "einkauf"

class NullContract extends Contract {
  constructor() {
    super("", [])
  }
}
class NullPlaybook extends Playbook {
  constructor() {
    super()
  }
}

const reviveDates: (metadata: { [property: string]: string }) => {
  [property: string]: Date
} = (metadata = {}) =>
  Object.entries(metadata).reduce(
    (memo: { [property: string]: Date }, entry) => {
      const [key, value] = entry
      memo[key] = new Date(value)
      return memo
    },
    {}
  )

export const useSession = defineStore("session", {
  state: () => ({
    workspace: {
      contract: [
        new NullContract(),
        "",
        { createdAt: new Date(0) },
      ] as ContractWorkspace,
      playbook: [
        new NullPlaybook(),
        { createdAt: new Date(0) },
      ] as PlaybookWorkspace,
    },
    entryPoint: "",
  }),
  actions: {
    rememberContract(
      contract: Contract,
      lastEditedStep: Step<Answer> = contract.path[0]
    ) {
      this.workspace.contract = [contract, lastEditedStep.id, contract.metadata]
    },
    rememberPlaybook(playbook: Playbook) {
      this.workspace.playbook = [playbook]
    },
    rememberEntryPoint(entryPoint: EntryPoint) {
      this.entryPoint = entryPoint
    },
    refresh({ contract, playbook }: Workspace) {
      if (contract !== undefined) {
        this.workspace.contract[0] = contract
      }
      if (playbook !== undefined) {
        this.workspace.playbook[0] = playbook
      }
    },
  },
  getters: {
    contract(): Contract {
      if (
        Reflect.getPrototypeOf(this.workspace.contract[0]) ===
        Contract.prototype
      ) {
        return this.workspace.contract[0] as Contract
      }

      // Hydrating from serialized session after reload, we need to rectify the
      // instances we're getting out of sessionStorage (object -> Contract, Metadata)..
      return createContract({
        contract: this.workspace.contract[0],
        ...reviveDates(
          this.workspace.contract[2] as unknown as {
            [property: string]: string
          }
        ),
      } as ContractDTO)
    },
    playbook(): Playbook {
      if (
        Reflect.getPrototypeOf(this.workspace.playbook[0]) ===
        Playbook.prototype
      ) {
        return this.workspace.playbook[0] as Playbook
      }

      // Hydrating from serialized session after reload, we need to rectify the
      // instances we're getting out of sessionStorage (object -> Contract, Metadata)..
      return createPlaybook({
        playbook: this.workspace.playbook[0],
        ...reviveDates(
          this.workspace.playbook[1] as unknown as {
            [property: string]: string
          }
        ),
      } as PlaybookDTO)
    },
    lastEditedStep(): Step<Answer> {
      return this.contract.path.find(
        (step) => step.id === this.workspace.contract[1]
      ) as Step<Answer>
    },
  },
  persist: {
    enabled: true,
  },
})
