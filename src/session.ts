import { defineStore, PiniaPluginContext } from "pinia"
import { watch } from "vue"
import { Answer } from "./domain/Answer"
import Contract from "./domain/Contract"
import Playbook from "./domain/Playbook"
import { Step } from "./domain/Step"
import {
  ContractDTO,
  createContract,
  createPlaybook,
  PlaybookDTO,
} from "./infra/JSONMapper"

type ContractId = string
type PlaybookId = string
type StepId = string
type EntryPoint = "creator" | "einkauf"

export const persistence = ({ store }: PiniaPluginContext): void => {
  const key = store.$id
  const persisted: string | null = sessionStorage.getItem(key)
  if (persisted) {
    // Hydrating from serialized session after reload, we need to rectify the
    // instances we're getting out of sessionStorage:
    // string -> Date
    // object -> Contract/Playbook
    const {
      contracts = {},
      playbooks = {},
      entryPoint = "",
    } = JSON.parse(persisted, (key, value) =>
      ["createdAt", "savedAt"].includes(key) ? new Date(value) : value
    )
    for (const [contractId, pair] of Object.entries(contracts)) {
      contracts[contractId][0] = createContract(
        (pair as [object, string])[0] as ContractDTO
      )
    }
    for (const [playbookId, object] of Object.entries(playbooks)) {
      playbooks[playbookId] = createPlaybook(object as PlaybookDTO)
    }

    store.$patch({ contracts, playbooks, entryPoint })
    sessionStorage.setItem(key, JSON.stringify(store.$state))
  }

  watch(
    () => store.$state,
    () => sessionStorage.setItem(key, JSON.stringify(store.$state)),
    { deep: true }
  )
}

export const useSession = defineStore("session", {
  state: () => ({
    contracts: {} as { [id: ContractId]: [Contract, StepId] },
    playbooks: {} as { [id: PlaybookId]: Playbook },
    entryPoint: "",
  }),
  actions: {
    rememberContract(
      contract: Contract,
      lastEditedStep: Step<Answer> = contract.path[0]
    ) {
      this.contracts[contract.id] = [contract, lastEditedStep.id]
    },
    rememberPlaybook(playbook: Playbook) {
      this.playbooks[playbook.id] = playbook
    },
    rememberEntryPoint(entryPoint: EntryPoint) {
      this.entryPoint = entryPoint
    },
    refresh({
      contract,
      playbook,
    }: {
      contract?: Contract
      playbook?: Playbook
    }) {
      if (contract !== undefined) {
        this.contracts[contract.id][0] = contract
      }
      if (playbook !== undefined) {
        this.playbooks[playbook.id] = playbook
      }
    },
  },
  getters: {
    lastEditedStep: (state) => {
      return (contractId: ContractId) => {
        if (!(contractId in state.contracts)) {
          return
        }
        const [contract, lastEditedStepId] = state.contracts[contractId]
        return contract.path.find((step) => step.id === lastEditedStepId)
      }
    },
  },
})
